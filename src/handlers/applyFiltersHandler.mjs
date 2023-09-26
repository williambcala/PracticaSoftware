import Boom from '@hapi/boom';
import HttpStatusCode from 'http-status-codes';
import express from 'express';

// eslint-disable-next-line
import applyFilters from '../controllers/filters/applyfilters.mjs';

const applyFiltersHandler = express.Router();
// eslint-disable-next-line
applyFiltersHandler.post('/',async(req,res,next)=>{
  try {
    const { body } = req;
    const { files } = req;

    const response = await applyFilters(body, files);
    return res.status(HttpStatusCode.OK).json(response);
  } catch (error) {
    const err = Boom.isBoom(error) ? error : Boom.internal(error);
    next(err);
  }
});
export default applyFiltersHandler;
