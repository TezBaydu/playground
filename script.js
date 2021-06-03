/* Stream classes not included in html but button click fucntion brings user to top of page anyway */

 $(document).ready(function() {
 /*   $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   }); */

   // Changes the whole class //

   /* $(".card_head").mouseenter(function() {
    $(".card_head").css("background-color", "red");
    });

    $(".card_head").mouseleave(function() {
        $(".card_head").css("background-color", "white");
    }); */
}); 

    // this function allows it to only affect that which the mouse hovers over as opposed to the whole class //

$(".card_head").mouseenter(function() {
    $(this).css("background-color", "red");
    });

    $(".card_head").mouseleave(function() {
    $(this).css("background-color", "white");
    });

    // adjusts only the class for bottom_button_1 //

$(".bottom_button_1").click(function() {
    $(".card_image_1").toggle("slow");
});


    // Want to make this so for all button without having to apply different classes to each button.... //

/* $(".bottom_button").on("click", function() {
    let allCardsImages = ".card_image";
    let thisCardsImages = "." + this.id + "_image";
    $(allCardsImages).toggle("card_image")
    $(thisCardsImages).toggle("card_image");
}); */

    // Want to make this so for all button without having to apply different classes to each button.... //

/* $(".bottom_button").on("click", function() {
    let cardImages = ".card_image";
    let thisCardImage = "." + this.class + "stream";
    $(cardImages).toggle(".card_image");
    $(thisCardImage).toggle(".card_image");
}); */

    // toggle hide show previous sibling p //

/* $(".bottom_button").click(function() {
    $(this).prev().toggle("slow");
}); */

    // toggle hide show previous sibling x3 particular this image YES !!! //

/* $(".bottom_button").click(function() {
    $(this).prev().prev().prev().toggle("slow");
}); */

    // toggle hide show sibling particular this image YES !!! //

/* $(".bottom_button").click(function() {
    $(this).siblings("img").toggle("slow");
}) */

$(".bottom_button").click(function() {
    $(this).siblings(".card_image").toggle("slow");
})