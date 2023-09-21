import { Router } from 'express';
// eslint-disable-next-line
import applyFiltersHandler from '../applyFiltersHandler.mjs';

const router = Router();

router.get('/', (req, res) => {
  res.send('ok images GET');
});

export const test = () => {};
export default router;
