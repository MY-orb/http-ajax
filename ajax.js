/**
 * Created by jameswatt2008 on 2017/6/13.
 */
//发起网络请求  url
function ajax(url) {
    var xhr = null;
    if(window.ActiveXObject){
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }else{
        xhr = new XMLHttpRequest();
    }

    //打开与服务器的连接
    xhr.open('get',url,true);
    xhr.send(null);// 发送请求
    //console.log(res);
    //回调函数
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState)
        if(xhr.readyState == 4){
            //数据接收完毕
            if(xhr.status == 200){
                console.log('请求成功',xhr.responseText)

                var jsonStr = xhr.responseText;
                var jsonObj = JSON.parse(jsonStr);
                console.log(jsonObj)

                var ul = document.getElementsByClassName('content')[0];
                for(var i=0;i<jsonObj.data.length;i++){
                    var news = jsonObj.data[i];
                    console.log(news);
                    var li = document.createElement('li');
                    li.innerHTML = news.title;
                    ul.appendChild(li);

                }


            }
        }
    }



}

