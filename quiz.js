let selectedTropes = document.querySelectorAll('input[type="checkbox"]:checked');


function updateScoreText(){

}


function getScore(){
  let score = 0;
  for (i=0; i < selectedTropes.length; i++){
  score += selectedTropes[i].value; 
  }
  return score;
}
