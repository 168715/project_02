function template(id, data) {
    var str = document.getElementById(id).innerHTML;
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/;
    console.log(str)
    var result = null;
    while (result = pattern.exec(str)) {
        str = str.replace(result[0], data[result[1]]);
    }
    return str;
}