const mongoose = require ("mongoose");
const config = require ("../config/database");
const Producto = require("./producto");

//Schema de libros

const Schema = mongoose.Schema({

    ID: {
        type:String,
        required: true
    },
    cantidad: {
        type:Number,
        required: true
    },
    precio_total: {
        type:Number,
        required: true
    },
    ID_producto: {
        type:String,
        required: true
    },
    nombre_producto: {
        type:String,
        required: true
    },
    producto: {
        type:String,
        required: true
    }
});

const Compra = module.exports = mongoose.model("Compra",Schema); //Hacemos que sea accesible desde fuera de la clase

module.exports.getCompraByID = function(ID,callback){ //Todos los accesos desde fuera tienen que tener un export
    const query = {ID:ID};
    Compra.findOne(query,callback);
}

module.exports.addCompra = function(Compra,callback){
    
    Producto.getProductoByID(Compra.ID_producto,(error,productos)=>{
        
        if(productos == null){
            console.log("Error,no hay existencias del producto");
            callback(Error,"Error,no hay existencias del producto");
        }else{
            if(productos.cantidad < Compra.cantidad){
                console.log("Error, no hay cantidad suficiente de ese producto");
                callback(Error,"Error, no hay cantidad suficiente");

            }else{ //Comprobaciones correctas
                    
                Producto.modificarProducto(Compra.ID_producto,"cantidad",(productos.cantidad - Compra.cantidad),(error,productos)=>{
                    if(error){
                        console.log("Error, no se ha podido eliminar el producto de la lista para anadirlo a la compra");
                        callback(Error,"Error, no se ha podido modificar el objeto de la BBDD");
                    }else{
                        console.log("Producto modificado");

                        Compra.producto = JSON.stringify(productos); //Guardamos el JSON en datos de producto
                        Compra.producto.cantidad = Compra.cantidad;

                        Compra.save(callback); //Si todo sale bien guardamos la compra
                    }
                });
            }
        }
    });
}


module.exports.cancelarCompra = function(ID,callback){
    const query = {ID:ID}; //Formato JSON que necesita el delteOne

    Compra.getCompraByID(ID,(error,compra)=>{

        if(error){
            console.log("Error al borrar la compra");
            callback(Error,"Error al borrar la compra");
        }else{
            Compra.deleteOne(query,callback);
        }
    });
}


