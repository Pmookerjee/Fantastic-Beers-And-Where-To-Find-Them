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
          for(x in data) {
              beers[x] = new Beer(data[x].name, data[x].type, data[x].flavor, data[x].hoppy, data[x].lat, data[x].long);
          }
        }
  });

}) ()

var controller = {
  type: [],
  flavor: [],
  hoppy: false,

  getPossibleOptions: function() {
    var options = [];
    for(var i=0; i<beers.length; i++){
      if(beers[i].type === this.type)
        options.push(beers[i]);
        for(var i=0; i<beers.length; i++){
          if(this.flavor.indexOf(beers[i].flavor)) {
            options.splice(i);
          }
        }
    }

  },

  getRandomBeer: function() {

  }
}


var type = document.getElementById('type');

type.addEventListener('click', function(e) {
  e.preventDefault();
  (controller.type).push = e.target.id;
})

var flavor = document.getElementById('flavor');

flavor.addEventListener('click', function(e) {
  e.preventDefault();
  (controller.flavor).push = e.target.id;
})

var hoppy = document.getElementById('hoppy');

hoppy.addEventListener('click', function(e) {
  e.preventDefault();
  controller.hoppy = e.target.id;
})
