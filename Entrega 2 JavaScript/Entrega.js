// Arreglos
const equipos = ["Argentina", "Colombia", "Brasil", "Uruguay"];
const jugadores = [
  { nombre: "Lionel Messi", equipo: "Argantina", goles: 15 },
  { nombre: "Vinicius Junior", equipo: "Brasil", goles: 11 },
  { nombre: "James Rodríguez", equipo: "Colombia", goles: 8 },
  { nombre: "Fede Valverde", equipo: "Uruguay", goles: 3 }
];
const puntuaciones = [42, 35, 38, 28]; // Puntuaciones equipos
const resultados = [true, false, true, true]; // True = ganado, False = perdido


//REDUCE
// Suma las puntuaciones de los equipos
const Puntuacion_Total = puntuaciones.reduce((acum, puntos) => acum + puntos, 0);
console.log("Puntuación total de todos los equipos:", Puntuacion_Total);

// Concatena los nombres de los equipos en un solo string
const Nombres_Equipos = equipos.reduce((acum, equipo) => acum + ", " + equipo);
console.log("Nombres de los equipos:", Nombres_Equipos);

// Calcula el total de goles de los jugadores
const Total_Goles = jugadores.reduce((acum, jugador) => acum + jugador.goles, 0);
console.log("Total de goles de los jugadores:", Total_Goles);

// Cuenta el número de partidos ganados
const Partidos_Ganados = resultados.reduce((acum, resultado) => acum + (resultado ? 1 : 0), 0);
console.log("Número de partidos ganados:", Partidos_Ganados);


//FILTER
// Puntuaciones mayores o iguales a 35
const Puntuaciones_Altas = puntuaciones.filter(puntos => puntos >= 35);
console.log("Puntuaciones mayores o iguales a 35:", Puntuaciones_Altas);

// Equipos cuyo nombre tiene más de 7 caracteres
const Equipos_Nombre_Largo = equipos.filter(equipo => equipo.length > 7);
console.log("Equipos con nombre largo:", Equipos_Nombre_Largo);

// Jugadores que han marcado más de 5 goles
const Jug_Goleadores = jugadores.filter(jugador => jugador.goles > 5);
console.log("Jugadores con más de 5 goles:", Jug_Goleadores);

// Obtiene solo los resultados de partidos ganados
const Solo_Partidos_Ganados = resultados.filter(resultado => resultado === true);
console.log("Resultados de partidos ganados:", Solo_Partidos_Ganados);


//MAP
// Aumenta las puntuaciones de los equipos en 5 puntos
const Puntuaciones_Aumentadas = puntuaciones.map(puntos => puntos + 5);
console.log("Puntuaciones aumentadas en 5:", Puntuaciones_Aumentadas);

// Convierte los nombres de los equipos a mayúsculas
const Equipos_Mayus = equipos.map(equipo => equipo.toUpperCase());
console.log("Nombres de los equipos en mayúsculas:", Equipos_Mayus);

// Crea un arreglo solo con los nombres de los jugadores
const Nombres_Jugadores = jugadores.map(jugador => jugador.nombre);
console.log("Nombres de los jugadores:", Nombres_Jugadores);

// Convierte los resultados a cadenas de texto
const Result_Texto = resultados.map(resultado => resultado ? "Ganado" : "Perdido");
console.log("Resultados como texto:", Result_Texto);


//FOREACH
// Imprime cada puntuación
console.log("Puntuaciones:");
puntuaciones.forEach(puntos => console.log(puntos));

// Imprime cada equipo
console.log("Equipos:");
equipos.forEach(equipo => console.log(equipo));

// Imprime el nombre y goles de cada jugador
console.log("Jugadores:");
jugadores.forEach(jugador => console.log(`Nombre: ${jugador.nombre}, Goles: ${jugador.goles}`));

// Imprime cada resultado (ganado/perdido)
console.log("Resultados:");
resultados.forEach(resultado => console.log(resultado ? "Ganado" : "Perdido"));


//FUNCIONES FLECHA
// Funciones con cero parámetros
const Mensaje_Bienvenida = () => console.log("¡Bienvenido a la Liga Sudamericana de Fútbol!");
const Mostrar_Fecha = () => console.log("Fecha actual:", new Date().toLocaleDateString());

// Funciones con un parámetro
const Mostrar_Equipo = equipo => console.log(`El equipo es: ${equipo}`);
const Goles_Dobles = goles => goles * 2;

// Función con dos parámetros
const Sumar_Goles = (goles1, goles2) => goles1 + goles2;

// Llamadas a las funciones
Mensaje_Bienvenida();
Mostrar_Fecha();
Mostrar_Equipo("Colombia");
console.log("Goles dobles:", Goles_Dobles(5));
console.log("Suma de goles de dos jugadores:", Sumar_Goles(3, 7));




