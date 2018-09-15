// Remove the king from the list.
let newUl = document.querySelector('ul');
let newLi = document.querySelector('li');
newUl.removeChild(newLi);

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content.

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

planetData.forEach(element => {
  if (element.asteroid == true) {
    let newLiList = document.createElement('li');
    newLiList.className = element.category;
    newLiList.textContent = element.content;
    newUl.appendChild(newLiList);
  }
});
