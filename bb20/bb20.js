$(document).ready(function(){
    /* global $*/
    $("#rules").click(function(){
        $("#rulesDiv").slideToggle();
    });
    
    var christian = 0;
    var kristy = 0;
    var kia = 0;
    var mom = 0;
    
    var faysal = 0;
    var jc = 0;
    var bayleigh = 0;
    var steve = 0;
    var tyler = 0;
    var rachel = 0;
    var scottie = 0;
    var rockstar = 0;
    var winston = 0;
    var brett = 0;
    var angela = 0;
    var sam = 0;
    var swaggyc = 0;
    var kaycee = 0;
    var haleigh = 0;
    var kaitlyn = 0;
    
    $("#chart td.hoh").text("5");
    $("#chart td.nom").text("-1");
    $("#chart td.pov").text("3");
    $("#chart td.hn").text("-0.5");
    $("#chart td.hoh-pov").text("8");
    $("#chart td.nom-pov").text("2");
    $("#chart td.nom-vetoed").text("0");
    $("#chart td.nom-pov-vetoed").text("3");
    $("#chart td.hn-nom").text("-1.5");
    $("#chart td.hn-pov").text("2.5");
    $("#chart td.hn-nom-pov").text("1.5");
    $("#chart td.hn-nom-vetoed").text("-0.5");
    $("#chart td.hn-nom-pov-vetoed").text("2.5");
    $("#chart td.nom-evicted-pj").text("-4");
    $("#chart td.hn-nom-evicted-pj").text("-4.5");
    $("#chart td.nom-evicted-j").text("-3");
    $("#chart td.hn-nom-evicted-j").text("-3.5");
    $("#chart td.runner-up").text("15");
    $("#chart td.winner").text("30");
    $("#chart td.expelled").text("-5");
    $("#chart td.dot").text("4");
    $("#chart td.rk").text("4");
    $("#chart td.nom-rk").text("3");
    $("#chart td.rk-nom").text("3");
    $("#chart td.rk-nom-evicted-pj").text("0");
    $("#chart td.nom-rk-evicted-pj").text("0");
    $("#chart td.hn-dot").text("3.5");
    $("#chart td.nom-dot").text("3");
    $("#chart td.pov-dot").text("7");
    $("#chart td.fav").text("10");
    $("#chart td.co-hoh1").text("2.5");
    $("#chart td.co-hoh2").text("2.5");
    
    $("td[name~='faysal']").each(function() {
        if ($(this).html() != "") {
            faysal = faysal + parseFloat($(this).html());
        }
    });
    $("td[name~='jc']").each(function() {
        if ($(this).html() != "") {
            jc = jc + parseFloat($(this).html());
        }
    });
    $("td[name~='bayleigh']").each(function() {
        if ($(this).html() != "") {
            bayleigh = bayleigh + parseFloat($(this).html());
        }
    });
    $("td[name~='steve']").each(function() {
        if ($(this).html() != "") {
            steve = steve + parseFloat($(this).html());
        }
    });
    $("td[name~='tyler']").each(function() {
        if ($(this).html() != "") {
            tyler = tyler + parseFloat($(this).html());
        }
    });
    $("td[name~='rachel']").each(function() {
        if ($(this).html() != "") {
            rachel = rachel + parseFloat($(this).html());
        }
    });
    $("td[name~='scottie']").each(function() {
        if ($(this).html() != "") {
            scottie = scottie + parseFloat($(this).html());
        }
    });
    $("td[name~='rockstar']").each(function() {
        if ($(this).html() != "") {
            rockstar = rockstar + parseFloat($(this).html());
        }
    });
    $("td[name~='winston']").each(function() {
        if ($(this).html() != "") {
            winston = winston + parseFloat($(this).html());
        }
    });
    $("td[name~='brett']").each(function() {
        if ($(this).html() != "") {
            brett = brett + parseFloat($(this).html());
        }
    });
    $("td[name~='angela']").each(function() {
        if ($(this).html() != "") {
            angela = angela + parseFloat($(this).html());
        }
    });
    $("td[name~='sam']").each(function() {
        if ($(this).html() != "") {
            sam = sam + parseFloat($(this).html());
        }
    });
    $("td[name~='swaggyc']").each(function() {
        if ($(this).html() != "") {
            swaggyc = swaggyc + parseFloat($(this).html());
        }
    });
    $("td[name~='kaycee']").each(function() {
        if ($(this).html() != "") {
            kaycee = kaycee + parseFloat($(this).html());
        }
    });
    $("td[name~='haleigh']").each(function() {
        if ($(this).html() != "") {
            haleigh = haleigh + parseFloat($(this).html());
        }
    });
    $("td[name~='kaitlyn']").each(function() {
        if ($(this).html() != "") {
            kaitlyn = kaitlyn + parseFloat($(this).html());
        }
    });
    
    
    $("td[name~='faysal_total']").text(faysal);
    $("td[name~='jc_total']").text(jc);
    $("td[name~='bayleigh_total']").text(bayleigh);
    $("td[name~='steve_total']").text(steve);
    $("td[name~='tyler_total']").text(tyler);
    $("td[name~='rachel_total']").text(rachel);
    $("td[name~='scottie_total']").text(scottie);
    $("td[name~='rockstar_total']").text(rockstar);
    $("td[name~='winston_total']").text(winston);
    $("td[name~='brett_total']").text(brett);
    $("td[name~='angela_total']").text(angela);
    $("td[name~='sam_total']").text(sam);
    $("td[name~='swaggyc_total']").text(swaggyc);
    $("td[name~='kaycee_total']").text(kaycee);
    $("td[name~='haleigh_total']").text(haleigh);
    $("td[name~='kaitlyn_total']").text(kaitlyn);
    
    
    $("span.kia").text(
		parseFloat($("td[name~='faysal_total']").html()) +
        parseFloat($("td[name~='jc_total']").html()) +
        parseFloat($("td[name~='bayleigh_total']").html()) +
        parseFloat($("td[name~='steve_total']").html())
	);
    $("span.christian").text(
        parseFloat($("td[name~='tyler_total']").html()) +
        parseFloat($("td[name~='rachel_total']").html()) +
        parseFloat($("td[name~='scottie_total']").html()) +
        parseFloat($("td[name~='rockstar_total']").html())
    );
    $("span.kristy").text(
        parseFloat($("td[name~='winston_total']").html()) +
        parseFloat($("td[name~='brett_total']").html()) +
        parseFloat($("td[name~='angela_total']").html()) +
        parseFloat($("td[name~='sam_total']").html())
    );
    $("span.mom").text(
        parseFloat($("td[name~='swaggyc_total']").html()) +
        parseFloat($("td[name~='kaycee_total']").html()) +
        parseFloat($("td[name~='haleigh_total']").html()) +
        parseFloat($("td[name~='kaitlyn_total']").html())
    );
    
    /*var max = Math.max(christian, mom, kristy);
    alert(max);
    if (max == christian) {
        $("th.christian").addClass("first");
    }
    else if (max == mom) {
        $("th.mom").addClass("first");
    }
    else if (max == kristy) {
        $("th.kristy").addClass("first");
    }*/
	
    christian = $("span.christian").text();
	if (parseFloat(christian) > parseFloat(0)) {
        $("span.christian").addClass("good");
    }
    else {
        $("span.christian").addClass("bad");
    }
	
    mom = $("span.mom").text();
	if (parseFloat(mom) > parseFloat(0)) {
        $("span.mom").addClass("good");
    }
    else {
        $("span.mom").addClass("mom");
    }
	
    kia = $("span.kia").text();
	if (parseFloat(kia) > parseFloat(0)) {
        $("span.kia").addClass("good");
    }
    else {
        $("span.kia").addClass("bad");
    }
	
    kristy = $("span.kristy").text();
	if (parseFloat(kristy) > parseFloat(0)) {
        $("span.kristy").addClass("good");
    }
    else {
        $("span.kristy").addClass("bad");
    }
    
    
    /*
    if (Math.max(Number(christian), Number(mom), Number(kristy)) == Number(christian)) {
        $("th.christian").addClass("first");
        if (Number(mom) > Number(kristy)) {
            $("th.mom").addClass("second");
            $("th.kristy").addClass("third");
        } else if (Number(mom) < Number(kristy)) {
            $("th.kristy").addClass("second");
            $("th.mom").addClass("third");
        }
    }
    else if (Math.max(Number(christian), Number(mom), Number(kristy)) == Number(mom)) {
        $("th.mom").addClass("first");
        if (Number(christian) > Number(kristy)) {
            $("th.christian").addClass("second");
            $("th.kristy").addClass("third");
        } else if (Number(christian) < Number(kristy)) {
            $("th.kristy").addClass("second");
            $("th.christian").addClass("third");
        }
    }
    else if (Math.max(Number(christian), Number(mom), Number(kristy)) == Number(kristy)) {
        $("th.kristy").addClass("first");
        if (Number(mom) > Number(christian)) {
            $("th.mom").addClass("second");
            $("th.christian").addClass("third");
        } else if (Number(mom) < Number(christian)) {
            $("th.christian").addClass("second");
            $("th.mom").addClass("third");
        }
    }*/
    
});