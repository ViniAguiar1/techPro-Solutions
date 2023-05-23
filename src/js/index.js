let setupBrown = document.getElementById("setupBrown")
let setupWhite = document.getElementById("setupWhite")
let setup2 = document.getElementById("setup2")
let setup4 = document.getElementById("setup4")

function mostrarSetupDark(){
    setupBrown.style = "display:none"
    setupWhite.style = "display:flex"
}

function mostrarSetupBrown() {
    setupBrown.style = "display:flex"
    setupWhite.style = "display:none"
}

function mostrarSetup4(){
    setup2.style = "display:none"
    setup4.style = "display:flex"
}

function mostrarSetup2(){
    setup2.style = "display:flex"
    setup4.style = "display:none"
}