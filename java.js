function IMC(){
    let peso = parseFloat(document.getElementById("p1").value)
    let pies= parseFloat(document.getElementById("pie").value)
    let pulgadas = parseFloat(document.getElementById("pulg").value)
    let altura = (pies*12)+pulgadas;
    let imc = 703*peso/(altura**2)
    let clasi = ""
    if (imc < 18.5) {
        clasi = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        clasi = "Normal";
    } else if (imc >= 25 && imc < 30) {
        clasi = "Exceso de peso";
    } else {
        clasi = "Obeso";
    }
    document.getElementById("cla").innerHTML = clasi;
    document.getElementById("IMC").innerHTML = imc.toFixed(1);
}
function Perro(){
    let edadp = parseFloat(document.getElementById("ed").value)
    r = Math.log(edadp)
    edadph = 16*r+31
    document.getElementById("eph").innerHTML = edadph.toFixed(1);
}
function base(){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var año = document.getElementById("año").value
    var correo = "";
    var dividir = nombre.split(" ");
    var prn = dividir[0].charAt(0)+ dividir[1].charAt(0);
    dividir = apellido.split(" ");
    var sdn= dividir[1].slice(-3,-1)+dividir[0].slice(-3);
    var añon = año.substring(2,4)+año.substring(8,10)+año.substring(5,7)
    correo = prn+sdn+añon
    correo += "@gmail.com";
    document.getElementById("base").textContent = correo;
}
        function racion() {
            event.preventDefault();
            var edadCachorro = parseFloat(document.getElementById('edad').value);
            var pesoCachorro = parseFloat(document.getElementById('peso').value);
            function calcularCantidadCroquetas(edadMeses, pesoKg) {
                var porcentajeDiario = 0;
                if (edadMeses >= 2 && edadMeses < 4) {
                    porcentajeDiario = 5;
                } else if (edadMeses >= 4 && edadMeses < 6) {
                    porcentajeDiario = 4;
                } else if (edadMeses >= 6 && edadMeses < 8) {
                    porcentajeDiario = 3;
                } else if (edadMeses >= 8 && edadMeses < 10) {
                    porcentajeDiario = 2;
                } else if (edadMeses >= 10 && edadMeses <= 12) {
                    porcentajeDiario = 1;
                } else {
                    return 0;
                }
                var cantidadCroquetas = (porcentajeDiario / 100) * pesoKg * 1000;
                return cantidadCroquetas;
            }
            function calcularCantidadNatural(edadMeses, pesoKg) {
                var porcentajeDiario = 0;
                if (edadMeses >= 2 && edadMeses < 4) {
                    porcentajeDiario = 10;
                } else if (edadMeses >= 4 && edadMeses < 6) {
                    porcentajeDiario = 8;
                } else if (edadMeses >= 6 && edadMeses < 8) {
                    porcentajeDiario = 6;
                } else if (edadMeses >= 8 && edadMeses < 10) {
                    porcentajeDiario = 4;
                } else if (edadMeses >= 10 && edadMeses <= 12) {
                    porcentajeDiario = 3;
                } else {
                    return 0;
                }
                var cantidadNatural = (porcentajeDiario / 100) * pesoKg * 1000;
                return cantidadNatural;
            }
            var cantidadNatural = calcularCantidadNatural(edadCachorro, pesoCachorro);
            document.getElementById("resultado-natural").innerHTML= "El cachorro debe consumir " + cantidadNatural.toFixed(2)+ " gramos de comida natural al dia.";
            var cantidadCroquetas = calcularCantidadCroquetas(edadCachorro, pesoCachorro);
            document.getElementById("resultado").innerHTML = "El cachorro debe consumir " + cantidadCroquetas.toFixed(2) + " gramos de croquetas al día.";
        }

