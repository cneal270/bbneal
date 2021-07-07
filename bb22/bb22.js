$(document).ready(function(){
    /* global $*/
    $("#rules").click(function(){
        $("#rulesDiv").slideToggle();
		if($(this).text()=="Show Rules"){
			$(this).text("Hide Rules");
		} else {
			$(this).text("Show Rules");
		}
    });
    
    var kristy = 0;
    var christian = 0;
    var mom = 0;
    var k = 0;
    
    var cody = 0;
    var tyler = 0;
    var xmas = 0;
    var david = 0;
    var kevin = 0;
    var ian = 0;
    var dani = 0;
    var davonne = 0;
    var anthony = 0;
    var bay = 0;
    var kaysar = 0;
    var janelle = 0;
    var memphis = 0;
    var enzo = 0;
    var franzel = 0;
    var keesha = 0;
    
    $("#chart td.hoh").text("5");
    $("#chart td.nom").text("-1");
    $("#chart td.pov").text("3");
    $("#chart td.hn").text("-0.5");
    $("#chart td.dot").text("4");
    $("#chart td.hoh-pov").text("8");
    $("#chart td.hoh-dot-pov").text("12");
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
    $("#chart td.ss").text("2");
    $("#chart td.hn-ss").text("1.5");
    $("#chart td.ss-saved").text("0");
    $("#chart td.fav").text("10");
    $("#chart td.runner-up-fav").text("25");
    $("#chart td.co-hoh1").text("2.5");
    $("#chart td.co-hoh2").text("2.5");
    
    var cody = 0;
    var tyler = 0;
    var xmas = 0;
    var david = 0;
    var kevin = 0;
    var ian = 0;
    var dani = 0;
    var davonne = 0;
    var anthony = 0;
    var bay = 0;
    var kaysar = 0;
    var janelle = 0;
    var memphis = 0;
    var enzo = 0;
    var franzel = 0;
    var keesha = 0;
    $("td[name~='cody']").each(function() {
        if ($(this).html() != "") {
            cody = cody + parseFloat($(this).html());
        }
    });
    $("td[name~='tyler']").each(function() {
        if ($(this).html() != "") {
            tyler = tyler + parseFloat($(this).html());
        }
    });
    $("td[name~='xmas']").each(function() {
        if ($(this).html() != "") {
            xmas = xmas + parseFloat($(this).html());
        }
    });
    $("td[name~='david']").each(function() {
        if ($(this).html() != "") {
            david = david + parseFloat($(this).html());
        }
    });
    $("td[name~='kevin']").each(function() {
        if ($(this).html() != "") {
            kevin = kevin + parseFloat($(this).html());
        }
    });
    $("td[name~='ian']").each(function() {
        if ($(this).html() != "") {
            ian = ian + parseFloat($(this).html());
        }
    });
    $("td[name~='dani']").each(function() {
        if ($(this).html() != "") {
            dani = dani + parseFloat($(this).html());
        }
    });
    $("td[name~='davonne']").each(function() {
        if ($(this).html() != "") {
            davonne = davonne + parseFloat($(this).html());
        }
    });
    $("td[name~='anthony']").each(function() {
        if ($(this).html() != "") {
            anthony = anthony + parseFloat($(this).html());
        }
    });
    $("td[name~='bay']").each(function() {
        if ($(this).html() != "") {
            bay = bay + parseFloat($(this).html());
        }
    });
    $("td[name~='kaysar']").each(function() {
        if ($(this).html() != "") {
            kaysar = kaysar + parseFloat($(this).html());
        }
    });
    $("td[name~='janelle']").each(function() {
        if ($(this).html() != "") {
            janelle = janelle + parseFloat($(this).html());
        }
    });
    $("td[name~='memphis']").each(function() {
        if ($(this).html() != "") {
            memphis = memphis + parseFloat($(this).html());
        }
    });
    $("td[name~='enzo']").each(function() {
        if ($(this).html() != "") {
            enzo = enzo + parseFloat($(this).html());
        }
    });
    $("td[name~='franzel']").each(function() {
        if ($(this).html() != "") {
            franzel = franzel + parseFloat($(this).html());
        }
    });
    $("td[name~='keesha']").each(function() {
        if ($(this).html() != "") {
            keesha = keesha + parseFloat($(this).html());
        }
    });
    
    
    $("td[name~='cody_total']").text(cody);
    $("td[name~='tyler_total']").text(tyler);
    $("td[name~='xmas_total']").text(xmas);
    $("td[name~='david_total']").text(david);
    $("td[name~='kevin_total']").text(kevin);
    $("td[name~='ian_total']").text(ian);
    $("td[name~='dani_total']").text(dani);
    $("td[name~='davonne_total']").text(davonne);
    $("td[name~='anthony_total']").text(anthony);
    $("td[name~='bay_total']").text(bay);
    $("td[name~='kaysar_total']").text(kaysar);
    $("td[name~='janelle_total']").text(janelle);
    $("td[name~='memphis_total']").text(memphis);
    $("td[name~='enzo_total']").text(enzo);
    $("td[name~='franzel_total']").text(franzel);
    $("td[name~='keesha_total']").text(keesha);
    
    
    $("span.kristy").text(
		parseFloat($("td[name~='cody_total']").html()) +
        parseFloat($("td[name~='tyler_total']").html()) +
        parseFloat($("td[name~='xmas_total']").html()) +
        parseFloat($("td[name~='david_total']").html())+
        parseFloat($("td[name~='kevin_total']").html())
	);
    $("span.christian").text(
        parseFloat($("td[name~='ian_total']").html()) +
        parseFloat($("td[name~='dani_total']").html()) +
        parseFloat($("td[name~='davonne_total']").html()) +
        parseFloat($("td[name~='anthony_total']").html()) +
        parseFloat($("td[name~='bay_total']").html())
    );
    $("span.mom").text(
        parseFloat($("td[name~='kaysar_total']").html()) +
        parseFloat($("td[name~='janelle_total']").html()) +
        parseFloat($("td[name~='memphis_total']").html()) +
        parseFloat($("td[name~='enzo_total']").html()) +
        parseFloat($("td[name~='franzel_total']").html())
	);
    $("span.k").text(
        parseFloat($("td[name~='keesha_total']").html())
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
	
    kristy = $("span.kristy").text();
	if (parseFloat(kristy) > parseFloat(0)) {
        $("span.kristy").addClass("good");
    }
    else {
        $("span.kristy").addClass("bad");
    }
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
        $("span.mom").addClass("bad");
    }
    k = $("span.k").text();
	if (parseFloat(k) > parseFloat(0)) {
        $("span.k").addClass("good");
    }
    else {
        $("span.k").addClass("bad");
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
    }
	*/
    
});
