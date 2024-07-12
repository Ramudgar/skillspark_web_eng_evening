// console.log(document);
const elm = document.getElementById("domElement");
console.log(elm);
console.log(elm.textContent);
elm.textContent = "dom";

const demoelm = document.getElementsByClassName("demo");
console.log(demoelm);
console.log(demoelm[0].textContent);

demoelm[0].innerHTML = 'This is a <strong> new </strong> content';



function clickHandler(){
    alert('Button is clicked');
}

const gen_btn = document.querySelector('#gen_alert');
gen_btn.addEventListener('click', clickHandler);


const input_field= document.querySelector('#inputField');
let input_type=input_field.type;
console.log(input_type);
input_field.type = 'password';
console.log(input_field.type);

    // input_field.setAttribute('value', 'unwrittenvalue');
    // console.log(input_field.value);

input_field.getAttribute('value');
console.log(input_field.value);

input_field.addEventListener('keyup', function(){
    console.log(input_field.value);
});