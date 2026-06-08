const filmes = [
    {
        título:"Vingadores: Ultimato",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descrição: "Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",

    },
    {
        título: "10 coisas que eu odeio em você",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/lRy6impzDHOqTX3A2T5dxI6Lwfu.jpg",
        descrição: "Em seu primeiro dia na nova escola, Cameron se apaixona por Bianca. Mas ela só poderá sair com rapazes até que Kat, sua irmã mais velha, arrume um namorado. O problema é que ela é insuportável. Cameron, então, negocia com o único garoto que talvez consiga sair com Kat – um misterioso bad-boy com uma péssima reputação."

    },
    {
        título: "Por cima do seu cadáver",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/9ghTSDRXDYZagU9hOf285EjOmgD.jpg",
        descrição: "Uma comédia de humor ácido com um toque de suspense, dirigida por Jorma Taccone e estrelada por um casal disfuncional, Dan e Lisa, que se refugiam em uma cabana isolada com o objetivo secreto de se assassinarem. Seus elaborados planos para se matarem são interrompidos quando foragidos e um agente penitenciário corrupto atrapalham sua fuga.",
    },

    {
        título: "Como mágica",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/7FBnCkYzHlVHEtuzTEiGgFhs8EQ.jpg",
        descrição: "Uma pequena criatura da floresta e um pássaro majestoso trocam de corpo e precisam se unir para sobreviver à aventura mais incrível de suas vidas.",
    },

    {
        título: "Trocando as bolas",
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/tYyHmUzo6GT7qjG7OWqo0zsXcoJ.jpg",
        descrição: "O que pode acontecer quando um magnata de Wall Street encontra um esperto mendigo de rua? Esta é a história de um malandro que troca seu estilo de vida com a de um investidor grã-fino. Daí em diante, a diversão fica mais rica a cada minuto!",
    },

    {
        título: "Coração Partido",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/5YGxIzMxRdcTt4QtjlbV2wYRNlx.jpg",
        descrição: "Polina, uma estudante do ensino médio, é salva do bullying em sua nova escola e faz um acordo com o principal valentão, Bars: ele deve fingir ser seu namorado e protegê-la, e ela deve fazer tudo o que ele mandar. Durante esse jogo, o casal desenvolve sentimentos verdadeiros, mas sua família e colegas de classe têm motivos para separá-los."
}]

const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.título}</h3>
                        <p>${filme.descrição}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}

mostrarFilmes(filmes)

function verDetalhes(titulo) {
    Swal.fire({
        title: título,
        text: "Mais informaçaões de Filme",
        icon: "info"
    })
}