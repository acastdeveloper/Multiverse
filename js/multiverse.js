function select(id) {
    console.log(id);
}

// Function that create array of objects made of properties about .mv elements
function Omv(i, id) {
    // Defining shortcuts for .mv and its parents
    var omv = document.getElementById(id);
    var omvP = omv.parentNode;
    //Creating array of objects made of .mv properties
    OmvAr.push({
        i: i,
        id: id,
        left: omv.offsetLeft,
        width: omv.offsetWidth,
        right: (omv.offsetLeft + omv.offsetWidth),
        top: omv.offsetTop,
        height: omv.offsetHeight,
        bottom: (omv.offsetTop + omv.offsetHeight),
        fatherId: omvP.getAttribute("id"),
        fatherW: omvP.offsetWidth,
        fatherH: omvP.offsetHeight,
        toCenterX: ((omvP.offsetWidth / 2) - (omv.offsetWidth / 2)),
        toCenterY: ((omvP.offsetHeight / 2) - (omv.offsetHeight / 2))
    });
}

//This function identify every element with class="mv"
function identify() {
    //BEGUIN Identificator loop
    for (i = 0; i < mvArLong; i++) {
        //Identifying elements .mv (in case they don't have it yet )
        if (mvAr[i].getAttribute("id") === null) {
            mvAr[i].setAttribute("id", "mv" + i);
        }
        // Identifying parent of every .mv element (in case they don't have it yet)
        if (mvAr[i].parentNode.getAttribute("id") === null) {
            mvAr[i].parentNode.setAttribute("id", "mvP" + i);
        }
        // Send parameters(i,id) to function Omv
        Omv(i, mvAr[i].getAttribute("id"));
    } //END Identificator Loop
}

function initialize() {
    //INITIAL DECLARATION OF ARRAYS
    //Array of all ".mv" elements
    mvAr = document.querySelectorAll(".mv");
    mvArLong = mvAr.length;
    //Array made of objects with properties for every .mv element
    OmvAr = [];
    //Calling identify function
    identify();
}

document.body.onload = initialize();







//
