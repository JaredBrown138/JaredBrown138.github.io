/*
============================================
; Author: Jared Brown 
; Date:   23 March 2018
; Description: The toggle handler for my 
; portfolio site.
;===========================================
*/ 
// MAJOR TODO: Make use of ARIA
/**
 * The main jQuery function which activates the
 * toggelCard function when its respective button
 * is pressed.
 */
$(function() {
    $(".expand0").click( x => {toggleCard(0)});
    $(".expand1").click( x => {toggleCard(1)});
    $(".expand2").click( x => {toggleCard(2)});
});
/**
 * Toggles the card for the respecitve item. Toggles the elements
 * css between collapse and visible. 
 * @param {*} expandNumber 
 */
function toggleCard( expandNumber ){
    var toggleCardElements = [".expandCard0", ".expandCard1", ".expandCard2"];

    if ( $(toggleCardElements[expandNumber]).css("visibility") == "collapse"){
        $(toggleCardElements[expandNumber]).css("visibility", "visible");
    }
    else{
        $(toggleCardElements[expandNumber]).css("visibility", "collapse");
    }
}