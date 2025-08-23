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
});

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


$(document).ready(function(){
    var swiper = new Swiper(".swiper", {
        loop: true, // ループ
        speed: 1500, // 少しゆっくり(デフォルトは300)
        slidesPerView: 1, // 一度に表示する枚数
        spaceBetween: 10, // スライド間の距離
        centeredSlides: true, // アクティブなスライドを中央にする
        // ページネーション
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // 前後の矢印
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // 一度に表示する枚数
                spaceBetween: 10, // スライド間の距離
                centeredSlides: true, // アクティブなスライドを中央にする
            },
        },
    });
});