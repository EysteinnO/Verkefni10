
/*  Filtering, Sorting, Search (kafli 12)

JavaScript fylkjaaðferðir:

	Adding items:   push()			bæta við aftast (eitt eða fleiri items), skilar fjölda items í fylki
				 	unshift() 		bæta við fremst (eitt eða fleiri items), skilar lengd fylkis

	Removing items: pop()			fjarlægir síðasta element úr fylki, skilar element
					shift()			fjarlægir fremsta element úr fylki, skilar element


	Iterating:		forEach()		Keyrir fall einu sinni fyrir hvert element í fylki.*
					some()			Athugar ef einhver elem. í fylki uppfyllir skilyrði í falli.*
					every()			Athugar ef öll elem. í fylki uppfyllir skilyrði í falli.*

	Combining:    	concat()		Býr til nýtt fylki, með sameiningu gilda

	Filtering: 		filter()		Búr til nýtt fylki, með elem. sem uppfylla ákv. skilyrði í falli.*

	Reordering: 	sort()			Endurraðar items í fylki með falli (compare function)
					reverse()		Reverses order of items in array

	Modifying:		map()			Kallar á fall fyrir hvert elem. í fylki og býr til nýtt fylki með niðurstöðum

 Ath.   Item in array is sometimes called an element (pieces of info). stjörnumerkt (*) virkar bara í IE9+
 		ECMAScript 5 Shim, fyrir eldri vafra https: //github.com/es-shims/es5-shim  (sjá líka Modernizr.js)


jQuery aðferðir (filtering & sorting)

	Adding/combining items:     .add()			Adds elements to a set of matched elements.
	Removing items:   			.not()			Removes elements from a set of matched elements.
	Iterating: 					.each()			Applies same function to each element in matched set.
	Filtering: 		   			.filter()		Reduces number of elements in matched set to those that either match a selector or pass a test specified by a function
	Converting:  				.toArray()		Converts a jQuery collection to an array of DOM elements, enabling the use of the array methods.
*/



/*
Static Filtering

    Ferlið:
		1) DATA:  		Array of objects.
		2) FILTER:  	The data will be filtered using array methods, create new array with result..
		3) Template:   	Loop through new array with result/match and create template (html+data)
		4) Display:     Add to html page (render)

	Array object hefur tvær aðferðir til að filtera gögn:
		forEach()
		filter()

	Dæmi: Tvær lausnir: bls. 535 - 537
		1) Filter: Find the ones who charge between $65 and $90 per hour and then add those people to a new array called results.
		2) Once the new results array has been created, a for loop will go through it adding the people to an HTML table
*/
var people = [
    {
        name: 'Casey',
        rate: 60
    },
    {
        name: 'Camille',
        rate: 80
),
{
    name: ' Gordon',
        rate : 75
},
{
    name : 'Nigel',
        rate: 120
}
];

// Static Filtering of Data Using forEach()
// Sjá sýnidæmi: http://javascriptbook.com/code/c12/filter-foreach.html

// A new array is created to hold matching results, they are added to the results array using the push() method.
var results = [];                                // Array for people in range

// Apply the same function (nanflaust) to every item in array
people.forEach(function(person) {                		// For each item in array, run same function  (person represents object)
    if (person.rate >= 65 && person.rate <= 90) {  		// Is rate in range
        results.push(person);                        		// If yes add object to result array
    }
});
// Next: Create element and mix with result and render template (Display).


// Static Filtering of Data Using filter()
// http://javascriptbook.com/code/c12/filter-filter.html

var results = [];                              // Array for matching people
results = people.filter(priceRange);           // filter() notar callback á hvert item. calls priceRange(), if returns true add to array

// THE FUNCTION ACTS AS A FILTER
function priceRange(person) {                        		// person; item (object) in array
    return (person.rate >= 65) && (person.rate <= 90); 		// In range returns true
};



// Dynami filter, leyfa notendum að filtera innihald á vefsíðunni.
// Í stað þess að smíða/eyða (DOM Manipulation) öll html elements frá grunni (t.d. tafla) í hvert skipti sem notandi vill filtera einhver gögn (t.d. með slider), hægir á scriptinu
// Þá er betra að búa þetta til í smærri einingum (rows) og stýra með show/hide útfrá notandainput (filtering).
// Sýnidæmi: http://javascriptbook.com/code/c12/dynamic-filter.html

// 1) 	Create a table row for every person
// 2)	Show the rows for the people that are within the range, hide rows that are outside the range.

// Sjá Dynamic filtering sýnidæmi bls. 538 - 543

































