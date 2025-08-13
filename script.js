// Dados de exemplo dos posts
let posts = [
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
    const statusPost = document.querySelector("#statusPost").value;

    const novoPost = {
        text: textPost,
        category: categoriaPost,
        image: imagePost,
        date: new Date().toLocaleDateString(),
        status: statusPost,
    }

    posts.push(novoPost);

    mostrarPosts();

    document.querySelector("#postForm").reset();
}
function mostrarPosts(){
    const listaPosts = document.querySelector("#postList");
    listaPosts.innerHTML = "";

    posts.forEach((pegaItem, index) => {

        const cardPost = document.createElement("div");

        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            ${pegaItem.image? `<img src= ${pegaItem.image} />` : ""}
            <p>Categoria: ${pegaItem.category}</p>
            <p>Data e Hora: ${pegaItem.date}</p>
            <button onclick="editarPost(${index})">Editar</button>
            <button onclick="apagarPost(${index})">Apagar</button>
            `;
        
    listaPosts.append(cardPost);
    });
}
function apagarPost(indice) {
    posts.splice(indice, 1); 
    mostrarPosts();
}

function editarPost(indice) {
    const novoStatus = prompt("Digite o novo status (pendente/concluída):", posts[indice].status);

    if (novoStatus) {
        posts[indice].status = novoStatus;
        mostrarPosts();
    }
}