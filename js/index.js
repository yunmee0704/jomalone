$(function(){

   $('.main .gnb > li').hover(function(){
     $(this).children('.sub_menu').stop().slideDown()
   },function(){
    $('.main .sub_menu').stop().slideUp()
   })

 $(window).scroll(function(){
   let scrT=$(window).scrollTop();
   if(scrT>0){
    $('.logo_area.main').addClass('on')
   }
   else{
    $('.logo_area.main').removeClass('on')
   }
 })

 $(' .mypage_cont').hover(function(){
  $(this).children('.mypage_cont ul').stop().slideDown()
 } ,function(){
  $('.mypage_cont ul').stop().slideUp()
 })
 $('.menu_btn_menu .mypage_cont').hover(function(){
  $(this).children('.mypage_cont ul').stop().slideDown()
 } ,function(){
  $('.mypage_cont ul').stop().slideUp()
 })
 


 
 //main visual

      const visual = new Swiper(".visual", {
        loop:true,
     
        speed:1000,
        pagination: {
          el: ".sc_visual .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"><i>0' + (index + 1) + "</i></span>";
          },
        },
        navigation: {
          nextEl: ".sc_visual .swiper-button-next",
          prevEl: ".sc_visual .swiper-button-prev",
        },
     
    });

    //Best product
    $('.prod_img ul li').click(function(e){
      e.preventDefault();
      $(this).addClass('on').siblings().removeClass('on')
      })


    imgArr = ['https://www.jomalone.co.kr/media/export/cms/products/670x670/jo_sku_LFFP01_670x670_0.png',
    'https://www.jomalone.co.kr/media/export/cms/products/670x670/jo_sku_LFFN01_670x670_0.png',
    'https://www.jomalone.co.kr/media/export/cms/products/670x670/jo_sku_LFFM01_670x670_0.png',
    'https://www.jomalone.co.kr/media/export/cms/products/670x670/jo_sku_LFFR01_670x670_0.png']

    const right = new Swiper(".swiper.right", {
      slidesPerView: 'auto',
      loop:true,
      speed:1500,
      pagination: {
        el: ".prod_img ul",
        clickable: true,
        renderBullet: function (index, className) {
          // return '< class="' + className + '">' + (index + 1) + "</>";
          return '<li class="' + className +'"><a href=""><img src="'+ imgArr[index]+'" alt=""></a></li>'
        },
      },
      // pagination: {
      //   el: ".sc_best_product .swiper-pagination",
      //   clickable: true,
       
      // },
       navigation: {
         nextEl: ".swiper.right .swiper-button-next",
         prevEl: ".swiper.right .swiper-button-prev",
       },
     
    });
      
      
    
    const slide2 = new Swiper(".slide2", {
        slidesPerView:2.5,
        spaceBetween: 30,
        speed:1000,
        loop:true,
        navigation: {
          nextEl: ".sc_archive .swiper-button-next",
          prevEl: ".sc_archive .swiper-button-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
         
        },
      });


   //  collection slide

      const slide3 = new Swiper(".slide3", {
        slidesPerView: 1.5,
        spaceBetween: 140,
        loop:true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      
      });   

      const pm01 =new Swiper(".pm01",{
        loop:true,
        speed:1000,
        touchRatio: 0
      });
      const pm02 =new Swiper(".pm02",{
        loop:true,
        speed:1000,
        touchRatio: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".sc_collection .swiper-button-next",
          prevEl: ".sc_collection .swiper-button-prev",
        },
      });
      const pm03 =new Swiper(".pm03",{
        loop:true,
        speed:1000,
        touchRatio: 0
      });
      
 $('.active .swiper-button-next').click(function(){
   pm01.slideNext()
   pm03.slideNext()
 })
 $('.active .swiper-button-prev').click(function(){
  pm01.slidePrev()
  pm03.slidePrev()

 })

//  technology slide

 const tech02 =new Swiper(".tech02",{
  loop:true,
  speed:1000,

});
const tech01 =new Swiper(".tech01",{
  loop:true,
  speed:1000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".sc_fragrance .swiper-button-next",
    prevEl: ".sc_fragrance .swiper-button-prev",
  },
});

$('.sc_fragrance .swiper-button-next').click(function(){
tech01.slideNext()
tech02.slideNext()
})
$('.sc_fragrance .swiper-button-prev').click(function(){
tech01.slidePrev()
tech02.slidePrev()

})
      const notice = new Swiper(".notice", {
        direction: "vertical",
       
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    
      });


$('.menu_btn').click(function(){
  $('.menu_btn_menu').toggleClass('on')
  $('.menu_btn_menu .menu_btn').toggleClass('on')
  $(body).toggleClass('hidden')
  $('header').toggleClass('on')
})
$('.menu_btn_menu .menu .gnb>li').click(function(){
  
  $(this).toggleClass('on')
  $(this).find('.sub_menu').slideToggle();

})

});


