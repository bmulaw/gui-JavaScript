function checkForErrors(minW, maxW, minH, maxH) {
    if(isNaN(minW) || isNaN(maxW) || isNaN(minH) ||  isNaN(maxH)) {
        console.log('please only put in numbers');
        return null;
    }
    
    if (minW > maxW) {
        console.log(minW, maxW);
        console.log('please enter a min width that is less than max width')
        return null;
    }

    if (minH > maxH) {
        console.log('please enter a min height that is less than max height')
        return null;
    }

    if (minW%1 !== 0 || maxW%1 !== 0 || minH%1 !== 0 || maxH%1 !== 0 ) {
        console.log('whole number please');
        return null;
    }
}


function getNumbers() {
    // takes min/max and makes table
    // calls a reset function to empty form
    var minW = (document.getElementById('minW').value);
    var maxW = (document.getElementById('maxW').value);
    var minH = (document.getElementById('minH').value);
    var maxH = (document.getElementById('maxH').value);
    if (minW === "" || maxW === "" || minH === "" || maxH === "") {
        console.log('please enter a number for each fields');
        return null;
    }
    minW = Number(minW);
    maxW = Number(maxW);
    minH = Number(minH);
    maxH = Number(maxH);
    var errorCheck = checkForErrors(minW, maxW, minH, maxH);
    if (errorCheck === null) {
        return null;
    }
    
    

    // https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
    return [parseInt(minW), parseInt(maxW), parseInt(minH), parseInt(maxH)]
}

function makeTable() {
    const chosenNumbers = getNumbers();
    if (chosenNumbers === null) {
        return;
    }
    let minW = chosenNumbers[0];
    let maxW = chosenNumbers[1];
    let minH = chosenNumbers[2];
    let maxH = chosenNumbers[3];
    document.write("<table>");
    document.write("<tr>");
    document.write("<td>" + " "+ "</td>");
    for(var i=minW; i < maxW + 1; i++) {
        document.write("<td> "+ i + " </td>");
    }
    document.write("</tr>");
    for(var j=minH; j < maxH + 1; j++) { 
        document.write("<tr>");      
        document.write("<td> "+ j + " </td>");
        while(minW < maxW){
        document.write("<td> "+ j + " </td>");
        }
        document.write("</tr>");
    }

    for (var row=minW; row < maxW + 1; row ++) {
        for (var col=minH; col < maxH; col ++) {
            document.write("<td> " + row * col + "</td>")
        }
    }
    
    document.write("</table>");
}