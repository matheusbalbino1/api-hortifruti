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

const delay = 0;
const db: dbProps[] = require("./db.json");

app.get("/api/fruit/all", (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "https://matheusbalbino1.github.io/eccomerce-hortifruti/")
    setTimeout(() => {
        return res.json(db);
    }, delay);

});

app.get("/api/fruit/:id", (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "https://matheusbalbino1.github.io/")
    const params = req.params.id;

    const fruit = db.filter((fruta) => { return fruta.id == Number(params) })

    setTimeout(() => {
        return res.status(200).send(JSON.stringify(fruit))
    }, delay);

});


app.listen(process.env.PORT || 5000, () => {
    console.log("Express started");
});