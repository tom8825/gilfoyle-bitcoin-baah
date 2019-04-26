var oldValue;
var newValue;

$(document).ready(getValue());

function getValue() {
    $.ajax({
        url: "https://api.coindesk.com/v1/bpi/currentprice.json",
        cache: false,
        success: function (html) {
            var obj = $.parseJSON(html);
            var rate = obj.bpi.GBP.rate_float;
            newValue = rate;
            $("#results").html('<span>' + rate + '</span>');

            var audio = new Audio('baaah.wav');
            if (newValue !== oldValue) {
                if (newValue > oldValue) {
                    $("#results span").css('background', 'green')
                } else {
                    $("#results span").css('background', 'red')
                }
                oldValue = newValue;
                audio.play();
            }

            
        }
    });
}

window.setInterval(function () {
    getValue();
}, 5000);


