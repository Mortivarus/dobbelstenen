let gooi = () => {

    const worp = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    }

    const uitkomst = []
    console.log("Er is gegooid")
    for (i = 0; i < 8; i++){
        uitkomst.push(Math.floor(Math.random()*6))
    }

    for (let NUMBER in worp) { //Iterates over each item in object 'worp'
        const COUNTNUMBER = uitkomst.filter(geworpen => geworpen == NUMBER).length; //Applies filter to array 'uitkomst' for number of worp, save length to a variable
        worp[NUMBER] = COUNTNUMBER; //Append total of that number to the corresponding object key
        document.getElementById(`dieRow${NUMBER}`).innerHTML = COUNTNUMBER; //Append object totals to the corresponding table rows
    }
}

document.addEventListener("click", gooi)
