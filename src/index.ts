import { Request, response, Response } from "express";
const express = require("express");
const cors = require("cors");
const app = express();


interface dbProps {
    genus: string;
    name: string;
    id: number;
    family: string;
    order: string;
    nutritions: {
        carbohydrates: number;
        protein: number;
        fat: number;
        calories: number;
        sugar: number;
    };
};


app.use(express.json())
app.use((req: Request, res: Response, next: any) => {
    res.header("Acess-Control-Allow-Origin", "");
    app.use(cors());
    next();
})

const db: dbProps[] = require("./db.json");

app.get("/api/fruit/all", (req: Request, res: Response) => {

    if (req.params.Origin === "https://matheusbalbino1.github.io") {

        return res.json(db);
    }
    return


});


app.listen(process.env.PORT || 5000, () => {
    console.log("Express started");
});