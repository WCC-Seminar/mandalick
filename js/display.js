

var displayUpdateList = {
  "virtue": "game.virtue",
  "money": "game.money",

};


function displayTest(){
  document.querySelector("#virtue div.data-value").innerHTML=game.virtue;
  
};


function displayTestAlpha(){
  for(i in displayUpdateList){
    document.querySelector("#"+i+" div.data-value").innerHTML=eval(displayUpdateList[i]);
  }
};


function displayMain(){
  displayTest();
  };




