$(function(){
    $(window).scroll(function(){
        $('.fade-in').each(function(){
            const elemPos = $(this).offset().top;
            //位置を取得
            const scroll = $(window).scrollTop();
            //スクロールの位置(量)を取得
            const windowHeight = $(window).height();
            //画面の高さを取得
            const offset = 150; 
            // 100px分下にオフセットを追加
            if(scroll > elemPos - windowHeight + offset){
                $(this).addClass('scroll-in');
            }
        });
    });
    jQuery(window).scroll();
});

$(function(){
    $(window).scroll(function(){
        $('.fade-in2').each(function(){
            const elemPos = $(this).offset().top;
            //位置を取得
            const scroll = $(window).scrollTop();
            //スクロールの位置(量)を取得
            const windowHeight = $(window).height();
            //画面の高さを取得
            const offset = 150; 
            // 100px分下にオフセットを追加
            if(scroll > elemPos - windowHeight + offset){
                $(this).addClass('scroll-in');
            }
        });
    });
    jQuery(window).scroll();
});

$(function(){
    $(window).scroll(function(){
        $('.fade-in3').each(function(){
            const elemPos = $(this).offset().top;
            //位置を取得
            const scroll = $(window).scrollTop();
            //スクロールの位置(量)を取得
            const windowHeight = $(window).height();
            //画面の高さを取得
            const offset = 150; 
            // 100px分下にオフセットを追加
            if(scroll > elemPos - windowHeight + offset){
                $(this).addClass('scroll-in');
            }
        });
    });
    jQuery(window).scroll();
});

$(".burger").click(function() {
    $(".guide").toggleClass('is-active');
    $(".burger").toggleClass('is-active');
});




// JavaScriptを使ってマウスイベントを監視
document.addEventListener('DOMContentLoaded', function() {
    // ここにJavaScriptコードを配置
});


// hover attempt f
document.getElementById('mainImage').addEventListener('mouseover', function () {
    document.getElementById('hiddenImage').style.transform = 'translateX(10px)';
});

document.getElementById('mainImage').addEventListener('mouseout', function () {
    document.getElementById('hiddenImage').style.transform = 'translateX(0)';
});
