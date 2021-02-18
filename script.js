let gooi = () => {

    const worp = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    }

    arr = []
    console.log("Er is gegooid")
    for (i = 0; i < 8; i++){
        arr.push(Math.floor(Math.random()*6))
    }
    arr.forEach(element => {
        if (element === 1){
            worp[1] ++
        } else if(element === 2){
            worp[2] ++
        } else if(element === 3){
            worp[3] ++
        } else if(element === 4){
            worp[4] ++
        } else if(element === 5){
            worp[5] ++
        } else{
            worp[6] ++
        }
        
    });

    function generateTableHead(table, data){
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data){
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }
    let table = document.querySelector("table");
    let data = Object.keys(worp[0]);
    generateTableHead(table, data);

}

document.getElementById("throw").onclick = function(){gooi()}
