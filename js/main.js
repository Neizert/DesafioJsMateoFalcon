let ingreso = prompt("Bienvenido a mi tienda de comidas\nElige algo del menú para agregar al carrito: \n1- Pizza\n2- Empanadas\n3- Hamburguesa\n4- Panchos\n5- Papas fritas\n Presiona X para terminar de agregar al carrito");

let precioTotal= 0;
while(ingreso != "x" && ingreso != "X"){
switch (ingreso) {
        case "1" :
        let cantidadp = parseInt(prompt("Pizza precio por unidad = $1000\nEscribe el número de pizzas que deseas comprar:"));
        precioTotal = precioTotal + (cantidadp * 1000);
        break;
        case "2":
        let cantidade = parseInt(prompt("Empanada precio por unidad = $100\nEscribe el número de empanadas que deseas comprar:"));
        precioTotal = precioTotal + (cantidade * 100);
        break;
        case "3":
        let cantidadh = parseInt(prompt("Hamburguesa precio por unidad = $500\nEscribe el número de hamburguesas que deseas comprar:"));
        precioTotal = precioTotal + (cantidadh * 500);
        break;
        case "4":
        let cantidadpn = parseInt(prompt("Pancho precio por unidad = $200\nEscribe el número de panchos que deseas comprar:")); 
        precioTotal = precioTotal + (cantidadpn * 200);
        break;
        case "5":
        let cantidadpf = parseInt(prompt("Papas precio por porción = $200\nEscribe el número de porciones de papas fritas que deseas comprar:"));
        precioTotal = precioTotal + (cantidadpf * 200);
        break;
    default:
        alert("Porfavor ingrese una opción correcta")
        break;
}
ingreso = prompt("Bienvenido a mi tienda de comidas\nElige algo del menú para agregar al carrito: \n1- Pizza\n2- Empanadas\n3- Hamburguesa\n4- Panchos\n5- Papas fritas\n Presiona X para terminar de agregar al carrito");
if(ingreso == "x" || ingreso == "X"){
    let compra = prompt("El precio total es: $" + precioTotal+"\n Desea realizar la compra?:\n1- Si\n2- No" );
    if(compra == 1){
        let pago = prompt("Ingrese la cantidad de dinero con la que desea pagar");
        if(pago >= precioTotal){
            let vuelto = pago - precioTotal;
            alert("Gracias por su compra, su vuelto es de: $" + vuelto);
        }
        else{
            alert("Dinero insuficiente");
            }
        }
        else{
            alert("Que tenga buen día");
        }
    }
}
