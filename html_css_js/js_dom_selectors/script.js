// Exibir no console título, primeiro parágrafo, 
// e todos os parágrafos com '.descricao'

let titulo = document.getElementById("titulo");
console.log(titulo.textContent);
// We can apply style's
// titulo.style.color = "red";
// titulo.style.backgroundColor = "black";
// titulo.style.fontSize = "30px";

let descr_ini = document.querySelector(".descricao");
console.log(descr_ini.textContent);

let descrs = document.querySelectorAll(".descricao");

// for(let descr of descrs)
// {
//     console.log(descr.textContent);
// }

// descrs.forEach(function(p) {
//     console.log(p.textContent);
// });

descrs.forEach(item => console.log(item.textContent));

// Change style with classList

let botao = document.getElementById("botaoEstilo");

botao.addEventListener("click", () => {
    titulo.classList.toggle("destaque");

    if(titulo.classList.contains("destaque"))
    {
        titulo.textContent = "Vai Brasil!!!";
    }
    else 
    {
        titulo.textContent = "Meu Projeto";
    }
})

let btn_mudar_cor = document.getElementById("botaoMudarCor");

btn_mudar_cor.addEventListener("click", () => {
    btn_mudar_cor.classList.toggle("mudacor");
})
