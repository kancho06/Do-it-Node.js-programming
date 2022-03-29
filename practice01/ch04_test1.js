var url = require('url');

var urlStr = 
'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=Popcorn';

// URL을 각 주제로 파싱해서 분리된 정보를 보여준다 
var curUrl = url.parse(urlStr);
console.dir(curUrl);

console.log('query -> ' + curUrl.query);

// 파싱되어있는 URL을 다시 하나로 합친다.
var curStr = url.format(curUrl);

console.log('url -> ' + curStr);

// 파싱된 URL에서 param(검색어, 요청파라미터) 값 파싱
var querystring = require('querystring');
var params = querystring.parse(curUrl.query);
console.log('검색어 : ' + params.query);