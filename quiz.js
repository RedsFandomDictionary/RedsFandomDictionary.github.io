const selectedTropes = document.querySelectorAll(".trope");
const resultsText = document.getElementById("results-text");
const resultsBtn = document.getElementById("results-btn");

console.log(selectedTropes[2].value);

resultsBtn.addEventListener("click", updateScoreText());

function updateScoreText(){
  let score = 0;
  score += selectedTropes[2].value;
  resultsText.textContent = `You've scored ${score} out of !`
  
  /*if (score > 5){
  } else if (score > 4){
    
  } else if (score > 3){
    
  } else if (score > 2){
    
  } else{
    
  }*/
      
    
}


/*function getScore(){
  
  for (i=0; i < selectedTropes.length; i++){
  score += selectedTropes[i].value; 
  }
  return score;*/
}
