function check() {
  alert("Seeing me");
  var variable = parseInt(
    document.querySelector('input[name = "variable"]:checked').value
  );
  var sub = parseInt(
    document.querySelector('input[name = "sub"]:checked').value
  );
  var con = parseInt(
    document.querySelector('input[name = "con"]:checked').value
  );
  var ifstate = parseInt(
    document.querySelector('input[name = "ifstate"]:checked').value
  );
  var data = parseInt(
    document.querySelector('input[name = "data"]:checked').value
  );
  var style = parseInt(
    document.querySelector('input[name = "style"]:checked').value
  );

  var sta = parseInt(
    document.querySelector('input[name = "sta"]:checked').value
  );

  var pro = parseInt(
    document.querySelector('input[name = "pro"]:checked').value
  );
  var page = parseInt(
    document.querySelector('input[name = "page"]:checked').value
  );
  var tax = parseInt(
    document.querySelector('input[name = "tax"]:checked').value
  );

  var result =
    variable + sub + con + ifstate + data + style + sta + pro + page + page;

  document.getElementById("marks").innerHTML = result;

  grading = [
    {
      score: 0
    },
    {
      score: 1
    },
    {
      score: 2
    },
    {
      score: 3
    },
    {
      score: 4
    },
    {
      score: 5
    },
    {
      score: 6
    },
    {
      score: 7
    },
    {
      score: 8
    },
    {
      score: 9
    },
    {
      score: 10
    }
  ];

  for (i = 0; i < grading.length; i++) {
    if (result == grading[i].score) {
      alert("your score is" + result);
    }
  }

  // return false;
}
$(document).ready(function() {
  $("#form1 form").submit(function(event) {
    // alert("ok");
    event.preventDefault();
    check();
  });
});

$(document).ready(function() {
  $("#button").click(function() {
    $("#form1").toggle();
    $("#marks").show();
  });
});

// $(document).ready(function() {
//   $("#marks").click(function() {
//     $("#marks").show();
//   });
// });

// $(document).ready(function() {
//   $("#button").click(function() {
//     $("#form1").toggle();
//   });
// });

// $(document).ready(function() {
//   $("#marks").click(function() {
//     $("#marks").show();
//   });
