var count = 60;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function () {

  $("#mid_game_container").hide();
  $("#end_container").hide();

  $("#startbutton").on("click", function () {

    $("#start_container").hide();
    $("#mid_game_container").show();

    startCountdown();
    return;

  });

  function countdown() {
    count--;
    $('#timer_number').html(count + " Seconds");
    $("#done_button").on("click", function () {
      count = 0;
      return;
    });

    if (count == -1) {
      timeUp();
      $("#mid_game_container").hide();
    }
  }

  function startCountdown() {
    setInterval(countdown, 1000);
  }
  function timeUp() {
    var Q1 = $('input:radio[name="q1"]:checked').val();
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();

    if (Q1 == undefined) {
      unansweredCount++;
    }
    else if (Q1 == "Ringo") {
      correctCount++;
    }
    else {
      wrongCount++;
    }

    if (Q2 == undefined) {
      unansweredCount++;
    }
    else if (Q2 == "The Ed Sullivan Show") {
      correctCount++;
    }
    else {
      wrongCount++;
    }

    if (Q3 == undefined) {
      unansweredCount++;
    }
    else if (Q3 == "All My Loving") {
      correctCount++;
    }
    else {
      wrongCount++;
    }

    if (Q4 == undefined) {
      unansweredCount++;
    }
    else if (Q4 == "$4") {
      correctCount++;
    }
    else {
      wrongCount++;
    }

    if (Q5 == undefined) {
      unansweredCount++;
    }
    else if (Q5 == "Pete Best") {
      correctCount++;
    }
    else {
      wrongCount++;
    }

    $('#correct_answers').html(correctCount);
    $('#wrong_answers').html(wrongCount);
    $('#unanswered').html(unansweredCount);
    $("#end_container").show();

  }
});