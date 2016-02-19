/**
 * Created by Amanda on 01/02/16.
 */
$(document).ready(function(){

    function showHide(){
        var showHide = $(".showhide");
        var langButton = $(".langUK");

        langButton.click(function(){
            if (showHide.hasClass("hidden")){
                showHide.removeClass("hidden");
            }
            else {
                showHide.addClass("hidden");
            }
        });
    }
    showHide();

});
