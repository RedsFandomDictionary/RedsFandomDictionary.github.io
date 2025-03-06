const selectedTropes = document.querySelectorAll('input[type="checkbox"]:checked');
const resultsText = document.getElementById("results-text");
const resultsBtn = document.getElementById("results-btn");

resultsBtn.addEventListener("click", updateScoreText(getScore()));

function updateScoreText(score){
resultsText.textContent = `You've scored ${score} out of !`
  
  /*if (score > 5){
  } else if (score > 4){
    
  } else if (score > 3){
    
  } else if (score > 2){
    
  } else{
    
  }*/
      
    
}


function getScore(){
  let score = 0;
  score += selectedTropes[3].value;
  /*for (i=0; i < selectedTropes.length; i++){
  score += selectedTropes[i].value; 
  }*/
  return score;
}
