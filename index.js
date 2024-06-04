const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
const handleErrorMiddleware = require('./src/middlewares/handleErrors');
const initAppRoutes = require('./src/routes/index');

dotenv.config();

class App {
    start() {
        const app = express();
        const port = process.env.PORT;

        const Router = express.Router();
        app.use(express.json());

        app.use(initAppRoutes(Router));


        app.get('/health', (req, res) => {
            res.send('okay');
        })

        app.use((req, res) => {
            res.status(400).json({ message: "Path not found" })
        })

        app.listen(port, () => {
            console.info('Listening on port: ', port);
        });

        app.use(handleErrorMiddleware);
    }
}

mongoose.connect(process.env.MONGO_URL, { dbName: 'Test' }).then(() => {
    console.info('MongoDb connection successful');
    const app = new App();
    app.start();
})