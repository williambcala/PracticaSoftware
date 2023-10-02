import ProcessModel from '../models/Process.mjs';

class ProccesRepository {
  // eslint-disable-next-line
  async save(process) {
    const newProcess = new ProcessModel();
    newProcess.filters = process.filters;
    await newProcess.save();
    return newProcess;
  }
}
export default ProccesRepository;
