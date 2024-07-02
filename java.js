const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
if (storedTheme) document.documentElement.setAttribute("data-theme", storedTheme);

const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

function reglas() {
    window.location.href = "reglas.html";
}

function inicio() {
    window.location.href = "index.html";
}

function prueba() {
    window.location.href = "pregunta1.html";
    obtenerPreguntas();
}


//bancodepreguntas
const bancoDePreguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["París", "Madrid", "Roma", "Londres"],
        respuestaCorrecta: "París"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        respuestaCorrecta: "Amazonas"
    },
    {
        pregunta: "¿Qué elemento químico tiene el símbolo H?",
        opciones: ["Helio", "Hidrógeno", "Hierro", "Hafnio"],
        respuestaCorrecta: "Hidrógeno"
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Gabriel García Márquez", "Pablo Neruda", "Jorge Luis Borges", "Mario Vargas Llosa"],
        respuestaCorrecta: "Gabriel García Márquez"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Marte", "Júpiter", "Saturno", "Neptuno"],
        respuestaCorrecta: "Júpiter"
    },
    {
        pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
        opciones: ["1914", "1939", "1945", "1950"],
        respuestaCorrecta: "1939"
    },
    {
        pregunta: "¿Quién pintó 'La última cena'?",
        opciones: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        respuestaCorrecta: "Leonardo da Vinci"
    },
    {
        pregunta: "¿Cuál es la moneda de Japón?",
        opciones: ["Yuan", "Won", "Yen", "Rupia"],
        respuestaCorrecta: "Yen"
    },
    {
        pregunta: "¿Qué lenguaje de programación es conocido por su uso en desarrollo web?",
        opciones: ["Python", "C++", "JavaScript", "Java"],
        respuestaCorrecta: "JavaScript"
    },
    {
        pregunta: "¿Quién es conocido como el padre de la teoría de la relatividad?",
        opciones: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        respuestaCorrecta: "Albert Einstein"
    },
    {
        pregunta: "¿Cuál es el país con mayor población del mundo?",
        opciones: ["India", "Estados Unidos", "China", "Brasil"],
        respuestaCorrecta: "China"
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["Miguel de Cervantes", "Lope de Vega", "Garcilaso de la Vega", "Francisco de Quevedo"],
        respuestaCorrecta: "Miguel de Cervantes"
    },
    {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        opciones: ["Monte Everest", "K2", "Kangchenjunga", "Lhotse"],
        respuestaCorrecta: "Monte Everest"
    },
    {
        pregunta: "¿Qué país es conocido como la tierra del sol naciente?",
        opciones: ["China", "Corea del Sur", "Japón", "Tailandia"],
        respuestaCorrecta: "Japón"
    },
    {
        pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
        opciones: ["Corazón", "Hígado", "Piel", "Cerebro"],
        respuestaCorrecta: "Piel"
    },
    {
        pregunta: "¿En qué año llegó el hombre a la Luna?",
        opciones: ["1965", "1969", "1972", "1975"],
        respuestaCorrecta: "1969"
    },
    {
        pregunta: "¿Quién escribió 'La Odisea'?",
        opciones: ["Homero", "Sófocles", "Virgilio", "Platón"],
        respuestaCorrecta: "Homero"
    },
    {
        pregunta: "¿Cuál es el metal más ligero?",
        opciones: ["Oro", "Plata", "Litio", "Plomo"],
        respuestaCorrecta: "Litio"
    },
    {
        pregunta: "¿Cuál es la lengua más hablada en el mundo?",
        opciones: ["Español", "Inglés", "Chino mandarín", "Hindú"],
        respuestaCorrecta: "Chino mandarín"
    },
    {
        pregunta: "¿Qué país ganó la Copa Mundial de Fútbol en 2018?",
        opciones: ["Alemania", "Brasil", "Francia", "Argentina"],
        respuestaCorrecta: "Francia"
    },
    {
        pregunta: "¿Qué artista es conocido por cortar su propia oreja?",
        opciones: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Claude Monet"],
        respuestaCorrecta: "Vincent van Gogh"
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        opciones: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        respuestaCorrecta: "Pacífico"
    },
    {
        pregunta: "¿Qué vitamina es producida por el cuerpo cuando se expone al sol?",
        opciones: ["Vitamina A", "Vitamina B", "Vitamina C", "Vitamina D"],
        respuestaCorrecta: "Vitamina D"
    },
    {
        pregunta: "¿En qué país se encuentra la Torre Eiffel?",
        opciones: ["Italia", "España", "Francia", "Reino Unido"],
        respuestaCorrecta: "Francia"
    },
    {
        pregunta: "¿Cuál es el libro sagrado del Islam?",
        opciones: ["Biblia", "Torá", "Corán", "Vedas"],
        respuestaCorrecta: "Corán"
    },
    {
        pregunta: "¿Cuál es el símbolo químico del oro?",
        opciones: ["Ag", "Au", "O", "Pb"],
        respuestaCorrecta: "Au"
    },
    {
        pregunta: "¿Qué instrumento mide la presión atmosférica?",
        opciones: ["Termómetro", "Barómetro", "Higrómetro", "Anemómetro"],
        respuestaCorrecta: "Barómetro"
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        opciones: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        respuestaCorrecta: "Leonardo da Vinci"
    },
    {
        pregunta: "¿En qué año se hundió el Titanic?",
        opciones: ["1905", "1912", "1920", "1935"],
        respuestaCorrecta: "1912"
    },
    {
        pregunta: "¿Qué país es famoso por el tango?",
        opciones: ["México", "España", "Argentina", "Cuba"],
        respuestaCorrecta: "Argentina"
    },
    {
        pregunta: "¿Qué gas es esencial para la respiración humana?",
        opciones: ["Hidrógeno", "Nitrógeno", "Oxígeno", "Dióxido de carbono"],
        respuestaCorrecta: "Oxígeno"
    }
];

// Función para obtener preguntas aleatorias del banco
let currentQuestionIndex = 0;
let seconds = 15;
const totalTime = 15;
let timerInterval;
let puntajeCorrecto = 0;
let puntajeIncorrecto = 0;

// Función para obtener preguntas aleatorias del banco
function obtenerPreguntasAleatorias(numeroPreguntas) {
    const preguntasAleatorias = [];
    const preguntasDisponibles = [...bancoDePreguntas]; // Hacemos una copia del array original

    for (let i = 0; i < numeroPreguntas; i++) {
        const randomIndex = Math.floor(Math.random() * preguntasDisponibles.length);
        preguntasAleatorias.push(preguntasDisponibles.splice(randomIndex, 1)[0]);
    }

    return preguntasAleatorias;
}

// Función para cargar preguntas en el examen
function cargarExamen() {
    const preguntas = obtenerPreguntasAleatorias(10); // Obtener 10 preguntas aleatorias
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-button');
    const timerElement = document.getElementById('timer');
    const progressBar = document.getElementById('progressBar');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const messageElement = document.getElementById('message');

    function formatTime(secs) {
        const minutes = Math.floor(secs / 60);
        const remainingSeconds = secs % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function updateTimer() {
        timerElement.innerText = formatTime(seconds);
        const widthPercentage = (seconds / totalTime) * 100;
        progressBar.style.width = `${widthPercentage}%`;

        if (seconds > 0) {
            seconds--;
        } else {
            clearInterval(timerInterval);
            // Marcar la respuesta como incorrecta y pasar a la siguiente pregunta
            optionsContainer.querySelectorAll('.option').forEach(option => {
                option.style.pointerEvents = 'none';
            });
            const pregunta = preguntas[currentQuestionIndex];
            const correctOption = pregunta.respuestaCorrecta;
            optionsContainer.querySelectorAll('.option').forEach(option => {
                if (option.innerHTML === correctOption) {
                    option.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                }
            });
            nextButton.disabled = false;
            puntajeIncorrecto++;

        }
    }


    function mostrarPregunta() {
        if (currentQuestionIndex >= preguntas.length) {
            calcularPuntaje();
            return;
        }

        clearInterval(timerInterval); // Limpiar cualquier temporizador previo
        seconds = totalTime; // Reiniciar el tiempo


        const pregunta = preguntas[currentQuestionIndex];

        questionContainer.innerHTML = `<h4>${pregunta.pregunta}</h4>`;
        optionsContainer.innerHTML = '';

        pregunta.opciones.forEach(opcion => {
            const div = document.createElement('div');
            div.className = 'option';
            div.innerHTML = opcion;
            div.onclick = () => seleccionarRespuesta(pregunta.respuestaCorrecta, opcion, div);
            optionsContainer.appendChild(div);
        });

        nextButton.disabled = true; // Desactivar el botón "Next" hasta que se seleccione una respuesta

        timerInterval = setInterval(updateTimer, 1000);

        // Mostrar el temporizador en pantalla
        updateTimer();

        
    }

    function seleccionarRespuesta(respuestaCorrecta, opcionSeleccionada, div) {
        clearInterval(timerInterval); // Limpiar el temporizador cuando se selecciona una respuesta
        const optionsContainer = document.getElementById('options-container');
        const nextButton = document.getElementById('next-button');

        optionsContainer.querySelectorAll('.option').forEach(option => {
            option.style.pointerEvents = 'none';
        });

        if (opcionSeleccionada === respuestaCorrecta) {
            div.classList.add('correct');
            puntajeCorrecto++;
        } else {
            div.classList.add('incorrect');
            puntajeIncorrecto++;
            optionsContainer.querySelectorAll('.option').forEach(option => {
                if (option.innerHTML === respuestaCorrecta) {
                    option.classList.add('correct');
                }
            });
        }

        nextButton.disabled = false; // Activar el botón "Next" después de seleccionar una respuesta
    }

    nextButton.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < preguntas.length) {
            mostrarPregunta();
        } else {
            calcularPuntaje();
        }
    };

    function calcularPuntaje() {
        resultContainer.style.display = 'block';
        questionContainer.style.display = 'none';
        optionsContainer.style.display = 'none';
        nextButton.style.display = 'none';

        scoreElement.innerText = `Puntaje: ${puntajeCorrecto}`;
        if (puntajeCorrecto >= 8) {
            messageElement.innerText = "¡Excelente! ¡Has respondido 8 o más preguntas correctamente!";
        } else if (puntajeCorrecto >= 5 && puntajeCorrecto <= 7) {
            messageElement.innerText = "¡Bien! ¡Has respondido entre 5 y 7 preguntas correctamente!";
        } else if (puntajeCorrecto >= 1 && puntajeCorrecto <= 4) {
            messageElement.innerText = "¡Puedes mejorar! Has respondido entre 1 y 4 preguntas correctamente.";
        } else {
            messageElement.innerText = "¡Ups! No has respondido correctamente ninguna pregunta. ¡Inténtalo de nuevo!";
        }
    }

    mostrarPregunta();
}

// Llama a la función para cargar el examen cuando se carga la página
window.onload = cargarExamen;