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

    const tableFill = function(array){
        document.getElementById("dp1").innerHTML = array[1]
        document.getElementById("dp2").innerHTML = array[2]
        document.getElementById("dp3").innerHTML = array[3]
        document.getElementById("dp4").innerHTML = array[4]
        document.getElementById("dp5").innerHTML = array[5]
        document.getElementById("dp6").innerHTML = array[6]

    }

    tableFill(worp)

    }

document.getElementById("throw").onclick = function(){gooi()}
