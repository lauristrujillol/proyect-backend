// const fs = require('fs')

// const persona = async () =>{
//     await fs.writeFile("./persona.txt", "¿Hola como estas?");
//     await fs.appendFile("./persona.txt", "\nBien gracias ¿y tu?")
//     let respuesta = await fs.readFile("./persona.txt", "utf8")
//     console.log(respuesta)
//     await fs.unlink("./persona.txt")
// }

// persona();

import {promises as fs} from "fs"

class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, image, code, stock) => {

        ProductManager.id++

        let newProduct = {
            title,
            description,
            price,
            image,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.products));

    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf8")
        return JSON.parse(respuesta)
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
    }

    getProductsById = async (id) => {
        let respuesta3 = await this.readProducts()
        if(!respuesta3.find((product) => product.id === id)){
            console.log("Producto no encontrado")
        } else {
            console.log(respuesta3.find((product) => product.id === id))
        }

        
    }

    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productfilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productfilter));
        console.log("Producto eliminado")
    };

    updateProducts = async ({id, ...producto}) => {
        await this.deleteProductsById(id);
        let productOld = await this.readProducts()
        
        let productModif = [{...producto, id}, ...productOld];
        await fs.writeFile(this.patch, JSON.stringify(productModif));


    };
}

const productos = new ProductManager

// productos.addProduct("Mantequilla de maní", "Mantequilla de maní 100% Natural", 25500, "imagen1", "ref0253", 5)
// productos.addProduct("Yogurt griego deslactosado", "Yogurt griego descremado deslactosado", 35000, "imagen2", "ref0254",)
// productos.addProduct("Tortillas de harina de coco", "Tortillas veganas con ingredientes 100% naturales", 10000, "imagen3", "ref0255", 8)

//productos.getProducts()

// productos.getProductsById(3)

// productos.deleteProductsById(2)

productos.updateProducts({
    title: 'Tortillas de harina de coco',
    description: 'Tortillas veganas con ingredientes 100% naturales',
    price: 12000,
    image: 'imagen3',
    code: 'ref0255',
    stock: 8,
    id: 3
})