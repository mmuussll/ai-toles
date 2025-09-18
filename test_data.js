import { categories, tools } from './updated_data.js';

console.log('Categories count:', categories.length);
console.log('Tools count:', tools.length);

// Check for any tools with missing required fields
const toolsWithMissingFields = tools.filter(tool => !tool.name || !tool.description || !tool.url || !tool.category);

if (toolsWithMissingFields.length > 0) {
 console.log('Tools with missing fields:', toolsWithMissingFields.length);
 toolsWithMissingFields.forEach(tool => {
  console.log('- Name:', tool.name || 'MISSING');
  console.log('  Description:', tool.description || 'MISSING');
  console.log('  URL:', tool.url || 'MISSING');
  console.log('  Category:', tool.category || 'MISSING');
  console.log('  Tags:', tool.tags || 'None');
 });
} else {
 console.log('All tools have required fields');
}

// Check if all tools belong to valid categories
const validCategoryIds = categories.map(cat => cat.id);
const toolsWithInvalidCategories = tools.filter(tool => !validCategoryIds.includes(tool.category));

if (toolsWithInvalidCategories.length > 0) {
 console.log('Tools with invalid categories:', toolsWithInvalidCategories.length);
 toolsWithInvalidCategories.forEach(tool => {
  console.log('- Name:', tool.name, 'Category:', tool.category);
 });
} else {
 console.log('All tools belong to valid categories');
}

console.log('Test completed successfully');