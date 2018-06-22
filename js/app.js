// ------------------- MODEL -------------------//

let model = {
  defaultCat: null,
  cats: [
    {
      name: "Nounou",
      count: 0,
      image: "images/Nounou.png"
    },
    {
      name: "Nani",
      count: 0,
      image: "images/Nani.png"
    },
    {
      name: "Bella",
      count: 0,
      image: "images/Bella.png"
    },
    {
      name: "Luna",
      count: 0,
      image: "images/Luna.png"
    },
    {
      name: "Leo",
      count: 0,
      image: "images/Leo.png"
    }
  ]
};


// ------------------- OCTOPUS -------------------//

let octopus = {
  init: function() {
    //Making the default cat the first in the list
    model.defaultCat = model.cats[0];

    // Initiate the views
    viewCat.init();
    viewList.init();
  },

  getDefaultCat: function() {
    return model.defaultCat;
  },

  getCats: function() {
    return model.cats;
  },

  setDefaultCat: function(cat) {
      model.defaultCat = cat;
  },

  updateCounter: function() {
    model.defaultCat.count++;
    viewCat.render();
  }
};


// ------------------- VIEWS -------------------//

let viewCat = {

  init: function() {

    //DOM elements
    this.selectedCat = document.querySelector('.selectedCat');
    this.catImage = document.querySelector('.catImage');
    this.catName = document.querySelector('.catName');
    this.catCounting = document.querySelector('.catCounting');

    // Increase the counter when image clicked
    this.catImage.addEventListener('click', function() {
      octopus.updateCounter();
    });

    this.render();
  },

  render: function() {
    // Update the DOM elements
    let defaultCat = octopus.getDefaultCat();
    this.catName.textContent = defaultCat.name;
    this.catImage.src = defaultCat.image;
    this.catCounting.textContent = defaultCat.count;
  }
};

let viewList = {

  init: function() {
    // DOM Elements
    this.catList = document.querySelector('.catList ul');

    this.render();
  },

  render: function() {
    let cat;
    let element;
    
    // Get the cats to render
    let cats = octopus.getCats();

    // Iterate over the cats
    for(let i = 0; i < cats.length; i++) {
      cat = cats[i];

      element = document.createElement('li');
      element.className = 'catLink';
      element.textContent = cat.name;

      element.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setDefaultCat(catCopy);
          viewCat.render();
        };
      })(cat));

      this.catList.appendChild(element);
    }
  }
};

octopus.init();
