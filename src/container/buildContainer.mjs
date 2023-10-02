import ProccesRepository from '../repositories/ProcesRepository.mjs';
import MinioService from '../services/MinioService.mjs';
import ProcessService from '../services/ProcessService.mjs';

const buildContainer = (req, _res, next) => {
  const container = {};

  const processRepository = new ProccesRepository();
  const minioService = new MinioService();
  const processService = new ProcessService({ processRepository, minioService });

  container.processService = processService;

  req.container = container;

  return next();
};
export default buildContainer;
