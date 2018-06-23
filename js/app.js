// ------------------- MODEL -------------------//

let model = {
  defaultCat: null,
  adminShow: false,
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
    viewAdmin.init();
    viewAdmin.hide();
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
  },

  adminDisplay: function() {
    if(model.adminShow === false) {
      model.adminShow = true;
      viewAdmin.show();
    } else if (model.adminShow === true) {
      model.adminShow = false;
      viewAdmin.hide();
    }
  },

  adminCancel: function() {
    viewAdmin.hide();
  },

  adminSave: function() {
    console.log(viewAdmin.adminName.value);
    model.defaultCat.name = viewAdmin.adminName.value;
    viewCat.render();
    viewList.render();
    viewAdmin.render();
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
    this.adminPanel = document.querySelector('.adminPanel');

    this.render();
  },

  render: function() {
    let cat;
    let element;

    // Get the cats to render
    let cats = octopus.getCats();

    this.catList.innerHTML = '';

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

let viewAdmin = {
  init: function() {
    this.adminName = document.querySelector('.adminName');
    this.adminPanel = document.querySelector('.adminPanel');

    this.adminBtn = document.querySelector('.adminBtn');
    this.saveBtn = document.querySelector('.saveBtn');
    this.cancelBtn = document.querySelector('.cancelBtn');

    this.adminBtn.addEventListener('click', function() {
      octopus.adminDisplay();
      console.log('hello');
    });

    this.cancelBtn.addEventListener('click', function() {
      octopus.adminCancel();
    });

    this.saveBtn.addEventListener('click', function() {
      octopus.adminSave();
    });

    this.render();
  },

  render: function() {
    let defaultCat = octopus.getDefaultCat();
    this.adminName.value = defaultCat.name;
  },

  show: function() {
    this.adminPanel.style.display = 'block';
  },

  hide: function() {
    this.adminPanel.style.display = 'none';
  }
};

octopus.init();
