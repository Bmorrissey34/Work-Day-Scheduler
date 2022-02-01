var moment = moment();

var currentDay = moment.format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentDay);

var currentHour = moment.hour();

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var text = $(this).parent().siblings().children('#form-1').val();
    var time = $(this).parent().parent().attr("id");
    localStorage.setItem(time, text);
  })
})

function changeColor() {
  $('.time-block').each(function () {
    var timeRow = parseInt($(this).attr("id").split("time")[1]);
    if (timeRow < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (timeRow === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}

function getData() {
  var time5 = $("#time5").children().closest('td').children('#form-1').val(localStorage.getItem("time5"));
  var time6 = $("#time6").children().closest('td').children('#form-1').val(localStorage.getItem("time6"));
  var time7 = $("#time7").children().closest('td').children('#form-1').val(localStorage.getItem("time7"));
  var time8 = $("#time8").children().closest('td').children('#form-1').val(localStorage.getItem("time8"));
  var time9 = $("#time9").children().closest('td').children('#form-1').val(localStorage.getItem("time9"));
  var time10 = $("#time10").children().closest('td').children('#form-1').val(localStorage.getItem("time10"));
  var time11 = $("#time11").children().closest('td').children('#form-1').val(localStorage.getItem("time11"));
  var time12 = $("#time12").children().closest('td').children('#form-1').val(localStorage.getItem("time12"));
  var time13 = $("#time13").children().closest('td').children('#form-1').val(localStorage.getItem("time13"));
  var time14 = $("#time14").children().closest('td').children('#form-1').val(localStorage.getItem("time14"));
  var time15 = $("#time15").children().closest('td').children('#form-1').val(localStorage.getItem("time15"));
  var time16 = $("#time16").children().closest('td').children('#form-1').val(localStorage.getItem("time16"));
  console.log(time5)
  var allTimes = [time5, time6, time7, time8, time9, time10, time11, time12, time13, time14, time15, time16];
  for (i = 0; i < allTimes.length; i++) {
    console.log(allTimes[i].val())
    $('.form-1').text(allTimes[i].val())
  }
}
changeColor();
getData();