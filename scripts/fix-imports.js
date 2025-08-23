const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components/ui');

// Read all files in the UI components directory
fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('Error reading components directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.tsx')) {
      const filePath = path.join(componentsDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace any import * as React with import React
      const updatedContent = content.replace(
        /import\s*\*\s*as\s+React\s+from\s+["']react["']/g,
        'import React from "react"'
      );
      
      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated imports in ${file}`);
      }
    }
  });
  
  console.log('Import updates complete!');
});
