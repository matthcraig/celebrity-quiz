$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
  const firstQuestion = parseInt($("#firstQuestion").val());
  const secondQuestion = parseInt($("#secondQuestion").val());
  const thirdQuestion = parseInt($("#thirdQuestion").val());
  const total = (firstQuestion + secondQuestion + thirdQuestion);

  if (total === 3) {
    $('.results').show();
  } else if ((total === 4) || (total < 8)) {
    $('.results2').show();
  } else if (total >= 8) {
    $('.results3').show();
  }
  });
});