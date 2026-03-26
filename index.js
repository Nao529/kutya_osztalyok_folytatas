import { KUTYALISTA } from "./adat.js";
import { megjelenit } from "./kartya.js";
import Kutyak from "./Kutyak.js";


const szuloElem = document.querySelector(".tarolo");
const kedvencElem = document.querySelector(".kedvencek");

new Kutyak(KUTYALISTA, szuloElem);
const KEDVENCLISTA = [];



window.addEventListener("kedvencekhez", (event)=> {
    console.log(event.detail);
    KEDVENCLISTA.push(KUTYALISTA[event.detail]);
    new Kutyak(KEDVENCLISTA, kedvencElem);
});