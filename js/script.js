$(function () {
  htmlobj=$.ajax({url:"https://v1.hitokoto.cn/",async:false});
  $(".oneY").html("“ "+JSON.parse(htmlobj.responseText).hitokoto+" ”");
  if(JSON.parse(htmlobj.responseText).from_who!=null){
    $(".zuozhe").html(" —— "+JSON.parse(htmlobj.responseText).from_who);
  }
  $('#elevator').backTop();

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $('.header-top').addClass('header-top__fixed');
    } else {
      $('.header-top').removeClass('header-top__fixed');
    }
  });

  $('.nav-more').hoverDisplay('.nav-more__hover');
  $('#plus').hoverDisplay('#plus_popup');
  });


!(function ($, window, document, undefined) {

  $.fn.backTop = function () {
    var $elem = this;
    var $doc = $(document.body);
    var client_h = $(window).height();

    $elem.click(function () {
      $doc.animate({scrollTop: 0});
    });

    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= client_h) {
        $elem.show();
      } else {
        $elem.hide();
      }
    });
  }

  $.fn.hoverDisplay = function (hoverElem) {
    var $oParent = this;
    var $disELem = $(hoverElem);
    var timer = null;

    $oParent.hover(function () {
      clearTimeout(timer);

      $disELem.show();
    }, function () {
      timer = setTimeout(function () {
        $disELem.hide();
      }, 600);
    });

    $disELem.hover(function () {
      clearTimeout(timer);

      $disELem.show();
    }, function () {
      timer = setTimeout(function () {
        $disELem.hide();
      }, 600);
    });
  };

})(window.jQuery, window, document);

// $(function () {
//     $(".nav-more").on('click',function () {
//         layer.open({
//             type:2,
//             content:'set.html'
//         })
//     })
// })
