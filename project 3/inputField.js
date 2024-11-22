const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const inputName = document.getElementById("input-name");
const outputName = document.getElementById("output-name");
const resultName = document.getElementById("result-body");




 resultName.style.display = "none"

window.onload = () =>{
    main()
};

function main(){
    resetBtn.addEventListener("click", function(){
        inputName.value = "";
        resultName.style.display = "none"
        
    });
    submitBtn.addEventListener("click", function(){
        let name = inputName.value

        if(!name){
            alert ("Enter your name")
        }else{
            resultName.style.display = "block";
            outputName.innerHTML = name;
            inputName.value = "";
        }
    })

};


//  submitBtn.addEventListener("click", function(){
//         // let name = inputName.value

//         if(!inputName.value/*name */){
//             alert("Please input your Name")
//         }else{
//             resultName.style.display = "block";
//             outputName.innerHTML = inputName.value /*name */;
//             inputName.value = "";
//         }
//     });