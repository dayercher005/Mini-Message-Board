import express from 'express'
import path from 'node:path'
import messages from "./routes/index.js"
import { fileURLToPath } from 'node:url';

const PORT = 8080;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {

    app.get("/", (request, response) => {
        response.render("index", { title: "Mini Message-Board", messages: messages })
    });

    console.log("Server is running on http://localhost:8080")

})