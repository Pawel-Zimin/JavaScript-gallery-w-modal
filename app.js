const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img-container img');
const modalCaption = document.querySelector('.modal__img-caption');
const galleryImgs = document.querySelectorAll('.img-container img');

const modalOpener = (e) => {
   modalImg.src = e.target.getAttribute('data-original');
   modalCaption.textContent = e.target.alt;
   modal.classList.add('active');
}

const modalCloser = (e) => {
   if(e.target.classList.contains('modal')){
      modal.classList.remove('active');
      galleryImgs.forEach(img => {
         img.removeEventListener('click', modalOpener);
      });

      setTimeout(() => {
         modalImg.src = '';
         galleryImgs.forEach(img => {
            img.addEventListener('click', modalOpener);
         });
      }, 500);
   }
}

galleryImgs.forEach(img => {
   img.addEventListener('click', modalOpener);
});

modal.addEventListener('click', modalCloser);