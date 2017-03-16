"use strict"

var beers = [];

function Beer(name, img, type, flavor, hoppy, store, address, lat, long) {
  this.name = name;
  this.img = img;
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
        beers[x] = new Beer(data[x].name, data[x].img, data[x].type, data[x].flavor, data[x].hoppy, data[x].store, data[x].address, data[x].lat, data[x].long);
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

    var newLi2 = document.createElement('li');
    newLi2.setAttribute('id', 'typeLi');
    var imgLi = document.createElement('img');
    imgLi.setAttribute('class', 'img_slot_styling');
    var imgSrc = this.userTypePic;
    imgLi.src = imgSrc;
    newLi2.appendChild(imgLi);
    newUl.appendChild(newLi2);

  },

  drawBeerFlavor: function() {

    var flavor = document.getElementById('flavor');
    var parent = flavor.parentNode;
    parent.removeChild(flavor);

    var newUl = document.createElement('ul')
    newUl.setAttribute('id', 'newFlavorUl');
    newUl.setAttribute('class', 'slot');
    parent.appendChild(newUl);

    var newLi2 = document.createElement('li');
    newLi2.setAttribute('id', 'flavorLi');
    var imgLi = document.createElement('img');
    imgLi.setAttribute('class', 'img_slot_styling');
    var imgSrc = this.userFlavorPic;
    imgLi.src = imgSrc;
    newLi2.appendChild(imgLi);
    newUl.appendChild(newLi2);
  },

  drawBeerHoppy: function() {

    var hoppy = document.getElementById('hoppy');
    var parent = hoppy.parentNode;
    parent.removeChild(hoppy);
    var newUl = document.createElement('ul')
    newUl.setAttribute('id', 'newHoppyUl');
    newUl.setAttribute('class', 'slot');
    parent.appendChild(newUl);

    var newLi2 = document.createElement('li');
    newLi2.setAttribute('id', 'hoppyLi');
    var imgLi = document.createElement('img');
    imgLi.setAttribute('class', 'img_slot_styling');
    var imgSrc = this.userHoppyPic;
    imgLi.src = imgSrc;
    newLi2.appendChild(imgLi);
    newUl.appendChild(newLi2);

  },

  helper: function() {
    // debugger;
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
    var newLi = document.getElementById('typeLi');
    var slot1_p = document.getElementById('p_type');

    slot1_p.setAttribute('class', 'swing');
    newLi.setAttribute('class', 'swing');

    setTimeout( function() {

      newLi.innerHTML = '<img src= "assets/placeholder_beer.png">';
      newLi.setAttribute('class', 'placeholder_styling');
      // newLi.classList.remove('swing');
      // newUl.appendChild('newLi');
      newLi.classList.add('show');

    }, 500);

    var newUl3 = document.getElementById('newHoppyUl');
    var newLi3 = document.getElementById('hoppyLi');
    var slot3_p = document.getElementById('p_hoppy');

    setTimeout(function() {

<<<<<<< HEAD
      slot3_p.setAttribute('class', 'swing');
      newLi3.setAttribute('class', 'swing');
    }, 1000);

    setTimeout( function() {
=======
   //figure out why chosenBeer is undefined
>>>>>>> fa1fcb7997c2bc9e6b6768f0aa1d3a7eeedd091d

      newLi3.innerHTML = '<img src= "assets/placeholder_beer.png">';
      newLi3.setAttribute('class', 'placeholder_styling');
      newLi3.classList.add('show');

    }, 1500);

    var newUl2 = document.getElementById('newFlavorUl');
    var newLi2 = document.getElementById('flavorLi');
    var slot2_p = document.getElementById('p_flavor');

    setTimeout(function() {

      slot2_p.setAttribute('class', 'swing');
      newLi2.setAttribute('class', 'swing');
    }, 2000);

    setTimeout( function() {
      newLi2.innerHTML = '<img src= "assets/punkuccino.png">';

      // newLi2.innerHTML = '<img src= "assets/"' + this.chosenBeer.img + '>';
      newLi2.setAttribute('class', 'placeholder_styling');
      newLi2.classList.remove('swing');
      newLi2.classList.add('show_result');

    }, 2500);
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
