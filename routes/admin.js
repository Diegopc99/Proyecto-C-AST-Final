const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const  Producto = require("../models/producto");

router.post("/registro",(req,res,next)=>{
    let newProducto = new Producto({
        ID: req.body.ID,
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        seccion: req.body.seccion,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        fecha_caducidad: req.body.fecha_caducidad,
        procedencia: req.body.procedencia
    });

    Producto.addProducto(newProducto,(err,Producto)=>{
        if(err){
            res.json({
                success: false,
                msg:"Error en registro"
            });
        }else{
            res.json({
                success: true,
                msg: "Producto registrado"
            });
        }
    })
});

router.get('/consultar', (req, res, next) => {

    Producto.getAllProducts((err,Producto)=>{
        
        if (err){
            res.json({
                success: false,
                msg: "Error al listar"
            });
        } else {
            res.json({
                success:true,
                msg: Producto
            });
            
        }
        
    })
  
    
})

router.delete('/consultar/:id', (req, res, next) => {

    Producto.eliminarProducto(req.params.id, (err)=>{

        console.log("ID del producto: "+req.params.id);
        console.log("Error: "+err);

        if (err){
            res.json({
                success: false,
                msg: "Error al eliminar el producto con ID "+req.params.id
            });
        } else {
            res.json({
                success:true,
                msg: "Producto con ID "+req.params.id+ " ha sido eliminado exitosamente"
            });
            
        }
        
    })
  
    
})

module.exports = router;
