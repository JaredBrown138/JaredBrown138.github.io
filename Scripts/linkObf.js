/*
============================================
; Author: Jared Brown 
; Date:   23 March 2018
; Description: Obfuscates Links in my page
; to hide them from scrappers, and displays them to
; users.  
; 
; Hex to String function (function f()) from Delan Azabani:
; https://stackoverflow.com/questions/3745666/how-to-convert-from-hex-to-ascii-in-javascript
;===========================================
*/ 
/**
 * The main jQuery function which will call the appropriate function when
 * a element is selected.
 */
$(function(){
    $("#messenger").click(x =>{LightBox.builder("fs3f345");});
    $("#email").click(x =>{LightBox.builder("fhf389ffh9832nf2");});
});

var LightBox = {
    /**
     * Creates the gray cover over the entire page.
     */
    createCover: function(){
        $("body").append("<div class='cover'></div>");
    },
    /**
     * Removes both the modal and the cover.
     */
    destroy: function(){
        $(".cover").remove();
        $(".modalCustom").remove();
    },
    /**
     * Creates the modal and passes in the text that has been deobfuscated
     * so that it can be displayed to the user. 
     */
    createModal: function( deobfuscatedText ){
        $("body").append("<div class='modalCustom'><p value='" + deobfuscatedText + "' id='text'>" + deobfuscatedText + "</p>" +
            "<div class='linkContainer'><a href='#' class='modalLink' onclick='LightBox.destroy();return false;' id='close'>Close</a></div></div>"
        );
    },
    /**
     * Builds the calls the createCover and
     * creatModal functions and calls the 
     * deobfuscate function and passes the results
     * to the createModal function
     */
    builder: function( itemSelector ){
        this.createCover();
        this.createModal(this.deobfuscate(itemSelector));
    },
    /**
     * Takes the input ( a unique ID) and determines which
     * string to return based on length comparison. Honestly,
     * this is overkill.
     */
    deobfuscate: function( input ){
        var fj32342f32 = "62726f776e6a7430314073756e796a63632e656475"
        var rj342hfie = "68747470733a2f2f6d2e6d652f6a617265642e62726f776e2e31363536"
        if( input.length > 10){
            console.log(this.f(fj32342f32));
            return this.f(fj32342f32);
        }else{
            return this.f(rj342hfie);
        }
    },
    /**
     * A function which returns a string after
     * decoding the hex value. Based on an answer
     * by Delan Azabani from Stack Exchange (link at top). 
     */
    f: function(fwcv){
        var fowfv23 = fwcv.toString();
        var s = "";
        for(var q = 0; q < fowfv23.length; q +=2){
            s += String.fromCharCode(parseInt(fowfv23.substr(q, 2), 16));
        }
        return s;
    }
};
