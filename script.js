document.querySelector('.js-owl').addEventListener('click', () => {
  showDetails('owl');
});

document.querySelector('.js-salmon').addEventListener('click', () => {
  showDetails('salmon');
});

document.querySelector('.js-tarantula').addEventListener('click', () => {
  showDetails('tarantula');
});

function showDetails(animalClass) {
  const animal = document.querySelector(`.${animalClass}`);
  const animalType = animal.getAttribute('data-animal-set');
  alert(`The ${animal.innerHTML} is a ${animalType}.`);
}