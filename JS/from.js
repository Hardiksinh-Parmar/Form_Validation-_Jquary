function fname_val() {
  let fname = $('#fname').val();
  let pattern = "[a-zA-Z]{2,30}$";
  if (!fname.match(pattern)) {
    let text;
    text = 'Name must contain alphabets and it required to fill';
    $('#OP1').text(text);
  }
}

function lname_val() {
  let lname = $('#lname').val();

  let pattern = "[a-zA-Z]{2,30}$";
  if (!lname.match(pattern)) {
    let text;
    text = 'Name must only contain alphabets and it required to fill';
    $('#OP2').text(text);
  }
}

function add_val() {
  let Address1 = $('#Address1').val();

  let pattern = "[a-zA-Z0-9]{3,600}$";
  if (!Address1.match(pattern)) {
    let text;
    text = 'enter a valid Address'
    $('#OP3').text(text);
  }
}

function add2_val() {
  let Address2 = $('#Address2').val();

  let pattern = "[a-zA-Z0-9]{3,600}$";
  if (!Address2.match(pattern)) {
    let text;
    // text = 'Name must only contain alphabets and its length should be between 2 and 30'
    text = 'enter a valid Address'
    $('#OPa').text(text);
  }
}

function city_val() {
  let city = $('#city').val();

  let pattern = "[a-zA-Z]{3,30}$";
  if (!city.match(pattern)) {
    let text;
    text = 'enter valid City name '
    $('#OP4').text(text);
  }
}

function state_val() {
  let state = $('#state').val();

  let pattern = "[a-zA-Z]{3,30}$";
  if (!state.match(pattern)) {
    let text;
    text = 'enter valid state name'
    $('#OP5').text(text);
  }
}

function zip_val() {
  let zipcode = $('#zipcode').val();

  let pattern = "^[0-9]{6}$";
  if (!zipcode.match(pattern)) {
    let text;
    text = "Zipcode must of length 6 and must be numbers";
    $('#OP6').text(text);
  }
}

function phone_val() {
  let phone = $('#phone').val();

  let pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";
  if (!phone.match(pattern)) {
    let text;
    text = "Enter number with given pattern and it's length is 10";
    $('#OP7').text(text);
  }
}

function email_val() {
  let email = $('#email').val();

  let pattern = "/(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
  if (!email.match(pattern)) {
    let text;
    text = "Invalid email must use valid email address";
    $('#OP8').text(text);
  }
}

function sugg_val() {
  let suggestion = $('#suggestion').val();
  // console.log("suggest is :" ,suggest, "length is :",suggest.length);

  if (suggestion.length < 3) {
    let text;
    text = "suggesions are also required for our satisfaction";
    $('#OP10').text(text);
  }
}

function feedback_val() {
  let feedback = $('#feedback').val();

  if (feedback.length < 3) {
    let text;
    text = "feed back is required for futher enhancement";
    $('#OP9').text(text);
  }
}

$(document).ready(function () {
  $('#fname').blur(function () {
    fname_val();
  });


  $('#lname').blur(function () {
    lname_val();
  });


  $('#Address1').blur(function () {
    add_val();
  });

  $('#Address2').blur(function () {
    add2_val();

  });

  $('#city').blur(function () {
    city_val();
  });

  $('#state').blur(function () {
    state_val();
  });

  $('#zipcode').blur(function () {
    zip_val();
  });

  $('#phone').blur(function () {
    phone_val();
  });

  $('#email').blur(function () {
    email_val();
  });

  $('#suggestion').blur(function () {
    sugg_val();
  });

  $('#feedback').blur(function () {
    feedback_val();
  });

  $('#submit').click(function () {
    event.preventDefault();

    let gender = $('input[name="gender"]');
    let checked = false;

    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        checked = true;
      }
      // console.log(gender[i]);
    }
    // console.log(checked);
    if (!checked) {
      // console.log("Hello");
      $('#OPr').text("You have to chedk atleast one value")
    }

    fname_val();
    lname_val();
    add_val();
    add2_val();
    city_val();
    state_val();
    zip_val();
    phone_val();
    email_val();
    sugg_val();
    feedback_val();
  });

});