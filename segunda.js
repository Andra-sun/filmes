document.addEventListener("DOMContentLoaded", function () {
    var container2 = document.getElementById("informacoes");

    function carregarJSON() {
        return new Promise((resolve, reject) => {
            fetch("filmes.json")
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    carregarJSON()
        .then((data) => {
            console.log("Dados do JSON:", data);

            data.informacoes.forEach(function (info) {
                var div = document.createElement("div");
                div.id = `info-${info.id}`;
                div.className = "detalhes";
                container2.appendChild(div);

                var texto = document.createElement("h2");
                texto.textContent = info.descricao;
                div.appendChild(texto);
            });
        })
        .catch((error) => console.error("Erro ao carregar JSON:", error));
});
