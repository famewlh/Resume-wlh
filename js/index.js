$("document").ready(function () {
    $('#fullpage').fullpage({
        fixedElements: '#head',
        resize: 'true',
        // navigation: 'true',
        loopHorizontal: 'true',
        slidesNavigation: 'true',
        navigationPosition: 'right',
        navigationTooltips: ['首页', '关于我', '心路历程', '技能&作品', '联系我'],
        css3: 'ture',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        afterLoad: function (link, index) {//起源 目的索引
            switch (index) {
                case 1:
                    var str = "技术积累的路 任重而道远\n\
                    扎实基础，学透语言\n\
                    拓宽眼界，掌握框架\n\
                    技术升华，优化代码\n\
                    结合生活，完善需求";
                    var arr = str.split('');
                    var length = arr.length;
                    for (var i = 0; i < length; i++) {
                        if (arr[i] == '\n') {
                            arr[i] = "<br/>"
                        }
                    }
                    for (var i = 0; i < length; i++) {
                        (function (index) {
                            var timer = setTimeout(function () {
                                if (index <= 11) {
                                    var $text = arr.slice(0, index + 1).join('');
                                    var $html = "<h1 class='title'>" + $text + "<h1/>"
                                    $(".section1 .text").html($html)
                                } else {
                                    var $text_h = arr.slice(0, 12).join('');
                                    var $text_s = arr.slice(12, index + 1).join('');
                                    var $html = "<h1 class='title'>" + $text_h + "<h1/>" + "<br/>" + "<div class='info'>" + $text_s + "<div/>"
                                    $(".section1 .text").html($html)
                                }
                            }, 50 * index)
                        })(i)
                    }
                    setTimeout(function () {
                        $(".section1 .text .title").css({
                            marginLeft: "50%",
                            marginBottom: "20px",
                            transform: "translateX(-50%) scale(1.5)"
                        })
                        $(".section1 .text .info").css({
                            marginLeft: "50%",
                            transform: "translateX(-50%) scale(1.5)"
                        })
                    }, 50 * length)
                    break;
                case 2:
                    move('.section2 h1').set('margin-left', '60%').duration('1s').end(function () {
                        move('.section2 h1').set('margin-left', '40%').duration('.5s').end()
                    });
                    var $p = $('.sec2Bor .sectionText p');
                    move('.sec2Bor').set('top', '40%').duration('1s').end(function () {
                        move('.sectionText').set('opacity', '1').duration('2s').end(
                            function () {
                                var str = "姓 名：立 宏";
                                var arr = str.split('');
                                var length = arr.length;
                                for (var i = 0; i < length; i++) {
                                    (function (index) {
                                        setTimeout(function () {
                                                var $text = arr.slice(0, index + 1).join('');
                                                $($p[0]).text($text);
                                        }, 50 * index)
                                    })(i)
                                }
                                var str1 = "年 龄：2 3";
                                var arr1 = str1.split('');
                                var length1 = arr1.length;
                                for (var i = 0; i < length1; i++) {
                                    (function (index) {
                                        setTimeout(function () {
                                                var $text = arr1.slice(0, index + 1).join('');
                                                $($p[1]).text($text);
                                        },( 50 * index + 350))
                                    })(i)
                                }
                                var str2 = "性 别：男";
                                var arr2 = str2.split('');
                                var length2 = arr2.length;
                                for (var i = 0; i < length2; i++) {
                                    (function (index) {
                                        setTimeout(function () {
                                                var $text = arr2.slice(0, index + 1).join('');
                                                $($p[2]).text($text);
                                        },( 50 * index + 700))
                                    })(i)
                                }
                                var str3 = "意 向 职 位：前 端 工 程 师";
                                var arr3 = str3.split('');
                                var length3 = arr3.length;
                                for (var i = 0; i < length3; i++) {
                                    (function (index) {
                                        setTimeout(function () {
                                                var $text = arr3.slice(0, index + 1).join('');
                                                $($p[3]).text($text);
                                        },( 50 * index + 950))
                                    })(i)
                                }
                                var str4 = "专 业：机 械 电 子 工 程";
                                var arr4 = str4.split('');
                                var length4 = arr4.length;
                                for (var i = 0; i < length4; i++) {
                                    (function (index) {
                                        setTimeout(function () {
                                                var $text = arr4.slice(0, index + 1).join('');
                                                $($p[4]).text($text);
                                        },( 50 * index + 1800))
                                    })(i)
                                }
                                var str5 = "毕 业 学 校：仲 恺 农 业 工 程 学 院";
                                var arr5 = str5.split('');
                                var length5 = arr5.length;
                                for (var i = 0; i < length5; i++) {
                                    (function (index) {
                                        setTimeout(function () {
                                                var $text = arr5.slice(0, index + 1).join('');
                                                $($p[5]).text($text);
                                        },( 50 * index + 2550))
                                    })(i)
                                }
                            })
                    });

                    break;
                case 3:
                    move('.sec3-li1').set('margin-left', '45%').duration('.5s').end(function () {
                        move('.sec3-li2').set('margin-left', '45%').duration('.5s').end(function () {
                            move('.sec3-li3').set('margin-left', '45%').duration('.5s').end(function () {
                                move('.sec3-li4').set('margin-left', '45%').duration('.5s').end(function () {
                                    move('.sec3-li5').set('margin-left', '45%').duration('.5s').end()
                                })
                            })
                        })
                    })
                    var oli = $("#sec3Nav li"),
                        odiv = $(".sec3Box");
                    for (var i = 0; i < oli.length; i++) {
                        oli[i].id = i;
                        oli[i].onclick = function () {
                            for (var j = 0; j < odiv.length; j++) {
                                var that = this;
                                odiv[j].style.display = "none";
                                odiv[that.id].style.display = "block";
                            }
                        }
                    }
                    move(".sec3Wrap").set("margin-right", "45%").duration("1.5s").end();
                    break;
                case 4:
                    changeOptions('.selector .skill');
                    $('.section4 label').on('mouseenter',function (){
                        var $class = $(this).attr('class');
                        console.log($class);
                        $(".detail_box .detail_" + $class).siblings().css({display: 'none'})
                        $(".detail_box .detail_" + $class).css({display: 'block'})
                    })
                    break;
                case 5:
                    $(".section5 .wrapper .sec5-p").css({animation: 'concat 5s infinite linear'})
                    break;
                default:
                    break;
            }

        },
        onLeave: function (link, index) { //起源 目的索引
            switch (index) {
                case 1:
                    //清除所有定时器，防止页面秒切出去再进来的bug
                    clearTimeout_m();
                    break;
                case 2:
                    clearTimeout_m ();
                    move('.section2 h1').set('margin-left', '0').end(),
                        move('.sec2Bor').set('top', '-4000px').duration('.1s').end();
                    move('.sectionText').set('opacity', '0').duration('.1s').end();
                    $('.sec2Bor .sectionText p').text('');
                    break;
                case 3:
                    clearTimeout_m();
                    move('.sec3-li1').set('margin-left', '-20%').end();
                    move('.sec3-li2').set('margin-left', '-20%').end();
                    move('.sec3-li3').set('margin-left', '-20%').end();
                    move('.sec3-li4').set('margin-left', '-20%').end();
                    move('.sec3-li5').set('margin-left', '-20%').end();
                    move(".sec3Wrap").set("margin-right", "-30%").end();


                    break;
                case 4:
                    clearTimeout_m();
                    var $li = $(".selector").removeClass('open').find('li');
                    for(var i = 0;i< $li.length;i++) {
                        rotateZ($li[i],0)
                    }
                    $(".detail_box div").css({display: 'none'})
                    setTimeout(function () {
                        $(".detail_box .detail_web_base").css({display: 'block'})
                    },800);
                    break;
                case 5:
                    clearTimeout_m();
                    break;
                default:
                    break;
            }

        }

    })
    $("#head-tit").hover(function () {
        $("#head-e").text("Resume");
        $("#head-c").text("前端工程师");
    }, function () {
        $("#head-e").text("Wu");
        $("#head-c").text("个人简历");

    });
});


// 清除所有定时器
function clearTimeout_m() {
    for (var i = 0; i < 9999; i++) {
        clearInterval(i)
    }
}


//li动态变化
function rotateZ(li, deg) {
    $(li)
        .css({transform:'rotateZ('+deg+'deg)'})
        .find('label').css({transform: 'rotateZ('+-deg+'deg)'})
}

// 展示、隐藏li
function changeOptions(ele) {
    var $selector = $(ele).parent();//选出父元素selectot
    $selector.addClass('open');//给父元素设置上open类名
    var $li =  $selector.find('li');//选出所有的li
    var deg = 360/$li.length;//算出间距角度
    for(var i = 0; i < $li.length; i++) {
        var d = i*deg;//算出每个li所在的角度deg
        rotateZ($li[i], d);
    }
}

function renderImg () {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    img1.src = 'https://famewlh.github.io/Resume-wlh/images/first_page.png';
    img1.crossOrigin = 'Anonymous';    
    img1.onload = function () {
        player.blurImg(img1,$('.section1'))
    }
    img2.src = 'https://famewlh.github.io/Resume-wlh/images/first_page.png';
    img2.crossOrigin = 'Anonymous';    
    img2.onload = function () {
        player.blurImg(img2,$('.section2'))
    }
    img3.src = 'https://famewlh.github.io/Resume-wlh/images/third_page.jpg';
    img3.crossOrigin = 'Anonymous';    
    img3.onload = function () {
        player.blurImg(img3,$('.section3'))

    }
    img4.src = 'https://famewlh.github.io/Resume-wlh/images/fourth_page.jpg';
    img4.crossOrigin = 'Anonymous';    
    img4.onload = function () {
        player.blurImg(img4,$('.section4'))
    }
    img5.src = 'https://famewlh.github.io/Resume-wlh/images/fifth_page.jpg';
    img5.crossOrigin = 'Anonymous';    
    img5.onload = function () {
        player.blurImg(img5,$('.section5'))
    }
}
renderImg();
