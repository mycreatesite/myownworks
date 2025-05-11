const body = document.body;
const sectionLoading = document.getElementById('sectionLoading');
const sectionDecoration = document.getElementById('sectionDecoration');
const sectionContent = document.getElementById('sectionContent');
const timeDifferenceItem = document.querySelectorAll('.js-timeDifferenceItem');
const loadingLogoLabel = document.querySelector('#sectionLoading .logo .label');

loadingLogoLabel.addEventListener('animationend', () => {
   body.classList.remove('is-fixed');
   sectionLoading.classList.add('is-deactive');
   sectionDecoration.classList.add('is-active');
});

sectionLoading.addEventListener('transitionend', () => {
   const delay = 200;
   sectionContent.classList.add('is-active');
   timeDifferenceItem.forEach((item, i) => {
      setTimeout(() => {
         item.classList.add('is-active');
      }, delay * i);
   });
   sectionLoading.remove();
})