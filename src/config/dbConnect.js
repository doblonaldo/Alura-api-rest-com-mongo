import mongoose ,{mongo} from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING); // DB_CONNECTION_STRING - env com o link de conexao com banco

    return mongoose.connection;
}

export default conectaNaDatabase;
