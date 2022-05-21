/* NAME
const input = document.querySelector("input[name=name]");
//console.log(input);
input.addEventListener('change', handleName)

function handleName(e){
    //console.log("changed");
    //console.log(e.type);
    //console.log(e.target);
    //console.log(e.target.className)
    //console.log(e.target.value);
}
*/

/*GENDER
const genders = document.querySelectorAll("input[name=gender]");
//console.log(genders);

Array.from(genders).map((gender) =>{
    gender.addEventListener("change", handleGender);
})

function handleGender(e){
    //console.log("checked")
    console.log(e.target.value)
}

*/

/*LANGUAGES
const langs = document.querySelectorAll("input[name=lang]")
//console.log(langs);

Array.from(langs).map((lang)=>{
    lang.addEventListener("change", handleLanguage);
})

function handleLanguage(e){
    if(e.target.checked){
        //console.log("checked")
        console.log(e.target.value);
    }
}
*/

//DEPARTMENT
const depts = document.querySelector("select");
//console.log(depts)

depts.addEventListener("change", handleDepartment);

function handleDepartment(e){
    //console.log(e.target.value)
    if(e.target.value= "BBA"){
        var amount = 80*2;
        console.log(amount+ "tk")
    }
    else{
        console.log("Invalid");
    }
}