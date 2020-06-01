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

  document.addEventListener('spase', switchModal);

  // document.addEventListener('click', function(event) {
  //   var e=document.getElementsByClassName('modal');
  //   if (!e.contains(event.target)) switchModal;
  // });
  
  

});
