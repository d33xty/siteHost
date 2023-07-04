const botaoPlus = document.querySelector("#button_add");
const inputContainer = document.querySelector(".input_container");
const siteList = document.querySelector(".sitelist_ul");
const sites = JSON.parse(localStorage.getItem("sites")) == null ? [] : JSON.parse(localStorage.getItem("sites"));

adicionaSites();

function adicionaSites(){
    for (let i = 0; i < sites.length; i++) {
        const element = sites[i];
        siteList.innerHTML += `
        <li class="sitelist_li">
            <i class="fa-solid fa-house"></i>
            <a href="${element.link}">${element.nome}</a>
            <i class="fa-solid fa-folder-open"></i>
        </li>`
    }
}


botaoPlus.addEventListener("click", () => {
    if (inputContainer.classList.contains("hide")) {
        inputContainer.classList.remove("hide");
        botaoPlus.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        inputContainer.classList.add("hide");
        botaoPlus.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
})

const form = inputContainer.querySelector("form");
const link = form.link;
const nome = form.nome;
console.log(nome.value);

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(nome.value);
    siteList.innerHTML += `
    <li class="sitelist_li">
        <i class="fa-solid fa-house"></i>
        <a href="${link.value}">${nome.value}</a>
        <i class="fa-solid fa-folder-open"></i>
    </li>`
    const obj = {nome: nome.value, link: link.value};
    sites.push(obj)
    localStorage.setItem("sites", JSON.stringify(sites))
})