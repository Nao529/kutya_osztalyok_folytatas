export default class Kutya {
    #obj={};
    #i=0;
    constructor(obj = {kep, nev}, i, szuloElem) {
        this.#obj = obj;
        this.#i = i;
        this.szuloElem = szuloElem;
        this.megjelenit();

        this.buttonElem = document.querySelector(".kartya:last-child button");
        //console.log(this.buttonElem);
        this.buttonElem.addEventListener("click", (event)=> {
            console.log("event.target", event.target);
            console.log("this", this);
            this.#obj.kedvenc = true;
            this.sajatEsemeny();
        })
    } /* a this egy osztályon belül saját objektum példányt jelenti, eseménykezelések esetén, ha function névtelen függvényt használunk, akkor az eseményt kiváltó html dom elemre mutat mint az event target, nyíl függvény esetén, pedig ténylegesen az osztályból képzett, aktuális objektumra */


    sajatEsemeny() {
        console.log("saját esemény");
        const e = new CustomEvent("kedvencekhez", {detail:this.#i});
        window.dispatchEvent(e);
    }


    getObj(){
        return this.#obj;
    }

    setObj(ertek){
        if (ertek === "oltott") {
            this.#obj.oltott = true;
        } else if (ertek === "nem oltott"){
            this.#obj.oltott = false;
        } else {
            console.log("nem megfelelő az érték");
        }
    }

    megjelenit() {
    let kod = `
        <div class="kartya">
            <img src="${this.#obj.kep}" alt="">
            <p>${this.#obj.nev}
            <span>${this.#obj.kedvenc ? "💙":"🥀"}</span>
            </p>
            <button>Kedvenc ${this.#obj.nev}</button>
        </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);    
    }

}