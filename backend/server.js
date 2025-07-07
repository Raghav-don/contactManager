const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('../backend/routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/contactDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(" MongoDB connected"));

app.use('/contacts', contactRoutes);

app.listen(5003, () => {
    console.log("server started on port 5003");
});

//User details
//schema - user
//userController-crud
//userRoutes-configure the route
//server.js -configure the main route