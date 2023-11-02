import {autor} from "../models/Autor.js";

class AutorController{ // classe criada para controlar toda a parte dos autor
    static async listarAutores(req,res){ // usado para colocar no lugar da função callback do app
        try {
            const listaAutores = await autor.find({}); //.find - método do moongoso, irá conectar no mongo e buscar tudo
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição do autor!`})
        }
    }

    static async listarAutorPorId(req,res){ // usado para colocar no lugar da função callback do app
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id); //.find - método do moongoso, irá conectar no mongo e buscar tudo
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição do livro!`})
        }
    }

    static async cadadastrarAutor(req,res){ // usado para criar autor usando JSON
        try {
            const novoAutor = await autor.create(req.body); // cria usando modelo Livro
            res.status(201).json({message:"Criado com sucesso!", autor: novoAutor});
        } catch (error) {
            res.status(500).json({message:`${error.message} - falha ao adicionar autor!`})
        }
    }

    static async atualizarAutor(req,res){ // usado para colocar no lugar da função callback do app
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id,req.body); //.find - método do moongoso, irá conectar no mongo e buscar tudo
            res.status(200).json({message : "Autor atualizado!"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização do livro!`})
        }
    }

    static async excluirAutor(req,res){ // usado para colocar no lugar da função callback do app
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id); //.find - método do moongoso, irá conectar no mongo e buscar tudo
            res.status(200).json({message : "Autor deletado!"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha no delete Autor!`})
        }
    }
};







export default AutorController;