$(document).ready(function(){
    /* global $*/
    $("#rules").click(function(){
        $("#rulesDiv").slideToggle();
    });
    
    var christian = 0;
    var kristy = 0;
    var mom = 0;
    
    var tiffany = 0;
    var nicole = 0;
    var zakiyah = 0;
    var frank = 0;
    var bridgette = 0;
    var jozea = 0;
    var paulie = 0;
    var james = 0;
    var bronte = 0;
    var natalie = 0;
    var victor = 0;
    var corey = 0;
    var paul = 0;
    var michelle = 0;
    var davonne = 0;
    var glenn = 0;
    
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
    $("#chart td.secret-power").text("4");
    $("#chart td.rk").text("4");
    $("#chart td.nom-rk").text("3");
    $("#chart td.rk-nom").text("3");
    $("#chart td.rk-nom-evicted-pj").text("0");
    $("#chart td.nom-rk-evicted-pj").text("0");
    $("#chart td.nom-secret-power").text("3");
    $("#chart td.fav").text("10");
    $("#chart td.co-hoh1").text("2.5");
    $("#chart td.co-hoh2").text("2.5");
    
    
    $("td[name~='tiffany']").each(function() {
        if ($(this).html() != "") {
            tiffany = tiffany + parseFloat($(this).html());
        }
    });
    $("td[name~='nicole']").each(function() {
        if ($(this).html() != "") {
            nicole = nicole + parseFloat($(this).html());
        }
    });
    $("td[name~='zakiyah']").each(function() {
        if ($(this).html() != "") {
            zakiyah = zakiyah + parseFloat($(this).html());
        }
    });
    $("td[name~='frank']").each(function() {
        if ($(this).html() != "") {
            frank = frank + parseFloat($(this).html());
        }
    });
    $("td[name~='bridgette']").each(function() {
        if ($(this).html() != "") {
            bridgette = bridgette + parseFloat($(this).html());
        }
    });
    $("td[name~='jozea']").each(function() {
        if ($(this).html() != "") {
            jozea = jozea + parseFloat($(this).html());
        }
    });
    $("td[name~='paulie']").each(function() {
        if ($(this).html() != "") {
            paulie = paulie + parseFloat($(this).html());
        }
    });
    $("td[name~='james']").each(function() {
        if ($(this).html() != "") {
            james = james + parseFloat($(this).html());
        }
    });
    $("td[name~='bronte']").each(function() {
        if ($(this).html() != "") {
            bronte = bronte + parseFloat($(this).html());
        }
    });
    $("td[name~='natalie']").each(function() {
        if ($(this).html() != "") {
            natalie = natalie + parseFloat($(this).html());
        }
    });
    $("td[name~='victor']").each(function() {
        if ($(this).html() != "") {
            victor = victor + parseFloat($(this).html());
        }
    });
    $("td[name~='corey']").each(function() {
        if ($(this).html() != "") {
            corey = corey + parseFloat($(this).html());
        }
    });
    $("td[name~='paul']").each(function() {
        if ($(this).html() != "") {
            paul = paul + parseFloat($(this).html());
        }
    });
    $("td[name~='michelle']").each(function() {
        if ($(this).html() != "") {
            michelle = michelle + parseFloat($(this).html());
        }
    });
    $("td[name~='davonne']").each(function() {
        if ($(this).html() != "") {
            davonne = davonne + parseFloat($(this).html());
        }
    });
    $("td[name~='glenn']").each(function() {
        if ($(this).html() != "") {
            glenn = glenn + parseFloat($(this).html());
        }
    });
    
    
    $("td[name~='tiffany_total']").text(tiffany);
    $("td[name~='nicole_total']").text(nicole);
    $("td[name~='zakiyah_total']").text(zakiyah);
    $("td[name~='frank_total']").text(frank);
    $("td[name~='bridgette_total']").text(bridgette);
    $("td[name~='jozea_total']").text(jozea);
    $("td[name~='paulie_total']").text(paulie);
    $("td[name~='james_total']").text(james);
    $("td[name~='bronte_total']").text(bronte);
    $("td[name~='natalie_total']").text(natalie);
    $("td[name~='victor_total']").text(victor);
    $("td[name~='corey_total']").text(corey);
    $("td[name~='paul_total']").text(paul);
    $("td[name~='michelle_total']").text(michelle);
    $("td[name~='davonne_total']").text(davonne);
    $("td[name~='glenn_total']").text(glenn);
    
    
    $("span.christian").text(
        parseFloat($("td[name~='tiffany_total']").html()) +
        parseFloat($("td[name~='nicole_total']").html()) +
        parseFloat($("td[name~='zakiyah_total']").html()) +
        parseFloat($("td[name~='frank_total']").html()) +
        parseFloat($("td[name~='bridgette_total']").html())
    );
    $("span.mom").text(
        parseFloat($("td[name~='jozea_total']").html()) +
        parseFloat($("td[name~='paulie_total']").html()) +
        parseFloat($("td[name~='james_total']").html()) +
        parseFloat($("td[name~='bronte_total']").html()) +
        parseFloat($("td[name~='natalie_total']").html())
    );
    $("span.kristy").text(
        parseFloat($("td[name~='victor_total']").html()) +
        parseFloat($("td[name~='corey_total']").html()) +
        parseFloat($("td[name~='paul_total']").html()) +
        parseFloat($("td[name~='michelle_total']").html()) +
        parseFloat($("td[name~='davonne_total']").html())
    );
    $("span.leftover").text(
        parseFloat($("td[name~='glenn_total']").html())
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