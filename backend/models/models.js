//cuando sea constante o funciones de una libreria cuando estan entre llaves 
import {Schema, model} from "mongoose";

const Esquema = new Schema({
    name : String,
    appepat : String,
    matricula : String
})
export const Modelos = new model("Tabla alumnos", Esquema)