/* Importar la biblioteca faker
const faker = require("faker");

// Función para generar datos aleatorios para el formulario
function generarDatosAleatorios() {
  const nombre = faker.name.firstName();
  const apellido = faker.name.lastName();
  const edad = faker.random.number({ min: 18, max: 65 });

  return {
    nombre,
    apellido,
    edad,
  };
}

// Exportar la función para su uso en otros archivos
module.exports = generarDatosAleatorios;
*/

//.....information object of register.....

export const datos = {
  nombre: "Arturo",
  apellido: "Mago",
  company: "ApplyDigital",
  address: "Santa Victoria 492",
  address2: "Santiago",
  state: "Región Metropolitana",
  city: "Santiago",
  zipcode: "8320000",
  mobileNumber: "+56949014078",
};
