const fs = require('fs');
// 参数1：读取文件存放路径
// 参数2：读取文件时采用的编码格式，默认指定utf8
// 参数3：回调函数，拿到读取失败和成功的结果，err dataStr
fs.readFile('./files/01.text', 'utf8', function(err, datastr) {

    if (err) {
        console.log('读取失败' + err.message);
    }
    console.log(err);
    console.log('------');
    console.log(datastr);

})