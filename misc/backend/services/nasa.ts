import {Request, Response} from "express";
import {NasaJson} from '../models/nasaJson'
import axios from 'axios';

export const getNasaJson = async (req:Request, res:Response) => {

    let nasaJson: NasaJson;

    await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(response => {
        nasaJson = response.data;
    })
    .catch(error => {
        console.log(error);
    });

    res.send(nasaJson);

}
