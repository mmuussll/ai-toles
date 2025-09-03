import { tools as existingTools } from './data.js';
import fs from 'fs';

// Read new_tools.json using fs
const newToolsData = JSON.parse(fs.readFileSync('./new_tools.json', 'utf8'));

// Function to normalize strings for comparison (remove extra spaces, convert to lowercase)
function normalizeString(str) {
  return str.replace(/\s+/g, ' ').trim().toLowerCase();
}

// Create sets of existing tool names and URLs for quick lookup
const existingNamesNormalized = new Set(existingTools.map(tool => normalizeString(tool.name)));
const existingUrlsNormalized = new Set(existingTools.map(tool => normalizeString(tool.url)));

console.log(`Existing tools count: ${existingTools.length}`);
console.log(`Existing unique normalized names count: ${existingNamesNormalized.size}`);
console.log(`Existing unique normalized URLs count: ${existingUrlsNormalized.size}`);

// Filter out duplicates from new tools
const uniqueNewTools = newToolsData.filter(tool => {
  const normalizedName = normalizeString(tool.name);
  const normalizedUrl = normalizeString(tool.url);
  
  // Check if the normalized name or URL already exists
  if (existingNamesNormalized.has(normalizedName) || existingUrlsNormalized.has(normalizedUrl)) {
    console.log(`Skipping duplicate tool: ${tool.name} (${tool.url})`);
    return false;
  }
  
  // Add to sets to prevent internal duplicates in newToolsData
  if (existingNamesNormalized.has(normalizedName) || existingUrlsNormalized.has(normalizedUrl)) {
    return false;
  }
  
  // If it's truly unique, add it to our tracking sets
  existingNamesNormalized.add(normalizedName);
  existingUrlsNormalized.add(normalizedUrl);
  return true;
});

console.log(`New tools count: ${newToolsData.length}`);
console.log(`Unique new tools count: ${uniqueNewTools.length}`);

// Combine existing and unique new tools
const allTools = [...existingTools, ...uniqueNewTools];

console.log(`Total tools after merging: ${allTools.length}`);

// Sort tools by category and then by name for better organization
const categorizedTools = {};
allTools.forEach(tool => {
  if (!categorizedTools[tool.category]) {
    categorizedTools[tool.category] = [];
  }
  categorizedTools[tool.category].push(tool);
});

// Sort each category's tools by name
for (const category in categorizedTools) {
  categorizedTools[category].sort((a, b) => a.name.localeCompare(b.name));
}

// Flatten the sorted tools back into a single array
const sortedTools = Object.values(categorizedTools).flat();

// Write the updated tools array to a new file
import { writeFileSync } from 'fs';

// Create the full content for the new data.js file
let newDataJsContent = `export const categories = [
`;

// Assuming categories are static and defined in the original data.js, we don't need to redefine them here.
// But if they were dynamic, we'd need to handle that too.

// For simplicity, we'll just export the tools array.
newDataJsContent += `];

export const tools = [
`;

sortedTools.forEach((tool, index) => {
  newDataJsContent += `  {
`;
  newDataJsContent += `    "name": "${tool.name}",
`;
  newDataJsContent += `    "description": "${tool.description}",
`;
  newDataJsContent += `    "url": "${tool.url}",
`;
  newDataJsContent += `    "category": "${tool.category}"
`;
  newDataJsContent += `  }${index < sortedTools.length - 1 ? ',' : ''}
`;
});

newDataJsContent += `];
`;

writeFileSync('updated_data.js', newDataJsContent);

console.log('Updated data.js file created successfully.');