var MarkdownIt = require('markdown-it');
var md = new MarkdownIt({
  html: false,
  linkify : false,
  breaks: false,
});

var result = md.parse(`
# :mag_right: 카테고리
### 2. 언어 & 프레임워크
- [Java & Spring](https://github.com/Integerous/goQuality-dev-contents/tree/master/2.%20%EC%96%B8%EC%96%B4%20%26%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC#java--spring)
  - [JVM](https://github.com/Integerous/goQuality-dev-contents/tree/master/2.%20%EC%96%B8%EC%96%B4%20%26%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC#jvm)
  - [JPA & Hibernate](https://github.com/Integerous/goQuality-dev-contents/tree/master/2.%20%EC%96%B8%EC%96%B4%20%26%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC#jpa--hibernate)
- [Javascript](https://github.com/Integerous/goQuality-dev-contents/tree/master/4.%20%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#javascript-%EA%B4%80%EB%A0%A8)
`);

var iterator = require('markdown-it-for-inline');
var result2 = md.use(iterator, 'foo_replace', 'text', function (tokens, idx) {
  console.log(tokens[idx].content)
});
// console.log(result);