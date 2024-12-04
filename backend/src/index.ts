import colors from 'colors'
import server from "./server"

const port = process.env.PORT ||  4000;
server.listen(port, () => {
    console.log( colors.bgGreen.white.italic('servidor funcionando:'), port)
});

type Product = {
    id:number
    price:number
    name:string
    image?:string
}
let product : Product = {
    id:1,
    price:999,
    name:'Producto 1'
}
let product2 : Product = {
    id:2,
    price:999,
    name:'Producto 2',
    image:'s'
}