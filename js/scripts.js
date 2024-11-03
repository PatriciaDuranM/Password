/*Normas del ejercicio

- El ejercicio debe ser capaz de generar un password de la logitud que le establezcamos.  
- Los caracteres disponibles son:

  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890\!@\#$%^&\*()\_+-={}\[\]:;\<\>,.?/

## Pistas y pasos a seguir

- Crear las 2 cajas iniciales  
- Poner los textos  
- Sincronizar el length del nuevo password con el input range  
- Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

## Principios Importantes para la creación de aplicaciones.

- Las funciones deben tener UNA ÚNICA responsabilidad, Es mejor tener 5 funciones con 2 líneas cada una que tener una sola función que se encargue de 5 tareas distintas.*/

/*Llamar a los elementos*/
const barraElement = document.getElementById("barra");
const passElement = document.getElementById("password");
const buttonElement = document.getElementById("buttonpass");
const lengthElement = document.getElementById("length");

/*Funciones Callback*/

/*Mostrar el valor de la barra en la consola*/
const print = (event) => {
  console.log(event.target.value);
};

/*Actualizar la longitud en el texto "LENGTH"*/
const printLength = () => {
  lengthElement.textContent = `LENGTH: ${barraElement.value}`;
};

/*Cadena de caracteres disponibles para la contraseña*/
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/";

/*Seleccionar un carácter aleatorio de "characters"*/
const randomCharacter = () => {
  return characters[Math.floor(Math.random() * characters.length)];
};

/*Generar una nueva contraseña con la longitud de la barra*/
const newPass = () => {
  let password = "";
  const passLength = barraElement.value;
  for (let i = 0; i < passLength; i++) {
    password = password + randomCharacter();
  }
  passElement.textContent = password;
};

/*Eventos*/
/*numeros en consola*/
barraElement.addEventListener("input", print);
/*numeros en la length*/
barraElement.addEventListener("input", printLength);
/*boton*/
buttonElement.addEventListener("click", newPass);
