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
