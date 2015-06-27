$(document).ready(function() {

    $("ul#tabs li").click(function(e){
        if (!$(this).hasClass("selected")) {
        	console.log(this);
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.selected").removeClass("selected");
            $(this).addClass("selected");
            $("ul#tab li.selected").removeClass("selected");
            $("ul#tab li:nth-child("+nthChild+")").addClass("selected");
        }
    });

});