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
        //get current hour
        var hour = moment().format("k");
        for(let i = 9; i < 18; i++) {
            let saved = localStorage.getItem("hour-" + i);

            if (saved) {
                $(".hour-" + i).val(saved);
            }

            //color for each hour position in time

            // if hour is = to i then add the "present" class to the hour- variable with the matching "i"
            if (hour == i) {
                $(".hour-" + i).addClass("present");
            }
            // if hour is less than i then add the "future" class to the hour- variable with the matching "i"
            if (hour < i) {
                $(".hour-" + i).addClass("future");
            }
            // if hour is greater than i then add the "past" class to the hour- variable with the matching "i"
            if (hour > i) {
                $(".hour-" + i).addClass("past");
            }
        }
    });