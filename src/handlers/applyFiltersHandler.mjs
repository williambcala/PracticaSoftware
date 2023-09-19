import applyFilters from "../controllers/filters/applyfilters.mjs";
import Boom from "@hapi/boom";
import HttpStatusCode from "http-status-codes";
import express from "express";
import multer from "multer";

const applyFiltersHandler = express.Router();
const storage = multer.memoryStorage();//multer con memory
const upload = multer({storage:storage});

applyFiltersHandler.post("/", upload.fields([{ name: 'files[]' }, { name: 'filters' }]), async (req, res, next) => {
    try {
        const body = req.body;
        const files = req.files;
        const response = await applyFilters(body,files);
        return res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
        const err = Boom.isBoom(error) ? error : Boom.internal(error);
        next(err);
    }
});

export default applyFiltersHandler;