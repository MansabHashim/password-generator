const password_el = document.querySelector("#password");
const length_el = document.querySelector("#length");
const uppercase_el = document.querySelector("#uppercase");
const lowercase_el = document.querySelector("#lowercase");
const numbers_el = document.querySelector("#numbers");
const symbols_el = document.querySelector("#symbols");

const generate_el = document.querySelector("#generator");
generate_el.addEventListener("click", generatePassword);

const copy_el = document.querySelector("#copy");
copy_el.addEventListener("click", cpoyPass);

const uppercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
const numbers_characters = "1234567890";
const Symbols_characters = "<(!@#$%^&*)?;:.,/>";

// console.log(lowercase_characters.substring());

function generatePassword(){
    let password = "";
    let length = length_el.value;
    let characters = ""; 

    characters += uppercase_el.checked ? uppercase_characters: "";
    characters += lowercase_el.checked ? lowercase_characters: "";
    characters += numbers_el.checked ? numbers_characters: "";
    characters += symbols_el.checked ? Symbols_characters: "";

    for (let i=0;  i <= length;  i++){
        let random = Math.floor(Math.random()* characters.length);
        password += characters.substring(random, random + 1);
    }
    password_el.value = password;
}


async function cpoyPass (){
    if(navigator.clipboard){
        await navigator.clipboard.writeText(password.value);

        alert("Password Copied Successfully :)")
    }
}