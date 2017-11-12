// Sjá kafla 12, bls. 538 - 543
(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people = [
    {                                              // Each person is an object
      name: 'Casey',                               // It holds name and rate
      rate: 60
    },
    {
      name: 'Camille',
      rate: 80
    },
    {
      name: 'Gordon',
      rate: 75
    },
    {
      name: 'Nigel',
      rate: 120
    }
  ];
  // four global variables are created as they are used throughout the script:
      var rows = [],                    // rows array, holds the cross-referencing array 
      $min = $('#value-min'),           // Minimum text input, holds the input to show the minimum rate
      $max = $('#value-max'),           // Maximum text input, holds the input to show the maximum rate
      $table = $('#rates');             // The table that shows results

  // For each person, a new jQuery object called $row is created containing a <tr> element.
  // The person's name and rate are added in <td>s.
  function makeRows() {                 
    people.forEach(function(person) {   // For each person object in people (current object)
      var $row = $('<tr></tr>');        // Create a row for them
      $row.append( $('<td></td>').text(person.name) ); // Add their name,   .append() insert to the end of each element in the set of matched elements.
      $row.append( $('<td></td>').text(person.rate) ); // Add their rate
      
      // A new object with two properties is added to the rows array
      // Create rows array which links people objects to table rows
      rows.push({                       
        person: person,                 // Reference to the person object, ekki copy
        $element: $row                  // Reference to row as jQuery selection
      });
    });

    // sjáum hvað er komið í rows array í console
    console.log(rows);
    /* 
    rows = [
        {                                             
          person: person,                              
          $element: $row 
        } 
    ]
    */
  }
    

  // Búum til <tbody> og setjum rows í table í html
  function appendRows() {               // Adds rows to the table
    var $tbody = $('<tbody></tbody>');  // Create <tbody> element
    rows.forEach(function(row) {        // For each object in the rows array
      $tbody.append(row.$element);      // Add the HTML for the row
    });
    $table.append($tbody);              // Add the rows to the table, $table er DOM vísun.
  }

  // Update the table content
  // Goes through each of the objects in the rows array and checks if the rate that the person charges 
  // is more than the minimum and less than the maximum rate shown on the slider.
  function update(min, max) {           
    rows.forEach(function(row) {        
      if (row.person.rate >= min && row.person.rate <= max) { // If in range
        row.$element.show();            // Show the row  (breytir í css display:none eða table-row). table-row lets the element behave like a <tr> element
      } else {                          // Otherwise
        row.$element.hide();            // Hide the row
      }
    });
  }

  // Start
  function init() {
    // Set up the slide control                     
    $('#slider').noUiSlider({           
      range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,
      serialization: {to: [$min, $max],resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });        // change event kallar á update() , val() les úr input reit,  ( change() er shorthand fyrir  .on( "change", handler ) )

    makeRows();                           // Create table rows and rows array
    

    appendRows();                         // Add the rows to the table
    update($min.val(), $max.val());       // Update table to show matches, upphafstaða
  }

  $(init);                                // Call init() when DOM is ready, $(function) is short for $(document).ready(function)
}());