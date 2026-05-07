import express from 'express';
import {
    createInsumo,
    getInsumos
} from '../controllers/inventory.controller.js';

import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', verifyToken, getInsumos);
router.post('/', verifyToken, createInsumo);

export default router;