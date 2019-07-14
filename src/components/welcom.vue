<template>
    <div class="welcom">
        <div class="info">
            <div class="hello"></div>
        </div>
        <div class="cloud"></div>
        <div class="grass1"></div>
        <div class="tree"></div>
        <div class="grass2"></div>
        <div class="buttonBox">
            <div class="btn"></div>
            <div class="larger"></div>
            <div class="small"></div>
        </div>
        <div class="bearBox">
            <div class="bear"></div>
            <div class="jet"></div>
        </div>
        <p>长按启动，观外卖之路</p>
    </div>
</template>
<style lang="scss">
    @import "../scss/base.scss";
    .welcom{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: deepskyblue;
        z-index: 2;
        .info{
            @include size(400,224);
            @include bgc("/src/images/page1/theme-title.png",400);
            top: p2r(40);
            .hello{
                @include size(70,75);
                @include bg("/src/images/page1/hello.png");
                top: p2r(20);
                right: p2r(8);
            }
        }
        .cloud{
            @include size(640,673);
            @include bg("/src/images/page1/clouds.png");
            bottom: 0;
        }
        .grass1{
            @include size(640,396);
            @include bg("/src/images/page1/grass1.png");
            bottom: 0;
        }
        .tree{
            @include size(599,71);
            @include bgc("/src/images/page1/trees.png",599);
            bottom: (352/64) * 1rem;
        }
        .grass2{
            @include size(640,228);
            @include bg("/src/images/page1/grass2.png");
            bottom: 0;
        }
        .buttonBox{
            @include size(208,208);
            @include center(208);
            bottom: p2r(110);
            display: flex;
            align-items: center;
            justify-content: center;
            .btn{
                @include size(124,114);
                @include bgc("/src/images/page1/bear-btn-pre.png",124);
            }
            .larger{
                @include size(208,208);
                @include bgc("/src/images/page1/circle1.png",208)
            }
            .small{
                @include size(208,208);
                @include bgc("/src/images/page1/circle2.png",208)
            }
        }
        .bearBox{
            @include size(167,279);
            @include center(167);
            bottom: p2r(346);
            z-index: 1;
            .bear{
                width: 100%;
                height: 100%;
                @include bg("/src/images/page1/rider2.png");
                left: 0;
                top: 0;
            }
            .jet{
                @include size(167,32);
                @include bgc("/src/images/page1/jet1.png",167);
                bottom: p2r(-10);
            }
        }
        p{
            width: 100%;
            font-size: p2r(24);
            text-align: center;
            position: absolute;
            bottom: p2r(60);
        }
    }
    /*重置样式*/
    .welcom{
        .info{
            opacity: 0;
        }
        .grass1{
            height: p2r(20);
        }
        .grass2{
            opacity: 0;
        }
        .tree{
            opacity: 0;
        }
        .bearBox{
            opacity: 0;
            .bear{
            }
            .jet{

            }
        }
        .buttonBox{
            opacity: 0;
        }
    }
    /*添加动画*/
    .welcom.animate{
        .info{
            animation: toDown 0.5s 2s linear forwards
        }
        .grass1{
            animation: toUp 0.5s linear forwards;
        }
        .grass2{
            animation: toSmall 0.5s 0.5s linear forwards;
        }
        .tree{
            animation: toDown 0.5s 1s linear forwards;
        }
        .bearBox{
            animation: toDown 0.5s 1.5s linear forwards;
            .bear{
                animation: UpAndDown 0.5s 2s linear infinite;
            }
            .jet{
                animation: toBig 0.5s 2s linear infinite;
            }
        }
        .buttonBox{
            animation: toShow 0.5s 2s linear forwards;
            .small{
                animation: roll 0.5s linear infinite;
            }
        }
    }
    /*变高动画*/
    @keyframes toUp {
        from{
        }
        to{
            height: p2r(396);
        }
    }
    @keyframes toSmall {
        from {
            transform: scaleX(2);
        }
        to{
            opacity: 1;
            transform: none;
        }
    }
    @keyframes toDown {
        from{
            transform: translateY(-50%);
            opacity: 1;
        }
        80%{
            transform: translateY(20%);
            opacity: 1;
        }
        to{
            transform: none;
            opacity: 1;
        }
    }
    @keyframes UpAndDown {
        from{
            transform: translateY(5%);
            opacity:1
        }
        100%{
            transform: none;
            opacity: 1;
        }
    }
    @keyframes toBig {
        from{
            transform: scale(0,0);
            opacity: 1;
        }
        to{
            transform: none;
            opacity: 1;
        }

    }
    @keyframes toShow{
        from{

        }
        to{
            opacity: 1;
        }
    }
    @keyframes roll {
        from{

        }
        to{
            transform: rotateZ(360deg);
        }

    }

    @keyframes bearDisappear {
        from{
            opacity: 1;
        }
        to{
            transform: translateY(100%) scale(1.5,1.5);
            opacity: 0;
        }
    }
</style>
<script>

</script>