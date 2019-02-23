//Form
const viajeForm = document.querySelector('#travelForm');

//Inputs
const name = document.querySelector('#name');
const dateTravel = document.querySelector('#dateTravel');
const travelClass = document.querySelector('#travelClass');
const destiny = document.getElementById('travelDestiny');


//Section
const listConfirm = document.querySelector('#listConfirm');

let contador = 1;

console.log(name.value);

let lista = []
viajeForm.addEventListener('submit', function(event){
    // Previene el default del submit para que no se actualize la página
    event.preventDefault();
    //console.log("Hemos detenido el submit");


    let nameTraveler = name.value;
    let date = dateTravel.value;
    let typeClass = travelClass.value;
    let world = destiny.value;
    // const pasajero ={
    //     name: nameTraveler,

    // } 

    // lista.push(pasajero)

    var allTravelers = [];

    let destinyImg;

    if(world == 'mars'){
        destinyImg = "mars.jpeg"
    } else if(world == 'earth'){
        destinyImg = "earth.jpg"
    } else if(world == 'venus'){
        destinyImg = "venus.jpg"
    } else if(world == 'jupiter'){
        destinyImg = "jupiter.jpg";
    } else{
        destinyImg = "rocket.jpeg"
    }

    console.log(nameTraveler);
    listConfirm.innerHTML +=`
        <div class="orderConfirm">
            <h4 >Nombre viajer@: ${nameTraveler}</h4>
            <p>Fecha programada: ${date} </p>
            <p>Clase programada: ${typeClass} </p>
            <img class="image-destiny" src="assets/img/${destinyImg}">
            <p> Viajer@ número: ${contador} </p>

        </div>
       
    `;
    confirmar.innerHTML =`
        <button>Confirmar</button>
    `;

    contador++;

    const confirm = document.getElementById('confirmar');
    
    confirm.addEventListener('click', function(event){
        
        event.preventDefault();
    
        let nameTraveler = name.value;
        let date = dateTravel.value;
        let typeClass = travelClass.value;
        let numViajeros =contador - 1;
        console.log(nameTraveler);
        listConfirmLast.innerHTML += `
            <div class="confirmTravel">
                <h4 >Nombre viajer@: ${nameTraveler}</h4>
                <p>Clase programada: ${typeClass} </p>
            </div>
        `;

        numeroViajeros.innerHTML = `
            <p>Fecha programada: ${date} </p>
            <p> Número de viajer@s : ${numViajeros} </p>
        `;
       alert("Confirmado tu viaje");
    });
    
});


