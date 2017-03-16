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
    newUl.setAttribute('class', 'slot3');
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

    var options = this.getPossibleOptions();
    var chosenBeer = this.getRandomBeer(options);
    // this.drawRandomBeer();
    this.slotAnimation(chosenBeer, function() {
       //code for playAgain()
       var button = document.getElementById('beer_button');
       var parent = button.parentNode;
       parent.removeChild(button);
       var newButton = document.createElement('input');
       newButton.type = 'submit';
       newButton.id = 'playAgain_button';
       newButton.value = '';
       parent.appendChild(newButton);
    });

      var reset = document.getElementById('playAgain_button');

      reset.addEventListener('click', function(e){
      e.preventDefault();
      location.reload();
      reset.removeEventListener('click', function(){});
    })
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
    return opts[i];

  },

  drawRandomBeer: function(){
    console.log('Your beer is ' + this.chosenBeer.name);
  },

  slotAnimation: function(chosenBeer, complete) {

    // Slot 1 fade out
 //
 var newUl   = document.getElementById('newTypeUl');
 var newLi   = document.getElementById('typeLi');
 var slot1_p = document.getElementById('p_type');

 slot1_p.setAttribute('class', 'swing');
 newLi.setAttribute('class', 'swing');

 // Slot 2 fade out
 //
 var newUl2 = document.getElementById('newFlavorUl');
 var newLi2  = document.getElementById('flavorLi');
 var slot2_p = document.getElementById('p_flavor');

 // Slot 3 fade out
 //
 var newUl3  = document.getElementById('newHoppyUl');
 var newLi3  = document.getElementById('hoppyLi');
 var slot3_p = document.getElementById('p_hoppy');

 var time0 = 1000;
 var time1 = 1800;
 var time2 = 2300;
 var time3 = 2500;
 var time4 = 3000;
 var time5 = 5000;

 // Slot 1 fade in with beer placeholder
 //
 setTimeout( function() {

     newLi.classList.add('show');
     newLi.innerHTML = '<img class="placeholder_styling" src= "assets/placeholder_beer.png">';

     // ok, we are done, now lets move to the second event
     //
     setTimeout(function() {

         slot3_p.setAttribute('class', 'swing');
         newLi3.setAttribute('class', 'swing');

         // ok, we are done, lets go to event 3
         // Slot 3 fade in with beer placeholder
         //
         setTimeout( function() {

             newLi3.classList.add('show');
             newLi3.innerHTML = '<img class="placeholder_styling" src= "assets/placeholder_beer.png">';

             setTimeout(function() {

                 slot2_p.setAttribute('class', 'swing');
                 newLi2.setAttribute('class', 'swing');

                 // Slot 2 fade in with beer RESULT
                 //
                 setTimeout( function() {

                     slot2_p.classList.add('show_result');

                     // Check if there's a match... if not, display struck out msg
                     //
                     if(!chosenBeer) {
                         var imgPath = 'assets/no_luck.png';
                         var imgId   = 'dummy';
                         slot2_p.innerHTML = "You've struck out!";
                         slot2_p.classList.add('blink');

                         // If match, display beer photo and name
                         //
                     }
                     else {
                         var imgPath = 'assets/' + chosenBeer.img;
                         var imgId   = 'beer_result_img';
                         slot2_p.classList.add('blink');
                         slot2_p.innerHTML = chosenBeer.name;
                     }

                     newLi2.classList.remove('swing');
                     newLi2.classList.add('results_styling');
                     newLi2.classList.add('show_result');
                     newLi2.innerHTML = '<img id=' + imgId + ' class="results_styling" src=' + imgPath + '>';

                     // make the beer result glow with background so img doesn't look 'flattened'
                     //
                     $("#beer_result_img").glow({ radius: "14", color:"gold"});

                     // we are finally done, leave now
                        //
                        setTimeout( function() {
                            complete();
                        }, time5-time4);
                 }, time4-time3);
             }, time3-time2);
         }, time2-time1);
     }, time1-time0);
 }, time0);
},

  //   //Slot 1 fade out
  //   var newUl = document.getElementById('newTypeUl');
  //   var newLi = document.getElementById('typeLi');
  //   var slot1_p = document.getElementById('p_type');
  //
  //   slot1_p.setAttribute('class', 'swing');
  //   newLi.setAttribute('class', 'swing');
  //
  //   //Slot 1 fade in with beer placeholder
  //   setTimeout( function() {
  //
  //     newLi.classList.add('show');
  //     newLi.innerHTML = '<img class="placeholder_styling" src= "assets/placeholder_beer.png">';
  //
  //   }, 1000);
  //
  //   //Slot 3 fade out
  //   var newUl3 = document.getElementById('newHoppyUl');
  //   var newLi3 = document.getElementById('hoppyLi');
  //   var slot3_p = document.getElementById('p_hoppy');
  //
  //
  //   setTimeout(function() {
  //
  //     slot3_p.setAttribute('class', 'swing');
  //     newLi3.setAttribute('class', 'swing');
  //   }, 1800);
  //
  //   //Slot 3 fade in with beer placeholder
  //   setTimeout( function() {
  //
  //     newLi3.classList.add('show');
  //     newLi3.innerHTML = '<img class="placeholder_styling" src= "assets/placeholder_beer.png">';
  //
  //   }, 2300);
  //
  //   //Slot 2 fade out
  //   var newUl2 = document.getElementById('newFlavorUl');
  //   var newLi2 = document.getElementById('flavorLi');
  //   var slot2_p = document.getElementById('p_flavor');
  //
  //   setTimeout(function() {
  //
  //     slot2_p.setAttribute('class', 'swing');
  //     newLi2.setAttribute('class', 'swing');
  //   }, 2500);
  //
  //   //Slot 2 fade in with beer RESULT
  //   setTimeout( function() {
  //
  //     slot2_p.classList.add('show_result');
  //
  //     //Check if there's a match... if not, display struck out msg
  //     if(!chosenBeer){
  //       var imgPath = 'assets/no_luck.png';
  //       var imgId = 'dummy';
  //       slot2_p.innerHTML = "You've struck out!";
  //       slot2_p.classList.add('blink');
  //
  //     //If match, display beer photo and name
  //     } else {
  //       var imgPath = 'assets/' + chosenBeer.img;
  //       var imgId = 'beer_result_img';
  //       slot2_p.classList.add('blink');
  //       slot2_p.innerHTML = chosenBeer.name;
  //     }
  //
  //     newLi2.classList.remove('swing');
  //     newLi2.classList.add('results_styling');
  //     newLi2.classList.add('show_result');
  //     newLi2.innerHTML = '<img id=' + imgId + ' class="results_styling" src=' + imgPath + '>';
  //     //make the beer result glow with background so img doesn't look 'flattened'
  //     $("#beer_result_img").glow({ radius: "14", color:"gold"});
  //
  //   }, 3000);
  // },

  playAgain: function() {

    var button = document.getElementById('beer_button');
    var parent = button.parentNode;
    parent.removeChild(button);
    var newButton = document.createElement('input');
    newButton.type = 'submit';
    newButton.id = 'playAgain_button';
    newButton.value = '';
    parent.appendChild(newButton);
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
