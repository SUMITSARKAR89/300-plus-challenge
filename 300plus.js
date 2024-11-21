// // ----------- project one (for change body part)---------- 
// /*step=1*/
// const btn = document.querySelector('#color-btn');

// function generateRandomCol (){
//     const r = Math.floor(Math.random() *255);
//     const g = Math.floor(Math.random() *255);
//     const b = Math.floor(Math.random() *255);

//     return `rgb(${r}, ${g}, ${b}`

// }

// btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = generateRandomCol()
// } );

// // ----------- project two (for change only selected part)----------
// // steps 1 create onload function

// const colorBtn = document.getElementById("color-btn");
// const createColor = document.getElementById("create-color"); 

// window.onload = () =>{
//     main();
// }

// // steps 2 generate random color function
// function generateRandomColor(){
//     const r = Math.floor(Math.random() *255);
//     const g = Math.floor(Math.random() *255);
//     const b = Math.floor(Math.random() *255);

//     return `rgb(${r}, ${g}, ${b}`
// }

// // steps 3 collect all necessary referances

// function main(){

//     colorBtn.addEventListener("click", function(){
//         let bgColor = generateRandomColor()
//         createColor.style.backgroundColor = bgColor;

//     })
// }



// // ----------- project three (for mark the color vlaue)----------
// window.onload = () =>{
//     main()
// }

// const colorBtn = document.getElementById("color-btn");
// const createColor = document.getElementById("create-color"); 
// const input = document.getElementById("input-option"); 


// function main(){
   
//     colorBtn.addEventListener("click", function(){
//         let bgColor = remdomGenerateHexColor();
//         createColor.style.backgroundColor = bgColor;
//         input.value = bgColor
//     })
    

// }

// function remdomGenerateHexColor(){
//     const r = Math.floor(Math.random() *255);
//     const g = Math.floor(Math.random() *255);
//     const b = Math.floor(Math.random() *255);

//     return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
// } 


// ----------- project four (copy and paste the color code)----------

window.onload = () => {
    main()
}

function main(){
    const colorBtn = document.getElementById("color-btn");
    const createColor = document.getElementById("create-color"); 
    const input = document.getElementById("input-option"); 
    const copyBtn = document.getElementById("copy-btn"); 

    colorBtn.addEventListener("click", function(){
        let bgColor = generateHexCopyColor();
        createColor.style.backgroundColor = bgColor;
        input.value = bgColor;
    });

    colorBtn.addEventListener("click", function(){

        navigator.clipboard.writeText(input.value);
    })
}

function generateHexCopyColor (){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}


// ------------------------------------------------project 5----------------------------


    // 1. onload
    window.onload = () => {
        main()
    }
    
        // 2. run onload 
    function main(){
        const colorBtn = document.getElementById("color-btn");
        const createColor = document.getElementById("create-color"); 
        const input = document.getElementById("input-option"); 
        const copyBtn = document.getElementById("copy-btn"); 
    
        colorBtn.addEventListener("click", function(){
            let bgColor = generateHexCopyColor();
            createColor.style.backgroundColor = bgColor;
            input.value = bgColor;//(step 4)
        });
    
        colorBtn.addEventListener("click", function(){
    
            navigator.clipboard.writeText(input.value);//(step 4)
    
            if(div !== null){ //step 6
                div.remove();
                div = null;
            }
            createToastMassage(`${input.value} copied`)//(step 5)
    
        });
       
    }
    
        // 3. create function for generate color 
    function generateHexCopyColor (){
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
    
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }
    
    // 5. create toast massage
    let div = null;//6
    function createToastMassage(msg){
         div = document.createElement("div");
        div.innerText = msg;
        div.classList = "toast-msg toast-msg-in"
    
        div.addEventListener("click", function(){
            div.classList.remove("toast-msg-in");
            div.classList.add("toast-msg-out");
    
            div.addEventListener("animationend", function (){
                div.remove();
                div = null;//6
            })
        });
    
        document.body.appendChild(div);
    }
    
    
    
