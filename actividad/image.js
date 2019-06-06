// Crea un listener de error que cargue una imagen por defecto (dogge.jpg)
window.onload = () => {
  const image = new Image();
  image.style = 'width: 256px';
  image.src = 'invalid-image';
  image.addEventListener('error', (event)=> event.target.src = './dogge.jpg' )
  document.querySelector('div').append(image);
};