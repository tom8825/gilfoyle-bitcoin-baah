

function getValue(){
    $.ajax({
        url: "https://api.coindesk.com/v1/bpi/currentprice.json",
        cache: false,
        success: function(html){
          $("#results").append(html);
        }
      });
}
    