// 导入fs文件系统模块
const fs = require('fs');
// 参数1:文件存放的路径
// 参数2:表示要写入的内容
// 参数3：回调函数
fs.writeFile('./files/02.text', 'text content', 'utf8', function(err) {
    // 如果文件写入成功，err的值为null
    if (err) {
        console.log('文件写入失败' + err.message);
    }
    console.log(err);

})