const markdownJson = require('markdown-json');
const settings = {
        name: 'markdown-json',
      	cwd: './',
      	src: 'example/content/',
        filePattern: '**/*.md',
        ignore: "*(icon|input)*",
        dist: 'example/output.json',
        server: false,
        port: 3001
      };
 
markdownJson(settings).then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.log('error:', err);
})