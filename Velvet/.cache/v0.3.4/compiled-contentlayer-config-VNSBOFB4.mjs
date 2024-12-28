var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

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
var import_siteMetaData = __toESM(require_siteMetaData());
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishAt: {
      type: "date",
      required: true
    },
    updatedAt: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: "true"
    },
    image: { type: "", required: true },
    isPublished: {
      type: "boolean",
      default: true
    },
    author: {
      type: "string",
      required: "true"
    },
    tags: {
      type: "list",
      of: { type: "string" }
    }
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [Blog]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VNSBOFB4.mjs.map
