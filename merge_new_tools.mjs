var fs = require('fs');
var path = require('path');
var url = require('url');

async function mergeNewTools() {
    var toolsDir = path.resolve('./tools');
    var existingToolFiles = fs.readdirSync(toolsDir).filter(function(file) {
        return file.endsWith('.js');
    });

    var allExistingTools = [];
    for (var i = 0; i < existingToolFiles.length; i++) {
        var file = existingToolFiles[i];
        var filePath = path.join(toolsDir, file);
        try {
            var fileUrl = url.pathToFileURL(filePath);
            var module = await import(fileUrl.href);
            if (module.default) {
                allExistingTools = allExistingTools.concat(module.default);
            }
        } catch (error) {
            console.error('Error importing ' + filePath + ':', error);
        }
    }

    var newToolsContent = fs.readFileSync('./new_tools.json', 'utf-8');
    var newTools = JSON.parse(newToolsContent);

    var existingUrls = new Set(allExistingTools.map(function(tool) {
        return tool.url.replace(///$/, '');
    }));
    var uniqueNewTools = newTools.filter(function(tool) {
        return !existingUrls.has(tool.url.replace(///$/, ''));
    });

    console.log('Found ' + uniqueNewTools.length + ' new unique tools to process from new_tools.json.');

    var normalizedTools = uniqueNewTools.map(function(tool) {
        if (['image-art', 'video-generation', 'creative-art'].includes(tool.category)) {
            tool.category = 'creative-tools';
        }
        return tool;
    });

    var allTools = [].concat(allExistingTools, normalizedTools);
    var toolsByCategory = {};
    allTools.forEach(function(tool) {
        if (tool.category && !toolsByCategory[tool.category]) {
            toolsByCategory[tool.category] = [];
        }
        if(tool.category) {
            toolsByCategory[tool.category].push(tool);
        }
    });

    for (var category in toolsByCategory) {
        var tools = toolsByCategory[category];
        tools.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
        
        var jsonString = JSON.stringify(tools, null, 4);
        var fileContent = 'export default ' + jsonString + ';
';
        var filePath = path.join(toolsDir, category + '.js');
        
        if (fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, fileContent);
        } else {
            console.warn('Category file not found, creating new file: ' + filePath);
            fs.writeFileSync(filePath, fileContent);
        }
    }

    console.log('Tools from new_tools.json successfully merged and organized.');
}

mergeNewTools();