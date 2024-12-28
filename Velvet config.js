const path = require('path');

module.exports = {
  input: './content', // Your content directory
  output: './velvet-output', // Directory where Velvet.js processes files
  globals: {
    siteDescription: require('./project files/siteMetaData').description, // Import site description
  },
  hooks: {
    onFile: (file) => {
      // Process frontmatter for custom fields and validations
      const { title, publishAt, updatedAt, description, image, isPublished, author, tags } = file.frontmatter;

      // Validation: Ensure required fields are present
      if (!title) throw new Error(`Missing 'title' in ${file.relativePath}`);
      if (!publishAt) throw new Error(`Missing 'publishAt' in ${file.relativePath}`);
      if (!updatedAt) throw new Error(`Missing 'updatedAt' in ${file.relativePath}`);
      if (!description) throw new Error(`Missing 'description' in ${file.relativePath}`);
      if (!image) throw new Error(`Missing 'image' in ${file.relativePath}`);
      if (!author) throw new Error(`Missing 'author' in ${file.relativePath}`);

      // Add default values (e.g., isPublished)
      file.frontmatter.isPublished = file.frontmatter.isPublished ?? true;

      // Add computed field: url_path
      file.url_path = `/blogs/${file.relativePath.replace(/\.mdx?$/, '')}`;

      // Return the modified file object
      return file;
    },
  },
};
