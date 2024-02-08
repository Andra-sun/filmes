document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("minhaLista");

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

            data.itens.forEach(function (item) {
                var div = document.createElement("div");
                div.id = `item-${item.id}`;
                div.className = "base";

                var notao = document.createElement("div");
                notao.id = "notao";
                div.appendChild(notao);

                var img = document.createElement("img");
                img.src = item.poster;
                div.appendChild(img);

                var subDiv = document.createElement("div");
                subDiv.className = "subBase";
                div.appendChild(subDiv);

                var p1 = document.createElement("p");
                p1.textContent = item.nome;
                p1.id = "titulo";
                subDiv.appendChild(p1);

                var p2 = document.createElement("p");
                p2.textContent = item.nota;
                p2.id = "nota";
                if (item.nota <= 40) {
                    p2.style.backgroundColor = "red";
                }
                if (item.nota == 50||60) {
                    p2.style.backgroundColor = "yellow";
                }
                if (item.nota >= 70) {
                    p2.style.backgroundColor = "green";
                }
                notao.appendChild(p2);

                var abrir = document.querySelector('#informacoes');
                div.addEventListener('click', function(){
                    if(abrir.style.display = "none"){
                        abrir.style.display = "flex";
                    }
                });

                container.appendChild(div);
            });
        })
        .catch((error) => console.error("Erro ao carregar JSON:", error));
});
