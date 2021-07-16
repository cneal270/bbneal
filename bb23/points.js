$(document).ready(function(){
    /* global $*/
	var row = 1;
	
	// *** WEEK 1 ***
    $("tr."+row+" > td[name~='frenchie']").addClass("hoh");
    $("tr."+row+" > td[name~='azah']").addClass("safe");
    $("tr."+row+" > td[name~='britini']").addClass("safe");
    $("tr."+row+" > td[name~='frazier']").addClass("safe");
    $("tr."+row+" > td[name~='christianb']").addClass("hn-wild");
    $("tr."+row+" > td[name~='alyssa']").addClass("hn-nom");
    $("tr."+row+" > td[name~='sarah']").addClass("hn");
    $("tr."+row+" > td[name~='xavier']").addClass("hn-safe");
    $("tr."+row+" > td[name~='kyland']").addClass("nom-vetoed");
    $("tr."+row+" > td[name~='xiao']").addClass("pov");
    $("tr."+row+" > td[name~='travis']").addClass("nom-evicted-pj");
	$("img[src$='travis.png']").addClass("evicted");
	
	// *** WEEK 2 ***
	row = 2;
    $("tr."+row+" > td[name~='kyland']").addClass("hoh");
    $("tr."+row+" > td[name~='claire']").addClass("safe");
    $("tr."+row+" > td[name~='tiffany']").addClass("safe");
	
	
	
	
	
	
	
	
    $("tr."+row).addClass("thisWeek");
	
	// *** GONE ***
    $("tr.2 > td[name~='travis']").addClass("gone");
	
	
	
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
