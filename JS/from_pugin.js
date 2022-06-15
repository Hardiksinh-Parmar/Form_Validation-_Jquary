$(document).ready(function () {
  $("#form").validate(
    {
      rules:
      {
        'name1': {
          required: true,
          lettersonly: true,
          onlytext: true
        },
        'name2': {
          required: true,
          lettersonly: true
        },
        'Address1': {
          required: true,
          address: true
        },
        'Address2': {
          required: true,
          address: true
        },
        'city': {
          required: true,
        },
        "zipcode": {
          required: true,
          pin: true
        },
        'state': {
          required: true,
        },
        'phone': {
          required: true,
          minlength: 10
        },
        'email': {
          required: true,
          minlength: 10
        },
        'feedback': {
          required: true,
          lettersonly: true
        },
        'suggestion': {
          required: true,
        },
        'vehicle1': {
          required: true,

        },
        'gender': {
          required: true,
        }
      },
      errorPlacement: function (error, element) {
        if (element.is(":radio")) {
          error.appendTo('#radio');
        }
        else {
          error.insertAfter(element);
        }
      }
    }
  )
  $.validator.addMethod(
    "onlytext",
    function (value) {
      return /^[a-zA-Z]*$/.test(value);
    },
    "enter a valid input"
  );
  $.validator.addMethod(
    "address",
    function (value) {
      return /[a-zA-Z0-9]$/.test(value);
    },
    "enter valid address"
  );
  $.validator.addMethod(
    "pin",
    function (value) {
      return /[0-9]$/.test(value);
    },
    "enter valid zipcode"
  );
});  