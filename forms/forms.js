

$(document).ready(function() {
    var array = [];
    var totalSalaries = 0;
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
      totalSalaries += parseInt(values.eSalary);
      appendDom(values, totalSalaries);
      console.log(totalSalaries);
    });

    function appendDom(empInfo, salaryTot) {
      $('#tableInfo').append('<tr></tr>');
      var $el = $('#tableInfo').children().last();
      $el.append('<td>' + empInfo.eFirstName + '</td>');
      $el.append('<td>' + empInfo.eLastName + '</td>');
      $el.append('<td>' + empInfo.eId + '</td>');
      $el.append('<td>' + empInfo.eJob + '</td>');
      $el.append('<td>' + empInfo.eSalary + '</td>');

      $('#monthlySalary').remove();
      $('#salaryTitle').append('<span id="monthlySalary">' + ' $' + salaryTot/12 + '</span>');

    }


});
