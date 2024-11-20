import express from "express";

const app = express();

const posts = [
    {
        id: 1,
      descricao: "Free Fire",
      imagem: "https://cdn.awsli.com.br/2500x2500/129/129579/produto/76899303/e75a7339f1.jpg"
    },
    {
        id: 2,
      descricao: "Among Us",
      imagem: "https://cdn.awsli.com.br/2500x2500/129/129579/produto/76899303/e75a7339f1.jpg"
    },
    {
        id: 3,
      descricao: "Clash of Clans",
      imagem: "https://cdn.awsli.com.br/2500x2500/129/129579/produto/76899303/e75a7339f1.jpg"
    },
    {
        id: 4,
      descricao: "Subway Surfers",
      imagem: "https://cdn.awsli.com.br/2500x2500/129/129579/produto/76899303/e75a7339f1.jpg"
    },
    {
        id: 5,
      descricao: "Candy Crush Saga",
      imagem: "https://cdn.awsli.com.br/2500x2500/129/129579/produto/76899303/e75a7339f1.jpg"
    },
    {
        id: 6,
      descricao: "Pokémon GO",
      imagem: "https://cdn.awsli.com.br/2500x2500/129/129579/produto/76899303/e75a7339f1.jpg"
    }
  ];


  app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostID(id) {
    return posts.findIndex((post) => {
        return post.id == Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostID(req.params.id)
    res.status(200).json(posts[index]);
});
