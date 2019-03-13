function checkFirstName()
{
    var firstNameLength=$("#firstName").val().length;
    if(firstNameLength>=6 && firstNameLength<=15)
    {
        $("#firstNameError").text(" ");
    }
    else
    {
        $("#firstNameError").text("First name should be between 6 to 15 characters");
    }
}

$("#firstName").click(function ()
{
    checkFirstName();
});

$("#firstName").blur(function ()
{
    checkFirstName();
});

$("#firstName").keyup(function ()
{
    checkFirstName();
});

function checkLastName()
{
    var lastNameLength=$("#lastName").val().length;
    if(lastNameLength>=6 && lastNameLength<=15)
    {
        $("#lastNameError").text(" ");
    }
    else
    {
        $("#lastNameError").text("Last name should be between 6 to 15 characters");
    }
}

$("#lastName").click(function ()
{
    checkLastName();
});

$("#lastName").blur(function ()
{
    checkLastName();
});

$("#lastName").keyup(function ()
{
    checkLastName();
});

function checkEmailAddress()
{
    var pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if(pattern.test($("#emailAddress").val()))
    {
        $("#emailAddressError").text(" ");
    }
    else
    {
        $("#emailAddressError").text("Email address is invalid");
    }
}

function checkPassword()
{
    var passwordLength=$("#password").val().length;
    if(passwordLength>=6 && passwordLength<=15)
    {
        $("#passwordError").text(" ");
    }
    else
    {
        $("#passwordError").text("Password length should at least 8 characters");
    }
}

// $("#emailAddress").click(function ()
// {
//     checkEmailAddress();
// });

$("#emailAddress").blur(function ()
{
    checkEmailAddress();
});

$("#emailAddress").keyup(function ()
{
    checkEmailAddress();
});

function checkPassword()
{
    var passwordLength=$("#password").val().length;
    if(passwordLength>=6 && passwordLength<=15)
    {
        $("#passwordError").text(" ");
    }
    else
    {
        $("#passwordError").text("Password length should at least 6 characters");
    }
}

$("#password").click(function ()
{
    checkPassword();
});

$("#password").blur(function ()
{
    checkPassword();
});

$("#password").keyup(function ()
{
    checkPassword();
});

function checkConfirmPassword()
{
        var password=$("#password").val();
       var confirmPassword= $("#confirmPassword").val();
       if(password==confirmPassword)
    {
        $("#confirmPasswordError").text(" ");
    }
    else
    {
      $("#confirmPasswordError").text("Password does'nt match ");
    }

}

$("#confirmPassword").blur(function ()
{
    checkConfirmPassword();
});

$("#confirmPassword").keyup(function ()
{
    checkConfirmPassword();
});


$("#registrationForm").submit(function ()
{
    return true;
});
