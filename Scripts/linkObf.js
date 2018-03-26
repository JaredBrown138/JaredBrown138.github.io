/*
============================================
; Author: Jared Brown 
; Date:   23 March 2018
; Description: Obfuscates Links in my page
; to hide them from scrappers. 
; Hex to String function (function f()) by Delan Azabani:
; https://stackoverflow.com/questions/3745666/how-to-convert-from-hex-to-ascii-in-javascript
;===========================================
*/ 
$(function(){
    $("#messenger").click(x =>{LightBox.builder("fs3f345");});
    $("#email").click(x =>{LightBox.builder("fhf389ffh9832nf2");});
});

var LightBox = {
    createCover: function(){
        $("body").append("<div class='cover'></div>");
    },
    destroy: function(){
        $(".cover").remove();
        $(".modalCustom").remove();
    },
    createModal: function( deobfuscatedText ){
        $("body").append("<div class='modalCustom'><p value='" + deobfuscatedText + "' id='text'>" + deobfuscatedText + "</p>" +
            "<div class='linkContainer'><a href='#' class='modalLink' onclick='LightBox.destroy();return false;' id='close'>Close</a></div></div>"
        );
    },
    builder: function( itemSelector ){
        this.createCover();
        this.createModal(this.deobfuscate(itemSelector));
    },
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
    f: function(fwcv){
        var fowfv23 = fwcv.toString();
        var s = "";
        for(var q = 0; q < fowfv23.length; q +=2){
            s += String.fromCharCode(parseInt(fowfv23.substr(q, 2), 16));
        }
        return s;
    }


};
