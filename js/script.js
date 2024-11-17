document.querySelector('.icon-hamburguesa').addEventListener('click', function() {
    let menu = document.querySelector('nav');
    // Agregar o modificar atributo
    if (!menu.hasAttribute('active')) {
      // Agregar el atributo si no existe
      menu.setAttribute('active', "");
    } else {
      // Hacer algo con el valor actual, por ejemplo, cambiarlo y actualizar el atributo
      menu.removeAttribute('active');
    }
  });
  
  
  
  document.querySelector('.icon-close-menu').addEventListener('click', function() {
    let menu = document.querySelector('nav'); menu.removeAttribute('active');
  });
