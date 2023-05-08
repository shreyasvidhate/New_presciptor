require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//connect DB
const connectDB = require('./db/connect');

//routers
const patientRouter = require('./routes/patients');
const drugRouter = require('./routes/drugs');
const prescriptionRouter = require('./routes/prescription');

// error handler
const notFoundMiddleware = require('./middleware/not-found');

app.use(express.json());
app.use(bodyParser.json());
// extra packages

// app.get('/api/v1/', (req, res) => {
//   res.send('<h1>Prescription </h1>');
// });

// routes
app.use('/api/v1/patients', patientRouter);
app.use('/api/v1/drugs', drugRouter);
app.use('/api/v1/prescriptions', prescriptionRouter);

app.use(notFoundMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
