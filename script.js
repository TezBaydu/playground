/* Stream classes not included in html but button click fucntion brings user to top of page anyway */

$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
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
   });

   $(".card_head").mouseenter(function() {
    $(".card_head").css("background-color", "red");
    });

    $(".card_head").mouseleave(function() {
        $(".card_head").css("background-color", "white");
    });
}); 


