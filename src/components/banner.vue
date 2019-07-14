<template>
    <div class="base">
        <swiper :options="swiperOption" class="swiper" ref="mySwiper">
        　　<swiper-slide class="swiper-slider page1">
                <div class="title">
                    <h3>生活中</h3>
                    <p>经常有这种饿的时候...</p>
                    <div class="line"></div>
                </div>

                <div class="scroll-page1">
                    <div class="bg"></div>
                    <div class="sphere"></div>
                    <div class="person">
                        <div class="files">
                            <div class="paper1 papers"></div>
                            <div class="paper2 papers"></div>
                        </div>
                    </div>
                    <div class="text">
                        <div class="words"></div>
                    </div>
                </div>
                <div class="scroll-page2">
                    <div class="bg"></div>
                    <div class="sphere"></div>
                    <div class="person">
                        <div class="leg1"></div>
                        <div class="leg2"></div>
                    </div>
                    <div class="text">
                        <div class="words"></div>
                    </div>
                </div>
                <div class="scroll-page3">
                    <div class="bg"></div>
                    <div class="sphere"></div>
                    <div class="person">
                        <div class="word1 words"></div>
                        <div class="word2 words"></div>
                        <div class="word3 words"></div>
                        <div class="word4 words"></div>
                    </div>
                    <div class="text">
                        <div class="words"></div>
                    </div>
                </div>
                <div class="smallBear"></div>
            </swiper-slide>
        　　<swiper-slide class="swiper-slider page2">
                <div class="title">
                    <h3>生活中</h3>
                    <p>如果有一份美味外卖...<br>正好出现...</p>
                    <div class="line"></div>
                </div>
                <div class="bg"></div>
                <div class="sphere"></div>
                <div class="bear">
                    <div class="cry"></div>
                    <div class="smile"></div>
                    <div class="handLeft"></div>
                    <div class="handRight"></div>
                </div>
                <div class="table">
                </div>
                <div class="foods"></div>
            </swiper-slide>
        　　<swiper-slide class="swiper-slider page3">
                <div class="title">
                    <h3>生活中</h3>
                    <p>如果有一份美味外卖...<br>正好出现...</p>
                    <div class="line"></div>
                </div>
                <div class="bg"></div>
                <div class="sphere"></div>
                <div class="bear"></div>
                <div class="animate-bear-box">
                    <div class="bear1"></div>
                    <div class="bear2"></div>
                    <div class="bear3"></div>
                </div>
                <div class="card-box">
                    <div class="license"></div>
                    <div class="oil"></div>
                    <div class="evil"></div>
                </div>
                <div class="animate-card-box">
                    <div class="card1"></div>
                    <div class="card2"></div>
                    <div class="card3"></div>
                </div>
            </swiper-slide>
        　　<swiper-slide class="swiper-slider page4">
                <div class="title">
                    <h3>百度外面</h3>
                    <p>一直做品质的外面...<br>从未停止...</p>
                    <div class="line"></div>
                </div>
                <div class="bg"></div>
                <div class="sphere"></div>
                <div class="bear"></div>
                <div class="card1"></div>
                <div class="card2"></div>
                <div class="card3"></div>
            </swiper-slide>
        　　<swiper-slide class="swiper-slider page5">
                <div class="title">
                    <h3>百度外面</h3>
                    <p>一直做品质的外面...<br>从未停止...</p>
                    <div class="line"></div>
                </div>
                <div class="bg"></div>
                <div class="sphere"></div>
                <div class="bear">
                    <div class="smoke"></div>
                </div>
                <div class="cloud"></div>
            </swiper-slide>
        　　<swiper-slide class="swiper-slider page6">
                <div class="title">
                    <h3>丰富礼品</h3>
                    <p>让你边吃边省钱...</p>
                    <div class="line"></div>
                </div>
                <div class="bg"></div>
                <div class="sphere"></div>
                <div class="bear">
                    <div class="gift">
                        <div><div class="gift1"></div></div>
                        <div><div class="gift2"></div></div>
                        <div><div class="gift3"></div></div>
                        <div><div class="gift4"></div></div>
                        <div><div class="gift5"></div></div>
                        <div><div class="gift6"></div></div>
                        <div><div class="gift7"></div></div>
                        <div><div class="gift8"></div></div>
                        <div><div class="gift9"></div></div>
                        <div><div class="gift10"></div></div>
                        <div><div class="gift11"></div></div>
                        <div><div class="gift12"></div></div>
                    </div>
                </div>
            </swiper-slide>
        　　<swiper-slide class="swiper-slider page7">
                <div class="title">
                    <h3>所有的努力</h3>
                    <p>只为健康美味的外卖...<br>呈现给你...</p>
                    <div class="line"></div>
                </div>
                <div class="streetlight">
                    <div class="lamplight"></div>
                </div>
                <div class="sphere"></div>
                <div class="bear"></div>
                <div class="motor"></div>
                <div class="share"></div>
                <div class="info">waimai.baidu.com</div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                index:0,
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true // 允许点击小圆点跳转
                    },
                    direction: "vertical",
                    on: {
                        /*此部分是重点之重*/
                        slideChangeTransitionEnd: ()=>{
                            //console.log(this.$refs.mySwiper.swiper);
                            var swiper = this.$refs.mySwiper.swiper;
                            this.index = swiper.realIndex;
                        }
                    }/*,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false // 手动切换之后继续自动轮播
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },*/
                }
            }
        },
        methods: {
        },
        watch: {
            index: function (newVal,oldVal) {
                if(oldVal == 2){
                    this.$emit('func',oldVal);
                }
                if(newVal == 4){
                    this.$emit("func2");
                }
                else if(newVal == 2) {
                    this.$emit("func3")
                }

            }
        }
    }
</script>

<style lang="scss">
    @import "../scss/base.scss";
    .title{
        position: absolute;
        @include topLeft(32,32);
        color: white;
        padding-left: p2r(20);
        h3{
            font-size: p2r(64);
        }
        p{
            margin-top: p2r(12);
            font-size: p2r(24);
        }
        .line{
            position: absolute;
            @include topLeft(0,0);
            height: 100%;
            width: p2r(5);
            background-color: #fff;
        }
    }

    .base{
        width: 100%;
        height: 100%;
        position: relative;
        .swiper{
            width: 100%;
            height: 100%;
            /*加入这个是为了配合第3页的动画的，禁止滑动，只能在点击以后才可以*/
            overflow: hidden;
            .swiper-slider{
                width: 100%;
                height: 100%;
                box-sizing: border-box;
            }
            .page1{
                background: #be8651;
                .smallBear{
                    @include size(178,134);
                    @include bg("../images/page2/bear1.png");
                    bottom: 0;
                    right: 0;
                }
                .scroll-page1{
                    .bg{
                        @include size(576,573);
                        @include bgc("../images/page2/bg1.png",576);
                        bottom: p2r(252);
                    }
                    .sphere{
                        @include size(640,356);
                        @include bgc('../images/page2/sphere1.png',640);
                        bottom: 0;
                    }
                    .person{
                        @include size(439,349);
                        @include bgc("../images/page2/front1.png",439);
                        bottom: p2r(290);
                        .files{
                            position: absolute;
                            background-image: url("../images/page2/papers.png");
                            background-repeat: no-repeat;
                            background-size: p2r(115) p2r(114);
                            background-position: bottom right;
                            @include size(85,50);
                            left: p2r(27);
                            bottom: p2r(104);
                            .paper1{
                                position: absolute;
                                background-image: url("../images/page2/papers.png");
                                background-repeat: no-repeat;
                                background-size: p2r(115) p2r(114);
                                background-position: 0 p2r(-32);
                                @include size(86,26);
                                left: p2r(-70);
                                bottom: p2r(45);
                            }
                            .paper2{
                                position: absolute;
                                background-image: url("../images/page2/papers.png");
                                background-repeat: no-repeat;
                                background-size: p2r(115) p2r(114);
                                background-position: p2r(-45) 0;
                                @include size(64,20);
                                right: 0;
                                bottom: p2r(80);
                            }
                        }
                    }
                    .text{
                        @include size(363,119);
                        @include bgc("../images/page2/txt-bubbl.png",363);
                        bottom: p2r(140);
                        .words{
                            @include size(220,30);
                            @include bgc("../images/page2/txt-work.png",220);
                            bottom: p2r(50);
                        }
                    }
                }
                .scroll-page2{
                    .bg{
                        @include size(582,520);
                        @include bgc("../images/page2/bg2.png",582);
                        bottom: p2r(252);
                    }
                    .sphere{
                        @include size(640,356);
                        @include bgc('../images/page2/sphere1.png',640);
                        bottom: 0;
                    }
                    .person{
                        @include size(436,332);
                        @include bgc("../images/page2/relax.png",436);
                        bottom: p2r(270);
                        .leg1{
                            @include size(113,24);
                            @include bg("../images/page2/leg1.png");
                            left: p2r(195);
                            bottom: p2r(110);
                        }
                        .leg2{
                            @include size(85,87);
                            @include bg("../images/page2/leg2.png");
                            left: p2r(185);
                            bottom: p2r(120);
                        }
                    }
                    .text{
                        @include size(363,119);
                        @include bgc("../images/page2/txt-bubbl.png",363);
                        bottom: p2r(140);
                        .words{
                            @include size(224,31);
                            @include bgc("../images/page2/txt-life.png",220);
                            bottom: p2r(50);
                        }
                    }
                }
                .scroll-page3{
                    .bg{
                        @include size(561,516);
                        @include bgc("../images/page2/bg3.png",561);
                        bottom: p2r(270);
                    }
                    .sphere{
                        @include size(640,356);
                        @include bgc('../images/page2/sphere1.png',640);
                        bottom: 0;
                    }
                    .person{
                        @include size(503,229);
                        @include bgc("../images/page2/person.png",436);
                        bottom: p2r(300);
                        .word1{
                            @include size(92,83);
                            @include bg("../images/page2/word1.png");
                            bottom: p2r(194);
                            left: 0;
                        }
                        .word2{
                            @include size(77,70);
                            @include bg("../images/page2/word2.png");
                            bottom: p2r(245);
                            left: p2r(115);
                        }
                        .word3{
                            @include size(115,104);
                            @include bg("../images/page2/word3.png");
                            bottom: p2r(220);
                            right: p2r(130);
                        }
                        .word4{
                            @include size(79,73);
                            @include bg("../images/page2/word4.png");
                            bottom: p2r(230);
                            right: 0;
                        }
                    }
                    .text{
                        @include size(363,119);
                        @include bgc("../images/page2/txt-bubbl.png",363);
                        bottom: p2r(140);
                        .words{
                            @include size(220,30);
                            @include bgc("../images/page2/txt-res.png",220);
                            bottom: p2r(50);
                        }
                    }
                }
            }
            .page2{
                background: #ee4143;
                .bg{
                    @include size(592,490);
                    @include bgc("../images/page3/bg4.png",592);
                    bottom: p2r(330);
                }
                .sphere{
                    @include size(640,356);
                    @include bg("../images/page3/sphere2.png");
                    bottom: 0;
                }
                .table{
                    @include size(514,258);
                    @include bgc("../images/page3/table.png",514);
                    bottom: p2r(140);
                }
                .bear{
                    position: absolute;
                    @include size(227,336);
                    background-image: url("../images/page3/bear2.png");
                    background-repeat: no-repeat;
                    background-position: p2r(-103) p2r(-96);
                    background-size: p2r(368) p2r(427);
                    bottom: p2r(310);
                    @include center(227);
                    .cry{
                        @include size(102,102);
                        @include bg("../images/page3/face1.png");
                        @include topLeft(0,-102);
                    }
                    .smile {
                        @include size(101,102);
                        @include bg("../images/page3/face2.png");
                        right: p2r(-101/2);
                        top: p2r(-102);
                    }
                    .handLeft{
                        @include size(74,77);
                        @include bg("../images/page3/hand-left.png");
                        @include topLeft(180,30);

                    }
                    .handRight{
                        @include size(74,77);
                        @include bg("../images/page3/hand-right.png");
                        right: p2r(30);
                        top: p2r(180);
                    }
                }
                .foods{
                    @include size(354,152);
                    @include bgc("../images/page3/foods.png",354);
                    bottom: p2r(330);
                }
            }
            .page3{
                background: #dd8a03;
                .bg{
                    @include size(592,580);
                    @include bgc("../images/page4/bg5.png",592);
                    bottom: p2r(300);
                }
                .sphere{
                    @include size(640,356);
                    @include bg("../images/page4/sphere3.png");
                    bottom: 0;
                }
                .license{
                    @include size(197,140);
                    @include bg("../images/page4/license.png");
                    bottom: p2r(500);
                    left: p2r(40);
                }
                .oil{
                    @include size(205,107);
                    @include bg("../images/page4/oil.png");
                    bottom: p2r(660);
                    left: p2r(225);
                }
                .evil{
                    @include size(198,163);
                    @include bg("../images/page4/evil2.png");
                    bottom: p2r(480);
                    right: p2r(30);
                }
                .bear{
                    @include size(206,321);
                    @include bgc("../images/page4/bear3.png",206);
                    bottom: p2r(195);
                }
            }
            .page4{
                background: #3fa100;
                .bg{
                    @include size(588,333);
                    @include bgc("../images/page5/bg6.png",588);
                    bottom: p2r(300);
                }
                .sphere{
                    @include size(640,356);
                    @include bg("../images/page5/sphere4.png");
                    bottom: 0;
                }
                .bear{
                    @include size(309,325);
                    @include bg("../images/page5/bear4.png");
                    left: p2r(200);
                    bottom: p2r(170);
                }
                .card1{
                    @include size(160,175);
                    @include bg("../images/page5/card1.png");
                    left: p2r(32);
                    bottom: p2r(435);
                }
                .card2{
                    @include size(161,209);
                    @include bg("../images/page5/card2.png");
                    left: p2r(240);
                    bottom: p2r(530);
                }
                .card3{
                    @include size(167,184);
                    @include bg("../images/page5/card3.png");
                    right: p2r(45);
                    bottom: p2r(420);
                }
            }
            .page5{
                background: #0098cf;
                .bg{
                    @include size(594,493);
                    @include bgc("../images/page6/bg7.png",594);
                    bottom: p2r(300);
                }
                .sphere{
                    @include size(640,356);
                    @include bg("../images/page6/sphere5.png");
                    bottom: 0;
                }
                .bear{
                    @include size(230,390);
                    @include bgc("../images/page6/rider2.png",230);
                    bottom: p2r(175);
                    .smoke{
                        @include size(114,26);
                        @include bgc("../images/page6/shadow.png",114);
                        bottom: 0;
                    }

                }
                .cloud{
                    @include size(432,160);
                    @include bgc("../images/page6/weather-cloud.png",432);
                    bottom: p2r(175+390+80);
                }

            }
            .page6{
                background: #b527a0;
                .bg{
                    @include size(588,333);
                    @include bgc("../images/page7/bg8.png",588);
                    bottom: p2r(300);
                }
                .sphere{
                    @include size(640,356);
                    @include bg("../images/page7/sphere6.png");
                    bottom: 0;
                }
                .bear{
                    @include size(285,328);
                    @include bgc("../images/page7/bear5.png",285);
                    bottom: p2r(200);
                    .gift{
                        position: absolute;
                        left: 50%;
                        top: 0;
                        .gift1{
                            @include size(35,29);
                            @include bgc("../images/page7/gift1.png",35);
                        }
                        .gift2{
                            @include size(93,79);
                            @include bgc("../images/page7/gift2.png",93);
                        }
                        .gift3{
                            @include size(72,64);
                            @include bgc("../images/page7/gift3.png",72);
                        }
                        .gift4{
                            @include size(91,73);
                            @include bgc("../images/page7/gift4.png",91);
                        }
                        .gift5{
                            @include size(99,65);
                            @include bgc("../images/page7/gift5.png",99);
                        }
                        .gift6{
                            @include size(107,80);
                            @include bgc("../images/page7/gift6.png",107);
                        }
                        .gift7{
                            @include size(107,80);
                            @include bgc("../images/page7/gift7.png",107);
                        }
                        .gift8{
                            @include size(88,64);
                            @include bgc("../images/page7/gift8.png",88);
                        }
                        .gift9{
                            @include size(78,50);
                            @include bgc("../images/page7/gift9.png",78);
                        }
                        .gift10{
                            @include size(49,37);
                            @include bgc("../images/page7/gift10.png",49);
                        }
                        .gift11{
                            @include size(51,31);
                            @include bgc("../images/page7/gift11.png",51);
                        }
                        .gift12{
                            @include size(37,23);
                            @include bgc("../images/page7/gift12.png",37);
                        }
                    }
                }
            }
            .page7{
                background: #19072a;
                .streetlight{
                    @include size(80,443);
                    @include bgc("../images/page8/streetlight.png",80);
                    bottom: p2r(300);
                    left: p2r(280);
                    .lamplight{
                        @include size(437,427);
                        @include bg("../images/page8/lamplight.png");
                        top: p2r(10);
                        left: p2r(-140);
                    }
                }
                .sphere{
                    @include size(640,384);
                    @include bg("../images/page8/sphere7.png");
                    bottom: 0;
                }
                .bear{
                    @include size(276,271);
                    @include bg("../images/page8/bear6.png");
                    bottom: p2r(280);
                    left: p2r(230);
                }
                .motor{
                    @include size(200,137);
                    @include bg("../images/page8/moto.png");
                    bottom: p2r(335);
                    left: p2r(110);
                }
                .share{
                    @include size(379,113);
                    @include bgc("../images/page8/share.png",379);
                    bottom: p2r(140);
                }
                .info{
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    bottom: p2r(70);
                    color: #b579d6;
                    font-size: p2r(24);
                }
            }
        }
    }

    /*重置样式*/
    .base{
        .swiper{
            .page1{
                .scroll-page1{
                    .bg{
                        opacity: 0;
                        transform-origin: 50% 200%;
                    }
                    .person{
                        opacity: 0;
                        transform-origin: 50% 200%;
                    }
                    .text{
                        z-index: 1;
                        opacity: 0;
                        transform-origin: right bottom;
                    }
                }
                .scroll-page2{
                    .bg{
                        opacity: 0;
                        transform-origin: 50% 200%;
                    }
                    .person{
                        opacity: 0;
                        transform-origin: 50% 200%;
                        .leg2{
                            transform-origin: left bottom;
                            transform: rotateZ(30deg);
                        }
                    }
                    .text{
                        z-index: 1;
                        opacity: 0;
                        transform-origin: right bottom;
                    }
                }
                .scroll-page3{
                    .bg{
                        opacity: 0;
                        transform-origin: 50% 200%;
                    }
                    .person{
                        opacity: 0;
                        transform-origin: 50% 200%;
                    }
                    .text{
                        z-index: 1;
                        opacity: 0;
                        transform-origin: right bottom;
                    }
                }
            }
            .page2{
                .bg{
                    opacity: 0;
                    transform-origin: 50% 200%;
                }
                .bear{
                    opacity: 0;
                    .cry{
                        opacity: 0;
                    }
                    .smile{
                        opacity: 0;
                    }
                    .handLeft{
                        transform-origin: left top;
                    }
                    .handRight{
                        transform-origin: right top;
                    }
                }
                .table{
                    opacity: 0;
                }
                .foods{
                    opacity: 0;
                }
            }
            .page3{
                .bg{
                    opacity: 0;
                    transform-origin: 50% 200%;
                }
                .bear{
                    opacity: 0;
                }
                .animate-bear-box{
                    >div{
                        bottom:p2r(195);
                        opacity: 0;
                    }
                    .bear1{
                        @include size(251,335);
                        @include bgc("../images/page4/bear3-1-1.png",251);
                    }
                    .bear2{
                        @include size(215,313);
                        @include bgc("../images/page4/bear3-2-1.png",215);
                    }
                    .bear3{
                        @include size(290,321);
                        @include bgc("../images/page4/bear3-3-1.png",290);
                    }
                }
                .animate-card-box{
                    >div{
                        opacity: 0;
                    }
                    .card1 {
                        @include size(228,151);
                        @include bg("../images/page4/license1.png");
                        bottom: p2r(500);
                        left: p2r(40);
                    }
                    .card2 {
                        @include size(231,156);
                        @include bg("../images/page4/oil1.png");
                        bottom: p2r(640);
                        left: p2r(225);
                    }
                    .card3 {
                        @include size(211,173);
                        @include bg("../images/page4/evil21.png");
                        bottom: p2r(480);
                        right: p2r(30);
                    }
                }
                .oil{
                    opacity: 0;
                }
                .license{
                    opacity: 0;
                }
                .evil{
                    opacity: 0;
                }
            }
            .page4{
                .bg{
                    transform-origin: 50% 200%;
                    opacity: 0;
                }
                .bear{
                    opacity: 0;
                }
                .card1{
                    opacity: 0;
                }
                .card2{
                    opacity: 0;
                }
                .card3{
                    opacity: 0;
                }

            }
            .page5{
                .bg{
                    opacity: 0;
                    transform-origin: 50% 200%;
                }
                .bear{
                    opacity: 0;
                }
                .cloud{
                    opacity: 0;
                    .snowPie{
                        @include bg("../images/page6/snow-piece.png");
                        @include size(32,32);
                        bottom: 0;
                        opacity: 0;
                    }
                }
            }
            .page6{
                .bear{
                    .gift{

                    }
                }
            }
        }
    }
    .title{
        h3{
           opacity: 0;
        }
        p{
            opacity: 0;
        }
        .line{
            height: 0;
        }
    }
    /*添加动画*/
    /*注意:教程中使用的是onSlideChangeEnd的事件来判断轮播图具体滑动到哪一页
    但是不知道在vue中如何写，经过研究发现每个轮播图改变的时候，自己会增加一个.swiper-slide-active类，所以说就只能通过下面这种方式写了*/
    .base.animate{
        .swiper-slide-active .title{
            h3{
                animation: r2l 1s linear forwards;
            }
            p{
                animation: r2l 1s linear forwards;
            }
            .line{
                animation: zero2height 1s 0.5s linear forwards;
            }
        }
        .swiper-slide-active.page1{

            /*第一页*/
            >.scroll-page1{
                .bg{
                    animation: rotateInOut 2.2s linear forwards;
                }
                .person{
                    animation: rotateInOut 2s 0.2s linear forwards;
                    .files{
                        .papers{
                            animation: l2r2l 0.5s infinite;
                        }
                    }
                }
                .text{
                    animation: rotateInOut 2s 0.2s linear forwards;
                }
            }
            >.scroll-page2{
                .bg{
                    animation: rotateInOut 2.2s 2.2s linear forwards;
                }
                .person{
                    animation: rotateInOut 2s 2.4s linear forwards;
                    .leg2{
                        animation: rotateBack 0.5s 2.8s forwards;
                    }
                }
                .text{
                    animation: rotateInOut 2s 2.4s linear forwards;
                }
            }
            >.scroll-page3{
                .bg{
                    animation: rotateInNotOut 1.2s 4.4s linear forwards;
                }
                .person{
                    animation: rotateInNotOut 1s 4.6s linear forwards;
                    .words{
                        animation: shake 1s infinite;
                    }
                }
                .text{
                    animation: rotateInNotOut 1s 4.6s linear forwards;
                }
            }
        }
        .swiper-slide-active.page2{
            .bg{
                animation: rotateInNotOut 1s linear forwards;
            }
            .table{
                animation: toUpper 1s 1s linear forwards;
            }
            .bear{
                /*注意toDown的动画在welcome.vue里面*/
                animation: toDown 1s 2s linear forwards;
                .cry{
                    animation: small2big2small 0.5s 3s linear forwards;
                }
                .smile{
                    animation: small2big2small 0.5s 3s linear forwards;
                }
                .handLeft{
                    animation: handShake 0.5s linear infinite;
                }
                .handRight{
                    animation: handShake 0.5s linear infinite;
                }
            }
            .foods{
                animation: toDown 1s 1s linear forwards;
            }

        }
        .swiper-slide-active.page3{
            .bg{
                animation: rotateInNotOut 1s linear forwards;
            }
            .bear{
                animation: toDown 1s 1s linear forwards;
            }
            .oil{
                animation: small2big2small 1s 2s linear forwards,shake 0.5s 3s linear infinite;
            }
            .license{
                animation: small2big2small 1s 2s linear forwards,shake 0.5s 3s linear infinite;
            }
            .evil{
                animation: small2big2small 1s 2s linear forwards,shake 0.5s 3s linear infinite;
            }
        }
        .swiper-slide-active.page4{
            .bg{
                animation: rotateInNotOut 1s linear forwards;
            }
            .bear{
                animation: toDown 1s 1s linear forwards;
            }
            .card1{
                animation: small2big2small 1s 2s linear forwards;
            }
            .card2{
                animation: small2big2small 1s 2s linear forwards;
            }
            .card3{
                animation: small2big2small 1s 2s linear forwards;
            }
        }
        .swiper-slide-active.page5{
            .bg{
                animation: rotateInNotOut 1s linear forwards;
            }
            .bear{
                animation: toDown 1s 2s linear forwards,UpAndDown 0.5s 2.5s linear infinite;
                .smoke{
                    animation: toBig 0.5s 2.5s linear infinite;
                }
            }
            .cloud{
                animation: small2big2small 1s 1s linear forwards,shake 1s 2s infinite;
            }
        }
        .swiper-slide-active.page6{
            .bear{
                .gift{
                    >div{
                        position: absolute;
                        left: 0;
                        top: 0;
                        @for $i from 1 through 12{
                            &:nth-child(#{$i}){
                                animation: giftRotate 2s forwards;
                                >div{
                                    animation: rotate360 1s $i*0.1s;
                                }
                            }
                        }
                    }
                    >div:nth-child(1){
                        @include size(35,29);
                        transform: rotateZ(28deg) translateY(p2r(240));
                    }
                    >div:nth-child(2){
                        @include size(93,79);
                        transform: rotateZ(28deg*2) translateY(p2r(240));
                    }
                    >div:nth-child(3){
                        @include size(72,64);
                        transform: rotateZ(28deg*3) translateY(p2r(240));
                    }
                    >div:nth-child(4){
                        @include size(91,73);
                        transform: rotateZ(28deg*4) translateY(p2r(240));
                    }
                    >div:nth-child(5){
                        @include size(99,65);
                        transform: rotateZ(28deg*5) translateY(p2r(240));
                    }
                    >div:nth-child(6){
                        @include size(107,80);
                        transform: rotateZ(28deg*6) translateY(p2r(240));
                    }
                    >div:nth-child(7){
                        @include size(107,80);
                        transform: rotateZ(28deg*7) translateY(p2r(240));
                    }
                    >div:nth-child(8){
                        @include size(88,64);
                        transform: rotateZ(28deg*8) translateY(p2r(240));
                    }
                    >div:nth-child(9){
                        @include size(78,50);
                        transform: rotateZ(28deg*9) translateY(p2r(240));
                    }
                    >div:nth-child(10){
                        @include size(49,37);
                        transform: rotateZ(28deg*10) translateY(p2r(240));
                    }
                    >div:nth-child(11){
                        @include size(51,31);
                        transform: rotateZ(28deg*11) translateY(p2r(240));
                    }
                    >div:nth-child(12){
                        @include size(37,23);
                        transform: rotateZ(28deg*12) translateY(p2r(240));
                    }
                }

            }
        }
        .swiper-slide-active.page7{
            .streetlight{
                animation: toLight 0.5s 0.5s 3 forwards;
            }
        }
    }
    @keyframes r2l {
        from{
            transform: translateX(200%);
        }
        to{
            transform: none;
            opacity: 1;
        }
    }
    @keyframes zero2height {
        from{}
        to{
            height: 100%;
        }
    }
    @keyframes rotateInOut {
        0%{
            transform: rotateZ(90deg);
        }
        20%{
            transform: rotateZ(-5deg);
            opacity: 1;
        }
        40%{
            transform: rotateZ(0deg);
            opacity: 1;
        }
        60%{
            transform: rotateZ(0deg);
            opacity: 1
        }
        80%{
            transform: rotateZ(5deg);
            opacity: 1
        }
        100%{
            transform: rotateZ(-90deg);
            opacity: 0
        }
    }
    @keyframes rotateInNotOut {
        0%{
            transform: rotateZ(90deg);
        }
        50%{
            transform: rotateZ(-5deg);
            opacity: 1;
        }
        100%{
            transform: rotateZ(0);
            opacity: 1;
        }
    }
    @keyframes shake {
        25%{
            transform: translate(5%,0);
        }
        50%{
            transform: translate(-5%,-5%);
        }
        75%{
            transform: translate(0,5%);
        }
        100%{
            transform: translate(0,0);
        }
    }
    @keyframes l2r2l {
        30% {
            transform: translateX(-30%);
        }
        60%{
            transform: translateX(30%);
        }
        100%{
            transform: none;
        }
    }
    @keyframes rotateBack {
        from{
        }
        to{
            transform: none;
        }
    }
    @keyframes toUpper {
        from{
            transform: translateY(100%);
        }
        50%{
            transform: translateY(-5%);
            opacity: 1;
        }
        to{
            transform: none;
            opacity: 1;
        }
    }
    @keyframes small2big2small {
        0%{
            transform: scale(0,0)
        }
        80%{
            transform: scale(1.5,1.5);
            opacity: 1;
        }
        100%{
            transform: none;
            opacity: 1;
        }
    }
    @keyframes handShake {
        30%{
            transform: rotateZ(-10deg);
        }
        60%{
            transform: rotateZ(10deg);
        }
        100%{
            transform: none;
        }
    }
    
    @keyframes downLeft {
        from{
        }
        50%{
            opacity: 1;
        }
        to{
            opacity: 1;
            transform: translate(-20%,1200%);
        }
    }


    @keyframes giftRotate {
        0%{
            transform: none;
            opacity: 0;
        }
        100%{
            opacity:1;
        }
    }

    @keyframes toLight {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes rotate360 {
        from{

        }
        to{
            transform: rotateZ(360deg);
        }
    }
</style>