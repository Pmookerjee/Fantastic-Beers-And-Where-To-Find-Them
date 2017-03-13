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
  userType:'',
  userFlavor: '',
  userHoppy: '',
  chosenBeer: {},

  helper: function() {
    var options = this.getPossibleOptions();
    this.getRandomBeer(options);
    this.drawRandomBeer();
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
  }
}

var type = document.getElementById('type');

type.addEventListener('click', function(e) {
  controller.userType = e.target.value;
  // if(e.target.selected){
  //   (controller.userType).push(e.target.id)
  // }  else { (controller.userType).splice(e.target.id, 1); }

})

var flavor = document.getElementById('flavor');

flavor.addEventListener('click', function(e) {
  controller.userFlavor = e.target.value;
  // if(e.target.selected){
  //   (controller.userFlavor).push(e.target.id)
  // }  else { (controller.userFlavor).splice(e.target.id, 1); }
})

var hoppy = document.getElementById('hoppy');

hoppy.addEventListener('click', function(e) {
  controller.userHoppy = e.target.value;
})


// if(controller.userHoppy && controller.userType && controller.userFlavor) {
  var submit = document.getElementById('submit');
  console.log("You are now in the submit event handler")

  submit.addEventListener('click', function(e){
    e.preventDefault();
    controller.helper();
    type.removeEventListener('click', function(){});
    flavor.removeEventListener('click', function(){});
    hoppy.removeEventListener('click', function(){});
  })
// }
