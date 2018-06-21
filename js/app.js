let model = {
  cats : [
    {
      name: "Nounou",
      count: 0,
    },
    {
      name: "Nani",
      count: 0,
    },
    {
      name: "Bella",
      count: 0,
    },
    {
      name: "Luna",
      count: 0,
    },
    {
      name: "Leo",
      count: 0,
    }
  ]
}

let octopus = {
  getCats: function() {
    return model.cats;
  }
}

let view = {
  init: function() {

  },

  renderList: function() {
    const catsContainer = document.querySelector('.catList ul')
    //let catLi = document.createElement('li');
    octopus.getCats().forEach(function(cat) {
      console.log(cat.name);
      catsContainer.innerHTML += `<li><a class="catLink" href="#">${cat.name}</a></li>`
      console.log(catsContainer);
    })
  },

  renderCat: function() {

  }
}

view.renderList();
