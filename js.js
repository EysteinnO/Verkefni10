"use strict";

//Livesearch bls 553 í bókinni

(function() {
    var $imgs = $('#gallery img');
    var $search = $('#filter-search');
    var cache = [];

    $imgs.each(function () {
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });
    });

    function filter() {
        var query = this.value.trim().toLowerCase();

        cache.forEach(function (img) {
            var index = 0;
            if (query) {
                index = img.text.indexOf(query);
            }

            img.element.style.display = index === -1 ? 'none' : '';
        });
    }

    if ('oninput' in $search[0]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter);
    }

}());

$.getJSON( "http://apis.is/concerts", function( data ) {

    var concertEvents = [];
    var images;
    var text;
    var date;
    var where;
    console.log(data);

    for(let i = 0; i<data.results.length; i++){
        concertEvents.push
        ({
            name:data.results[i].eventDateName,
            where:data.results[i].eventHallName,
            imageSrc:data.results[i].imageSource,
            when:data.results[i].dateOfShow
        });
    }

    //Lúppað öllum myndum út
    for(let i = 0; i<data.results.length; i++){

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






