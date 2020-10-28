import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

// Set up the express app
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
const port = process.env.PORT || 5300;


app.listen(port, () => {
  console.log(`server running`)
});