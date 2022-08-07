import { Request, Response } from "express";
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
app.use(cors());


const db: dbProps[] = require("./db.json");

app.get("/api/fruit/all", (req: Request, res: Response) => {


    return res.json(db).status(400);



});


app.listen(process.env.PORT || 5000, () => {
    console.log("Express started");
});