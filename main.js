//hola
console.log("Hola Mundo! desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Bióloga entomóloga')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Analista de Ciberseguridad</strong>')
    .pauseFor(2500)
    .start();