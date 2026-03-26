/* ez az osztály fogja a Kutya-t példányosítani annyiszor, ahány eleme van a lsistámal
*/

import Kutya from "./Kutya.js";

export default class Kutyak {
    #lista=[];
    constructor(lista, szuloElem) {
        this.#lista =lista;
        this. szuloElem = szuloElem
        this.megjelenit();
    }

    megjelenit() {
        /* itt kell végigmenni a listán */
        this.szuloElem
        this.#lista.forEach(
            (elem, i)=> {
                const k = new Kutya(elem, i, this. szuloElem);
            }
        );
    }
}