import http from 'http';
import api from './api/api.js';


const server = http.createServer(api);

server.on('error',(error)=>{

    if(error.code === 'E'){
        console.log('Puerto ocupado por otra app')
    }else{console.error('Error al iniciar🤕')}
    

});

server.on('listening', ()=>{
    console.log('Servidor escuchando 🔊')
})

server.listen(3000);