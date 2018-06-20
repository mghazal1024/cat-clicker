catNames = ["Nounou", "Nani", "Mike", "Bella", "Luna"];

function Cat(name, count) {
  this.image = `images/${name}.png`;
  this.name = name;
  this.alt = name;
  this.count = count;
}

for (i = 0; i < catNames.length; i++) {
  window[`${catNames[i]}`] = new Cat(`${catNames[i]}`, 0);
}

const catList = document.querySelector('.catList ul');
const selectedCatContainer = document.querySelector('.selectedCat');
const catImage = document.querySelector('.catImage');
let catCounting = document.querySelector('.catCounting');
let clickCount = 0;
let catListContent;
let catListLink;


for(let cat of catNames) {
  catListContent = document.createElement('li');
  catListLink = document.createElement('a');
  catListLink.className = 'catLink';
  catListLink.setAttribute('href', '#');
  catListLink.textContent = `${cat}`;
  catListContent.appendChild(catListLink);
  catList.appendChild(catListContent);

  catListLink.addEventListener('click', function() {
    console.log(`This ${cat} was clicked`);
    catImage.setAttribute('src', `images/${cat}.png`);
    catImage.setAttribute('alt', `${cat}`);
  });
}

/*
catImage.addEventListener('click', function() {
  clickCount += 1;
  catCounting.textContent = clickCount;
})
*/

catImage.addEventListener('click', (function(clickCountCopy) {
  return function() {
    clickCountCopy += 1;
    catCounting.textContent = clickCountCopy;
  }
})(clickCount));
