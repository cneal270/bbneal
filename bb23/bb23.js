$(document).ready(function(){
    /* global $*/
    $("#showRules").click(function(){
        $("#rulesDiv").slideToggle();
		if($(this).text()=="Show Rules"){
			$(this).text("Hide Rules");
			$("#gridDiv").slideUp();
			$("#showGrid").text("Show Grid");
			$("#chartDiv").slideUp();
			$("#showChart").text("Show Chart");
		} else {
			$(this).text("Show Rules");
		}
    });
    $("#showChart").click(function(){
        $("#chartDiv").slideToggle();
		if($(this).text()=="Show Chart"){
			$(this).text("Hide Chart");
			$("#rulesDiv").slideUp();
			$("#showRules").text("Show Rules");
			$("#gridDiv").slideUp();
			$("#showGrid").text("Show Grid");
		} else {
			$(this).text("Show Chart");
		}
    });
    $("#showGrid").click(function(){
        $("#gridDiv").slideToggle();
		if($(this).text()=="Show Grid"){
			$(this).text("Hide Grid");
			$("#rulesDiv").slideUp();
			$("#showRules").text("Show Rules");
			$("#chartDiv").slideUp();
			$("#showChart").text("Show Chart");
		} else {
			$(this).text("Show Grid");
		}
    });
    
    var kristy = 0;
    var christian = 0;
    var mom = 0;
    var k = 0;
    
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
    $("#chart td.wild").text("2");
    $("#chart td.hn-wild").text("1.5");
    $("#chart td.safe").text("0");
    $("#chart td.hn-safe").text("-0.5");
    $("#chart td.fav").text("10");
    $("#chart td.runner-up-fav").text("25");
    $("#chart td.co-hoh1").text("2.5");
    $("#chart td.co-hoh2").text("2.5");
    
    var xavier = 0;
    var brent = 0;
    var tiffany = 0;
    var britini = 0;
    var frenchie = 0;
    var christianb = 0;
    var hannah = 0;
    var whitney = 0;
    var kyland = 0;
    var azah = 0;
    var claire = 0;
    var xiao = 0;
    var frazier = 0;
    var travis = 0;
    var alyssa = 0;
    var sarah = 0;
	
    $("td[name~='xavier']").each(function() {
        if ($(this).html() != "") {
            xavier = xavier + parseFloat($(this).html());
        }
    });
    $("td[name~='brent']").each(function() {
        if ($(this).html() != "") {
            brent = brent + parseFloat($(this).html());
        }
    });
    $("td[name~='tiffany']").each(function() {
        if ($(this).html() != "") {
            tiffany = tiffany + parseFloat($(this).html());
        }
    });
    $("td[name~='britini']").each(function() {
        if ($(this).html() != "") {
            britini = britini + parseFloat($(this).html());
        }
    });
    $("td[name~='frenchie']").each(function() {
        if ($(this).html() != "") {
            frenchie = frenchie + parseFloat($(this).html());
        }
    });
    $("td[name~='christianb']").each(function() {
        if ($(this).html() != "") {
            christianb = christianb + parseFloat($(this).html());
        }
    });
    $("td[name~='hannah']").each(function() {
        if ($(this).html() != "") {
            hannah = hannah + parseFloat($(this).html());
        }
    });
    $("td[name~='whitney']").each(function() {
        if ($(this).html() != "") {
            whitney = whitney + parseFloat($(this).html());
        }
    });
    $("td[name~='kyland']").each(function() {
        if ($(this).html() != "") {
            kyland = kyland + parseFloat($(this).html());
        }
    });
    $("td[name~='azah']").each(function() {
        if ($(this).html() != "") {
            azah = azah + parseFloat($(this).html());
        }
    });
    $("td[name~='claire']").each(function() {
        if ($(this).html() != "") {
            claire = claire + parseFloat($(this).html());
        }
    });
    $("td[name~='xiao']").each(function() {
        if ($(this).html() != "") {
            xiao = xiao + parseFloat($(this).html());
        }
    });
    $("td[name~='frazier']").each(function() {
        if ($(this).html() != "") {
            frazier = frazier + parseFloat($(this).html());
        }
    });
    $("td[name~='travis']").each(function() {
        if ($(this).html() != "") {
            travis = travis + parseFloat($(this).html());
        }
    });
    $("td[name~='alyssa']").each(function() {
        if ($(this).html() != "") {
            alyssa = alyssa + parseFloat($(this).html());
        }
    });
    $("td[name~='sarah']").each(function() {
        if ($(this).html() != "") {
            sarah = sarah + parseFloat($(this).html());
        }
    });
    
    
    $("td[name~='xavier_total']").text(xavier);
    $("td[name~='brent_total']").text(brent);
    $("td[name~='tiffany_total']").text(tiffany);
    $("td[name~='britini_total']").text(britini);
    $("td[name~='frenchie_total']").text(frenchie);
    $("td[name~='christianb_total']").text(christianb);
    $("td[name~='hannah_total']").text(hannah);
    $("td[name~='whitney_total']").text(whitney);
    $("td[name~='kyland_total']").text(kyland);
    $("td[name~='azah_total']").text(azah);
    $("td[name~='claire_total']").text(claire);
    $("td[name~='xiao_total']").text(xiao);
    $("td[name~='frazier_total']").text(frazier);
    $("td[name~='travis_total']").text(travis);
    $("td[name~='alyssa_total']").text(alyssa);
    $("td[name~='sarah_total']").text(sarah);
    
    
    $("span.mom").text(
		parseFloat($("td[name~='xavier_total']").html()) +
        parseFloat($("td[name~='brent_total']").html()) +
        parseFloat($("td[name~='tiffany_total']").html()) +
        parseFloat($("td[name~='britini_total']").html())+
        parseFloat($("td[name~='frenchie_total']").html()) +
        parseFloat($("td[name~='christianb_total']").html()) +
        parseFloat($("td[name~='hannah_total']").html()) +
        parseFloat($("td[name~='whitney_total']").html())
	);
    $("span.christian").text( +
        parseFloat($("td[name~='kyland_total']").html()) +
        parseFloat($("td[name~='azah_total']").html()) +
        parseFloat($("td[name~='claire_total']").html()) +
        parseFloat($("td[name~='xiao_total']").html()) +
        parseFloat($("td[name~='frazier_total']").html()) +
        parseFloat($("td[name~='travis_total']").html()) +
        parseFloat($("td[name~='alyssa_total']").html()) +
        parseFloat($("td[name~='sarah_total']").html())
	);
	
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
    
    if (parseFloat(christian) > parseFloat(mom)) {
        $("th.christian").addClass("first");
        $("th.mom").addClass("second");
    }
    else if (parseFloat(mom) > parseFloat(christian)) {
        $("th.mom").addClass("first");
        $("th.christian").addClass("second");
    }
	else {
        $("th.mom").addClass("second");
        $("th.christian").addClass("second");
	}
});
