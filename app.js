"use strict"

var beers = [];

function Beer(name, type, flavor, hoppy, lat, long) {
  this.name = name;
  this.img = name + '.jpg';
  this.type = type;
  this.flavor = flavor;
  this.hoppy = hoppy;
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
        beers[x] = new Beer(data[x].name, data[x].type, data[x].flavor, data[x].hoppy, data[x].lat, data[x].long);
      }
    }
  });

}) ()

var controller = {
  type: [],
  flavor: [],
  hoppy: false,

  helper: function() {
    var options = this.getPossibleOptions();
  },

  getPossibleOptions: function() {
    var options = [];
    for(var i=0; i<beers.length; i++){
      if(this.hoppy === beers[i].hoppy){
        options.push(beers[i]);
        for(var i=0; i<beers.length; i++){
          if(this.type.indexOf(beers[i].type) != -1){
            options.splice(beers[i]);
          }
          for(var i=0; i<beers.length; i++){
            if(this.flavor.indexOf(beers[i].flavor)) {
              options.splice(beers[i]);
            }
          }
        }
      }
    }
    return options;
  },

  getRandomBeer: function() {

  },

  drawRandomBeer: function(){}
}

var type = document.getElementById('type');

type.addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.selected){
    (controller.type).push(e.target.id)
  }  else { (controller.type).splice(e.target.id, 1); }

})

var flavor = document.getElementById('flavor');

flavor.addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.selected){
    (controller.flavor).push(e.target.id)
  }  else { (controller.flavor).splice(e.target.id, 1); }
})

var hoppy = document.getElementById('hoppy');

hoppy.addEventListener('click', function(e) {
  e.preventDefault();
  controller.hoppy = e.target.id;
})

var submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
  e.preventDefault()
  type.removeEventListener('click', function(){});
  flavor.removeEventListener('click', function(){});
  hoppy.removeEventListener('click', function(){});
  controller.helper();
})
