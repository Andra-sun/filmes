document.getElementById("irSenha").addEventListener("click", function () {
    var senha = document.getElementById("senha").value.trim().toLowerCase();
    var aSenha = "pitty";
    var tela = document.getElementById("tela");
    var inicio = document.getElementById("inicio");

    if (senha === aSenha) {
        alert("Acesso liberado!");
        tela.style.display = "flex";
        inicio.style.display = "none";
    } else {
        alert("Acesso negado >:(");
    }
});
/* 
document
    .getElementById("adicionarFilme")
    .addEventListener("click", function () {
        const titulo = document.getElementById("tituloInput").value.trim();
        const nota = parseInt(document.getElementById("notaInput").value);

        if (titulo === "" || isNaN(nota)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const novoFilme = {
            nome: titulo,
            nota: nota,
        };

        fetch("filmes.json", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoFilme),
        })
            .then((response) => response.text())
            .then((message) => {
                console.log(message);
            })
            .catch((error) => console.error("Erro ao adicionar filme:", error));
    });
 */