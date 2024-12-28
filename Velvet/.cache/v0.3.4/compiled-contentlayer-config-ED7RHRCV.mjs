var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// project files/siteMetaData.js
var require_siteMetaData = __commonJS({
  "project files/siteMetaData.js"(exports, module) {
    var siteMetadata = {
      title: "Next.js Blog With Tailwind CSS and Contentlayer",
      author: "CodeBucks",
      headerTitle: "Next.js Blog",
      description: "A blog created with Next.js, Tailwind.css and contentlayer.",
      language: "en-us",
      theme: "system",
      // system, dark or light
      siteUrl: "https://create-blog-with-nextjs.vercel.app",
      // your website URL
      siteLogo: "/logo.png",
      socialBanner: "/social-banner.png",
      // add social banner in the public folder
      email: "codebucks27@gmail.com",
      github: "https://github.com/codebucks27",
      twitter: "https://twitter.com/code_bucks",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com/codebucks",
      linkedin: "https://www.linkedin.com/in/codebucks/",
      dribbble: "https://www.dribbble.com",
      locale: "en-US"
    };
    module.exports = siteMetadata;
  }
});

// contentlayer.config.js
var require_contentlayer_config = __commonJS({
  "contentlayer.config.js"(exports, module) {
    var path = __require("path");
    module.exports = {
      input: "./content",
      // Your content directory
      output: "./velvet-output",
      // Directory where Velvet.js processes files
      globals: {
        siteDescription: require_siteMetaData().description
        // Import site description
      },
      hooks: {
        onFile: (file) => {
          const { title, publishAt, updatedAt, description, image, isPublished, author, tags } = file.frontmatter;
          if (!title)
            throw new Error(`Missing 'title' in ${file.relativePath}`);
          if (!publishAt)
            throw new Error(`Missing 'publishAt' in ${file.relativePath}`);
          if (!updatedAt)
            throw new Error(`Missing 'updatedAt' in ${file.relativePath}`);
          if (!description)
            throw new Error(`Missing 'description' in ${file.relativePath}`);
          if (!image)
            throw new Error(`Missing 'image' in ${file.relativePath}`);
          if (!author)
            throw new Error(`Missing 'author' in ${file.relativePath}`);
          file.frontmatter.isPublished = file.frontmatter.isPublished ?? true;
          file.url_path = `/blogs/${file.relativePath.replace(/\.mdx?$/, "")}`;
          return file;
        }
      }
    };
  }
});
export default require_contentlayer_config();
//# sourceMappingURL=compiled-contentlayer-config-ED7RHRCV.mjs.map
