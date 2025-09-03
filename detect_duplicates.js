// Load the data from data.js
import { tools } from './data.js';

// Function to check for duplicates based on name and URL
function checkForDuplicates(tools) {
  const seen = new Map();
  const duplicates = [];

  tools.forEach((tool, index) => {
    // Create a unique key based on name and URL (case insensitive)
    const key = `${tool.name.toLowerCase()}-${tool.url.toLowerCase()}`;
    if (seen.has(key)) {
      // If the key already exists, it's a duplicate
      duplicates.push({
        index: index,
        tool: tool,
        duplicateOf: seen.get(key)
      });
    } else {
      // Store the index of the first occurrence
      seen.set(key, index);
    }
  });

  return duplicates;
}

// Check for duplicates
const duplicates = checkForDuplicates(tools);

// Print results
if (duplicates.length > 0) {
  console.log("Duplicate tools found:");
  duplicates.forEach(dup => {
    console.log(`- Index ${dup.index}: "${dup.tool.name}" (${dup.tool.url}) is a duplicate of index ${dup.duplicateOf}`);
  });
  
  // Optionally, create a new list without duplicates
  const uniqueTools = tools.filter((tool, index) => {
    const key = `${tool.name.toLowerCase()}-${tool.url.toLowerCase()}`;
    return tools.findIndex(t => 
      t.name.toLowerCase() === tool.name.toLowerCase() && 
      t.url.toLowerCase() === tool.url.toLowerCase()
    ) === index;
  });
  
  console.log(`
Original list had ${tools.length} tools.`);
  console.log(`List without duplicates has ${uniqueTools.length} tools.`);
  console.log(`${duplicates.length} duplicates were removed.`);
} else {
  console.log("No duplicates found.");
  console.log(`Total tools: ${tools.length}`);
}