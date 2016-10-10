



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 // var h = (int)document.getElementById("range").onchange;
function drawPyramid(height) {

    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">
    // var hide = document.getElementById("construction");
    // construction.style.display = "none";


    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // you can delete this now


        // TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">
        var target = document.getElementById("pyramid");
        var node = document.createElement("p");
        node.appendChild(document.createTextNode(rowStr));
        target.appendChild(node);
    }
}

function showValue(newValue) {
	document.getElementById("tall").innerHTML=newValue;
}
var hie = 0;
document.getElementById("h").addEventListener("click", function() {
    var hie = document.getElementById("tall").textContent
    var pyramid = document.getElementById("pyramid");
    pyramid.innerHTML = '';
    drawPyramid(hie);

})
