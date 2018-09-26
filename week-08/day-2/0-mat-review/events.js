const click = document.querySelector('.click');
const hover = document.querySelector('.hover');
const leave = document.querySelector('.leave');
const key = document.querySelector('.key');
const bubbling = document.querySelector('.bubbling');

const blur = document.querySelector('.blur');
const change = document.querySelector('.change');
const focus = document.querySelector('.focus');
const select = document.querySelector('.select');

const form = document.querySelector('form');

const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

const callback = (event) => {
  event.target.style.backgroundColor = getRandomColor();
}

// 1.
click.addEventListener('click', callback);
hover.addEventListener('mouseenter', callback);
leave.addEventListener('mouseleave', callback);

blur.addEventListener('blur', callback);
change.addEventListener('change', callback);
focus.addEventListener('focus', callback);
select.addEventListener('select', callback);

// 2.
click.onclick = callback;
hover.onmouseenter = callback;

// 3.
// click.addEventListener('mouseenter', (event) => {
//   click.style.backgroundColor = getRandomColor()
// });
// hover.addEventListener('mouseenter', (event) => {
//   hover.style.backgroundColor = getRandomColor()
// });


// az egész oldalra vinatkozik:
document.addEventListener('keydown', (event) => {
  key.innerHTML = 'Keycode: ${event.keyCode}'
})

// BUBBLING:
bubbling.addEventListener('click', (event) => {
  // dataset.cica == .html-ben data-cica
  if (event.target.dataset.cica === 'one') {
    console.log(event.target.innerHTML);
  } else if (event.target.dataset.cica === 'two') {
    console.log(event.target.innerHTML);
  }
});

// FORM
// form legfontosabb eventje a submit
let obj = {};
form.addEventListener('submit', (event) => {
  // nem akarom, h átírányítson máshova =>
  event.preventDefault();

  // 1.
  const { blur, change, focus, select } = event.target.elements; menőzés
  obj = {
    blur: blur.value,
    change: change.value,
    focus: focus.value,
    select: select.value,
  }
  // 2.
  // obj = {
  //   blur: event.target.elements.blur.value,
  //   change: event.target.elements.change.value,
  //   focus: event.target.elements.focus.value,
  //   select: event.target.elements.select.value,
  // }

  console.log(obj);
});


//ha ki akarom torolni
click.removeEventListener('click', callback);
