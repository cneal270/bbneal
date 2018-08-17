$(document).ready(function(){
    /* global $*/
    $("#rules").click(function(){
        $("#rulesDiv").slideToggle();
    });
    
    var christian = 0;
    var kristy = 0;
    var mom = 0;
    
    var mark = 0;
    var paul = 0;
    var christmas = 0;
    var jessica = 0;
    var dominique = 0;
    var cody = 0;
    var josh = 0;
    var jillian = 0;
    var raven = 0;
    var alex = 0;
    var ramses = 0;
    var jason = 0;
    var matthew = 0;
    var megan = 0;
    var elena = 0;
    var kevin = 0;
    var cameron = 0;
    
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
    $("#chart td.fav").text("10");
    $("#chart td.co-hoh1").text("2.5");
    $("#chart td.co-hoh2").text("2.5");
    
    $("td[name~='mark']").each(function() {
        if ($(this).html() != "") {
            mark = mark + parseFloat($(this).html());
        }
    });
    $("td[name~='paul']").each(function() {
        if ($(this).html() != "") {
            paul = paul + parseFloat($(this).html());
        }
    });
    $("td[name~='christmas']").each(function() {
        if ($(this).html() != "") {
            christmas = christmas + parseFloat($(this).html());
        }
    });
    $("td[name~='jessica']").each(function() {
        if ($(this).html() != "") {
            jessica = jessica + parseFloat($(this).html());
        }
    });
    $("td[name~='dominique']").each(function() {
        if ($(this).html() != "") {
            dominique = dominique + parseFloat($(this).html());
        }
    });
    $("td[name~='cody']").each(function() {
        if ($(this).html() != "") {
            cody = cody + parseFloat($(this).html());
        }
    });
    $("td[name~='josh']").each(function() {
        if ($(this).html() != "") {
            josh = josh + parseFloat($(this).html());
        }
    });
    $("td[name~='jillian']").each(function() {
        if ($(this).html() != "") {
            jillian = jillian + parseFloat($(this).html());
        }
    });
    $("td[name~='raven']").each(function() {
        if ($(this).html() != "") {
            raven = raven + parseFloat($(this).html());
        }
    });
    $("td[name~='alex']").each(function() {
        if ($(this).html() != "") {
            alex = alex + parseFloat($(this).html());
        }
    });
    $("td[name~='ramses']").each(function() {
        if ($(this).html() != "") {
            ramses = ramses + parseFloat($(this).html());
        }
    });
    $("td[name~='jason']").each(function() {
        if ($(this).html() != "") {
            jason = jason + parseFloat($(this).html());
        }
    });
    $("td[name~='matthew']").each(function() {
        if ($(this).html() != "") {
            matthew = matthew + parseFloat($(this).html());
        }
    });
    $("td[name~='megan']").each(function() {
        if ($(this).html() != "") {
            megan = megan + parseFloat($(this).html());
        }
    });
    $("td[name~='elena']").each(function() {
        if ($(this).html() != "") {
            elena = elena + parseFloat($(this).html());
        }
    });
    $("td[name~='kevin']").each(function() {
        if ($(this).html() != "") {
            kevin = kevin + parseFloat($(this).html());
        }
    });
    $("td[name~='cameron']").each(function() {
        if ($(this).html() != "") {
            cameron = cameron + parseFloat($(this).html());
        }
    });
    
    
    $("td[name~='mark_total']").text(mark);
    $("td[name~='paul_total']").text(paul);
    $("td[name~='christmas_total']").text(christmas);
    $("td[name~='jessica_total']").text(jessica);
    $("td[name~='dominique_total']").text(dominique);
    $("td[name~='cody_total']").text(cody);
    $("td[name~='josh_total']").text(josh);
    $("td[name~='jillian_total']").text(jillian);
    $("td[name~='raven_total']").text(raven);
    $("td[name~='alex_total']").text(alex);
    $("td[name~='ramses_total']").text(ramses);
    $("td[name~='jason_total']").text(jason);
    $("td[name~='matthew_total']").text(matthew);
    $("td[name~='megan_total']").text(megan);
    $("td[name~='elena_total']").text(elena);
    $("td[name~='kevin_total']").text(kevin);
    $("td[name~='cameron_total']").text(cameron);
    
    
    $("span.christian").text(
        parseFloat($("td[name~='mark_total']").html()) +
        parseFloat($("td[name~='paul_total']").html()) +
        parseFloat($("td[name~='christmas_total']").html()) +
        parseFloat($("td[name~='jessica_total']").html()) +
        parseFloat($("td[name~='dominique_total']").html())
    );
    $("span.kristy").text(
        parseFloat($("td[name~='cody_total']").html()) +
        parseFloat($("td[name~='josh_total']").html()) +
        parseFloat($("td[name~='jillian_total']").html()) +
        parseFloat($("td[name~='raven_total']").html()) +
        parseFloat($("td[name~='alex_total']").html())
    );
    $("span.mom").text(
        parseFloat($("td[name~='ramses_total']").html()) +
        parseFloat($("td[name~='jason_total']").html()) +
        parseFloat($("td[name~='matthew_total']").html()) +
        parseFloat($("td[name~='megan_total']").html()) +
        parseFloat($("td[name~='elena_total']").html())
    );
    $("span.leftover").text(
        parseFloat($("td[name~='kevin_total']").html()) +
        parseFloat($("td[name~='cameron_total']").html())
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