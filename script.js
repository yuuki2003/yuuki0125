// Smooth Scrool Sample

$(function(){

   $('a[href^="#"]').click(function() {

      // 初期設定：移動時間(ms)と頭出し位置
      var speed = 750;
      var offset = -0;

      // アンカーを取得
      var anchor = $(this).attr("href");

      // ターゲットの位置を取得
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top + offset;

      // スクロール（アニメーション）
      $('body,html').animate({scrollTop:position}, speed, 'swing');

      return false;

   });

});
// slider option

$(document).ready(function(){
   $('.slider').bxSlider({
      auto: true,
      mode: 'fade',
      speed: 3000,
      pager: true,
      captions: true
   });
});