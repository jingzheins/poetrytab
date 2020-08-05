function getBackgrund() {
    // 获取文件
    var glassesgirlStorage = localStorage.getItem("background"),
        glassesgirl = $("#background");
    var backgroundtime = localStorage.getItem("backgroundtime");
    if (glassesgirlStorage&&backgroundtime==new Date().getDay()) {
        //如果已经存在则直接重用已保存的数据
        console.log("缓存背景可用");
        glassesgirl.attr("src", glassesgirlStorage);
    }else{
        // 创建XHR, BlobBuilder 和FileReader 对象
        var xhr = new XMLHttpRequest();
        var fileReader = new FileReader();
        xhr.open("GET", "https://api.xygeng.cn/Bing/", true);
        xhr.responseType = 'blob';
        xhr.addEventListener("load", function () {
            if (xhr.status === 200) {
                var blob = this.response;
                fileReader.onload = function (evt) {
                    // 用Data URI的格式读取文件内容
                    var result = evt.target.result; //要点
                    // 将图片的src指向Data URI
                    glassesgirl.attr("src", result);
                    //保存到本地存储中
                    try {
                        localStorage.setItem("background", result);
                        localStorage.setItem("backgroundtime", new Date().getDay());
                    }
                    catch (e) {
                        console.log("Storage failed: " + e);
                    }
                };
                // 以Data URI的形式加载blob
                fileReader.readAsDataURL(blob);
            }
        }, false);
        // 发送异步请求
        xhr.send();
    }
}