const mongoose = require("mongoose");
require("dotenv").config();

<<<<<<< HEAD
const uri = process.env.IS_MONGODB_CLOUD_URL ? process.env.MONGODB_CLOUD_URL  : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
=======

const isMongoDbUrl = JSON.parse(
    process.env.IS_MONGODB_CLOUD_URL ? process.env.IS_MONGODB_CLOUD_URL : "false"
);
const uri = isMongoDbUrl
    ? process.env.MONGODB_CLOUD_URL
    : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
const connectWithDb = async (cb, em) => {
  const connectionResult = await mongoose.connect(uri, options);
  // eslint-disable-next-line no-console
  console.log(
    `Connected to mongoDB on database:
    ${connectionResult.connections[0].name} at ${new Date().toDateString()}`
  );
  if (cb && em) cb(em);
};
module.exports = connectWithDb;
