//좀 되라!!!!
var json = require('./markdownToJson')
// var markdown = '#header\n\nHello, world!'
// var markdown = "#### 2020년 2월 14일 금요일 \n - [Vue.js는 얼마나 쉬울까?](https://www.notion.so/Vue-js-fedb5ceb8f05421c92517899c6804265) \n- [Vue.js는 얼마나 쉬울까?](https://www.notion.so/Vue-js-fedb5ceb8f05421c92517899c6804265) \n#### 2020년 2월 15일 금요일 \n - [Vue.js는 얼마나 쉬울까?]\n2222"
var markdown = `# Authors
* 형 Vack
* Vendor Packages
    * docopt
    * CommonMark-py
`
// var markdown = 
// `
// # :mega: 소개
// **유익한 개발 컨텐츠를 비추는 카메라** 입니다.  
// 좋은 컨텐츠를 널리 알리면 더 많이 소비되고, 더 많이 소비되면 더 많이 생산된다는 생각으로  
// 컨텐츠 생산자와 소비자 모두에게 유익한 선순환을 만들고자 합니다.
// `
console.log(JSON.stringify(json.parse(markdown), null, '  '))
