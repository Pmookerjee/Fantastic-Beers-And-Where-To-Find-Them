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
  options: [],
  chosenBeer: {},

  helper: function() {
    var options = this.getPossibleOptions();
    this.getRandomBeer(options);
    this.drawRandomBeer;
  },

  getPossibleOptions: function() {
    //  debugger;
     var option_length = 0;
    for(var i=0; i<beers.length; i++){
      if(this.userHoppy === beers[i].hoppy){
        this.options.push(beers[i]);
        option_length = this.options.length;
      }
    }
    for(var i=0; i<this.options.length; i++){
      if(this.userType !== this.options[i].type){
        this.options.splice(options[i]);
      }
    }
    for(var i=0; i<beers.length; i++){
      if(this.userFlavor !== this.options[i].flavor) {
        this.options.splice(options[i]);
      }
    }
    return this.options;
  },

  getRandomBeer: function(opts) {
    var i = Math.floor(Math.random() * opts.length)
    this.chosenBeer = opts[i];
  },

  drawRandomBeer: function(){
    console.log('Your beer is ' + chosenBeer.name);
  }
}

var type = document.getElementById('type');

type.addEventListener('click', function(e) {
  e.preventDefault();
  controller.userType = e.target.id;
  // if(e.target.selected){
  //   (controller.userType).push(e.target.id)
  // }  else { (controller.userType).splice(e.target.id, 1); }

})

var flavor = document.getElementById('flavor');

flavor.addEventListener('click', function(e) {
  e.preventDefault();
  controller.userFlavor = e.target.id;
  // if(e.target.selected){
  //   (controller.userFlavor).push(e.target.id)
  // }  else { (controller.userFlavor).splice(e.target.id, 1); }
})

var hoppy = document.getElementById('hoppy');

hoppy.addEventListener('click', function(e) {
  e.preventDefault();
  controller.userHoppy = e.target.id;
})

// if(controller.userHoppy && controller.userType && controller.userHoppy) {
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
