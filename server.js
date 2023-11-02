//import http from "http";
import "dotenv/config"; //serve para inicar o .env
import app from "./src/app.js";

const PORT = 3000;

/*const rotas = {
    "/":"Cursos de Node.js",
    "/livros":"Rota livros",
    "/autores":"Rota autores"
}*/ 

//const server = http.createServer((req,res)=>{
//    res.writeHead(200,{"Content-Type":"text/html"});
//    res.end(rotas[req.url]);
//});

app.listen(PORT, ()=>{
    console.log("servidor escutando!");
});