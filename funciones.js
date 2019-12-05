function validar() { 
	var usuario, contraseña;

	usuario = document.getElementById("usuario2").value;
	contraseña = document.getElementById("clave2").value;

	if (usuario != "" && contraseña != "") {
		if (usuario != "SkyIsTheLimit" || contraseña != "SantiagoVaquero1029384756") {
			alert("Usuario o contraseña incorrectos");
			return false; 
		}
	}else{
		alert("Ningún campo puede estar vacío");
		return false;
	}
}



function validar2() { 

  let usuario, contraseña;

  usuario = document.getElementById("usuario2").value;
  contraseña = document.getElementById("clave2").value;

  let lista = {
    usuario, 
    contraseña
  };

   if (usuario != "" && contraseña != "") {


  if (localStorage.getItem('login') === null) {
    let login = [];
    login.push(lista);
    localStorage.setItem('login', JSON.stringify(login));
  }else{
    let login = JSON.parse(localStorage.getItem('login'));
    login.push(lista);
    localStorage.setItem('login', JSON.stringify(login));

  }

  alert("Registrado con éxito. Favor de iniciar sesión");

}else{
	  alert("Ningún campo puede estar vacío");
  }
}


  
function validar3(){

  	let usuario, contraseña;

  	usuario = document.getElementById("usuario2").value;
  	contraseña = document.getElementById("clave2").value;
  	let login = JSON.parse(localStorage.getItem('login'));

  	if (usuario != "" && contraseña != "") {

  	for(let i = 0; i < login.length; i++) {

  	 
    if(login[i].usuario == usuario && login[i].contraseña == contraseña) {
			location.href="https://santiagovp10.github.io/alfas1/";	
		}
 
	}
				alert("Usuario o contraseña incorrectos");

  }else{
		alert("Ningún campo puede estar vacío");
	}
}



function agregar(){

	let destino = document.getElementById('destino2').value;
	let fecha = document.getElementById('fecha2').value;
	let horario = document.getElementById('hora2').value;
	let costo = document.getElementById('cos_per2').value;
	let vuelos = document.getElementById('vue_dis2').value;


	let lista = {
		destino,
		fecha,
		horario,
		costo,
		vuelos
	};

  if (destino != "" && fecha != "" && horario != "" && costo != "" && vuelos != "" ) {

	if (localStorage.getItem('listado') === null) {
		let listado = [];
		listado.push(lista);
		localStorage.setItem('listado', JSON.stringify(listado));
	}else{
		let listado = JSON.parse(localStorage.getItem('listado'));
		listado.push(lista);
		localStorage.setItem('listado', JSON.stringify(listado));

	}
	mostrar();
	document.getElementById('contenedor2').reset();
}else{
	alert("Ningún campo puede estar vacío");
}
}



function eliminar() {
  
  let listado = JSON.parse(localStorage.getItem('listado'));
  let destino = document.getElementById('destino2').value;
 
  for(let i = 0; i < listado.length; i++) {
    if(listado[i].destino == destino) {
      listado.splice(i, 1);
    }
  }
  
  localStorage.setItem('listado', JSON.stringify(listado));
}



function mostrar() {
  let listado = JSON.parse(localStorage.getItem('listado'));
  console.log(listado);

    for(let i = 0; i < listado.length; i++) {

    let destino = listado[i].destino;
    let fecha = listado[i].fecha;
    let horario = listado[i].horario;
    let costo = listado[i].costo;
    let vuelos = listado[i].vuelos;


  document.getElementById('enlistar').innerHTML += destino; 
  document.getElementById('enlistar').innerHTML += fecha;
  document.getElementById('enlistar').innerHTML += horario;
  document.getElementById('enlistar').innerHTML += costo;
  document.getElementById('enlistar').innerHTML += vuelos;

} 
}

mostrar();

function mostrar2(){
  mostrar();
}


function reservar(){
  let destino2 = document.getElementById('destino3').value;
  let fecha2 = document.getElementById('fecha3').value;
  let hora2 = document.getElementById('hora3').value;
  let asientos = document.getElementById('per2').value;
  let asientos2 = parseFloat(asientos);



  let listado = JSON.parse(localStorage.getItem('listado'));

  for(let i = 0; i < listado.length; i++) {

    if (listado[i].destino == destino2 && listado[i].fecha == fecha2 && listado[i].horario == hora2) {
     
      for(let i = 0; i < listado.length; i++) {
        let vuelos = parseFloat(listado[i].vuelos);
        if (vuelos > asientos2) {
          alert("Vuelo disponible. Favor de realizar su cotización.");
        }else{
          alert("Lo sentimos, por el momento la cantidad de boletos disponibles para este vuelo es insuficiente.");
        }
      }
    }else{
      alert("Vuelo no disponible. Consulta la sección de vuelos.");
    }
}
}




// function cotizar(){
//     let num = document.getElementById('per2').value;
//        let listado = JSON.parse(localStorage.getItem('listado'));
//     console.log(costo);

//     alert()

// }