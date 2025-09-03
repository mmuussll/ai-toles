import fs from 'fs/promises';
import path from 'path';

const TOOLS_DIR = './tools';

/**
 * Checks for duplicate tools across all tool files based on the tool name.
 * This script is intended to be used as a pre-commit hook or a manual check
 * to ensure data integrity before adding new tools.
 */
async function checkForDuplicates() {
    console.log('Checking for duplicate tools...');
    const toolFiles = await fs.readdir(TOOLS_DIR);
    const allTools = new Map();
    let hasDuplicates = false;

    for (const file of toolFiles) {
        if (!file.endsWith('.js')) continue;

        const filePath = path.join(TOOLS_DIR, file);
        const relativePath = './' + filePath.replace(/\\/g, '/');

        try {
            const module = await import(relativePath);
            const tools = module.default;

            if (Array.isArray(tools)) {
                for (const tool of tools) {
                    const key = tool.name.toLowerCase();
                    if (allTools.has(key)) {
                        const original = allTools.get(key);
                        console.error(`\n[!] Duplicate Found: "${tool.name}"`);
                        console.error(`    - Original in: ${original.sourceFile}`);
                        console.error(`    - Duplicate in: ${file}`);
                        hasDuplicates = true;
                    } else {
                        allTools.set(key, { ...tool, sourceFile: file });
                    }
                }
            }
        } catch (error) {
            console.error(`Error reading or processing file ${file}:`, error);
        }
    }

    if (hasDuplicates) {
        console.error('\nDuplicate tools found. Please resolve them before committing.');
        process.exit(1); // Exit with a non-zero code to fail CI/CD pipelines
    } else {
        console.log('\n✅ No duplicate tools found. All good!');
    }
}

checkForDuplicates();