$(document).ready(function(){
    /* global $*/
	var row = 1;
	
	// *** WEEK 1 ***
	
	
	
	
	
	
	
	
	
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
