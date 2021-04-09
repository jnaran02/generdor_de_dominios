let pronombre = [
    'the',
    'our'
];
let descriptor = [
    'great',
    'big'
];
let noun = [
    'jogger',
    'racoon'
];

function genera() {
    let combinaciones = [];
    let nombre = "<ol>"
    for (let p = 0; p < pronombre.length; p++) {
        for (let d = 0; d < descriptor.length; d++) {
            for (let n = 0; n < noun.length; n++) {
                nombre = nombre + "<li>" + pronombre[p] + descriptor[d] + noun[n] + ".com" + "</li>";
                combinaciones.push(nombre);
                nombre = nombre + "<li>" + pronombre[p] + descriptor[d] + noun[n] + ".net" + "</li>";
                combinaciones.push(nombre);
                nombre = nombre + "<li>" + pronombre[p] + descriptor[d] + noun[n] + ".us" + "</li>";
                combinaciones.push(nombre);
                nombre = nombre + "<li>" + pronombre[p] + descriptor[d] + noun[n] + ".io" + "</li>";
                combinaciones.push(nombre);


            };
        };
    };
    nombre = nombre + "</ol>"
    document.getElementById("dominios").innerHTML = nombre;


};