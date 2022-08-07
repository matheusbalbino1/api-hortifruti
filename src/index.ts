import { Request, Response } from "express";
const express = require("express");
const cors = require("cors");
const app = express();

const URL = process.env.URL || "*"
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
app.use(cors());


const db: dbProps[] = require("./db.json");

app.get("/api/fruit/all", (req: Request, res: Response) => {

    res.header("Access-Control-Allow-Origin", URL)
    return res.json(db).status(400);

});


app.listen(process.env.PORT || 5000, () => {
    console.log("Express started");
});