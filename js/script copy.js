/*ハンバーガーメニュー*/
$(function () {
    $("#js-button").click(function () {
        $(".spNav").toggleClass("show");
        $(this).toggleClass("active");
        return false;
    });
});


/*スムーススクロール*/
$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 800;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});

/*ふわっと表示*/
$(function () {
    $(window).scroll(function () {//スクロールのたびに実行される
        $('.fadein').each(function () {//フェードインがついたクラス/それぞれに実行する
            var targetElement = $(this).offset().top;//画面から要素までの距離
            var scroll = $(window).scrollTop();//どのくらいスクロールしたのか
            var windowHeihgt = $(window).height();//
            if (scroll > targetElement - windowHeihgt + 100) {
                $(this).addClass('scrollin');
            }
        });
    });
});


$(function () {
    // /*スクロールでヘッダー色変える*/ 
    let pcNav = $('.pcNav');

    $(window).scroll(function () {
        // 画面をトップから100px以上スクロールした時
        if ($(this).scrollTop() >= 100) {
            // ヘッダーのbackground-colorを白に変更し、boxshadowをつける
            pcNav.css({ 'background': 'rgb(255,255,255,80%)', 'box-shadow': '0 1px 5px gray' });
        } else {
            // 画面がトップから100px以下の時は、上記と逆の処理を行う
            pcNav.css({ 'background': 'rgba(250, 250, 250, 0)', 'box-shadow': 'none' });
        }
    });

        let spNav_button = $('.spNav_button span');
        let test = $('.test');
    
    // .testが存在する場合
    if (test.length > 0) {
        $(window).scroll(function () {
            // 画面をトップから300px以上スクロールした時
            if ($(this).scrollTop() >= 300) {
                // ボタンの色を変更
                spNav_button.css({ 'background': 'rgb(16, 187, 136)'});
            } else {
                // 画面がトップから300px以下の時は元の色に戻す
                spNav_button.css({ 'background': '' });
            }
        });
    } else {
        // .testが存在しない場合でもスクロールイベントは適用する
        $(window).scroll(function () {
                // ボタンの色を変更
                spNav_button.css({ 'background': 'rgb(16, 187, 136)'});
        });
    }
    

// /*スクロールでspメニューのボタンの色変える*/ 
    // let spNav_button = $('.spNav_button span');

    // $(window).scroll(function () {
        // 画面をトップから300px以上スクロールした時
        // if ($(this).scrollTop() >= 200) {
            // ヘッダーのbackground-colorを白に変更し、boxshadowをつける
        //     spNav_button.css({ 'background': 'rgb(16, 187, 136)'});
        // } else {
            // 画面がトップから300px以下の時は、上記と逆の処理を行う
    //         spNav_button.css({ 'background': 'rgba(255, 255, 255, 255)' });
    //     }
    // });
});

// $(function () {
//     let spNav_button = $('.spNav_button span');

//     $(window).scroll(function () {
//         // 画面をトップから300px以上スクロールした時
//         if ($(this).scrollTop() >= 200) {
//             // ヘッダーのbackground-colorを白に変更し、boxshadowをつける
//             spNav_button.css({ 'background': 'rgb(16, 187, 136)'});
//         } else {
//             // 画面がトップから300px以下の時は、上記と逆の処理を行う
//             spNav_button.css({ 'background': 'rgba(255, 255, 255, 255)' });
//         }
//     });
// });

// アニメーション
$(function () {
    $(window).scroll(function () {
        $('.animation').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('on');
            }
        });
    });
});

// var
// cursor = $(".cursor"),
// cWidth = 20, //カーソルの大きさ
// mouseX = 0, //マウスのX座標
// mouseY = 0; //マウスのY座標

// $(document).on('mousemove', function(e) {
//   mouseX = e.pageX;
//   mouseY = e.pageY;
//   cursor.css({
//     //カーソルの真ん中に座標軸が来るよう、
//     //カーソルの大きさの半分を引きます
//     left: mouseX - (cWidth / 2),
//     top: mouseY - (cWidth / 2)
//   })
// });


// $(document).on('mousemove', function(e) {
//     $('#cursor').css('transform', `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`)
//   });

$(function () {

    //マウスカーソルの変更
    //=================================
    //カーソル要素
    var cursor = $("#cursor");
    //mousemoveイベントでカーソル要素を移動
    $(document).on("mousemove", function (e) {
        //マウス位置を取得するプロパティ
        var x = e.clientX;
        var y = e.clientY;
        //カーソル要素のcssを書き換え。重複しなければtransformを使うのがおすすめ
        cursor.css({
            "opacity": "1",
            "top": y + "px",
            "left": x + "px"
        });
    });

    //aタグホバー
    $("a").on({
        "mouseenter": function () {
            //activeクラス付与
            cursor.addClass("active");
        },
        "mouseleave": function () {
            cursor.removeClass("active");
        }
    });
});

// 小林私のjs
function videoThumb() {
    $('.list--video li').each(function () {
        var $this = $(this),
            $thumb = $this.find('.thumb'),
            thumbID = $thumb.attr('id'),
            thumbImg = new Image();
        thumbImg.src = 'https://img.youtube.com/vi/' + thumbID + '/maxresdefault.jpg';
        thumbImg.onload = function () {
            var imgW = thumbImg.naturalWidth;
            if (imgW == 120) {
                thumbImgsd = new Image();
                thumbImgsd.src = 'https://img.youtube.com/vi/' + thumbID + '/sddefault.jpg';
                thumbImgsd.onload = function () {
                    var imgWsd = thumbImgsd.naturalWidth;
                    if (imgWsd == 640) {
                        $thumb.attr("style", 'background-image:url(https://img.youtube.com/vi/' + thumbID + '/sddefault.jpg)');
                        if ($('.list--video').hasClass('list--thumnail--center')) {
                            $this.css({ maxWidth: '640px' });
                        }
                    } else {
                        thumbImghq = new Image();
                        thumbImghq.src = 'https://img.youtube.com/vi/' + thumbID + '/hqdefault.jpg';
                        thumbImghq.onload = function () {
                            var imgWhq = thumbImghq.naturalWidth;
                            if (imgWhq == 480) {
                                $thumb.attr("style", 'background-image:url(https://img.youtube.com/vi/' + thumbID + '/hqdefault.jpg)');
                                if ($('.list--video').hasClass('list--thumnail--center')) {
                                    $this.css({ maxWidth: '480px' });
                                }
                            } else {//default
                                $thumb.attr("style", 'background-image:url(/static/fcopen/common/thumb--none-play.jpg)');
                            }//hq
                        }
                    }//sd
                }
            }//maxres
        }
    });
}
// 小林私のjs

$(".slide-items").slick({
    autoplay:true,
    slidesToShow:1,
    infinite:true,
    slidesToScroll:1,
  });

//slickの設定
$('.slider').slick({
    autoplay: false, //自動スライド
    autoplaySpeed: 30, //スライドさせる間隔
    dots: true, //ドットインジケーターを表示
    lazyLoad: "progressive", //画像の遅延読み込み
    arrows: false, //スライドの左右の矢印ボタンを非表示
    centerMode: true,
    // variableWidth: true,
    centerPadding: "15%"
});

// YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(
        'youtube', // htmlで指定したID
        {
            videoId: 'xg4cRnWxljE', // YouTubeのID
            playerVars: {
                height: '100%',
                width: '100%',
                loop: 0,//ループ設定
                // playlist: 'q6T0wOMsNrI',//次に流すYouTubeのID　loopの設定が１の場合必須
                controls: 0,//コントローラー無し
                autoplay: false,//オートプレイ
                showinfo: 0,//動画タイトル表示しない
                rel: 0,//関連動画の制御
                iv_load_policy: 3,//動画のアノテーション
                start: 30, //スタート秒数の指定
                variableWidth: true
            },
            events: {
                'onReady': onPlayerReady
            }
        }
    );

    ytPlayer = new YT.Player(
        'youtube2', // htmlで指定したID
        {
            videoId: 'ucbnY1jMl0M', // YouTubeのID
            playerVars: {
                height: '100%',
                width: '100%',
                loop: 0,//ループ設定
                // playlist: 'q6T0wOMsNrI',//次に流すYouTubeのID　loopの設定が１の場合必須
                controls: 0,//コントローラー無し
                autoplay: 1,//オートプレイ
                showinfo: 0,//動画タイトル表示しない
                rel: 0,//関連動画の制御
                iv_load_policy: 3,//動画のアノテーション
                start: 30 //スタート秒数の指定
            },
            events: {
                'onReady': onPlayerReady
            }
        }
    );

    ytPlayer = new YT.Player(
        'youtube3', // htmlで指定したID
        {
            videoId: 'd6OIEFYsV88', // YouTubeのID
            playerVars: {
                height: '100%',
                width: '100%',
                loop: 0,//ループ設定
                // playlist: 'q6T0wOMsNrI',//次に流すYouTubeのID　loopの設定が１の場合必須
                controls: 0,//コントローラー無し
                autoplay: 1,//オートプレイ
                showinfo: 0,//動画タイトル表示しない
                rel: 0,//関連動画の制御
                iv_load_policy: 3,//動画のアノテーション
                start: 30 //スタート秒数の指定
            },
            events: {
                'onReady': onPlayerReady
            }
        }
    );

    ytPlayer = new YT.Player(
        'youtube4', // htmlで指定したID
        {
            videoId: 'Ovi_5sLeyCs', // YouTubeのID
            playerVars: {
                height: '100%',
                width: '100%',
                loop: 0,//ループ設定
                // playlist: 'q6T0wOMsNrI',//次に流すYouTubeのID　loopの設定が１の場合必須
                controls: 0,//コントローラー無し
                autoplay: 1,//オートプレイ
                showinfo: 0,//動画タイトル表示しない
                rel: 0,//関連動画の制御
                iv_load_policy: 3,//動画のアノテーション
                start: 30 //スタート秒数の指定
            },
            events: {
                'onReady': onPlayerReady
            }
        }
    );
}

//プレイ準備完了後
function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute();
}
