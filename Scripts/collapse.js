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
    
    $(".half-circle").mouseenter(function(){
        $(".half-circle").css({
            "animationName": "expandCard",
            "animationDuration": "0.5s",
            "animationIterationCount": "1",
            "animationFillMode": "forwards"
        });
        $(".profile-card").css({
            "animationName": "pushDown",
            "animationDuration": "0.5s",
            "animationIterationCount": "1",
            "animationFillMode": "forwards"
        });
        $(".menu-item-container").css({
            "animationName": "fadeIn",
            "animationDuration": "0.5s",
            "animationIterationCount": "1",
            "animationFillMode": "forwards",
            "display": "block"
        })
    });
    $(".half-circle").mouseleave(function(){
        $(".half-circle").css({
            "animationName": "collapseCard",
            "animationDuration": "0.5s",
            "animationIterationCount": "1",
            "animationFillMode": "forwards"
        });
        $(".profile-card").css({
            "animationName": "pullUp",
            "animationDuration": "0.5s",
            "animationIterationCount": "1",
            "animationFillMode": "forwards"
        })
        $(".menu-item-container").css({
            "animationName": "fadeOut",
            "animationDuration": "0.5s",
            "animationIterationCount": "1",
            "animationFillMode": "forwards",
            "display": "none"
        })
        $(".tip").css({
            "animationName": "fadeOut",
            "animationDuration": "0.5s",
            "animationIterationCount": "1",
            "animationFillMode": "forwards",
            "display": "none"
        })
    });
});
/**
 * Toggles the card for the respecitve item. Toggles the elements
 * css between collapse and visible. 
 * @param {*} expandNumber 
 */
function toggleCard( expandNumber ){
    var toggleCardElements = [".expandCard0", ".expandCard1", ".expandCard2"];

    if ( $(toggleCardElements[expandNumber]).css("display") == "none"){
        $(toggleCardElements[expandNumber]).css("display", "inline");
    }
    else{
        $(toggleCardElements[expandNumber]).css("display", "none");
    }
}