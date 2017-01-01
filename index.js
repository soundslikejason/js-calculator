var operators = ['+', '-', '*', '/', '%', '.'];

$('#reset').click(function() {
  $('#display').text('');
});

$('#openParen').click(function() {
  noDuplicate();
  $('#display').text($('#display').text() + '(');
  charLimit();
});

$('#closedParen').click(function() {
  noDuplicate();
  $('#display').text($('#display').text() + ')');
  charLimit();
});

$('#divide').click(function() {
  noDuplicate();
  $('#display').text($('#display').text() + '/');
  charLimit();
});

$('#seven').click(function() {
  $('#display').text($('#display').text() + 7);
  charLimit();
});

$('#eight').click(function() {
  $('#display').text($('#display').text() + 8);
  charLimit();
});

$('#nine').click(function() {
  $('#display').text($('#display').text() + 9);
  charLimit();
});

$('#multiply').click(function() {
  noDuplicate();
  $('#display').text($('#display').text() + '*');
  charLimit();
});

$('#four').click(function() {
  $('#display').text($('#display').text() + 4);
  charLimit();
});

$('#five').click(function() {
  $('#display').text($('#display').text() + 5);
  charLimit();
});

$('#six').click(function() {
  $('#display').text($('#display').text() + 6);
  charLimit();
});

$('#minus').click(function() {
  noDuplicate();
  $('#display').text($('#display').text() + '-');
  charLimit();
});

$('#one').click(function() {
  $('#display').text($('#display').text() + 1);
  charLimit();
});

$('#two').click(function() {
  $('#display').text($('#display').text() + 2);
  charLimit();
});

$('#three').click(function() {
  $('#display').text($('#display').text() + 3);
  charLimit();
});

$('#plus').click(function() {
  noDuplicate();
  $('#display').text($('#display').text() + '+');
  charLimit();
});

$('#zero').click(function() {
  $('#display').text($('#display').text() + 0);
  charLimit();
});

$('#decimal').click(function() {
  noDuplicate();
  $('#display').text($('#display').text() + '.');
  charLimit();
});

$('#percent').click(function() {
  noDuplicate();
  $('#display').text(eval($('#display').text()));
  $('#display').text($('#display').text() + '/100');
  $('#display').text(eval($('#display').text()));
  charLimit();
});

$('#equals').click(function() {
  $('#display').text(eval($('#display').text()));
  charLimit();
});

function noDuplicate() {
  var lastOperator = $('#display').text().slice(-1);
  for (var i = 0; i < operators.length; i++) {
    if (operators[i] === lastOperator) {
      $('#display').text().slice(-1).text('');
    }
  }
}

function charLimit() {
  var txt = $('#display').text();
  if (txt.length > 17)
  $('#display').text(txt.substring(0, 17));
}
