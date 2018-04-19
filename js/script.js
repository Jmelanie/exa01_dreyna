function agregar(){
    if(document.form.contra.value=="1230"){
		window.open("index2.html");
	}
	else{
		alert("contraseña incorrecta");
	}
	
}
function add(){
    i++;
 var nombre=document.getElementById("sele").value;
 var y= document.getElementById("productos:");
 y.innerHTML="<tr><td>"+i+"<label>Productos: " + producto +"</label><br>"+ "</td><td>" + precio + "</td><td>" + cantidad + "</td><td>" + subtotal + "</td><td>" + "</td></tr>";
var fil = document.createElement("tr");
   	fil.innerHTML=fila;
	tb.appendChild(fil);
}