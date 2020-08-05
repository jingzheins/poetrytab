//时间数字小于10，则在之前加个“0”补位。
function check(i){
    //方法一，用三元运算符
    var num;
    i<10?num="0"+i:num=i;
    return num;
}
//页面加载调用
window.onload = function () {
    first();
    getBackgrund();
};

function first(){
    var name = localStorage.getItem('name');
    if(name==null){
        layer.prompt({title: '我该怎么称呼您？', formType: 3}, function(text, index){
            layer.close(index);
            localStorage.setItem("name",text);
            layer.msg('好的，我将称呼您为 '+text,{
                end:function () {
                    first();
                }
            });
        });
    }else {
        //每1秒刷新时间
        var int = self.setInterval(function () {
            //获取年月日
            var time = new Date();
            //获取时分秒
            var h = time.getHours();
            var m = time.getMinutes();
            var s = time.getSeconds();
            //检查是否小于10
            h = check(h);
            m = check(m);
            s = check(s);
            document.getElementById("nowtime").innerHTML = "" + h + ":" + m + ":" + s;
            if (h >= 11 && h <= 13) {
                $(".banner-titlte-greeting").html("<span>中午好</span>，"+name+"");
            } else if (h < 11 && h >= 6) {
                $(".banner-titlte-greeting").html("<span>早上好</span>，"+name+"");
            } else if (h >= 0 && h < 6) {
                $(".banner-titlte-greeting").html("<span>凌晨了</span>，"+name+"");
            } else if (h > 13 && h <= 21) {
                $(".banner-titlte-greeting").html("<span>下午好</span>，"+name+"");
            } else if (h > 21 && h <= 23) {
                $(".banner-titlte-greeting").html("<span>夜深了</span>，"+name+"");
            }
            $(".banner-titlte-greeting").show();
            $("body").show();
        }, 100);
    }
}