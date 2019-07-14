<template>
    <div class="BaiduContainer">
        <!--首页loading-->
        <loading></loading>
        <!--欢迎界面-->
        <welcom></welcom>
        <!--导入轮播图-->
        <banner @func = "getIndex" @func2 = "createEle" @func3 = "addClass"></banner>
        <div class="music">
            <input type="text">
            <!--这么写不用配置loader，下面第二种方式写才需要-->
           <!-- <audio src="/src/music/hlw.mp3" controls loop=true></audio>-->
            <audio>
                <source src="./music/hlw.mp3" type="audio/mpeg">
            </audio>
        </div>
    </div>
</template>

<script>
    import $ from './lib/zepto/zepto';
    import './lib/zepto/event.js';
    import './lib/zepto/fx.js';
    import './lib/zepto/fx_methods.js';
    import './lib/zepto/touch.js'
$(function () {
    setTimeout(function () {
        $(".loading").addClass("animate");
        $(".loading .steps").on("animationend",function () {
            $(".loading").fadeOut(1000,function () {
                $(".welcom").addClass("animate");
            });
        });
    },1000);
    $(".welcom .buttonBox").longTap(function () {
        $(".welcom .bearBox").css("animation","bearDisappear 0.5s linear forwards");
        setTimeout(function () {
            $(".welcom").fadeOut(1000,function () {
                $(".base").addClass("animate")
            });
        },1000)
    });

    var flag = true;
    $(".page3").on("click",function () {
        if(flag) {
            var index = 0;
            flag = false;
            var timer = setInterval(() => {
                $(this).children(".bear").css("animation","none");
                $(".animate-bear-box div").css("opacity",0).eq(index).css("opacity",1);

                $(".card-box div").eq(index).css("animation","none");
                $(".animate-card-box div").eq(index).css("opacity",1);

                if(index === 2) {
                    clearInterval(timer);
                    $(".animate-card-box div").css("animation","bearDisappear 1s linear forwards");
                    $(this).removeClass("swiper-no-swiping");
                    flag =true;
                }
                index ++;
            },1000);
        }
    });

    var audioEle = $("audio")[0];
    $(".music input").on("click",function () {
       if(audioEle.paused) {
            audioEle.play();
            $(this).css("backgroundImage","url(/src/images/play.png)")
       } else{
            audioEle.pause();
           $(this).css("backgroundImage","url(/src/images/pause.png)")
       }

    });

});
import loading from './components/loading.vue';
import welcom from './components/welcom.vue';
import banner from './components/banner.vue';
export default {
    data() {
        return {}
    },
    methods: {
        getIndex(i) {
            console.log(i);
            $(".page3").removeClass("swiper-no-swiping");
            $(".page3>.bear").attr("style",'');
            $(".page3>.animate-bear-box div").attr("style",'');
            $(".page3>.animate-card-box div").attr("style",'');
            $(".page3>.card-box div").attr("style",'');
        },
        createEle() {
            console.log('hahah');
            for(var i = 1; i < 12; i++){
                var $snowEle = $('<div class="snowPie"></div>');
                var left = i * 0.5 + 'rem';
                var time = Math.floor(Math.random()*10)/10 + 2 + 's';
                $snowEle.css({
                    "left":left,
                    "animation" : "downLeft 1s 2s ease-out infinite",
                    "animation-duration": time
                });
                $snowEle.appendTo($(".page5>.cloud"));
            }
        },
        addClass() {
            $(".page3").addClass("swiper-no-swiping");
        }
    },
    components: {
        loading,
        welcom,
        banner
    }
}
</script>

<style lang="scss">
    .BaiduContainer{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .music{
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        right: 0.5rem;
        top: 0.5rem;
        z-index: 999;
        input{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: url("./images/pause.png") no-repeat center / 100% 100%;
            border:none;
            outline: none;
        }
    }
</style>