// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function (){
    mostrarPosts();

    document.querySelector("#postForm").addEventListener('submit', addPost)
}
function addPost(infosDoEvento){
    infosDoEvento.preventDefault();

    const textPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagePost = document.querySelector("#postImage").value;

    const novoPost = {
        text: textPost,
        category: categoriaPost,
        image: imagePost,
        date: new Date().toLocaleDateString()
    }
}
function mostrarPosts(){
    const listaPosts = document.querySelector("#postList")

    posts.forEach(pegaItem => {

        const cardPost = document.createElement("div")

        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            ${pegaItem.image? `<img src= ${pegaItem.image} />` : ""}
            <p>Categoria: ${pegaItem.category}</p>
            <p>Data e Hora: ${pegaItem.date}</p>
            <button>Editar</button>
            <button>Apagar</button>
            `
        
    listaPosts.append(cardPost);
    })
}

