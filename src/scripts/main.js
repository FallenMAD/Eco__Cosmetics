'use strict';

const items = document.querySelectorAll('.shop__item');
const shopCard = document.querySelectorAll('.shop__cards');
const allInput = document.querySelectorAll('.contacts__field', '.form-field');
const form = document.getElementById('form');

console.log(allInput)

allInput.forEach(input => {
  input.addEventListener('input', () => {
    input.style.borderColor = '#bdbdbd';

  if (input.value.length === 0) {
    input.style.borderColor = '#eb5757';
  } else {
    input.style.borderColor = '#344f10';
  }
  })
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let allFieldFilled = true;

  allInput.forEach(input => {
    if (input.value.length === 0) {
      input.style.borderColor = '#eb5757';
      allFieldFilled = false;
    } else {
      input.style.borderColor = '#344f10';
    }

  });

  if (allFieldFilled) {
    form.reset();
    allInput.forEach(input => {
      input.style.borderColor = '#bdbdbd'
    })
  }

  return false;
});

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    items.forEach(activeItem => {
      activeItem.classList.remove('shop__item--active');
    });
    item.classList.add('shop__item--active');

    shopCard.forEach(card => {
      card.classList.add('hidden');
    });

    shopCard[index].classList.remove('hidden');
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
