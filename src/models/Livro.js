import mongoose from "mongoose";
import { autor, autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id:{ type:mongoose.Schema.Types.ObjectId }, // schema padrão do mongodb para id, sempre será um objeto
    titulo:{type:String, required:true}, //propriedade obrigatoria
    editora: {type:String},
    preco: {type:Number},
    paginas: {type:Number},
    autor: autorSchema // dessa forma que relaciona um schema de fora
},{versionKey:false})

const livro = mongoose.model("livros",livroSchema); //coleção do mongo e o schema

export default livro;