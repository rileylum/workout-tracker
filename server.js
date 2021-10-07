const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.port || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('tiny'));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const router = require("./routes");

app.use('/', router);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});