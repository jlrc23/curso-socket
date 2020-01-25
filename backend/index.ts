import Server from "./classes/server";
import { SERVER_PORT } from "./globals/environtments";
import router from "./routes/routes";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

server.app.use(bodyParser.urlencoded({extended: true}))
server.app.use(bodyParser.json())

server.app.use(cors({origin:true, credentials: true}));


server.app.use('/', router)

server.start(()=>{
    console.log("El server esta escuchando: " + SERVER_PORT)
})