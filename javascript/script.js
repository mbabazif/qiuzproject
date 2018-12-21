document.getElementById("form1").onsubmit = function() {
  variable = parseInt(
    document.querySelector('input[name = "variable"]:checked').value
  );
  sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
  con = parseInt(document.querySelector('input[name = "con"]:checked').value);
  ifstate = parseInt(
    document.querySelector('input[name = "ifstate"]:checked').value
  );
  data = parseInt(document.querySelector('input[name = "data"]:checked').value);
  style = parseInt(
    document.querySelector('input[name = "style"]:checked').value
  );

  sta = parseInt(document.querySelector('input[name = "sta"]:checked').value);

  pro = parseInt(document.querySelector('input[name = "pro"]:checked').value);
  page = parseInt(document.querySelector('input[name = "page"]:checked').value);
  tax = parseInt(document.querySelector('input[name = "tax"]:checked').value);

  result =
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
      // result2 = grading[i].feedback + "<br /><img src='" + grading[i];
      // ("' width='300'  />");
    }
  }

  // document.getElementById("grade2").innerHTML = result2;

  return false; // required to not refresh the page; just leave this here
}; //this ends the submit function
