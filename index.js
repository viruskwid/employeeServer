const jsonServer = require('json-server')
const empServer = jsonServer.create()
const middleWare = jsonServer.defaults()
const router = jsonServer.router("db.json")
const PORT = 3000 || process.env.PORT

empServer.use(middleWare)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Server started ${PORT}`);
})