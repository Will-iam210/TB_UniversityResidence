/*
    navbar.js

    Utility Script for inserting NavBar in #navbar placeholder div.

 */

$.get("_nav.html", function (data) {
    $("#navbar").replaceWith(data);});
