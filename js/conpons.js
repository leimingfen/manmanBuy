$(function () {
    /*     onload = function () {
            setHTML();

            // 为了在pc端更好的去调试
            onresize = function () {
                setHTML();
            }

            function setHTML() {
                // 基础值
                var baseVal = 100;
                // 设计稿的宽度
                var pageWidth = 640;
                // 要适配的屏幕的宽度?
                var screenWidth = document.querySelector("html").offsetWidth;
                // 要设置的fontsize
                var fontsize = screenWidth * baseVal / pageWidth;

                // 设置到html标签的中
                document.querySelector("html").style.fontSize = fontsize + "px";

            }
        } */

    var id = window.location.search.split("=")[1] ? window.location.search.split("=")[1] : 0;
    var prev = $(".prev");
    var next = $('.next');

    $.ajax({
        type: 'GET',
        url: 'http://193.112.55.79:9090/api/getcouponproduct',
        dataType: 'json',
        data: {
            couponid: id
        },
        success: function (res) {
            console.log(res);
            var data = res.result;
            // console.log(data[0].productImgLg);
            var tbody = template('sss', {
                "data": data
            });
            $(".content").html(tbody);



            $('.tcxc').click(function () {
                $(".mask").show();
                var img_src = $(this).find("img")[0].src;
                $(".conter").find("img")[0].src = img_src;
                console.log($(this).parent().parent().next().find("img")[0].src);
                
                var src1 =$(this).parent().parent().prev().find("img")[0].src;
                var src2 =$(this).parent().parent().next().find("img")[0].src;
                // 上一张
            prev.click(function(event){
                event.stopPropagation();
                $(".mask").find("img")[0].src = src1;           
            })
            // 下一张
            next.click(function(event){
                event.stopPropagation();
                $(".mask").find("img")[0].src = src2;
            })
            });
            
            // 遮罩层隐藏
            $(".mask").click(function () {
                $(".mask").hide();
            })


        }
    })

})