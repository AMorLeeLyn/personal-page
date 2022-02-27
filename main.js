function toggleDarkMode() {
    //Method 1: Dark mode using "getElementsByClassName"
    let bodyElement = document.getElementsByClassName("bodyBackground");
    let navTextColor = document.getElementsByClassName("navbtncolor");
    let darkModeBtnElement = document.getElementById("darkModeButton");
    let n = 0;

    
    if (bodyElement[n].style.background === "black" ) {
        
        for(let n = 0; n < bodyElement.length; n++){
                bodyElement[n].style.background = "#e87c23";
        }

        darkModeBtnElement.innerHTML="Dark Mode";
        darkModeBtnElement.style.background = "#e87c23";
        darkModeBtnElement.style.color = "black";

        for(let i = 0; i < navTextColor.length; i++){
            navTextColor[i].style.color = "black";
        }
   
    } else {
        
        for(let n = 0; n < bodyElement.length; n++){
            bodyElement[n].style.background = "black";
        }

        darkModeBtnElement.innerHTML="Light Mode";
        darkModeBtnElement.style.background = "black";
        darkModeBtnElement.style.color = "#e87c23";
        
        for(let i = 0; i < navTextColor.length; i++){
            navTextColor[i].style.color = "#e87c23";
        }
    } 

    //Method 2: Dark mode using "getElementByID"

    /*    
    let bleachElement = document.getElementById("div1");
    let narutoElement = document.getElementById("div2");
    let onePieceElement = document.getElementById("div3");
    let bleachButton = document.getElementById("bleach_button");
    let narutoButton = document.getElementById("naruto_button");
    let onePieceButton = document.getElementById("onepiece_button");
    let darkModeBtnElement = document.getElementById("darkModeButton");
    


    if (bleachElement.style.background === "black" || narutoElement.style.background === "black" || onePieceElement.style.background === "black") {
        
        bleachElement.style.background = "#e87c23";
        narutoElement.style.background = "#2713ab";
        onePieceElement.style.background = "#ab1313";

        bleachButton.style.color = "black";
        narutoButton.style.color = "black";
        onePieceButton.style.color = "black";

        darkModeBtnElement.innerHTML="Dark Mode";
        darkModeBtnElement.style.background = "#e87c23";
        darkModeBtnElement.style.color = "black";


    } else {

        bleachElement.style.background = "black";
        narutoElement.style.background = "black";
        onePieceElement.style.background = "black";

        bleachButton.style.color = "#e87c23";
        narutoButton.style.color = "#e87c23";
        onePieceButton.style.color = "#e87c23";

        darkModeBtnElement.innerHTML ="Light Mode";
        darkModeBtnElement.style.background = "black";
        darkModeBtnElement.style.color = "#e87c23";
    } 
    */
}
