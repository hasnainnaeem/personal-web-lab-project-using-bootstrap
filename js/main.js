function beautifySkillsTable(){
    $("#tech-skills-list > li:odd, #soft-skills-list > li:odd").addClass("list-style-1");
    $("#tech-skills-list > li:even, #soft-skills-list > li:even").addClass("list-style-2");

}


function fadingInHeadings(){
    $(":header").hide().fadeIn(1500);
}

function menuEffects(){
    $("ul.menu li").hide().each(function(index) {
        $(this).delay(50*index).fadeIn(700);
    });
}

function setup() {
    // Chaning list style in skills table
    beautifySkillsTable();
    menuEffects();
    fadingInHeadings();
}
// Main starts
// setup();
setup();