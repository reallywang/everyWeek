var Mock = require('mockjs');
var jq=require('jquery');
var data1 = Mock.mock({
    name: {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last'
    }
});
//console.log(JSON.stringify(data2)
//Mock.mock(rurl,templete);
/*Mock.mock(/\.json/, {
    'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
});
jq.ajax({
    url: 'hello.json',
    dateType: 'json'
}).done(function(data, status, jqXHR) {
    jq('<pre>').text(JSON.stringify(data, null, 4)).appendTo('body');
});*/
