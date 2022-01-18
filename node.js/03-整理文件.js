const fs = require('fs');
fs.readFile(__dirname + '/files/03.text', 'utf8', function(err, datastr) {
    if (err) {
        console.log('读取失败' + err.message);
    }
    // split()分割字符串数组
    const oldarr = datastr.split(' ');
    // 定义一个数组接收数据
    const newarr = [];
    // 遍历数组每一项
    oldarr.forEach(function(item) {
        // replace()把数组每一项的 = 替换成 : 号
        newarr.push(item.replace('=', ':'));
        // [ '小红:99' ]
        // [ '小红:99', '小白:100' ]
        // [ '小红:99', '小白:100', '小兰:70' ]
        // [ '小红:99', '小白:100', '小兰:70', '小绿:88' ]
    })

    // join()与split()方法相反，给每一项结尾加换行符并将数组转换成字符串
    const newStr = newarr.join('\r\n');

    // 写入新文件
    fs.writeFile(__dirname + '/files/04.text', newStr, function(err) {
        if (err) {
            console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })
})