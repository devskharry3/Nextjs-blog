const fs = require('fs');
const path = require('path');

// Path to the directory where Velvet.js outputs processed JSON files
const outputDir = path.join(process.cwd(), 'velvet-output');

// Utility function to load all blog posts
function loadAllBlogs() {
  const files = fs.readdirSync(outputDir);
  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(outputDir, file);
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    });
}

// Load all blog posts
const allBlogs = loadAllBlogs();

// Export `allBlogs` for use in your application
module.exports = {
  allBlogs,
  allDocuments: [...allBlogs], // Equivalent to `allDocuments`
};
