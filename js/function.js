var area = document.getElementById("area");

function entrar() {

    var nome = prompt("Digite seu nome");

    if(nome === '' || nome === null) {
        alert("Ops algo deu errado");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        area.innerHTML = "BEM VINDO" + " " + nome + " ";
        
        let botaoSair = document.createElement("button");
         
        botaoSair.onclick = sair;

         botaoSair.innerHTML = "Sair da conta";
         area.appendChild(botaoSair);
    }

   

}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}
