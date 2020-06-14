/*
document.addEventListener("DOMContentLoaded", function(event){
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');  
  const switchModal = () => {
    modal.classList.toggle('modal--visible')
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    };
  };
  document.addEventListener('keydown', (event) => { 
      if (event.code == 'Escape') {      
      modal.classList.toggle('modal--visible');
    };
  });

  

  

  // document.addEventListener('click', function(event) {
  //   var e=document.getElementsByClassName('modal');
  //   if (!e.contains(event.target)) switchModal;
  // });
  
  

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $('').click(function(){
    modal.toggleClass('modal--visible');
  });

  $(window).on('click', function (e) {
    if (modal.is(e.target)) {
      modal.toggleClass('modal--visible');
    };
  });

  $(document).on('keydown', function (e) {
    if (code = 'Escape' && modal.hasClass('modal--visible')) {       
      modal.toggleClass('modal--visible');                              
    };    
  });

  // $(document).keyup(function(e) {
  //   console.log(e);
  // });


  
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 1   
    
  });

  

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets =$('.swiper-pagination')

  next.css('left', prev.width() + 25 + bullets.width() + 10 )
  bullets.css('left', prev.width() + 25 )

  new WOW().init();

  var button = $('#button-up');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function(){
    $('body, html').animate({
    scrollTop: 0
    }, 800);
    return false;
  }); 
  
  

});


