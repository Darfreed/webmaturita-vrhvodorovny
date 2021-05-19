$("#button").on("click", function () {
    var l,v;
    var g = $(":checked").val();
    var v0 = $("#rychlost").val();
    var v_jednotky = $("#rychlost_jednotky").val();
    var h = $("#vyska").val();
    if (v_jednotky == "kmh"){
        v0 = v0/3.6;
    }
    if(v0==0 || h==0){
        $("#vysledek").html("Nesmí být zadaná nula!");
        $("#vysledek").css({"background-color":"tomato","color":"red"});
        return;
    }
    l = (v0 * Math.sqrt(2*h/g)).toFixed(2);
    v = (Math.sqrt((2*g*h)+Math.pow(v0,2))).toFixed(2);
    console.log(l,v);
    $("#vysledek").css({"background-color":"turquoise","color":"teal"});
    $("#vysledek").html("Délka vodorovného vrhu = <b>"+ l +" m</b>, rychlost při dopadu = <b>"+ v +" m/s</b>");
});

$("#radio").on("click", function(){
    $("#g").html($(":checked").val());
});