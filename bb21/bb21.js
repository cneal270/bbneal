$(document).ready(function(){
    /* global $*/
    $("#rules").click(function(){
        $("#rulesDiv").slideToggle();
    });
    
    var christian = 0;
    var kristy = 0;
    var kia = 0;
    var mom = 0;
    
    var isabella = 0;
    var jack = 0;
    var jessica = 0;
    var cliff = 0;
    var tommy = 0;
    var ovi = 0;
    var christie = 0;
    var david = 0;
    var nick = 0;
    var jackson = 0;
    var holly = 0;
    var kathryn = 0;
    var analyse = 0;
    var sam = 0;
    var kemi = 0;
    var nicole = 0;
    
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
    $("#chart td.hoh-rk").text("9");
    $("#chart td.nom-rk").text("3");
    $("#chart td.rk-nom").text("3");
    $("#chart td.rk-nom-evicted-pj").text("0");
    $("#chart td.nom-rk-evicted-pj").text("0");
    $("#chart td.hn-dot").text("3.5");
    $("#chart td.nom-dot").text("3");
    $("#chart td.pov-dot").text("7");
    $("#chart td.fav").text("10");
    $("#chart td.runner-up-fav").text("25");
    $("#chart td.co-hoh1").text("2.5");
    $("#chart td.co-hoh2").text("2.5");
    
    $("td[name~='analyse']").each(function() {
        if ($(this).html() != "") {
            analyse = analyse + parseFloat($(this).html());
        }
    });
    $("td[name~='sam']").each(function() {
        if ($(this).html() != "") {
            sam = sam + parseFloat($(this).html());
        }
    });
    $("td[name~='kemi']").each(function() {
        if ($(this).html() != "") {
            kemi = kemi + parseFloat($(this).html());
        }
    });
    $("td[name~='nicole']").each(function() {
        if ($(this).html() != "") {
            nicole = nicole + parseFloat($(this).html());
        }
    });
    $("td[name~='tommy']").each(function() {
        if ($(this).html() != "") {
            tommy = tommy + parseFloat($(this).html());
        }
    });
    $("td[name~='ovi']").each(function() {
        if ($(this).html() != "") {
            ovi = ovi + parseFloat($(this).html());
        }
    });
    $("td[name~='christie']").each(function() {
        if ($(this).html() != "") {
            christie = christie + parseFloat($(this).html());
        }
    });
    $("td[name~='david']").each(function() {
        if ($(this).html() != "") {
            david = david + parseFloat($(this).html());
        }
    });
    $("td[name~='nick']").each(function() {
        if ($(this).html() != "") {
            nick = nick + parseFloat($(this).html());
        }
    });
    $("td[name~='jackson']").each(function() {
        if ($(this).html() != "") {
            jackson = jackson + parseFloat($(this).html());
        }
    });
    $("td[name~='holly']").each(function() {
        if ($(this).html() != "") {
            holly = holly + parseFloat($(this).html());
        }
    });
    $("td[name~='kathryn']").each(function() {
        if ($(this).html() != "") {
            kathryn = kathryn + parseFloat($(this).html());
        }
    });
    $("td[name~='isabella']").each(function() {
        if ($(this).html() != "") {
            isabella = isabella + parseFloat($(this).html());
        }
    });
    $("td[name~='jack']").each(function() {
        if ($(this).html() != "") {
            jack = jack + parseFloat($(this).html());
        }
    });
    $("td[name~='jessica']").each(function() {
        if ($(this).html() != "") {
            jessica = jessica + parseFloat($(this).html());
        }
    });
    $("td[name~='cliff']").each(function() {
        if ($(this).html() != "") {
            cliff = cliff + parseFloat($(this).html());
        }
    });
    
    
    $("td[name~='analyse_total']").text(analyse);
    $("td[name~='sam_total']").text(sam);
    $("td[name~='kemi_total']").text(kemi);
    $("td[name~='nicole_total']").text(nicole);
    $("td[name~='tommy_total']").text(tommy);
    $("td[name~='ovi_total']").text(ovi);
    $("td[name~='christie_total']").text(christie);
    $("td[name~='david_total']").text(david);
    $("td[name~='nick_total']").text(nick);
    $("td[name~='jackson_total']").text(jackson);
    $("td[name~='holly_total']").text(holly);
    $("td[name~='kathryn_total']").text(kathryn);
    $("td[name~='isabella_total']").text(isabella);
    $("td[name~='jack_total']").text(jack);
    $("td[name~='jessica_total']").text(jessica);
    $("td[name~='cliff_total']").text(cliff);
    
    
    $("span.kia").text(
		parseFloat($("td[name~='analyse_total']").html()) +
        parseFloat($("td[name~='sam_total']").html()) +
        parseFloat($("td[name~='kemi_total']").html()) +
        parseFloat($("td[name~='nicole_total']").html())
	);
    $("span.christian").text(
        parseFloat($("td[name~='tommy_total']").html()) +
        parseFloat($("td[name~='ovi_total']").html()) +
        parseFloat($("td[name~='christie_total']").html()) +
        parseFloat($("td[name~='david_total']").html())
    );
    $("span.kristy").text(
        parseFloat($("td[name~='nick_total']").html()) +
        parseFloat($("td[name~='jackson_total']").html()) +
        parseFloat($("td[name~='holly_total']").html()) +
        parseFloat($("td[name~='kathryn_total']").html())
    );
    $("span.mom").text(
        parseFloat($("td[name~='isabella_total']").html()) +
        parseFloat($("td[name~='jack_total']").html()) +
        parseFloat($("td[name~='jessica_total']").html()) +
        parseFloat($("td[name~='cliff_total']").html())
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
        $("span.mom").addClass("bad");
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
