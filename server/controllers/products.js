import express from 'express';
import mongoose from 'mongoose';
import ProductMessage from "../models/productMessage.js";


const router = express.Router();

// retourner la liste des produits paginée par lot de 20 
export const getProducts = async (req, res) => {
    
    try {
        
        const productMessage = await ProductMessage.find();
        res.status(200).json(productMessage);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// retourner un produit par ID 
export const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await ProductMessage.findById(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// create a product
export const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new ProductMessage(product);

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {

        res.status(409).json({ message: error.message });
    }
}


export default router;