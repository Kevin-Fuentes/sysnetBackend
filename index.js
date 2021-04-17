const express = require('express')
const conectarDb = require('./config/db')
const cors = require('cors')
//CREAR EL SERVIDOR 
const app = express()

//CONEXION BASE DE DATOS
conectarDb()

//HABILITAR CORS
const whiteList=['http://localhost:3000']

const corsOptions={

origin: (origin,callback)=>{
const existe = whiteList.some(dominio=> dominio===origin)
if(existe){
     callback(null,true)
}else{
callback(new Error('No Permitido por CORS'))
}

} 
}

app.use(cors())


app.use(express.json({extended:true}))


const port = process.env.port || 4000


app.use('/',require('./routers/api'))
app.use('/api/usuarios',require('./routers/usuarios'))
app.use('/api/auth',require('./routers/auth'))
app.use('/api/registerUser',require('./routers/registerUser'))



app.listen(port,'0.0.0.0',()=>{
     console.log('Conectado en el puerto:',port)
})

