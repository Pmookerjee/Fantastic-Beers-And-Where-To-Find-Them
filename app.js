"use strict"

var beers = [];

function Beer(name, type, flavor, hoppy, store, address, lat, long) {
  this.name = name;
  this.img = name + '.jpg';
  this.type = type;
  this.flavor = flavor;
  this.hoppy = hoppy;
  this.store = store;
  this.address = address;
  this.lat = lat;
  this.long = long;
}

(function() {

  $.ajax({
    url: 'beer_file.json',
    async: false,
    dataType: 'json',
    success: function(data) {
      for(var x in data) {
        beers[x] = new Beer(data[x].name, data[x].type, data[x].flavor, data[x].hoppy, data[x].store, data[x].address, data[x].lat, data[x].long);
      }
    }
  });

}) ()

var controller = {
  userType: '',
  userTypePic: '',
  userFlavor: '',
  userFlavorPic: '',
  userHoppy: '',
  userHoppyPic: '',
  chosenBeer: {},

  drawBeerType: function() {

    var type = document.getElementById('type');
    var parent = type.parentNode;
    parent.removeChild(type);
    var newUl = document.createElement('ul')
    newUl.setAttribute('id', 'newTypeUl');
    newUl.setAttribute('class', 'slot');
    parent.appendChild(newUl);
    // var titleLi = document.createElement('li');
    // titleLi.setAttribute('class', 'slot_title');
    // titleLi.innerHTML = 'TYPE';
    // var newLi = document.createElement('li');
    // newLi.setAttribute('class', 'slot_styling');
    // var content = (this.userType).toUpperCase();
    // var newTextNode = document.createTextNode(content);

    var newLi2 = document.createElement('li');
    newLi2.setAttribute('id', 'typeLi');
    var imgLi = document.createElement('img');
    imgLi.setAttribute('class', 'img_slot_styling');
    var imgSrc = this.userTypePic;
    imgLi.src = imgSrc;
    newLi2.appendChild(imgLi);
    // newLi.appendChild(newTextNode);
    // newUl.appendChild(titleLi);
    newUl.appendChild(newLi2);
    // newUl.appendChild(newLi);
    // document.getElementById('slot1').style.backgroundColor = "#e09a5e";
  },

  drawBeerFlavor: function() {

    var flavor = document.getElementById('flavor');
    var parent = flavor.parentNode;
    parent.removeChild(flavor);

    var newUl = document.createElement('ul')
    newUl.setAttribute('id', 'newUl');
    newUl.setAttribute('class', 'slot');
    parent.appendChild(newUl);

    // var titleLi = document.createElement('li');
    // titleLi.setAttribute('class', 'slot_title');
    // titleLi.innerHTML = 'FLAVOR';
    // var newLi = document.createElement('li');
    // newLi.setAttribute('class', 'slot_styling');
    // var content = (this.userFlavor).toUpperCase();
    // var newTextNode = document.createTextNode(content);

    var newLi2 = document.createElement('li');
    var imgLi = document.createElement('img');
    imgLi.setAttribute('class', 'img_slot_styling');
    var imgSrc = this.userFlavorPic;
    imgLi.src = imgSrc;
    newLi2.appendChild(imgLi);
    // newLi.appendChild(newTextNode);
    // newUl.appendChild(titleLi);
    newUl.appendChild(newLi2);
    // newUl.appendChild(newLi);
    // document.getElementById('slot2').style.backgroundColor = "#e2d35d";
  },

  drawBeerHoppy: function() {

      var hoppy = document.getElementById('hoppy');
      var parent = hoppy.parentNode;
      parent.removeChild(hoppy);
      var newUl = document.createElement('ul')
      newUl.setAttribute('id', 'newUl');
      newUl.setAttribute('class', 'slot');
      parent.appendChild(newUl);
      // var titleLi = document.createElement('li');
      // titleLi.setAttribute('class', 'slot_title');
      // titleLi.innerHTML = 'HOPPY?';
      // var newLi = document.createElement('li');
      // newLi.setAttribute('class', 'slot_styling');
      // var content = (this.userHoppy).toUpperCase();
      // var newTextNode = document.createTextNode(content);

      var newLi2 = document.createElement('li');
      var imgLi = document.createElement('img');
      imgLi.setAttribute('class', 'img_slot_styling');
      var imgSrc = this.userHoppyPic;
      imgLi.src = imgSrc;
      newLi2.appendChild(imgLi);
      newUl.appendChild(newLi2);
      // newLi.appendChild(newTextNode);
      // newUl.appendChild(titleLi);
      // newUl.appendChild(newLi);
      // document.getElementById('slot3').style.backgroundColor = "#8cb26b";
  },

  helper: function() {
    var options = this.getPossibleOptions();
    this.getRandomBeer(options);
    // this.drawRandomBeer();
    this.slotAnimation();
  },

  getPossibleOptions: function() {

     var optionsRound1 = [], optionsRound2 = [], optionsRound3 = [];

    for(var i=0; i<beers.length; i++){
      if(this.userHoppy === beers[i].hoppy){
        optionsRound1.push(beers[i]);
      }
    }

    for(var i=0; i<optionsRound1.length; i++){
      if(this.userType === optionsRound1[i].type){
        optionsRound2.push(optionsRound1[i]);
      }
    }

    for(var i=0; i<optionsRound2.length; i++){
      if(this.userFlavor === optionsRound2[i].flavor) {
        optionsRound3.push(optionsRound2[i]);
      }
    }
    return optionsRound3;
  },

  getRandomBeer: function(opts) {
    var i = Math.floor(Math.random() * opts.length)
    this.chosenBeer = opts[i];
  },

  drawRandomBeer: function(){
    console.log('Your beer is ' + this.chosenBeer.name);
  },

  slotAnimation: function() {
    var newUl = document.getElementById('newTypeUl');
    // var newUl = document.createElement('Ul');
    var newLi = document.getElementById('typeLi');
    var slot1_p = document.getElementById('p_type');


    slot1_p.setAttribute('class', 'swing');
    newLi.setAttribute('class', 'swing');
    // var parent = newLi.parentNode;
    // parent.removeChild(newLi);

      setTimeout( function() {

      newLi.innerHTML = '<img src= "assets/placeholder_beer.png">';
      newLi.setAttribute('class', 'placeholder_styling');
      // newLi.classList.remove('swing');
      // newUl.appendChild('newLi');
      newLi.classList.add('show');

    }, 1000)







    // var newLi = document.createElement('li');
    // var imgLi = document.createElement('img');
    // imgLi.setAttribute('class', 'img_slot_styling');
    // imgLi.src = 'assets/pitcher.jpeg';
    // newLi.appendChild(imgLi);
    // newUl.appendChild(newLi);
    // var newLi2 = document.createElement('li');
    // var imgLi = document.createElement('img');
    // imgLi.setAttribute('class', 'img_slot_styling');
    // imgLi.src = 'assets/pitcher.jpeg';
    // newLi2.appendChild(imgLi);
    // newLi2.setAttribute('class', 'show');
    // newUl.appendChild(newLi2);
  }
}



var type = document.getElementById('type');

type.addEventListener('click', function(e) {
  controller.userType = e.target.value;
  controller.userTypePic = 'assets/' + controller.userType + '.png';
  controller.drawBeerType();
})

var flavor = document.getElementById('flavor');

flavor.addEventListener('click', function(e) {
  controller.userFlavor = e.target.value;
  controller.userFlavorPic = 'assets/' + controller.userFlavor + '.png';
  controller.drawBeerFlavor();
})

var hoppy = document.getElementById('hoppy');

hoppy.addEventListener('click', function(e) {
  controller.userHoppy = e.target.value;
  controller.userHoppyPic = 'assets/' + controller.userHoppy + '.png';
  controller.drawBeerHoppy();
})


  var submit = document.getElementById('beer_button');

  submit.addEventListener('click', function(e){
    e.preventDefault();
    controller.helper();
    type.removeEventListener('click', function(){});
    flavor.removeEventListener('click', function(){});
    hoppy.removeEventListener('click', function(){});
  })
