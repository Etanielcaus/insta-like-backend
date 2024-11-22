import conectarAoBanco from "../config/dbconfig.js"


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getAllPosts() {
    const db = conexao.db("instaLike-Imersao") 
    const colecao = db.collection("posts")
    return colecao.find().toArray()
  }

export async function criarPost(novoPost) {
    const db = conexao.db("instaLike-Imersao") 
    const colecao = db.collection("posts")
    return colecao.insertOne(novoPost);
}