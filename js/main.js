function fadingInHeadings(){
    $(":header").hide().fadeIn(1500);
}

function headingTwoIncreasingSizeAnimation(){
    // Increasing size fade in animation on H2 Headings
    $("h2").each(function(){
        $(this).css("font-size", "0");
        $(this).animate({
            fontSize: "2rem"
        }, 100, "swing");
    });
}

function addProjectShowDetailsButton(){
    // Adding show details button for all projects
    let $projectDetails = $("p.project-details");
    $projectDetails.hide();
    $projectDetails.parent().append("<button type=\"button\" class=\"btn btn-primary btn-sm\">Show Details</button>\n");
    $projectDetails.parent().on("click","button" , function(){
        $projectDetails.fadeIn(500);
        $projectDetails.next().fadeOut(500);
    });
}

function setup() {
    fadingInHeadings();
    headingTwoIncreasingSizeAnimation();
    addProjectShowDetailsButton();
}


// Main starts
setup();



