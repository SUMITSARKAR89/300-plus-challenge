// ----------- project one (for change body part)---------- 
/*step=1 create function */
/*step=2 add event listener */
const btn = document.querySelector('#color-btn');

function generateRandomCol (){
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);

    return `rgb(${r}, ${g}, ${b}`

}

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = generateRandomCol()
} );

// ----------- project one Other option (for change only selected part)----------
// steps 1 create onload function

const colorBtn = document.getElementById("color-btn");
const createColor = document.getElementById("create-color"); 

window.onload = () =>{
    main();
}

// steps 2 generate random color function
function generateRandomColor(){
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);

    return `rgb(${r}, ${g}, ${b}`
}

// steps 3 collect all necessary referances

function main(){

    colorBtn.addEventListener("click", function(){
        let bgColor = generateRandomColor()
        createColor.style.backgroundColor = bgColor;

    })
}