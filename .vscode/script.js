document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const mensagemDiv = document.getElementById("mensagem");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  

        
        const usuario = document.getElementById("txtUsuario").value.trim();
        const senha = document.getElementById("txtSenha").value.trim();

        if (usuario === "" || senha === "") {
            mensagemDiv.innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos.</p>";
            mensagemDiv.style.display = "block";
        } else {
           
            mensagemDiv.innerHTML = "<p style='color: green;'>Login realizado com sucesso!</p>";
            mensagemDiv.style.display = "block";
            
            
        }
    });
});
