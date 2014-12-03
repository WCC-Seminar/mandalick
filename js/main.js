window.addEventListener('load', main);

function main(){
  init();
  activate();
}

function init(){
  for (var key in peoples){
    if (peoples.hasOwnProperty(key)){
      var people = peoples[key];
      peopleSetUp(people);
    }
  }
}

function activate(){
  setInterval(mainStep,1000);
}

function peopleSetUp(p){
  setTitles.people(p);
}

var setTitles = {
  people : function(p){
    var elm = document.getElementById(p.id);
    elm.title = p.description;
  }
};

