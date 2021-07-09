$(document).ready(function(){
    /* global $*/
	var row = 1;
	
	// *** WEEK 1 ***
    $("tr."+row+" > td[name~='frenchie']").addClass("hoh");
    $("tr."+row+" > td[name~='azah']").addClass("safe");
    $("tr."+row+" > td[name~='britini']").addClass("safe");
    $("tr."+row+" > td[name~='frazier']").addClass("safe");
    $("tr."+row+" > td[name~='christianb']").addClass("hn-wild");
    $("tr."+row+" > td[name~='alyssa']").addClass("hn");
    $("tr."+row+" > td[name~='xavier']").addClass("hn");
    $("tr."+row+" > td[name~='sarah']").addClass("hn");
    $("tr."+row+" > td[name~='xavier']").addClass("safe");
	
	
	
	
	
	
	
	
    $("tr."+row).addClass("thisWeek");
	
	// *** GONE ***
	
	
	
	// *** HEADS ***
    $("tr."+row+" > td").each(function() {
		var headName = $(this).attr("name");
		var classList = $(this).attr("class");
        
        // Creating class array by splitting class list string
        var classArr = classList.split(/\s+/);
        
        $.each(classArr, function(index, value){
            $("th." + headName).addClass(value);
            $("th." + headName).removeClass("gone");
        });
    });
});
