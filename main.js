class ProductManager {
    constructor(){
        this.products = []
    }

    static id = 0

    addProduct(title, description, price, image, code, stock){
        for(let i = 0; i < this.products.length;i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }

      const newProduct = {
        title, 
        description, 
        price, 
        image, 
        code, 
        stock,
      }

      if(!Object.values(newProduct).includes(undefined)){
        ProductManager.id++
        this.products.push({
            ...newProduct,
             id:ProductManager.id,
        });
      }else{
        console.log("Todos los campos son requeridos")
      }  
    }



    getProduct(){
        return this.products;
    }

    existe (id) {
        return this.products.find((producto) => producto.id === id)
    }

getProductById(id){
    !this.existe(id) ? console.log("Not found") : console.log(this.existe(id));
    
    } 

}
const productos = new ProductManager

//primera llamada = arreglo vacio
console.log(productos.getProduct())

//Agregamos producto
productos.addProduct("Mantequilla de maní", "Mantequilla de maní 100% Natural", 25500, "imagen1", "ref0253", 5)
productos.addProduct("Yogurt griego deslactosado", "Yogurt griego descremado deslactosado", 35000, "imagen2", "ref0254",)
productos.addProduct("Tortillas de harina de coco", "Tortillas veganas con ingredientes 100% naturales", 10000, "imagen3", "ref0255", 8)
productos.addProduct("Choco up", "Snack de chocolate sin azucar con matequilla de maní", 5500, "imagen4", "ref0256", 15)
productos.addProduct("Pulca de acai", "Pulpa de Acai 100% natural sin endulzante", 11500, "imagen5", "ref0256", 5)

//Segunda llamada = arreglo con producto
console.log(productos.getProduct())

//validacion de CODE repetido
productos.addProduct("Mantequilla de maní", "Mantequilla de maní 100% Natural", 25500, "imagen1", "ref0253", 5)

//Busqueda de producto por ID
productos.getProductById(2)

//Busqueda por ID no encontrado
productos.getProductById(20)


