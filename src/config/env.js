require('dotenv').config();

const { MONGO_HOST, MONGO_USER, MONGO_PASS, MONGO_DB } = process.env;

module.exports = {
  connectionUri: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`
};
