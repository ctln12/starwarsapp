const items = document.querySelectorAll('.name');

items.forEach((item) => {
  const id = item.innerText.replace(/\W/g,'-');
  item.addEventListener('click', (event) => {
    if (document.querySelector(`#${id}.details`).classList.contains('no-display')) {
      document.querySelector(`#${id}.details`).classList.remove('no-display');
    } else {
      document.querySelector(`#${id}.details`).classList.add('no-display');
    }
  })
});
