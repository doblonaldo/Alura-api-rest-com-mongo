import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "../routes/index.js";


const conexao = await conectaNaDatabase();

conexao.on("error",(erro)=>{
    console.error("erro de conexão", erro);
});

conexao.once("open",()=>{
    console.log("conectado!");
})

const app = express();
routes(app)
// app.use(express.json());//midleware, atribui funções // foi atualizado

/*const livros = [ // antigo para teste
    {
        id:1,
        titulo:"livro 1"
    },
    {
        id:2,
        titulo:"livro 2"
    }
]*/

/*function buscaLivro(id){ // antigo, usado junto com a const livros
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    })
}*/

// app.get("/",(req,res)=>{
//     res.status(200).send("Curso de Node.Js");
// })

// app.get("/livros/:id",(req,res)=>{
//     const index = buscaLivro(req.params.id); // params - passando id como parametro e ID é o nome do parametro
//     res.status(200).json(livros[index]);
// })

// app.post("/livros",(req,res)=>{ antigo, usado junto com a const livros, atualizado para controller
//     livros.push(req.body);
//     res.status(201).send("livro cadastrado");
// })

// app.put("/livros/:id",(req,res)=>{
//     const index = buscaLivro(req.params.id); // params - passando id como parametro e ID é o nome do parametro
//     livros[index].titulo = req.body.titulo;
//     res.status(200).json(livros);
// })

// app.delete("/livros/:id",(req,res)=>{ // deleta
//     const index = buscaLivro(req.params.id);// params - passando id como parametro e ID é o nome do parametro
//     livros.splice(index,1);
//     res.status(200).json(livros);
// })

export default app;
