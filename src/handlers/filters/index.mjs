import { Router } from 'express';
import multer from 'multer';
import applyFiltersHandler from './applyFiltersHandler.mjs';

const router = Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.array('images[]'), applyFiltersHandler);

export const test = () => {};
export default router;
