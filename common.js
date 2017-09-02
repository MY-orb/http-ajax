/**
 * Created by jameswatt2008 on 2017/2/9.
 */
//获取计算 样式  显示样式
function getStyle(obj) {
    if(obj.currentStyle){//说明current对象 存在  ie
        //ie
        return obj.currentStyle;
    }else{
        //fei ie
        return getComputedStyle(obj);

    }
}


function getStyle1(ele,attr) {
    if(ele.currentStyle){
        //ie
        return ele.currentStyle[attr];
    }else{
        //fei ie
        return getComputedStyle(ele,null)[attr]
    }
}


//getElementsByClassName(name)
function getElementsByClassName(name) {
    if(document.getElementsByClassName == undefined){//判断浏览器支不支持 getElementsByClassName
        //遍历所有dom节点，找出类名是name
//                var domlist = document.all;
        var res = [];
        var domlist = document.getElementsByTagName('*');//* 通配符
        for(var i=0;i<domlist.length;i++){
            var dom = domlist[i];
            //dom的类名是否 name

            //获取对象属性 obj.name   obj[name]

            //dom.class 不能使用 class 关键字
            //dom.className  dom['class']
            // console.log(dom.class,dom.className,dom['class'])
            if(dom.className == name){
                res.push(dom);
            }

        }


    }else {
        return  document.getElementsByClassName(name);
    }
}
/*
* 过滤空白节点
* */
function removeSpaceNode(eleNode) {
    var children = eleNode.childNodes;
    for(var i=0;i<children.length;i++){
        var node =  children[i];
        //nodeType == 3 文本节点
        ///^\s+$/.test(node.nodeValue)  返回 字符串是否是空格或者回车
        if(node.nodeType == 3 && /^\s+$/.test(node.nodeValue)){
            eleNode.removeChild(node);
        }
    }
}




