
"use strict";

// ==================================================
// BLUE LOCK - LA ESTRATEGIA PERFECTA
// Ciencias Computacionales - 8.º EBI
// ==================================================

// CONFIGURACIÓN PARA PRUEBAS
// true  = espera 30 segundos antes de responder
// false = permite responder inmediatamente

const TEMPORIZADOR_ACTIVO = true;
const TIEMPO_ESPERA = 30;

// ==================================================
// IMÁGENES
// ==================================================

const IMG = Array.from(
  { length: 20 },
  (_, i) =>
    `img/blue-lock-${String(i + 1).padStart(2, "0")}`
);

// Nombres exactos de los archivos preparados

const imagenes = [
  "blue-lock-01-team.webp",
  "blue-lock-02-action-nagi.webp",
  "blue-lock-03-duo-run.webp",
  "blue-lock-04-action-barou.webp",
  "blue-lock-05-white-hair-ball.webp",
  "blue-lock-06-isagi-green.webp",
  "blue-lock-07-blue-pose-vertical.webp",
  "blue-lock-08-chain-team.webp",
  "blue-lock-09-selfie-vertical.webp",
  "blue-lock-10-stadium-run.webp",
  "blue-lock-11-cosmic-player-vertical.webp",
  "blue-lock-12-closeup-eyes.webp",
  "blue-lock-13-two-players-kick.webp",
  "blue-lock-14-shiro-card-vertical.webp",
  "blue-lock-15-chain-crop.webp",
  "blue-lock-16-orange-smile.webp",
  "blue-lock-17-blue-face.webp",
  "blue-lock-18-team-vertical.webp",
  "blue-lock-19-split-team-vertical.webp",
  "blue-lock-20-five-players.webp"
];

function imagen(numero) {
  return "img/" + imagenes[numero - 1];
}

// ==================================================
// DESAFÍOS
// ==================================================

const desafios = [
  {
    etapa: "ETAPA 1 · COMPRENDER",
    titulo: "Una instrucción precisa",
    imagen: 6,
    tipo: "opcion",

    teoria: `
      Una instrucción indica una acción concreta.
      Para que pueda ejecutarse correctamente,
      debe ser clara y precisa.
      Las indicaciones ambiguas pueden provocar
      resultados diferentes.
    `,

    ejemplo: `
      "Pasá la pelota" es menos preciso que
      "Pasá la pelota al compañero que está
      a tu derecha".
    `,

    pregunta: `
      Isagi necesita darle una indicación
      a un compañero.

      ¿Cuál es la instrucción más precisa?
    `,

    opciones: [
      "Jugá mejor.",
      "Hacé algo con la pelota.",
      "Pasá la pelota al compañero ubicado a tu derecha.",
      "Intentá una buena jugada."
    ],

    correcta: 2,

    acierto: `
      ¡Excelente! La instrucción indica
      exactamente qué acción realizar
      y hacia dónde dirigir la pelota.

      Las instrucciones precisas reducen
      los errores de interpretación.
    `,

    error: `
      Esa indicación puede interpretarse
      de diferentes maneras.

      Una buena instrucción debe explicar
      claramente qué acción realizar.
      Buscá la opción más específica.
    `
  },

  {
    etapa: "ETAPA 1 · COMPRENDER",
    titulo: "El orden importa",
    imagen: 8,
    tipo: "opcion",

    teoria: `
      Una secuencia es un conjunto de
      instrucciones organizadas en un orden.

      Cambiar ese orden puede modificar
      el resultado de un procedimiento.
    `,

    ejemplo: `
      Para realizar un pase primero necesitamos
      tener la pelota bajo control.

      No podemos pasar una pelota que todavía
      no hemos recibido.
    `,

    pregunta: `
      Un jugador debe recibir la pelota,
      controlarla y realizar un pase.

      ¿Cuál es la secuencia correcta?
    `,

    opciones: [
      "Pasar → Recibir → Controlar",
      "Recibir → Controlar → Pasar",
      "Controlar → Pasar → Recibir",
      "Pasar → Controlar → Recibir"
    ],

    correcta: 1,

    acierto: `
      ¡Correcto! Primero se recibe la pelota,
      después se controla y finalmente
      se realiza el pase.

      Las acciones respetan un orden lógico.
    `,

    error: `
      Revisá qué acciones necesitan
      que otras ocurran primero.

      Para controlar la pelota debemos
      recibirla y para pasarla debemos
      tenerla bajo control.
    `
  },

  {
    etapa: "ETAPA 2 · ANALIZAR",
    titulo: "Construí la jugada",
    imagen: 10,
    tipo: "orden",

    teoria: `
      Un algoritmo es un conjunto finito
      y ordenado de instrucciones precisas
      que permite resolver un problema.

      Las instrucciones deben organizarse
      respetando sus dependencias.
    `,

    ejemplo: `
      Para preparar una bebida:
      buscar un vaso → colocar agua →
      servir la bebida.
    `,

    pregunta: `
      Ordená las instrucciones para completar
      una jugada de Blue Lock.

      Utilizá las flechas para mover cada paso.
    `,

    pasos: [
      "Patear hacia el arco.",
      "Controlar la pelota.",
      "Recibir un pase.",
      "Observar la posición del arco."
    ],

    ordenCorrecto: [2, 1, 3, 0],

    acierto: `
      ¡Jugada completada!

      Organizaste las acciones respetando
      sus dependencias.

      Un algoritmo bien ordenado permite
      alcanzar el objetivo previsto.
    `,

    error: `
      La secuencia todavía presenta un problema.

      Pensá qué necesita haber ocurrido antes
      de ejecutar cada acción.

      ¿Podemos controlar antes de recibir?
      ¿Podemos patear antes de tener la pelota?
    `
  },

  {
    etapa: "ETAPA 2 · ANALIZAR",
    titulo: "¿Qué es un algoritmo?",
    imagen: 12,
    tipo: "opcion",

    teoria: `
      Un algoritmo no es simplemente
      una lista de ideas.

      Debe indicar acciones comprensibles,
      estar organizado y tener una finalidad.

      Además, debe poder terminar.
    `,

    ejemplo: `
      "Ganar el partido" expresa un objetivo.

      "Recibir → controlar → pasar"
      expresa un procedimiento.
    `,

    pregunta: `
      ¿Cuál de estas opciones describe mejor
      un algoritmo?
    `,

    opciones: [
      "Una idea que todavía no sabemos ejecutar.",
      "Un conjunto de instrucciones ordenadas para resolver un problema.",
      "Una lista de deseos que queremos cumplir.",
      "Cualquier acción realizada sin planificación."
    ],

    correcta: 1,

    acierto: `
      ¡Muy bien!

      Un algoritmo organiza instrucciones
      para conseguir un resultado.

      No alcanza con saber qué queremos:
      debemos establecer cómo hacerlo.
    `,

    error: `
      Recordá la diferencia entre un objetivo
      y un procedimiento.

      El objetivo indica qué queremos lograr.
      El algoritmo indica cómo podemos lograrlo.
    `
  },

  {
    etapa: "ETAPA 2 · ANALIZAR",
    titulo: "Encontrá la instrucción ambigua",
    imagen: 4,
    tipo: "opcion",

    teoria: `
      Una instrucción ambigua es aquella
      que permite distintas interpretaciones.

      En programación es importante evitar
      indicaciones que dependan de suposiciones.
    `,

    ejemplo: `
      "Movete un poco" es ambiguo.

      "Avanzá tres pasos hacia adelante"
      indica una acción más precisa.
    `,

    pregunta: `
      Barou recibe cuatro instrucciones.

      ¿Cuál debería corregirse porque
      resulta demasiado ambigua?
    `,

    opciones: [
      "Avanzá cinco metros.",
      "Girate hacia la izquierda.",
      "Movete para algún lado.",
      "Pasá la pelota al jugador número 9."
    ],

    correcta: 2,

    acierto: `
      ¡Exactamente!

      "Movete para algún lado" no indica
      una dirección concreta.

      Las instrucciones ambiguas pueden
      producir resultados inesperados.
    `,

    error: `
      Buscá la instrucción que no permite
      saber exactamente hacia dónde moverse.

      Las instrucciones precisas incluyen
      información suficiente para ejecutarlas.
    `
  },

  {
    etapa: "ETAPA 3 · RESOLVER",
    titulo: "Completá el algoritmo",
    imagen: 13,
    tipo: "completar",

    teoria: `
      Un algoritmo puede estar incompleto.

      Para completarlo necesitamos identificar
      qué acción falta y en qué lugar
      debe incorporarse.
    `,

    ejemplo: `
      Abrir la mochila → sacar el cuaderno →
      escribir.

      Si falta sacar el cuaderno,
      el procedimiento queda incompleto.
    `,

    pregunta: `
      Completá el algoritmo de una jugada
      utilizando el banco de palabras.
    `,

    banco: [
      "recibir",
      "controlar",
      "patear",
      "observar",
      "descansar"
    ],

    frases: [
      "1. ______ la pelota enviada por un compañero.",
      "2. ______ la pelota para mantener su posesión.",
      "3. ______ la ubicación del arco.",
      "4. ______ hacia el arco."
    ],

    respuestas: [
      "recibir",
      "controlar",
      "observar",
      "patear"
    ],

    acierto: `
      ¡Perfecto!

      Completaste el algoritmo con instrucciones
      coherentes y ordenadas.

      También identificaste una palabra
      que no era necesaria.
    `,

    error: `
      Alguna instrucción no corresponde
      con la acción indicada.

      Volvé a leer cada oración y comprobá
      el significado de las palabras.
    `
  },

  {
    etapa: "ETAPA 3 · RESOLVER",
    titulo: "Detectá el error",
    imagen: 17,
    tipo: "opcion",

    teoria: `
      Depurar consiste en localizar
      y corregir errores en un procedimiento.

      No siempre necesitamos crear
      un algoritmo nuevo.

      A veces basta con modificar
      una instrucción incorrecta.
    `,

    ejemplo: `
      Si intentamos escribir antes de abrir
      el cuaderno, podemos corregir el
      procedimiento cambiando el orden.
    `,

    pregunta: `
      Un jugador recibe estas instrucciones:

      1. Patear al arco.
      2. Recibir la pelota.
      3. Controlar la pelota.

      ¿Qué error presenta el algoritmo?
    `,

    opciones: [
      "Tiene demasiadas instrucciones.",
      "Las instrucciones están desordenadas.",
      "No tiene ningún error.",
      "Todas las instrucciones son ambiguas."
    ],

    correcta: 1,

    acierto: `
      ¡Error detectado!

      Las acciones no respetan el orden
      necesario para realizar la jugada.

      Detectar un error es el primer paso
      para corregirlo.
    `,

    error: `
      Las acciones individuales tienen sentido.

      El problema aparece al observar
      en qué orden fueron organizadas.

      Revisá cuál debería ejecutarse primero.
    `
  },

  {
    etapa: "ETAPA 3 · RESOLVER",
    titulo: "Corregí la estrategia",
    imagen: 16,
    tipo: "orden",

    teoria: `
      Corregir un algoritmo implica revisar
      las instrucciones y reorganizarlas
      cuando sea necesario.

      La solución debe conservar su objetivo
      y eliminar los errores detectados.
    `,

    ejemplo: `
      Una secuencia incorrecta puede funcionar
      después de cambiar la posición
      de algunas instrucciones.
    `,

    pregunta: `
      Un jugador quiere marcar un gol,
      pero recibió las instrucciones
      desordenadas.

      Organizalas correctamente.
    `,

    pasos: [
      "Patear la pelota hacia el arco.",
      "Ubicarse frente al arco con la pelota.",
      "Recibir un pase.",
      "Controlar la pelota."
    ],

    ordenCorrecto: [2, 3, 1, 0],

    acierto: `
      ¡Estrategia corregida!

      Identificaste el orden necesario
      para ejecutar las acciones.

      Acabás de aplicar una forma básica
      de depuración de algoritmos.
    `,

    error: `
      La estrategia todavía tiene
      instrucciones fuera de lugar.

      Revisá qué acciones dependen
      de otras anteriores.

      El jugador necesita recibir
      y controlar antes de patear.
    `
  },

  {
    etapa: "ETAPA 4 · INTEGRAR",
    titulo: "Dos estrategias, un objetivo",
    imagen: 19,
    tipo: "opcion",

    teoria: `
      Un mismo problema puede tener
      diferentes soluciones correctas.

      Dos algoritmos pueden utilizar
      instrucciones distintas y alcanzar
      el mismo objetivo.

      Para compararlos debemos observar
      qué resultado producen.
    `,

    ejemplo: `
      Podemos llegar a un lugar caminando
      por diferentes caminos.

      Si ambos recorridos llegan al destino,
      pueden ser soluciones válidas.
    `,

    pregunta: `
      Dos jugadores proponen estas estrategias:

      A: Recibir → Controlar → Pasar.

      B: Recibir → Controlar →
      Avanzar → Pasar.

      ¿Cuál es la afirmación correcta?
    `,

    opciones: [
      "Solamente A puede ser un algoritmo.",
      "Solamente B puede ser un algoritmo.",
      "Ambos pueden ser algoritmos válidos, según la situación.",
      "Ninguno puede considerarse un algoritmo."
    ],

    correcta: 2,

    acierto: `
      ¡Excelente razonamiento!

      No siempre existe una única solución
      correcta para un problema.

      Podemos comparar diferentes algoritmos
      considerando sus resultados
      y las condiciones del problema.
    `,

    error: `
      Recordá que diferentes procedimientos
      pueden conducir a un mismo objetivo.

      No debemos elegir solamente por
      la cantidad de instrucciones.

      Pensemos si ambas estrategias
      podrían funcionar.
    `
  },

  {
    etapa: "ETAPA 4 · INTEGRAR",
    titulo: "La estrategia perfecta",
    imagen: 20,
    tipo: "relacionar",

    teoria: `
      Para resolver problemas mediante
      pensamiento computacional podemos:

      - Comprender el objetivo.
      - Identificar instrucciones.
      - Ordenar las acciones.
      - Detectar errores.
      - Revisar y mejorar la solución.

      Estas habilidades también pueden
      utilizarse fuera de la informática.
    `,

    ejemplo: `
      Si queremos organizar una actividad,
      podemos dividir el trabajo, ordenar
      tareas y corregir procedimientos.
    `,

    pregunta: `
      ¡Desafío final de Blue Lock!

      Relacioná cada situación con
      el concepto correspondiente.
    `,

    conceptos: [
      "Instrucción",
      "Secuencia",
      "Algoritmo",
      "Depuración"
    ],

    situaciones: [
      "Indicar: avanzar tres pasos.",
      "Organizar acciones respetando su orden.",
      "Construir un procedimiento para alcanzar un objetivo.",
      "Localizar y corregir errores de un procedimiento."
    ],

    respuestas: [
      "Instrucción",
      "Secuencia",
      "Algoritmo",
      "Depuración"
    ],

    acierto: `
      ¡MISIÓN COMPLETADA!

      Reconociste los conceptos fundamentales
      y pudiste relacionarlos con situaciones
      concretas.

      Ahora tenés más herramientas para
      analizar, construir y corregir algoritmos.
    `,

    error: `
      Revisá el significado de cada concepto.

      Instrucción: indica una acción.

      Secuencia: organiza acciones.

      Algoritmo: permite resolver un problema.

      Depuración: detecta y corrige errores.
    `
  }
];

// ==================================================
// ESTADO DE LA APLICACIÓN
// ==================================================

const app = document.getElementById("app");

let desafioActual = -1;
let seleccion = null;
let ordenActual = [];
let respuestasCompletadas = [];
let relaciones = [];
let segundosRestantes = 0;
let intervalo = null;
let bloqueado = false;
let desafioResuelto = false;
let mostrarAyuda = false;
let intentos = Array(desafios.length).fill(0);

// ==================================================
// FUNCIONES GENERALES
// ==================================================

function limpiarTemporizador() {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
  }
}

function irArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function normalizar(texto) {
  return String(texto)
    .trim()
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function textoHTML(texto) {
  return String(texto)
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n\s*\n/g, "</p><p>")
    .replace(/\n/g, "<br>");
}

function parrafos(texto) {
  return "<p>" + textoHTML(texto) + "</p>";
}

function imagenHTML(numero, clase = "imagen-desafio") {
  return `
    <img
      class="${clase}"
      src="${imagen(numero)}"
      alt="Ilustración temática de Blue Lock"
      loading="lazy"
    >
  `;
}

function boton(texto, funcion, clase = "") {
  return `
    <button
      type="button"
      class="boton ${clase}"
      onclick="${funcion}"
    >
      ${texto}
    </button>
  `;
}

// ==================================================
// PORTADA
// ==================================================

function mostrarPortada() {
  limpiarTemporizador();
  desafioActual = -1;

  app.innerHTML = `
    <section class="panel">
      <div
        class="hero"
        style="
          background-image:
          linear-gradient(0deg,#03102088,#03102022),
          url('${imagen(1)}');
        "
      >
        <div class="hero-contenido">
          <span class="etiqueta">
            ENTRENAMIENTO COMPUTACIONAL
          </span>

          <h1>
            BLUE <span class="destacado">LOCK</span>
          </h1>

          <h2>LA ESTRATEGIA PERFECTA</h2>
        </div>
      </div>

      <h2>¿Estás preparado para pensar como un estratega?</h2>

      <p>
        En Blue Lock, una buena jugada requiere
        analizar situaciones, organizar acciones
        y corregir errores.
      </p>

      <p>
        En este entrenamiento vas a resolver
        diez desafíos aplicando instrucciones,
        secuencias, algoritmos y depuración.
      </p>

      <div class="teoria">
        <h3>Tu misión</h3>
        <p>
          Leer, pensar, decidir, comprobar
          y mejorar tus respuestas.
        </p>
      </div>

      <div class="acciones">
        ${boton("COMENZAR ENTRENAMIENTO", "mostrarIntroduccion()")}
      </div>
    </section>
  `;

  irArriba();
}

// ==================================================
// INTRODUCCIÓN
// ==================================================

function mostrarIntroduccion() {
  limpiarTemporizador();

  app.innerHTML = `
    <section class="panel">
      <span class="etiqueta">ANTES DEL ENTRENAMIENTO</span>

      <h1>Pensar antes de actuar</h1>

      ${imagenHTML(2)}

      <p>
        Para resolver un problema necesitamos
        comprender qué queremos lograr
        y organizar las acciones necesarias.
      </p>

      <div class="grid-conceptos">
        <div class="concepto">
          <h3>Instrucción</h3>
          <p>Indica una acción concreta.</p>
        </div>

        <div class="concepto">
          <h3>Secuencia</h3>
          <p>Organiza acciones en un orden.</p>
        </div>

        <div class="concepto">
          <h3>Algoritmo</h3>
          <p>
            Conjunto finito y ordenado
            de instrucciones precisas
            para resolver un problema.
          </p>
        </div>
      </div>

      <div class="teoria">
        <h3>Ejemplo</h3>
        <p>
          Una jugada puede organizarse así:
        </p>

        <p class="destacado">
          Recibir → Controlar → Observar → Pasar
        </p>

        <p>
          Cambiar el orden de las acciones
          puede modificar el resultado.
        </p>
      </div>

      <div class="teoria">
        <h3>Cómo funciona el entrenamiento</h3>
        <p>
          Cada desafío incluye una explicación,
          un ejemplo y una actividad.
        </p>

        <p>
          Si te equivocás, recibirás una
          explicación y podrás intentarlo
          nuevamente.
        </p>

        <p>
          Pensar es más importante
          que responder rápidamente.
        </p>
      </div>

      <div class="acciones">
        ${boton("INICIAR DESAFÍOS", "iniciarDesafio(0)")}
      </div>
    </section>
  `;

  irArriba();
}

// ==================================================
// INICIAR DESAFÍO
// ==================================================

function iniciarDesafio(indice) {
  limpiarTemporizador();

  desafioActual = indice;
  seleccion = null;
  mostrarAyuda = false;
  desafioResuelto = false;

  const d = desafios[indice];

  bloqueado = TEMPORIZADOR_ACTIVO;
  segundosRestantes = TEMPORIZADOR_ACTIVO
    ? TIEMPO_ESPERA
    : 0;

  if (d.tipo === "orden") {
    ordenActual = d.pasos.map((_, i) => i);
  }

  if (d.tipo === "completar") {
    respuestasCompletadas = Array(
      d.respuestas.length
    ).fill("");
  }

  if (d.tipo === "relacionar") {
    relaciones = Array(
      d.situaciones.length
    ).fill("");
  }

  renderizarDesafio();
  irArriba();

  if (TEMPORIZADOR_ACTIVO) {
    comenzarTemporizador();
  }
}

// ==================================================
// TEMPORIZADOR
// ==================================================

function comenzarTemporizador() {
  limpiarTemporizador();

  intervalo = setInterval(() => {
    segundosRestantes--;

    const aviso = document.getElementById("temporizador");

    if (aviso) {
      aviso.textContent =
        segundosRestantes > 0
          ? `Tiempo para leer y pensar: ${segundosRestantes} s`
          : "¡Ya podés responder!";
    }

    if (segundosRestantes <= 0) {
      limpiarTemporizador();
      bloqueado = false;
      habilitarControles();
    }
  }, 1000);
}

function habilitarControles() {
  document.querySelectorAll(
    ".control-respuesta"
  ).forEach(control => {
    control.disabled = false;
  });
}

// ==================================================
// RENDERIZAR DESAFÍO
// ==================================================

function renderizarDesafio() {
  const d = desafios[desafioActual];

  const porcentaje =
    ((desafioActual + 1) / desafios.length) * 100;

  let contenido = "";

  if (d.tipo === "opcion") {
    contenido = renderizarOpciones(d);
  }

  if (d.tipo === "orden") {
    contenido = renderizarOrden(d);
  }

  if (d.tipo === "completar") {
    contenido = renderizarCompletar(d);
  }

  if (d.tipo === "relacionar") {
    contenido = renderizarRelacionar(d);
  }

  app.innerHTML = `
    <section class="panel">

      <div class="fila-info">
        <span>${d.etapa}</span>
        <span>
          DESAFÍO ${desafioActual + 1}
          DE ${desafios.length}
        </span>
      </div>

      <div class="progreso">
        <div
          class="barra"
          style="width:${porcentaje}%"
        ></div>
      </div>

      <span class="etiqueta">
        MISIÓN ${desafioActual + 1}
      </span>

      <h1>${d.titulo}</h1>

      ${imagenHTML(d.imagen)}

      <div class="teoria">
        <h3>ANTES DE RESPONDER</h3>
        ${parrafos(d.teoria)}
      </div>

      <div class="ejemplo">
        <strong>Ejemplo orientador</strong>
        ${parrafos(d.ejemplo)}
      </div>

      <div class="pregunta">
        ${parrafos(d.pregunta)}
      </div>

      <div id="temporizador" class="temporizador">
        ${
          bloqueado
            ? `Tiempo para leer y pensar: ${segundosRestantes} s`
            : "¡Ya podés responder!"
        }
      </div>

      <div id="zona-actividad">
        ${contenido}
      </div>

      <div class="acciones">
        <button
          type="button"
          class="boton boton-secundario"
          onclick="alternarAyuda()"
        >
          VER AYUDA
        </button>
      </div>

      <div id="ayuda" class="ayuda oculto">
        <strong>Una pista:</strong>
        <p>
          Volvé a leer la explicación inicial.
          Identificá primero el objetivo
          y después analizá cada instrucción.
        </p>
      </div>

      <div id="devolucion" aria-live="polite"></div>
    </section>
  `;
}

// ==================================================
// OPCIÓN MÚLTIPLE
// ==================================================

function renderizarOpciones(d) {
  return `
    <div class="opciones">
      ${d.opciones.map((opcion, i) => `
        <button
          type="button"
          class="opcion control-respuesta"
          id="opcion-${i}"
          onclick="elegirOpcion(${i})"
          ${bloqueado ? "disabled" : ""}
        >
          <strong>${String.fromCharCode(65 + i)}.</strong>
          ${opcion}
        </button>
      `).join("")}
    </div>

    <div class="acciones">
      ${botonVerificar()}
    </div>
  `;
}

function elegirOpcion(indice) {
  if (bloqueado || desafioResuelto) return;

  seleccion = indice;

  document.querySelectorAll(".opcion")
    .forEach((opcion, i) => {
      opcion.classList.toggle(
        "seleccionada",
        i === indice
      );
    });
}

// ==================================================
// ORDENAMIENTO
// ==================================================

function renderizarOrden(d) {
  return `
    <div id="lista-orden">
      ${ordenActual.map((indice, posicion) => `
        <div class="orden-item">
          <strong class="numero-paso">
            ${posicion + 1}.
          </strong>

          <span>${d.pasos[indice]}</span>

          <div class="controles-orden">
            <button
              type="button"
              class="boton-pequeno control-respuesta"
              onclick="moverPaso(${posicion},-1)"
              aria-label="Subir paso"
              ${bloqueado || posicion === 0 ? "disabled" : ""}
            >
              ↑
            </button>

            <button
              type="button"
              class="boton-pequeno control-respuesta"
              onclick="moverPaso(${posicion},1)"
              aria-label="Bajar paso"
              ${
                bloqueado ||
                posicion === ordenActual.length - 1
                  ? "disabled"
                  : ""
              }
            >
              ↓
            </button>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="acciones">
      ${botonVerificar()}
    </div>
  `;
}

function moverPaso(posicion, direccion) {
  if (bloqueado || desafioResuelto) return;

  const destino = posicion + direccion;

  if (
    destino < 0 ||
    destino >= ordenActual.length
  ) return;

  [
    ordenActual[posicion],
    ordenActual[destino]
  ] = [
    ordenActual[destino],
    ordenActual[posicion]
  ];

  const d = desafios[desafioActual];

  document.getElementById("zona-actividad")
    .innerHTML = renderizarOrden(d);
}

// ==================================================
// COMPLETAR CON BANCO DE PALABRAS
// ==================================================

function renderizarCompletar(d) {
  return `
    <div class="banco">
      <strong>BANCO DE PALABRAS</strong>
      <p>${d.banco.join(" · ")}</p>
    </div>

    ${d.frases.map((frase, i) => `
      <div class="teoria">
        <p>${frase}</p>

        <select
          class="control-respuesta"
          id="completar-${i}"
          onchange="guardarCompletar(${i},this.value)"
          ${bloqueado ? "disabled" : ""}
        >
          <option value="">Seleccioná una palabra</option>

          ${d.banco.map(palabra => `
            <option value="${palabra}"
              ${
                respuestasCompletadas[i] === palabra
                  ? "selected"
                  : ""
              }
            >
              ${palabra}
            </option>
          `).join("")}
        </select>
      </div>
    `).join("")}

    <div class="acciones">
      ${botonVerificar()}
    </div>
  `;
}

function guardarCompletar(indice, valor) {
  respuestasCompletadas[indice] = valor;
}

// ==================================================
// RELACIONAR CONCEPTOS
// ==================================================

function renderizarRelacionar(d) {
  return `
    <div class="banco">
      <strong>CONCEPTOS DISPONIBLES</strong>
      <p>${d.conceptos.join(" · ")}</p>
    </div>

    ${d.situaciones.map((situacion, i) => `
      <div class="relacion-fila">
        <span>${situacion}</span>

        <select
          class="control-respuesta"
          onchange="guardarRelacion(${i},this.value)"
          ${bloqueado ? "disabled" : ""}
        >
          <option value="">Elegí un concepto</option>

          ${d.conceptos.map(concepto => `
            <option value="${concepto}"
              ${
                relaciones[i] === concepto
                  ? "selected"
                  : ""
              }
            >
              ${concepto}
            </option>
          `).join("")}
        </select>
      </div>
    `).join("")}

    <div class="acciones">
      ${botonVerificar()}
    </div>
  `;
}

function guardarRelacion(indice, valor) {
  relaciones[indice] = valor;
}

// ==================================================
// BOTÓN DE VERIFICACIÓN
// ==================================================

function botonVerificar() {
  return `
    <button
      type="button"
      class="boton control-respuesta"
      onclick="verificarRespuesta()"
      ${bloqueado ? "disabled" : ""}
    >
      COMPROBAR RESPUESTA
    </button>
  `;
}

// ==================================================
// COMPROBAR RESPUESTAS
// ==================================================

function verificarRespuesta() {
  if (bloqueado || desafioResuelto) return;

  const d = desafios[desafioActual];

  let correcta = false;
  let respondido = true;

  if (d.tipo === "opcion") {
    respondido = seleccion !== null;
    correcta = seleccion === d.correcta;
  }

  if (d.tipo === "orden") {
    correcta = ordenActual.every(
      (valor, i) => valor === d.ordenCorrecto[i]
    );
  }

  if (d.tipo === "completar") {
    respondido = respuestasCompletadas.every(
      valor => valor !== ""
    );

    correcta = respuestasCompletadas.every(
      (valor, i) =>
        normalizar(valor) === normalizar(d.respuestas[i])
    );
  }

  if (d.tipo === "relacionar") {
    respondido = relaciones.every(
      valor => valor !== ""
    );

    correcta = relaciones.every(
      (valor, i) => valor === d.respuestas[i]
    );
  }

  if (!respondido) {
    mostrarDevolucion(
      false,
      "Primero tenés que completar todas las respuestas.",
      true
    );
    return;
  }

  intentos[desafioActual]++;

  if (correcta) {
    desafioResuelto = true;

    mostrarDevolucion(
      true,
      d.acierto,
      false
    );

    document.querySelectorAll(
      ".control-respuesta"
    ).forEach(control => {
      control.disabled = true;
    });

  } else {
    mostrarDevolucion(
      false,
      d.error,
      false
    );
  }
}

// ==================================================
// DEVOLUCIONES
// ==================================================

function mostrarDevolucion(
  correcta,
  mensaje,
  incompleta = false
) {
  const zona = document.getElementById("devolucion");

  let siguiente = "";

  if (correcta) {
    const ultimo =
      desafioActual === desafios.length - 1;

    siguiente = ultimo
      ? boton("FINALIZAR ENTRENAMIENTO", "mostrarFinal()")
      : boton("SIGUIENTE DESAFÍO", `iniciarDesafio(${desafioActual + 1})`);
  }

  zona.innerHTML = `
    <div class="respuesta ${correcta ? "correcta" : "incorrecta"}">
      <h3>
        ${
          correcta
            ? "✓ ¡DESAFÍO SUPERADO!"
            : incompleta
              ? "COMPLETÁ LA ACTIVIDAD"
              : "✕ TODAVÍA NO"
        }
      </h3>

      ${parrafos(mensaje)}

      ${
        correcta
          ? "<p>Podés continuar con la siguiente misión.</p>"
          : "<p>Revisá tu respuesta y volvé a intentarlo.</p>"
      }
    </div>

    <div class="acciones">
      ${siguiente}
    </div>
  `;

  zona.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

// ==================================================
// AYUDA
// ==================================================

function alternarAyuda() {
  const ayuda = document.getElementById("ayuda");

  if (ayuda) {
    ayuda.classList.toggle("oculto");
  }
}

// ==================================================
// PANTALLA FINAL
// ==================================================

function mostrarFinal() {
  limpiarTemporizador();

  const totalIntentos = intentos.reduce(
    (suma, numero) => suma + numero,
    0
  );

  app.innerHTML = `
    <section class="panel">
      <div
        class="hero"
        style="
          background-image:
          linear-gradient(0deg,#041426dd,#04142622),
          url('${imagen(20)}');
        "
      >
        <div class="hero-contenido">
          <span class="etiqueta">ENTRENAMIENTO COMPLETADO</span>
          <h1>¡MISIÓN SUPERADA!</h1>
        </div>
      </div>

      <h2>La estrategia perfecta</h2>

      <p>
        Completaste los diez desafíos
        de pensamiento computacional
        inspirados en Blue Lock.
      </p>

      <div class="teoria">
        <h3>¿Qué aprendimos?</h3>

        <p>
          <strong>Instrucciones:</strong>
          indican acciones claras y precisas.
        </p>

        <p>
          <strong>Secuencias:</strong>
          organizan acciones en un orden.
        </p>

        <p>
          <strong>Algoritmos:</strong>
          permiten resolver problemas
          mediante instrucciones ordenadas.
        </p>

        <p>
          <strong>Depuración:</strong>
          consiste en encontrar y corregir errores.
        </p>
      </div>

      <div class="pregunta">
        ¿Por qué importa el orden en que
        hacemos las cosas?
      </div>

      <p>
        Pensá una respuesta y explicásela
        a tu compañero o al docente.
      </p>

      <p>
        Resolver un problema no siempre
        significa acertar al primer intento.

        También implica revisar,
        corregir y mejorar nuestras ideas.
      </p>

      <div class="ejemplo">
        <h3>Tu recorrido</h3>
        <p>
          Desafíos completados: 10 de 10.
        </p>

        <p>
          Intentos de comprobación:
          ${totalIntentos}.
        </p>

        <p>
          ¡El error también forma parte
          del aprendizaje!
        </p>
      </div>

      <div class="acciones">
        ${boton("VOLVER A EMPEZAR", "reiniciar()")}
      </div>
    </section>
  `;

  irArriba();
}

// ==================================================
// REINICIAR
// ==================================================

function reiniciar() {
  limpiarTemporizador();

  intentos = Array(desafios.length).fill(0);
  desafioActual = -1;
  seleccion = null;
  desafioResuelto = false;

  mostrarPortada();
}

// ==================================================
// INICIO AUTOMÁTICO
// ==================================================

mostrarPortada();
