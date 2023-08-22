let slideCounter = 1;

const slides = 3;

const btnWrapperDiv = document.getElementById('sliderButtons');
const currentSlideParagraph = document.querySelector('p[js-selector="currentSlide"]');

btnWrapperDiv.addEventListener('click', (e) => {
  const jsSelector = e.target.attributes['js-selector']?.value;
  switch (jsSelector) {
    case 'leftArrow':
      if (slideCounter > 1) {
        slideCounter = slideCounter - 1;
      }
      break;
    case 'rightArrow':
      if (slideCounter < slides) {
        slideCounter = slideCounter + 1;
      }
      break;
    default:
      break;
  }

  const finalCurrentValue = slideCounter < 10 ? '0' + slideCounter : '' + slideCounter;

  currentSlideParagraph.innerHTML = finalCurrentValue;
});