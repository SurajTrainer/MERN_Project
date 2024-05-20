import express from 'express'
import { getBook } from '../controller/product.controller.js'

const router = express.Router();

router.get('/', getBook);

export default router;