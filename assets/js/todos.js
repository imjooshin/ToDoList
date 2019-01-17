// Check Off Specific Todos By Clicking

$("ul").on("click", "li", function(){
    // // if li is gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     // turn it black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //         });
    // } else{
    //     $(this).css({
    //     color: "gray",
    //     textDecoration: "line-through"
    //     });
    // }
    // // else
    //     // turn it gray

    $(this).toggleClass("completed")
});

// Click on X to delete Todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){ // .parent() - to delete li
        $(this).remove(); 
    });
    event.stopPropagation(); // stops from bubbling up to other element
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})