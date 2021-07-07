$(document).ready(function(){
    /* global $*/
	var row = 1;
	
	// *** WEEK 1 ***
    $("tr."+row+" > td[name~='christianb']").addClass("hoh");
    $("tr."+row+" > td[name~='travis']").addClass("nom");
    $("tr."+row+" > td[name~='hannah']").addClass("nom-evicted-pj");
    $("tr."+row+" > td[name~='tiffany']").addClass("pov");
	$("img[src$='hannah.png']").addClass("evicted");
	
	// *** WEEK 2 ***
	row = 2;
    $("tr."+row+" > td[name~='sarah']").addClass("hoh");
    $("tr."+row+" > td[name~='britini']").addClass("nom");
    $("tr."+row+" > td[name~='christianb']").addClass("nom-evicted-pj");
    $("tr."+row+" > td[name~='tiffany']").addClass("pov");
	$("img[src$='christianb.png']").addClass("evicted");
	
	// *** WEEK 3 ***
	row = 3;
    $("tr."+row+" > td[name~='travis']").addClass("hoh");
    $("tr."+row+" > td[name~='britini']").addClass("nom-pov-vetoed");
    $("tr."+row+" > td[name~='whitney']").addClass("nom");
    $("tr."+row+" > td[name~='alyssa']").addClass("nom-evicted-pj");
	$("img[src$='alyssa.png']").addClass("evicted");
	
	
	
	
	
	
	
	
	
    $("tr."+row).addClass("thisWeek");
	
	// *** GONE ***
	
    $("tr.2 > td[name~='hannah']").addClass("gone");
    $("tr.3 > td[name~='hannah']").addClass("gone");
    $("tr.3 > td[name~='christianb']").addClass("gone");
	
	
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
