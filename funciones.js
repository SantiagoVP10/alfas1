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
			location.href="https://santiagovp10.github.io/alfas1/int_usu.html";	
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
	document.getElementById('contenedor2').reset();
}else{
	alert("Ningún campo puede estar vacío");
}
location.reload();
}



function eliminar() {
  
  let listado = JSON.parse(localStorage.getItem('listado'));
  let destino4 = document.getElementById('destino4').value;
  let fecha4 = document.getElementById('fecha4').value;
  let hora4 = document.getElementById('hora4').value;



  for(let i = 0; i < listado.length; i++) {
    if(listado[i].destino == destino4 && listado[i].fecha == fecha4 && listado[i].horario == hora4) {
      listado.splice(i, 1);
    }
  }
  
  localStorage.setItem('listado', JSON.stringify(listado));
  location.reload();
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

document.getElementById('enlistar').innerHTML +=`<div class="card mb-3">
        <div id="conte">
          <p>Destino: ${destino} <br> Fecha: ${fecha} <br> Horario: ${horario} <br> Costo por boleto: ${costo} <br> Vuelos disponibles: ${vuelos} 
          </p>
        </div>
      </div>`;
} 
}

mostrar();
function mostrar2(){
  mostrar();
}


function reservar(e){
  let destino2 = document.getElementById('destino3').value;
  let fecha2 = document.getElementById('fecha3').value;
  let hora2 = document.getElementById('hora3').value;
  let asientos = document.getElementById('per2').value;
  let asientos2 = parseFloat(asientos);



  let listado = JSON.parse(localStorage.getItem('listado'));
if (destino2 != "" && fecha2 != "" && hora2 != "" && asientos != "" ) {
  for(let i = 0; i < listado.length; i++) {

    if (listado[i].destino == destino2 && listado[i].fecha == fecha2 && listado[i].horario == hora2) {
     
      for(let i = 0; i < listado.length; i++) {
        let vuelos = parseFloat(listado[i].vuelos);
        if (vuelos > asientos2) {
          alert("Vuelo reservado. Para realizar el pago de tus boletos contacta este numero: 4272010048.");

          let lista = {
    destino2,
    fecha2,
    hora2,
    asientos
  };

  if (localStorage.getItem('listado2') === null) {
    let listado2 = [];
    listado2.push(lista);
    localStorage.setItem('listado2', JSON.stringify(listado2));
  }else{
    let listado2 = JSON.parse(localStorage.getItem('listado2'));
    listado2.push(lista);
    localStorage.setItem('listado2', JSON.stringify(listado2));

  }
  
  document.getElementById('contenedor').reset();
  mostrar3();
  e.preventDefault();

  
        



        }else{
          alert("Lo sentimos, por el momento la cantidad de boletos disponibles para este vuelo es insuficiente.");
        }
      }
    }else{
      alert("Vuelo no disponible. Consulta la sección de vuelos.");
    }
}
}else{
  alert("Ningún campo puede estar vacío");
}
}



function mostrar3(){

  let listado2 = JSON.parse(localStorage.getItem('listado2'));


    for(let i = 0; i < listado2.length; i++) {

    let destino2 = listado2[i].destino2;
    let fecha2 = listado2[i].fecha2;
    let hora2 = listado2[i].hora2;
    let asientos = listado2[i].asientos;


  document.getElementById('enlistar2').innerHTML +=`<div class="card mb-3">
        <div id="conte2">
          <p>Destino: ${destino2} <br> Fecha: ${fecha2} <br> Horario: ${hora2} <br> Asientos ocupados: ${asientos}
          </p>
        </div>
      </div>`;

} 
}

function eliminar2() {
  
  let listado2 = JSON.parse(localStorage.getItem('listado2'));
  let destino3 = document.getElementById('destino3').value;
  let fecha3 = document.getElementById('fecha3').value;
  let hora3 = document.getElementById('hora3').value;



  for(let i = 0; i < listado2.length; i++) {
    if(listado2[i].destino2 == destino3 && listado2[i].fecha2 == fecha3 && listado2[i].hora2 == hora3) {
      listado2.splice(i, 1);
    }alert("Vuelo cancelado exitosamente.")
  }
  
  localStorage.setItem('listado2', JSON.stringify(listado2));
  location.reload();
}
