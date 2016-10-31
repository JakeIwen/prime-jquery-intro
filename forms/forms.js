

$(document).ready(function() {
    var array = [];
    var totalSalaries = 0;
    var tableRow = 0;

    $('#tableInfo').on('click', "#deleteEntry", removeFromDom);

    $('#einfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#einfo').serializeArray();
      console.log(fields);
      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      console.log(values);

      // clear out inputs
      $('#einfo').find('input[type=text]').val('');

      // append to DOM
      tableRow++;
      totalSalaries += parseInt(values.eSalary);
      appendDom(values, totalSalaries, tableRow);
      console.log(totalSalaries);
    });

    //remove th table row containing the unique class of the clicked button
    function removeFromDom() {
      var thisClass = $(this).attr("class");
      $('tr.' + thisClass).remove();
    }

    function appendDom(empInfo, salaryTot, tableRow) {
      //$('#tableInfo').append('<tr class="person"></tr>');
      var $el = $('#tableInfo').children().last();
      $el.append(
      '<tr class="row' + tableRow + '"><td>' + empInfo.eFirstName + '</td>' +
      '<td>' + empInfo.eLastName + '</td>' +
      '<td>' + empInfo.eId + '</td>' +
      '<td>' + empInfo.eJob + '</td>' +
      '<td>' + empInfo.eSalary + '</td>' +
      '<td><button id="deleteEntry" class="row' + tableRow + '">Delete</button></td></tr>');

      $('#monthlySalary').remove();
      $('#salaryTitle').append('<span id="monthlySalary">' + ' $' + salaryTot/12 + '</span>');

    }


});
