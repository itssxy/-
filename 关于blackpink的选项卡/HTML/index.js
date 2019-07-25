        var nav = document.getElementById("nav");   //通过元素的id在HTML中进行查找，如果找到，则返回对象nav，如果没有，返回null
        var navlist = nav.children;    //children是指元素的第一个节点
        var con = document.getElementById("content");
        var conlist = con.children;
        for (var i= 0;i<navlist.length;i++){
            navlist[i].index = i;  //在事件之前将索引准备好
            navlist[i].onclick = function (){
                for (var k = 0;k< conlist.length;k++){
                    navlist[k].className = "";      //将类名删除
                    conlist[k].style.display ="none";  //隐藏该区域，不占实际空间，相当于该元素不存在
                }
                //conlist.length是字符串对象的属性
                this.className = "active";
                conlist[this.index].style.display = "block";
            }
        }
