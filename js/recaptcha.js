$("form").submit(function (event) 
{
    var recaptcha = $("#g-recaptcha-response").val();
    if (recaptcha === "") 
    {
        event.preventDefault();
        alert("Please check the reCAPTCHA");
        $("form > .box > p").css("visibility", "visible");
    }
    else 
    {
        $("form > .box > p").css("visibility", "hidden");
    }
});

function recaptcha_callback() 
{
    $("form > .box > p").css("visibility", "hidden");
}


//-------------FOR INVISIBLE BADGE RECAPTCHA ON HOME-------------------------
var widgetId1;

//Creates the invisible recaptcha badge
var onloadCallback = function () 
{
    // const sitekey = process.env.RECAPTCHA_SITEKEY;
    // console.log(sitekey);
    // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
    widgetId1 = grecaptcha.render('g-recaptchaBadge', {
        'sitekey': '6LezxFoeAAAAAGSNtAyeLUJl6FASav11eDYPK3Aq',
        'theme': 'light',
        'size': 'invisible',
        'badge': 'bottomright'
    });
};


