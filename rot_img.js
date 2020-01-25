// Trigger when the window finishes loading
window.onload = initBannerLink;

var banner = 0;
var imgO = new Array();
var imgLink = new Array('/events.html',
                      'https://www.xpressreg.net/register/EXBI0420/landing.asp',
                      'https://www.xpressreg.net/register/EXBI0420/landing.asp');
var imgSrc = new Array('Images/Agilent_Banner.png',
                                     'Images/SciTrek_Volunteers.png',
                                     'Images/ASBMB_Meeting.png');
// This code, inside the initBannerLink() function, first checks to see if the adBanner object is surrounded by a link tag.
// If so, when the link is clicked, the newLocation() function will be called. Finally, the rotate() function is called.
function initBannerLink() {
     if (document.getElementById("imgBanner").parentNode.tagName == "A") {
        document.getElementById("imgBanner").parentNode.onclick = newLocation;
     }

     rotate();
}

// Inside newLocation(), we set the document.location.href object (in other words, the current document window)
// to the value of the text string "http://www." (notice the period), plus the value of one item from adURL.
// Since adURL is an array, you need to specify a member of the array. That’s stored in theAd, and the resulting
// string can be any of the three links, depending on when the user clicks. Last, it returns false, which tells
// the browser that it should not also load in the href. Otherwise, the browser would do both.
// We’ve handled everything within JavaScript, so the href doesn’t need to be loaded.
function newLocation() {
     document.location.href = "http://www." + imgLink[banner];
     return false;
}

function rotate() {
     banner++;
     if (banner == imgSrc.length) {
        banner = 0;
     }
     document.getElementById("imgBanner").src = imgSrc[banner];

     setTimeout(rotate, 1000 * 1000);
}