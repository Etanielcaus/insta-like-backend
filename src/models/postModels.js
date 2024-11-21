import conectarAoBanco from "../config/dbconfig.js"


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getAllPosts() {
    const db = conexao.db("instaLike-Imersao") 
    const colecao = db.collection("posts")
    return colecao.find().toArray()
  }