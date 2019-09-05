$(".q_part__questions").on("click", function(){
  var answer = $(this).next();


  $(".q_part__answers").not(answer).slideUp(1000);
  answer.slideToggle(1000);
});

