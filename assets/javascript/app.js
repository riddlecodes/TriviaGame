

 $("#startClock").click( function(){
     setInterval(function() {
      counter--;
       if (counter >= 0) {
           span = document.getElementById("count");
           span.innerHTML = counter;
       }
       if (counter === 0) {
          alert('sorry, out of time');
           clearInterval(counter);
         }
      }, 1000);
 });

 function clearAnswers(){
    $("img").each(function(){
      $(this).remove();
    })
  }
  
  function markIncorrect(el){
    var newText = text("<p>wrong!</p>");

    el.append(newText);
  }
  
  function markCorrect(el){
    var img = new Image();
    img.src = 'http://www.littletherese.com/tick.jpg';
    el.append(img);
  }
  
  $("form").on("submit", function(e){
    e.preventDefault();
    clearAnswers();
  
    $questions = $(".question");
    $questions.each(function(){
      var answer = $(this).find("input:checked"),
          key = answer.attr("name"),
          val = answer.attr("value");
  
      if(answer.length === 0){
        markIncorrect($(this).find("p"));
      } else if (answers[key] !== val){
        markIncorrect($(this).find("p"));
      } else {
        markCorrect(answer.parent());
      }
    });
  });
  
  var answers = {
    "one": "b",
    "two": "d",
    "three": "b",
    "four": "a",
    "five": "d"
  }