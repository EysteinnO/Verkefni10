"use strict";
var jasonUrl = "http://apis.is/concerts";
$.getJSON(jasonUrl, function (data) {

    var concertEvents = [];
    var images;
    var text;
    var date;
    var where;
    console.log(data);

    for (let i = 0; i < data.results.length; i++) {
        concertEvents.push
        ({
            name: data.results[i].eventDateName,
            where: data.results[i].eventHallName,
            imageSrc: data.results[i].imageSource,
            when: data.results[i].dateOfShow
        });
    }

    //Lúppað öllum myndum út
    for (let i = 0; i < data.results.length; i++) {

        images = concertEvents[i].imageSrc;
        text = concertEvents[i].name;
        date = concertEvents[i].when;
        where = concertEvents[i].where;

        var imagesLocation = document.getElementsByTagName('img')[i];
        imagesLocation.setAttribute("src", images);

        var textLocation = document.getElementsByClassName('sugar')[i];
        textLocation.innerHTML = text;

        var textLocation2 = document.getElementsByClassName('daddy')[i];
        textLocation2.innerHTML = date;

        var textLocation3 = document.getElementsByClassName('gimme')[i];
        textLocation3.innerHTML = where;
    }


});


document.getElementById("everything").addEventListener("click", function () {

});

document.getElementById("country").addEventListener("click", function () {

});

//Date Filtering

var FromDate = document.getElementById('From').value;
var ToDate = document.getElementById('To').value;

document.getElementById("set").addEventListener("click", displayDate);

function displayDate() {
    for (var j = 0; j < data.results.length; j++) {
        date = concertEvents[j].when;

        if (date >= FromDate && date <= ToDate) {
            console.log(date);
        }

    }
}










