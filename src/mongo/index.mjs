import mongoose from 'mongoose';

export const startConnection = async () => {
  const url = encodeURI('mongodb+srv://williamBanguera:I6DCgwVkEM7c9vPs@cluster0.mipqcmk.mongodb.net/?retryWrites=true&w=majority');
  await mongoose.connect(url);
};

export default startConnection;
