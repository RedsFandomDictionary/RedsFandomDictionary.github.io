let selectedTropes;
const resultsText = document.getElementById("results-text");
const resultsBtn = document.getElementById("results-btn");
const quipText = document.getElementById("quip-text");

function updateScoreText(score){
  resultsText.style.display = "block";
  quipText.style.display = "block";
  resultsText.textContent = `You've scored ${score} out of 245!`;

  if (score > 230){
    quipText.textContent = "Wow! Your taste is fucked up! (affectionate and understanding <3)";
  } else if (score > 200){
    quipText.textContent = "Your poor blorbos <3 They need a break (after some more pain).";
  } else if (score > 170){
    quipText.textContent = "You've got quite the intense taste! You'll probably read almost anything!";
  } else if (score > 140){
    quipText.textContent = "Ouchie! Your taste is pretty dark!";
  } else if (score > 100){
    quipText.textContent = "Oh you love pain too! How wonderful!!"
  } else if (score > 80){
    quipText.textContent = "You lean on the painful side. Very nice!";
  } else if (score > 50){
    quipText.textContent = "A very average score. Respectable.";
  } else if (score > 30){
    quipText.textContent = "You like angst but it's probably not your top genre.";
  } else if (score > 20){
    quipText.textContent = "Ehhh you probably read mostly fluff or smut or something.";
  } else {
    quipText.textContent = "Do you even know what angst is?";
  }
    
  }
      
    

function calculateScore(){
  selectedTropes = document.querySelectorAll("input:checked");
  let score = 0;
  for (i = 0; i < selectedTropes.length; i++){
    score += Number(selectedTropes[i].value);
  }
  return score;
}
