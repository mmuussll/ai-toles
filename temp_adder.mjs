import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const missingTools = [
    {
        "name": "Lumen5",
        "description": "AI video creation platform",
        "category": "creative-tools",
        "url": "https://www.lumen5.com/"
    },
    {
        "name": "NightCafe",
        "description": "AI art generator",
        "category": "creative-tools",
        "url": "https://nightcafe.studio/"
    },
    {
        "name": "Veed.io",
        "description": "AI video editing and transcription tool",
        "category": "creative-tools",
        "url": "https://veed.io/"
    },
    {
        "name": "HyperWrite",
        "description": "AI writing assistant for productivity",
        "category": "writing-editing",
        "url": "https://hyperwriteai.com/"
    },
    {
        "name": "Copysmith",
        "description": "AI content creation platform for ecommerce",
        "category": "writing-editing",
        "url": "https://copysmith.ai/"
    },
    {
        "name": "Databricks",
        "description": "AI-powered unified analytics platform for data science and ML",
        "category": "data-ml",
        "url": "https://databricks.com/"
    }
];

async function addMissingTools() {
    const toolsDir = path.resolve('./tools');

    const toolsByCategory = {};
    missingTools.forEach(tool => {
        if (!toolsByCategory[tool.category]) {
            toolsByCategory[tool.category] = [];
        }
        toolsByCategory[tool.category].push(tool);
    });

    for (const category in toolsByCategory) {
        const newTools = toolsByCategory[category];
        const filePath = path.join(toolsDir, `${category}.js`);

        try {
            const fileUrl = pathToFileURL(filePath);
            const module = await import(fileUrl.href);
            const existingTools = module.default || [];

            const allTools = [...existingTools];
            const existingUrls = new Set(existingTools.map(t => t.url.replace(///$/, '')));
            
            newTools.forEach(newTool => {
                if (!existingUrls.has(newTool.url.replace(///$/, ''))) {
                    allTools.push(newTool);
                }
            });

            allTools.sort((a, b) => a.name.localeCompare(b.name));

            const jsonString = JSON.stringify(allTools, null, 4);
            const fileContent = `export default ${jsonString};
`;
            fs.writeFileSync(filePath, fileContent);
            console.log(`Processed tools for ${category}.js`);

        } catch (error) {
            console.error(`Error processing ${filePath}:`, error);
        }
    }
}

addMissingTools();
