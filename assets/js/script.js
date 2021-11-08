$(document).ready(function () {
    //Getting current today
        var today = $("#currentDay");
        var timeNow = moment();
        timeNow = moment().format("dddd, MMM DD, YYYY");
        today.text(timeNow);  

        // save button data
        var save = $('.saveBtn');

        save.on("click", function () {
            var value = $(this).siblings('.description').val()
            var time = $(this).parent().attr('id')
            localStorage.setItem(time, value)
        
        });
    });