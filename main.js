let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #6aabb5;">Creo sitios web y estudio la ingenieria de Entornos virtuales y negocios digitales.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
