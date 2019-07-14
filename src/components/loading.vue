<template>
    <div class="loading">
        <div class="rider"></div>
        <div class="progress">
            <div class="steps"></div>
        </div>
        <div class="info"></div>
        <div class="logo"></div>
        <div class="copyRight">@  2019 Baidu Produced</div>
    </div>
</template>
<style lang="scss">
    @import "../scss/base.scss";
    .loading{
        z-index: 3;
        width: 100%;
        height: 100%;
        background-color: #ffece9;
        position: absolute;
        left: 0;
        top: 0;
        .rider{
            @include size(154,120);
            @include bg("/src/images/loading/rider1_.png");
            @include topLeft(238,400);
        }
        .progress{
            @include size(416,20);
            background-color: #fc2e4d;
            position: absolute;
            top: p2r(360);
            left: 50%;
            margin-left: p2r(-416/2);
            border-radius: p2r(10);
            border: 2px solid #373838;
        }
        .info{
            @include size(230,30);
            @include bgc("/src/images/loading/loading-txt.png",230);
            top: p2r(420);
        }
        .logo{
            @include size(162,40);
            @include bgc("/src/images/loading/waimai-logo.png",162);
            bottom: p2r(120);
        }
        .copyRight{
            width: 100%;
            height: p2r(24);
            position: absolute;
            bottom: p2r(70);
            text-align: center;
            font-size: p2r(24);
        }
    }
    /*重置样式*/
    .loading{
        .progress{
            background-color: transparent;
            .steps{
                width: 20%;
                height: 100%;
                background-color: gold;
                position: absolute;
                right: 0;
                border-radius: p2r(10);
            }
        }
    }
    /*设置动画*/
    .loading.animate{
        .progress{
            .steps{
                animation: steps 1s linear forwards;
            }
        }
        .rider{
            animation: rider 1s linear forwards;
        }
    }
    @keyframes steps {
        from{
        }
        to{
            width: 100%;
        }
    }
    @keyframes rider {
        20% {
            transform: translateX(p2r(-50)) translateY(p2r(-5));
        }
        40% {
            transform: translateX(p2r(-100)) translateY(p2r(5));
        }
        60% {
            transform: translateX(p2r(-150)) translateY(p2r(-5));
        }
        80% {
            transform: translateX(p2r(-200)) translateY(p2r(5));
        }
        100%{
            transform: translateX(p2r(-280));
        }
    }
</style>
<script>
</script>