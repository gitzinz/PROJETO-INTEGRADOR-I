//@ts-nocheck
import { Router } from "express";
import ProductController from "../controllers/product.controller";
import "./product.docs";

const router = Router();

router.get("/", ProductController.findAll.bind(ProductController));

router.get("/:sku", ProductController.findBySku.bind(ProductController));

router.post("/", ProductController.create.bind(ProductController));

router.put("/:sku", ProductController.update.bind(ProductController));

router.delete("/:sku", ProductController.deleteBySku.bind(ProductController));

export default router;
