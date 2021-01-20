const fs = require('fs');
const markdownIt = require('markdown-it');
const markdownLib = markdownIt({ html: true, typographer: true });
const md = new markdownIt();
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('src/scss');

  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.addFilter('markdown', value => md.renderInline(value));

  eleventyConfig.setTemplateFormats([
    "njk",
    "md",
    "gif",
    "png",
    "jpg",
  ]);

  // eleventyConfig.addPassthroughCopy("src/img");
  // eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({
    "src/scss/fonts": "css/fonts",
  });

  eleventyConfig.addPlugin(syntaxHighlight)

  // Make 404 page work with `eleventy --serve`
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('public/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
