let choices = [
  'answer 1',
  'answer 2',
  'answer 3',
  'answer 4',
  'answer 5',
  'answer 6',
]

function getPrediction() {
  let predict = Math.floor(Math.random() * (choices.length));
  document.getElementById('answer').value = choices[predict];
}