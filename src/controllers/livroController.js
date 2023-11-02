import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js"

class LivroController{ // classe criada para controlar toda a parte dos livros
    static async listarLivros(req,res){ // usado para colocar no lugar da função callback do app
        try {
            const listaLivros = await livro.find({}); //.find - método do moongoso, irá conectar no mongo e buscar tudo
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição!`})
        }
    }

    static async listarLivroPorId(req,res){ // usado para colocar no lugar da função callback do app
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id); //.find - método do moongoso, irá conectar no mongo e buscar tudo
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição do livro!`})
        }
    }

    static async cadadastrarLivro(req,res){ // usado para criar livros usando JSON
        const novoLivro = req.body; // cria usando modelo Livro
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro,autor:{...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({message:"Criado com sucesso!", livro: livroCriado});
        } catch (error) {
            res.status(500).json({message:`${error.message} - falha ao adicionar livro!`})
        }
    }

    static async atualizarLivro(req,res){ // usado para colocar no lugar da função callback do app
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id,req.body); //.find - método do moongoso, irá conectar no mongo e buscar tudo
            res.status(200).json({message : "Livro atualizado!"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização do livro!`})
        }
    }

    static async excluirLivro(req,res){ // usado para colocar no lugar da função callback do app
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id); //.find - método do moongoso, irá conectar no mongo e buscar tudo
            res.status(200).json({message : "Livro deletado!"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha no delete do livro!`})
        }
    }

    static async listaLivrosPorEditora(req,res){
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({editora:editora}) // primeiro é a propriedade da classe a segunda é a query
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição do livro!`})
        }
    }
};







export default LivroController;