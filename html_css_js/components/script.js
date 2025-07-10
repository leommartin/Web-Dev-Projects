
// In this case, component is a function
// This makes the organization simpler
function criarUsuario(nome, idade) {
  let div = document.createElement("div");
  div.classList.add("usuario"); // HTML class
  // It can be styled with CSS

  div.innerHTML = `
    <h3> ${nome} </h3>
    <p>Idade: ${idade} </p>
  `;

  return div;
}

// Using the "component"
// Each time the function is called, we create a new 
// Component that represents a person
let container = document.getElementById("container");
let usuario1 = criarUsuario("Leonardo", 25);
let usuario2 = criarUsuario("Ana", 30);

container.appendChild(usuario1);
container.appendChild(usuario2);
