import Process from "../../models/Process.mjs"
import Joi from "joi";
import Boom from "@hapi/boom";
import { BLUR_FILTER, GREYSCALE_FILTER, NEGATIVE_FILTER } from "../../commons/constans.mjs";
import sharp from "sharp";

const PayloadValidation = Joi.object({
    filters:Joi.array().min(1).items(Joi.string().valid(
        NEGATIVE_FILTER,GREYSCALE_FILTER,BLUR_FILTER
    )),
   
})

const applyFilters = async (payload, files) => {
    try {
        await PayloadValidation.validateAsync(payload);

        const filters = payload.filters;
        const processedFiles = [];

        for (const file of files['files[]']) {
            const { originalname, buffer } = file;

            const image = sharp(buffer);

            for (const filter of filters) {
                switch (filter) {
                    case BLUR_FILTER:
                        image.blur();
                        break;
                    case GREYSCALE_FILTER:
                        image.greyscale();
                        break;
                    case NEGATIVE_FILTER:
                        image.negate();
                        break;
               
                }
            }

            // Convierte la imagen procesada de sharp a un búfer
            const processedBuffer = await image.toBuffer();

            // Guarda el archivo procesado en el arreglo
            processedFiles.push({ originalname, buffer: processedBuffer });
        }

        const newProcess = new Process();
        newProcess.filters = filters;
        newProcess.processedFiles = processedFiles;
        await newProcess.save();

        return "Filtros aplicados";

    } catch (error) {
        throw Boom.badData(error.message, { error });
    }
};

export default applyFilters;

