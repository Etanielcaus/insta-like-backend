import 'dotenv/config';
import { ObjectId } from "mongodb"
import conectarAoBanco from "../config/dbconfig.js"


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getAllPosts() {
    const db = conexao.db("instaLike-Imersao") 
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function getOnePost(id) {
    const db = conexao.db("instaLike-Imersao") 
    const colecao = db.collection("posts")
    const objId = ObjectId.createFromHexString(id);
    return colecao.findOne({_id: new ObjectId(objId)})
}

export async function criarPost(novoPost) {
    const db = conexao.db("instaLike-Imersao") 
    const colecao = db.collection("posts")
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("instaLike-Imersao") 
  const colecao = db.collection("posts")
  const objId = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost});
}

