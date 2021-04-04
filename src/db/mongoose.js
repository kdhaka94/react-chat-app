import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  autoReconnect: true,
  useFindAndModify:false,
  useCreateIndex:true,
}).catch(err => console.error(err));

const db = mongoose.connection;
try {
  db.on('error', async e => {
    console.log(`Failed to connect to database ${e}`);
    await mongoose.connect(process.env.DB_CONNECTION, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      autoReconnect: true,
    }).catch(err => console.error({ err }));
  })
    .on('disconnected', () => console.log('Database disconnected'))
    .on('reconnected', () => console.log('Database reconnected successfully'))
    .on('fullsetup', () => console.log('client connected to primary and atleast one secondary'))
    .on('all', () => console.log('Client connected to all replicaSet'))
    .on('open', () => console.log('Connected to DB.'))
    .once('open', () => console.log('Connected to DB now'));
} catch (err) {
  console.log({ err });
}

export default mongoose;

