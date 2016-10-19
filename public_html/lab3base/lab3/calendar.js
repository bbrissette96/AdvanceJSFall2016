
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function () {

var d = new Date();
        var mth = d.getMonth() + 1;
        var yr = d.getFullYear();
        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar(mth, yr);
        $("#month,#year").change(function (e) {
showCalendar($("#month").val(), $("#year").val());
        });
        $("#yes").click(function (){
$('div.day').css("background-color", "green");
        });
        $("#no").click(function (){
$('div.day').css("background-color", "red");
});
});
       
//used for getting number of days in a month
        function daysInMonth(anyDateInMonth) {
        return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
                }


function showCalendar(mth, yr) {


var firstDayOfMonth = mth + "/1/" + yr;
        var d = new Date(firstDayOfMonth);
        var numberOfDaysInMonth = daysInMonth(d);
        var firstDayOfWeek = d.getDay();
        var total = firstDayOfWeek + numberOfDaysInMonth;
        /* this is where you'll generate the grid, for now I will just show first day of week */
        var count = 1;
        var grid = '<div class="row">';
        for (var j = 1; j <= total; j++)
{
if (j > firstDayOfWeek)
{
grid += '<div class="day">' + count + '</div>';
        count++;
} else
{
grid += '<div class="day"></div>';
}
if (j % 7 === 0)
{
grid += '</div><div class="row">';
}

}
grid += '</div>';
        var str = "<ul>";
        str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
        str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";
        str += "</ul>";
        $("#results").html(grid);
        $("div.day").click(function () {
var color = $(this).css("background-color");
        console.log(color);
        if (color === 'rgba(0, 0, 0, 0)' || color === 'rgb(255, 255, 255)') {
$(this).css("background-color", "green");
}
if (color === 'rgb(0, 128, 0)'){
$(this).css("background-color", "red");
}
if (color === 'rgb(255, 0, 0)'){
$(this).css("background-color", "white");
}
});




}

