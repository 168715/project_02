window.onload = function() {
    var that = null;
    class Tabchange {
        constructor(id) {
            that = this;
            this.main = document.querySelector(id);
            this.ul = document.querySelector('.head ul');
            this.tabbody = document.querySelector('.tabbody');
            this.init();
        }

        init() {
            this.gain();
            this.add.onclick = this.addtab;
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.change;
                this.dele[i].onclick = this.removetab;
                // 双击事件
                this.spans[i].ondblclick = this.modify;
                this.sections[i].ondblclick = this.modify;
            }
        }

        // 获取对象
        gain() {
            this.lis = document.querySelectorAll('.head li');
            this.sections = document.querySelectorAll('.tabbody section');
            this.dele = document.querySelectorAll('.delete');
            this.add = document.querySelector('.tabadd');
            this.spans = document.querySelectorAll('.head li span:first-child');
        }

        change() {
            that.clearclass();
            this.className = 'liactive';
            that.sections[this.index].className = 'secactive';
        }

        // 清除样式
        clearclass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        addtab() {
            // 添加元素之前清除样式
            that.clearclass();
            var li = '<li class="liactive"><span>新增标签</span><span class="delete"></span></li>';
            var section = '<section class="secactive">新增内容</section>';
            // insertAdjacentHTML() 将指定的文本解析为HTML或XML，并将结果节点插入到DOM树中的指定位置。
            that.ul.insertAdjacentHTML('beforeend', li);
            that.tabbody.insertAdjacentHTML('beforeend', section);
            // 重新获取对象
            that.init();
        }
        removetab(e) {
            // 阻止冒泡防止触发li的切换效果
            e.stopPropagation();
            // 本身并没有索引，需要用parentNode方法获取父类index
            var index = this.parentNode.index;
            console.log(index);
            that.lis[index].remove();
            that.sections[index].remove();
            // 重新获取对象
            that.init();
            // 如果本身为选定状态则return
            if (document.querySelector('.liactive')) {
                return;
            }
            index--;
            // 触发一次点击事件，&&前面如果为true就执行后面的如果为false则return
            that.lis[index] && that.lis[index].click();
        }
        modify() {
            // 双击禁止选中文字
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            var text = '<input type="text">';
            var str = this.innerText;
            this.innerHTML = text;
            var input = this.children[0];
            input.value = str;
            // 双击文字选中
            input.select();
            input.onblur = function() {
                this.parentNode.innerText = this.value;
            }
            input.onkeyup = function(e) {
                if (e.keyCode === 13) {
                    this.blur();
                }
            }

        }

    }

    new Tabchange('#tab');
}