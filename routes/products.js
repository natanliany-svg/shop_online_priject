import express from "express";
import jsonFunc from "../services/file.service.js";

const PATH = process.env.DATA_BASE;
const products = await jsonFunc.readFromJson(`${PATH}products.json`);

const router = express.Router();

router.get("/", (req, res) => {
    let filterProducts = [...products];

    const { inStock } = req.query;
    const { maxPrice } = req.query;
    const { search } = req.query;

    console.log(filterProducts);
    res.json(products);

});

export default router;