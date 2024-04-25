import { getWalkers } from "./database.js"


const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget =clickEvt.target
        if(cityTarget.dataset.type === "city") {
        window.alert(`${cityTarget.dataset.walkerName} is servicing this city`)
        }
    }
)

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li data-walker-name="${walker.name}"
                            data-type="city">${walker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML;
}

