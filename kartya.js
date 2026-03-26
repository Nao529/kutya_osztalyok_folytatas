export function megjelenit(obj = {kep, nev}, szuloElem) {
    let kod = `
        <div class="kartya">
            <img src="${obj.kep}" alt="">
            <p>${obj.nev}</p>
        </div>`;
    szuloElem.innerHTML += kod;    
}