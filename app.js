/* Encuestas de cursos / Posgrados. UI v4, five routes from the v3 instrument.
 * No credentials in this file. Data collection is OFF until approval + setup.
 * Other answers are transmitted separately and saved as <question>_otro.
 */
'use strict';
const CONFIG = Object.freeze({
  guardarEnSheets: false,
  aprobacionInstitucional: false,
  contactoInvestigacion: '',
  urlAvisoDatos: '',
  urlAppsScript: '',
  version: 'v5.1-rutas-2026-10'
});
const PREGUNTAS = {
  "P1": {
    "id": "P1",
    "title": "¿Qué tipo de posgrado cursas actualmente?",
    "options": [
      {
        "id": "especializacion",
        "label": "Especialización"
      },
      {
        "id": "maestria",
        "label": "Maestría"
      },
      {
        "id": "doctorado",
        "label": "Doctorado"
      },
      {
        "id": "otro",
        "label": "Otro",
        "custom": true
      }
    ],
    "help": "",
    "ui": "program",
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "P2": {
    "id": "P2",
    "title": "Pensando en tu experiencia con las encuestas de cursos, ¿cuál de estas situaciones describe mejor lo que te ha pasado?",
    "options": [
      {
        "id": "A",
        "label": "Lo respondí completo"
      },
      {
        "id": "B",
        "label": "Lo empecé, pero no lo terminé"
      },
      {
        "id": "C",
        "label": "Recibí la invitación, pero no respondí"
      },
      {
        "id": "D",
        "label": "No recuerdo haberlo recibido o respondido"
      },
      {
        "id": "E",
        "label": "Antes de esta explicación, no conocía las encuestas de cursos"
      }
    ],
    "help": "Si has tenido varias experiencias, elige la más reciente que recuerdes.",
    "ui": "routes",
    "type": "single"
  },
  "A1": {
    "id": "A1",
    "title": "Pensando en la última vez que respondiste una encuesta de cursos, ¿qué describe mejor por qué la respondiste?",
    "options": [
      {
        "id": "opinion_positiva",
        "label": "Quería compartir una experiencia positiva"
      },
      {
        "id": "opinion_negativa",
        "label": "Quería compartir una experiencia negativa"
      },
      {
        "id": "aportar",
        "label": "Quería compartir mi opinión sobre el curso"
      },
      {
        "id": "costumbre",
        "label": "La respondí por costumbre"
      },
      {
        "id": "obligatoria",
        "label": "Pensé que era obligatorio responderla"
      },
      {
        "id": "invitacion",
        "label": "Un profesor o el programa me recordó responderla"
      },
      {
        "id": "otra",
        "label": "Otra razón",
        "custom": true
      },
      {
        "id": "no_recuerdo",
        "label": "No recuerdo"
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "A2": {
    "id": "A2",
    "title": "¿Por qué medio recuerdas haber recibido esa invitación?",
    "options": [
      {
        "id": "correo",
        "label": "Correo institucional"
      },
      {
        "id": "plataforma",
        "label": "Plataforma del curso"
      },
      {
        "id": "profesor",
        "label": "Profesor o tutor"
      },
      {
        "id": "coordinacion",
        "label": "Coordinación del programa"
      },
      {
        "id": "clase",
        "label": "Durante una sesión de clase"
      },
      {
        "id": "otro",
        "label": "Otro medio",
        "custom": true
      },
      {
        "id": "no_recuerdo",
        "label": "No recuerdo"
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "A3": {
    "id": "A3",
    "title": "Mientras respondías esa encuesta, ¿qué sensación predominó?",
    "options": [
      {
        "id": "interes",
        "label": "Interés",
        "face": "interes"
      },
      {
        "id": "satisfaccion",
        "label": "Satisfacción",
        "face": "satisfaccion"
      },
      {
        "id": "indiferencia",
        "label": "Indiferencia",
        "face": "indiferencia"
      },
      {
        "id": "confusion",
        "label": "Confusión",
        "face": "confusion"
      },
      {
        "id": "frustracion",
        "label": "Frustración",
        "face": "frustracion"
      },
      {
        "id": "otra",
        "label": "Otra sensación",
        "custom": true
      },
      {
        "id": "ninguna",
        "label": "Nada en particular"
      },
      {
        "id": "indefinida",
        "label": "No lo recuerdo"
      }
    ],
    "help": "Toca una cara o elige una de las alternativas. No hay una respuesta esperada.",
    "ui": "emotions",
    "mainCount": 5,
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "A4": {
    "id": "A4",
    "title": "¿Con qué relacionas principalmente esa sensación?",
    "options": [
      {
        "id": "curso",
        "label": "Mi experiencia con el curso o el profesor"
      },
      {
        "id": "expresion",
        "label": "La posibilidad de compartir mi opinión"
      },
      {
        "id": "contenido",
        "label": "Las preguntas del cuestionario"
      },
      {
        "id": "tiempo",
        "label": "El tiempo que tenía o tendría disponible"
      },
      {
        "id": "resultados",
        "label": "Lo que sé sobre el uso de los resultados"
      },
      {
        "id": "confidencialidad",
        "label": "La confidencialidad de las respuestas"
      },
      {
        "id": "otro",
        "label": "Otro aspecto",
        "custom": true
      },
      {
        "id": "ninguno",
        "label": "Ningún aspecto en particular"
      },
      {
        "id": "indefinido",
        "label": "No lo sé / no lo recuerdo"
      }
    ],
    "help": "Elige el aspecto que más se acerque a tu experiencia.",
    "ui": "cards",
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "B1": {
    "id": "B1",
    "title": "¿Qué ocurrió principalmente para que no terminaras la encuesta?",
    "options": [
      {
        "id": "interrupcion",
        "label": "Tuve que atender otra actividad"
      },
      {
        "id": "tecnico",
        "label": "Tuve dificultades técnicas"
      },
      {
        "id": "preguntas",
        "label": "Algunas preguntas me resultaron difíciles de responder"
      },
      {
        "id": "tiempo",
        "label": "No encontré tiempo para continuar"
      },
      {
        "id": "extension",
        "label": "La cantidad de preguntas influyó en que dejara de responder"
      },
      {
        "id": "decision",
        "label": "Decidí dejar de responder"
      },
      {
        "id": "otro",
        "label": "Otra situación",
        "custom": true
      },
      {
        "id": "no_recuerdo",
        "label": "No recuerdo"
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "B2": {
    "id": "B2",
    "title": "¿Por qué medio recuerdas haber recibido esa invitación?",
    "options": [
      {
        "id": "correo",
        "label": "Correo institucional"
      },
      {
        "id": "plataforma",
        "label": "Plataforma del curso"
      },
      {
        "id": "profesor",
        "label": "Profesor o tutor"
      },
      {
        "id": "coordinacion",
        "label": "Coordinación del programa"
      },
      {
        "id": "clase",
        "label": "Durante una sesión de clase"
      },
      {
        "id": "otro",
        "label": "Otro medio",
        "custom": true
      },
      {
        "id": "no_recuerdo",
        "label": "No recuerdo"
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "B3": {
    "id": "B3",
    "title": "En el momento en que dejaste de responder esa encuesta, ¿qué sensación predominó?",
    "options": [
      {
        "id": "interes",
        "label": "Interés",
        "face": "interes"
      },
      {
        "id": "satisfaccion",
        "label": "Satisfacción",
        "face": "satisfaccion"
      },
      {
        "id": "indiferencia",
        "label": "Indiferencia",
        "face": "indiferencia"
      },
      {
        "id": "confusion",
        "label": "Confusión",
        "face": "confusion"
      },
      {
        "id": "frustracion",
        "label": "Frustración",
        "face": "frustracion"
      },
      {
        "id": "otra",
        "label": "Otra sensación",
        "custom": true
      },
      {
        "id": "ninguna",
        "label": "Nada en particular"
      },
      {
        "id": "indefinida",
        "label": "No lo recuerdo"
      }
    ],
    "help": "Toca una cara o elige una de las alternativas. No hay una respuesta esperada.",
    "ui": "emotions",
    "mainCount": 5,
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "B4": {
    "id": "B4",
    "title": "¿Con qué relacionas principalmente esa sensación?",
    "options": [
      {
        "id": "curso",
        "label": "Mi experiencia con el curso o el profesor"
      },
      {
        "id": "expresion",
        "label": "La posibilidad de compartir mi opinión"
      },
      {
        "id": "contenido",
        "label": "Las preguntas del cuestionario"
      },
      {
        "id": "tiempo",
        "label": "El tiempo que tenía o tendría disponible"
      },
      {
        "id": "resultados",
        "label": "Lo que sé sobre el uso de los resultados"
      },
      {
        "id": "confidencialidad",
        "label": "La confidencialidad de las respuestas"
      },
      {
        "id": "otro",
        "label": "Otro aspecto",
        "custom": true
      },
      {
        "id": "ninguno",
        "label": "Ningún aspecto en particular"
      },
      {
        "id": "indefinido",
        "label": "No lo sé / no lo recuerdo"
      }
    ],
    "help": "Elige el aspecto que más se acerque a tu experiencia.",
    "ui": "cards",
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "C1": {
    "id": "C1",
    "title": "Pensando en esa invitación, ¿qué ocurrió?",
    "options": [
      {
        "id": "sin_tiempo",
        "label": "No tenía tiempo en ese momento"
      },
      {
        "id": "postergue",
        "label": "Pensé hacerlo después y no lo retomé"
      },
      {
        "id": "sin_comentarios",
        "label": "No tenía comentarios que quisiera compartir"
      },
      {
        "id": "otro_medio",
        "label": "Ya había expresado mi opinión por otro medio"
      },
      {
        "id": "sin_info",
        "label": "No tenía claro qué se hacía con las respuestas"
      },
      {
        "id": "confidencialidad",
        "label": "Tenía dudas sobre la confidencialidad"
      },
      {
        "id": "sin_acceso",
        "label": "Después no encontré la invitación"
      },
      {
        "id": "otra",
        "label": "Otra situación",
        "custom": true
      },
      {
        "id": "no_recuerdo",
        "label": "No recuerdo"
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "C2": {
    "id": "C2",
    "title": "¿Por qué medio recuerdas haber recibido esa invitación?",
    "options": [
      {
        "id": "correo",
        "label": "Correo institucional"
      },
      {
        "id": "plataforma",
        "label": "Plataforma del curso"
      },
      {
        "id": "profesor",
        "label": "Profesor o tutor"
      },
      {
        "id": "coordinacion",
        "label": "Coordinación del programa"
      },
      {
        "id": "clase",
        "label": "Durante una sesión de clase"
      },
      {
        "id": "otro",
        "label": "Otro medio",
        "custom": true
      },
      {
        "id": "no_recuerdo",
        "label": "No recuerdo"
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "C3": {
    "id": "C3",
    "title": "Al recibir esa invitación, ¿qué sensación o reacción predominó?",
    "options": [
      {
        "id": "interes",
        "label": "Interés",
        "face": "interes"
      },
      {
        "id": "satisfaccion",
        "label": "Satisfacción",
        "face": "satisfaccion"
      },
      {
        "id": "indiferencia",
        "label": "Indiferencia",
        "face": "indiferencia"
      },
      {
        "id": "confusion",
        "label": "Confusión",
        "face": "confusion"
      },
      {
        "id": "frustracion",
        "label": "Frustración",
        "face": "frustracion"
      },
      {
        "id": "otra",
        "label": "Otra sensación",
        "custom": true
      },
      {
        "id": "ninguna",
        "label": "Nada en particular"
      },
      {
        "id": "indefinida",
        "label": "No lo recuerdo"
      }
    ],
    "help": "Toca una cara o elige una de las alternativas. No hay una respuesta esperada.",
    "ui": "emotions",
    "mainCount": 5,
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "C4": {
    "id": "C4",
    "title": "¿Con qué relacionas principalmente esa sensación?",
    "options": [
      {
        "id": "curso",
        "label": "Mi experiencia con el curso o el profesor"
      },
      {
        "id": "expresion",
        "label": "La posibilidad de compartir mi opinión"
      },
      {
        "id": "contenido",
        "label": "Las preguntas del cuestionario"
      },
      {
        "id": "tiempo",
        "label": "El tiempo que tenía o tendría disponible"
      },
      {
        "id": "resultados",
        "label": "Lo que sé sobre el uso de los resultados"
      },
      {
        "id": "confidencialidad",
        "label": "La confidencialidad de las respuestas"
      },
      {
        "id": "otro",
        "label": "Otro aspecto",
        "custom": true
      },
      {
        "id": "ninguno",
        "label": "Ningún aspecto en particular"
      },
      {
        "id": "indefinido",
        "label": "No lo sé / no lo recuerdo"
      }
    ],
    "help": "Elige el aspecto que más se acerque a tu experiencia.",
    "ui": "cards",
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "D1": {
    "id": "D1",
    "title": "¿Por cuáles medios sueles enterarte de información académica importante?",
    "options": [
      {
        "id": "correo",
        "label": "Correo institucional"
      },
      {
        "id": "plataforma",
        "label": "Plataforma del curso"
      },
      {
        "id": "profesor",
        "label": "Profesores o tutores"
      },
      {
        "id": "coordinacion",
        "label": "Coordinación del programa"
      },
      {
        "id": "pares",
        "label": "Compañeros o grupos de mensajería"
      },
      {
        "id": "otro",
        "label": "Otro medio",
        "custom": true
      },
      {
        "id": "sin_canal",
        "label": "No identifico un medio habitual"
      }
    ],
    "help": "Puedes seleccionar hasta dos opciones.",
    "type": "multi",
    "max": 2,
    "exclusive": [
      "sin_canal"
    ],
    "ui": "chips",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "D2": {
    "id": "D2",
    "title": "¿Has compartido alguna vez tu opinión sobre un curso directamente con alguien de la Universidad?",
    "options": [
      {
        "id": "profesor",
        "label": "Sí, con un profesor"
      },
      {
        "id": "tutor",
        "label": "Sí, con un tutor o director académico"
      },
      {
        "id": "coordinacion",
        "label": "Sí, con la coordinación del programa"
      },
      {
        "id": "representacion",
        "label": "Sí, con un representante estudiantil"
      },
      {
        "id": "no",
        "label": "No"
      },
      {
        "id": "no_recuerdo",
        "label": "No recuerdo"
      }
    ],
    "help": "Puedes seleccionar las alternativas que correspondan.",
    "type": "multi",
    "exclusive": [
      "no",
      "no_recuerdo"
    ],
    "ui": "chips"
  },
  "D3": {
    "id": "D3",
    "title": "Si recibieras una invitación para responder una encuesta de cursos, ¿qué sensación crees que tendrías?",
    "options": [
      {
        "id": "interes",
        "label": "Interés",
        "face": "interes"
      },
      {
        "id": "satisfaccion",
        "label": "Satisfacción",
        "face": "satisfaccion"
      },
      {
        "id": "indiferencia",
        "label": "Indiferencia",
        "face": "indiferencia"
      },
      {
        "id": "confusion",
        "label": "Confusión",
        "face": "confusion"
      },
      {
        "id": "frustracion",
        "label": "Frustración",
        "face": "frustracion"
      },
      {
        "id": "otra",
        "label": "Otra sensación",
        "custom": true
      },
      {
        "id": "ninguna",
        "label": "Nada en particular"
      },
      {
        "id": "indefinida",
        "label": "No puedo anticiparlo"
      }
    ],
    "help": "Toca una cara o elige una de las alternativas. No hay una respuesta esperada.",
    "ui": "emotions",
    "mainCount": 5,
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "D4": {
    "id": "D4",
    "title": "¿Con qué relacionarías principalmente esa sensación?",
    "options": [
      {
        "id": "curso",
        "label": "Mi experiencia con el curso o el profesor"
      },
      {
        "id": "expresion",
        "label": "La posibilidad de compartir mi opinión"
      },
      {
        "id": "contenido",
        "label": "Las preguntas que podría incluir la encuesta de cursos"
      },
      {
        "id": "tiempo",
        "label": "El tiempo que tendría disponible"
      },
      {
        "id": "resultados",
        "label": "Lo que se hiciera con las respuestas"
      },
      {
        "id": "confidencialidad",
        "label": "Quién podría ver las respuestas"
      },
      {
        "id": "otro",
        "label": "Otro aspecto",
        "custom": true
      },
      {
        "id": "ninguno",
        "label": "Ningún aspecto en particular"
      },
      {
        "id": "indefinido",
        "label": "No lo sé / no lo recuerdo"
      }
    ],
    "help": "Elige el aspecto que más se acerque a lo que imaginas.",
    "ui": "cards",
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "E1": {
    "id": "E1",
    "title": "¿Por cuáles medios te enteras habitualmente de información académica de tu posgrado?",
    "options": [
      {
        "id": "correo",
        "label": "Correo institucional"
      },
      {
        "id": "plataforma",
        "label": "Plataforma del curso"
      },
      {
        "id": "profesor",
        "label": "Profesores o tutores"
      },
      {
        "id": "coordinacion",
        "label": "Coordinación del programa"
      },
      {
        "id": "pares",
        "label": "Compañeros o grupos de mensajería"
      },
      {
        "id": "otro",
        "label": "Otro medio",
        "custom": true
      },
      {
        "id": "sin_canal",
        "label": "No identifico un medio habitual"
      }
    ],
    "help": "Puedes seleccionar hasta dos opciones.",
    "type": "multi",
    "max": 2,
    "exclusive": [
      "sin_canal"
    ],
    "ui": "chips",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "E2": {
    "id": "E2",
    "title": "¿Has compartido alguna vez tu opinión sobre un curso directamente con alguien de la Universidad?",
    "options": [
      {
        "id": "profesor",
        "label": "Sí, con un profesor"
      },
      {
        "id": "tutor",
        "label": "Sí, con un tutor o director académico"
      },
      {
        "id": "coordinacion",
        "label": "Sí, con la coordinación del programa"
      },
      {
        "id": "representacion",
        "label": "Sí, con un representante estudiantil"
      },
      {
        "id": "no",
        "label": "No"
      },
      {
        "id": "no_recuerdo",
        "label": "No recuerdo"
      }
    ],
    "help": "Puedes seleccionar las alternativas que correspondan.",
    "type": "multi",
    "exclusive": [
      "no",
      "no_recuerdo"
    ],
    "ui": "chips"
  },
  "E3": {
    "id": "E3",
    "title": "Si recibieras una invitación para responder una encuesta de cursos, ¿qué sensación crees que tendrías?",
    "options": [
      {
        "id": "interes",
        "label": "Interés",
        "face": "interes"
      },
      {
        "id": "satisfaccion",
        "label": "Satisfacción",
        "face": "satisfaccion"
      },
      {
        "id": "indiferencia",
        "label": "Indiferencia",
        "face": "indiferencia"
      },
      {
        "id": "confusion",
        "label": "Confusión",
        "face": "confusion"
      },
      {
        "id": "frustracion",
        "label": "Frustración",
        "face": "frustracion"
      },
      {
        "id": "otra",
        "label": "Otra sensación",
        "custom": true
      },
      {
        "id": "ninguna",
        "label": "Nada en particular"
      },
      {
        "id": "indefinida",
        "label": "No puedo anticiparlo"
      }
    ],
    "help": "Toca una cara o elige una de las alternativas. No hay una respuesta esperada.",
    "ui": "emotions",
    "mainCount": 5,
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "E4": {
    "id": "E4",
    "title": "¿Con qué relacionarías principalmente esa sensación?",
    "options": [
      {
        "id": "curso",
        "label": "Mi experiencia con el curso o el profesor"
      },
      {
        "id": "expresion",
        "label": "La posibilidad de compartir mi opinión"
      },
      {
        "id": "contenido",
        "label": "Las preguntas que podría incluir la encuesta de cursos"
      },
      {
        "id": "tiempo",
        "label": "El tiempo que tendría disponible"
      },
      {
        "id": "resultados",
        "label": "Lo que se hiciera con las respuestas"
      },
      {
        "id": "confidencialidad",
        "label": "Quién podría ver las respuestas"
      },
      {
        "id": "otro",
        "label": "Otro aspecto",
        "custom": true
      },
      {
        "id": "ninguno",
        "label": "Ningún aspecto en particular"
      },
      {
        "id": "indefinido",
        "label": "No lo sé / no lo recuerdo"
      }
    ],
    "help": "Elige el aspecto que más se acerque a lo que imaginas.",
    "ui": "cards",
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "PC1": {
    "id": "PC1",
    "title": "¿Qué crees que ocurre con los resultados de las encuestas de cursos?",
    "options": [
      {
        "id": "revision",
        "label": "Creo que se revisan para conocer la experiencia estudiantil"
      },
      {
        "id": "cambios",
        "label": "Creo que se utilizan para hacer ajustes en los cursos"
      },
      {
        "id": "docencia",
        "label": "Creo que se utilizan para valorar el trabajo docente"
      },
      {
        "id": "sin_uso",
        "label": "Creo que no se utilizan posteriormente"
      },
      {
        "id": "otro",
        "label": "Creo que ocurre algo diferente",
        "custom": true
      },
      {
        "id": "no_se",
        "label": "No sé"
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "PC2": {
    "id": "PC2",
    "title": "¿Qué aspectos crees que se evalúan mediante las encuestas de cursos?",
    "options": [
      {
        "id": "profesor",
        "label": "La experiencia con el profesor"
      },
      {
        "id": "organizacion",
        "label": "Los contenidos y la organización del curso"
      },
      {
        "id": "actividades",
        "label": "Las actividades y las formas de evaluación"
      },
      {
        "id": "recursos",
        "label": "Los recursos utilizados durante el curso"
      },
      {
        "id": "aprendizaje",
        "label": "La experiencia de aprendizaje"
      },
      {
        "id": "otros",
        "label": "Otros aspectos",
        "custom": true
      },
      {
        "id": "no_se",
        "label": "No sé"
      }
    ],
    "help": "Puedes seleccionar varios aspectos.",
    "type": "multi",
    "exclusive": [
      "no_se"
    ],
    "ui": "chips",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "PC3": {
    "id": "PC3",
    "title": "Cuando decides si responder una encuesta de cursos, ¿qué importancia tiene para ti saber quién puede ver tus respuestas?",
    "options": [
      {
        "id": "ninguna",
        "label": "Ninguna importancia"
      },
      {
        "id": "poca",
        "label": "Poca importancia"
      },
      {
        "id": "intermedia",
        "label": "Importancia moderada"
      },
      {
        "id": "mucha",
        "label": "Bastante importancia"
      },
      {
        "id": "total",
        "label": "Mucha importancia"
      },
      {
        "id": "no_se",
        "label": "No lo había pensado"
      }
    ],
    "help": "Toca un número del 1 al 5, o indica si no lo habías pensado.",
    "ui": "scale",
    "type": "single"
  },
  "PC4": {
    "id": "PC4",
    "title": "¿En qué momento de un curso te parece más apropiado responder una encuesta de este tipo?",
    "options": [
      {
        "id": "desarrollo",
        "label": "Durante el curso"
      },
      {
        "id": "ultimas",
        "label": "En las últimas sesiones"
      },
      {
        "id": "inmediato",
        "label": "Al terminar el curso"
      },
      {
        "id": "dias_despues",
        "label": "Unos días después"
      },
      {
        "id": "otro",
        "label": "En otro momento",
        "custom": true
      },
      {
        "id": "sin_preferencia",
        "label": "No tengo preferencia"
      }
    ],
    "help": "Toca un momento del curso. No tiene que coincidir con el final de un semestre.",
    "ui": "timeline",
    "type": "single",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "PC5": {
    "id": "PC5",
    "title": "¿Has conocido algún cambio en un curso que se haya relacionado con los resultados de estas encuestas?",
    "options": [
      {
        "id": "concreto",
        "label": "Sí, conozco un cambio concreto"
      },
      {
        "id": "general",
        "label": "He oído hablar de cambios, pero no conozco ejemplos"
      },
      {
        "id": "no",
        "label": "No conozco cambios de ese tipo"
      },
      {
        "id": "no_se",
        "label": "No sé"
      },
      {
        "id": "otro",
        "label": "Otra respuesta (¿cuál?)",
        "custom": true
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbela brevemente.",
    "otherMax": 160
  },
  "PA1": {
    "id": "PA1",
    "title": "Para terminar, ¿hay algo más que quieras comentar sobre las encuestas de cursos de Uniandes?",
    "options": [],
    "help": "Respuesta opcional, máximo 250 caracteres. Evita escribir datos personales.",
    "type": "text",
    "maxChars": 250,
    "optional": true,
    "ui": "cards"
  },
  "PN1": {
    "id": "PN1",
    "title": "Antes de decidir si responder una encuesta de cursos, ¿qué información, te interesaría conocer?",
    "options": [
      {
        "id": "proposito",
        "label": "Para qué se utilizarían las respuestas"
      },
      {
        "id": "acceso",
        "label": "Quién podría ver mis respuestas"
      },
      {
        "id": "duracion",
        "label": "Cuánto tiempo tomaría responderla"
      },
      {
        "id": "momento",
        "label": "Cuándo estaría disponible"
      },
      {
        "id": "voluntaria",
        "label": "Si responderla es voluntario"
      },
      {
        "id": "otro",
        "label": "Otra información",
        "custom": true
      },
      {
        "id": "ninguna",
        "label": "Ninguna información en particular"
      },
      {
        "id": "no_se",
        "label": "No sé"
      }
    ],
    "help": "Selecciona hasta dos opciones.",
    "type": "multi",
    "ui": "chips",
    "max": 2,
    "exclusive": [
      "ninguna",
      "no_se"
    ],
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "PN2": {
    "id": "PN2",
    "title": "¿Por qué medio preferirías recibir una invitación para responder una encuesta de cursos?",
    "options": [
      {
        "id": "correo",
        "label": "Correo institucional"
      },
      {
        "id": "plataforma",
        "label": "Plataforma de los cursos"
      },
      {
        "id": "clase",
        "label": "Durante una sesión de clase"
      },
      {
        "id": "coordinacion",
        "label": "Coordinación del programa"
      },
      {
        "id": "otro",
        "label": "Otro medio",
        "custom": true
      },
      {
        "id": "sin_preferencia",
        "label": "No tengo preferencia"
      },
      {
        "id": "no_se",
        "label": "No sé"
      }
    ],
    "help": "",
    "type": "single",
    "ui": "cards",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "PN4": {
    "id": "PN4",
    "title": "¿En qué momento de un curso te parecería oportuno que se pidiera la opinión de los estudiantes?",
    "options": [
      {
        "id": "desarrollo",
        "label": "Durante el curso"
      },
      {
        "id": "ultimas",
        "label": "En las últimas sesiones"
      },
      {
        "id": "inmediato",
        "label": "Al terminar el curso"
      },
      {
        "id": "dias_despues",
        "label": "Unos días después"
      },
      {
        "id": "otro",
        "label": "En otro momento",
        "custom": true
      },
      {
        "id": "sin_preferencia",
        "label": "No tengo preferencia"
      }
    ],
    "help": "Puedes escoger el momento que prefieras, independientemente de la duración del curso.",
    "type": "single",
    "ui": "timeline",
    "otherPrompt": "¿Cuál? Escríbelo aquí.",
    "otherMax": 160
  },
  "PA2": {
    "id": "PA2",
    "title": "Para terminar, ¿hay algo más que quieras comentar sobre cómo se recogen las opiniones de los estudiantes acerca de sus cursos?",
    "options": [],
    "help": "Respuesta opcional, máximo 250 caracteres. Evita escribir datos personales.",
    "type": "text",
    "ui": "cards",
    "maxChars": 250,
    "optional": true
  }
};
const RUTAS = {"A": ["A1", "A2", "A3", "A4"], "B": ["B1", "B2", "B3", "B4"], "C": ["C1", "C2", "C3", "C4"], "D": ["D1", "D2", "D3", "D4"], "E": ["E1", "E2", "E3", "E4"]};
const COMUNES = ['PC1','PC2','PC3','PC4','PC5','PA1']; // Ruta A
const COMUNES_SIN_RESPUESTA = ['PC1','PC2','PC4','PA1']; // Rutas B y C
const SIN_EXPERIENCIA = ['PN1','PN2','PN4','PA2']; // Rutas D y E

const $ = (selector) => document.querySelector(selector);
let respuestas = Object.create(null);
let otrasRespuestas = Object.create(null);
let actual = 'P1';
let inicio = null;
let envioPendiente = null;
let tiempoEspera = null;
let envioEnCurso = false;
const transportes = new Set();
const routePattern = /^[ABCDE][1-4]$/;
const emotionPattern = /^[ABCDE]3$/;
const screens = ['welcome','survey','explain','sending','finish','send-error'];

function isSavedMode() {
  return CONFIG.guardarEnSheets === true && CONFIG.aprobacionInstitucional === true &&
    CONFIG.contactoInvestigacion.trim().length > 4 && /^https:\/\//.test(CONFIG.urlAvisoDatos) &&
    /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(CONFIG.urlAppsScript.trim());
}
function currentRoute() { return Object.hasOwn(RUTAS,respuestas.P2) ? respuestas.P2 : null; }
function pasos() {
  const route = currentRoute();
  let specific = route ? [...RUTAS[route]] : [];
  if (route && ['ninguna','indefinida'].includes(respuestas[route+'3'])) {
    specific = specific.filter(id => id !== route+'4');
  }
  const tail = route === 'A' ? COMUNES : (route === 'B' || route === 'C') ? COMUNES_SIN_RESPUESTA : SIN_EXPERIENCIA;
  return ['P1','INFO','P2',...specific,...tail];
}
function show(id) {
  for (const name of screens) $('#'+name).hidden = name !== id;
  if (id === 'survey') $('#question-scroll').scrollTop=0;
  if (id === 'welcome') $('#welcome-scroll').scrollTop=0;
}
function setError(text='') {
  $('#validation').textContent=text;
  $('#validation').hidden=!text;
}
function selectedOther(question) {
  const current=respuestas[question.id];
  return question.options.some(o=>o.custom &&
    (Array.isArray(current) ? current.includes(o.id) : current===o.id));
}
function selectedCount(question) {
  const answer=respuestas[question.id];
  return Array.isArray(answer) ? answer.length : (answer ? 1 : 0);
}
function updateProgress() {
  const list=pasos();
  const pos=list.indexOf(actual);
  const visible=list.filter(id=>id!=='INFO');
  const counted=visible.indexOf(actual);
  const total=currentRoute() ? visible.length : 12;
  const percent=Math.round((counted+1)/total*100);
  $('#progress-number').textContent=(counted+1)+' de '+total;
  $('#progressbar').setAttribute('aria-valuenow',String(percent));
  $('#progressbar').setAttribute('aria-valuetext','Pregunta '+(counted+1)+' de '+total);
  $('#progress-fill').style.width=percent+'%';
}
function updateOther(question,focus=false) {
  const visible=selectedOther(question);
  const area=$('#other-area');
  const wasHidden=area.hidden;
  area.hidden=!visible;
  if (!visible) {
    delete otrasRespuestas[question.id];
    $('#other-input').value='';
    return;
  }
  $('#other-label').textContent=question.otherPrompt || '\u00bfCu\u00e1l? Escr\u00edbelo aqu\u00ed.';
  $('#other-input').maxLength=question.otherMax || 160;
  $('#other-input').value=otrasRespuestas[question.id] || '';
  $('#other-counter').textContent=$('#other-input').value.length+' / '+$('#other-input').maxLength;
  if (focus && wasHidden) {
    // Reveal the field without changing the device zoom.
    requestAnimationFrame(()=>$('#other-input').focus({preventScroll:false}));
  }
}
function updateControls(question) {
  const value=respuestas[question.id];
  for (const input of $('#answers').querySelectorAll('input[data-option]')) {
    input.checked=Array.isArray(value) ? value.includes(input.value) : value===input.value;
    input.closest('.choice').classList.toggle('selected',input.checked);
  }
  const count=selectedCount(question);
  $('#selection-note').textContent=question.type==='multi' ?
    (count ? count+' seleccionada'+(count>1?'s':'') : 'Puedes elegir varias') : '';
  if (question.ui==='scale') {
    const chosen=question.options.find(o=>o.id===value);
    $('#scale-description').textContent=chosen ? chosen.label : 'Toca un punto de la escala';
  }
  updateProgress();
}
function setAnswer(id,value,checked=true) {
  const question=PREGUNTAS[id];
  const previous=respuestas[id];
  if (question.type==='multi') {
    let list=Array.isArray(previous) ? [...previous] : [];
    const exclusives=question.exclusive || [];
    if (checked) {
      if (exclusives.includes(value)) list=[value];
      else {
        list=list.filter(x=>!exclusives.includes(x));
        if (!list.includes(value)) {
          if (question.max && list.length>=question.max) {
            setError('Puedes elegir hasta '+question.max+' opciones. Quita una antes de a\u00f1adir otra.');
            updateControls(question);
            return;
          }
          list.push(value);
        }
      }
    } else list=list.filter(x=>x!==value);
    respuestas[id]=list;
  } else {
    if (id==='P2' && previous!==value) {
      for (const key of Object.keys(respuestas)) if (routePattern.test(key)||/^(?:PC[1-5]|PN[1-4]|PA[12])$/.test(key)) delete respuestas[key];
      for (const key of Object.keys(otrasRespuestas)) if (routePattern.test(key)||/^(?:PC[1-5]|PN[1-4]|PA[12])$/.test(key)) delete otrasRespuestas[key];
    }
    if (emotionPattern.test(id) && previous!==value) {
      delete respuestas[id[0]+'4'];
      delete otrasRespuestas[id[0]+'4'];
    }
    respuestas[id]=value;
  }
  setError();
  updateControls(question);
  updateOther(question,true);
}
function el(tag,className='',text='') {
  const node=document.createElement(tag);
  if(className) node.className=className;
  if(text) node.textContent=text;
  return node;
}
function faceSvg(kind) {
  const eyes='<circle cx="23" cy="27" r="2.6" fill="currentColor"/><circle cx="41" cy="27" r="2.6" fill="currentColor"/>';
  const mouths={
    interes:'<path d="M22 38 Q32 44 42 37"/>',
    satisfaccion:'<path d="M19 36 Q32 54 45 36"/><path d="M19 36 H45"/>',
    indiferencia:'<path d="M22 41 H42"/>',
    confusion:'<path d="M23 41 Q29 35 33 40 Q38 45 43 39"/><path d="M19 20 L27 18 M37 18 L45 21"/>',
    frustracion:'<path d="M21 43 Q32 31 43 43"/><path d="M18 18 L27 22 M37 22 L46 18"/>'
  };
  return '<svg class="face" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle class="face-fill" cx="32" cy="32" r="30"/>'+eyes+'<g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">'+mouths[kind]+'</g></svg>';
}
function makeChoice(question,option,extra='') {
  const multi=question.type==='multi';
  const label=el('label','choice'+(multi?' multi':'')+(extra?' '+extra:''));
  const input=el('input');
  input.type=multi?'checkbox':'radio';
  input.name=question.id;
  input.value=option.id;
  input.dataset.option=option.id;
  input.setAttribute('aria-label',option.label);
  input.addEventListener('change',()=>setAnswer(question.id,option.id,input.checked));
  const marker=el('span','check-indicator');marker.setAttribute('aria-hidden','true');
  const text=el('span','choice-label',option.label);
  label.append(input,marker,text);
  return label;
}
function renderEmotions(question,target) {
  const grid=el('div','emotion-grid');
  for (const option of question.options.filter(o=>o.face)) {
    const choice=makeChoice(question,option,'emotion-choice');
    choice.querySelector('.check-indicator').remove();
    const svg=document.createElement('span');svg.innerHTML=faceSvg(option.face);
    choice.insertBefore(svg.firstChild,choice.querySelector('.choice-label'));
    grid.append(choice);
  }
  const alternatives=el('div','supplementary');
  for (const option of question.options.filter(o=>!o.face)) alternatives.append(makeChoice(question,option));
  target.append(grid,alternatives);
}
function renderScale(question,target) {
  const description=el('p','scale-instruction','Toca un punto de la escala');
  description.id='scale-description';description.setAttribute('aria-live','polite');
  const grid=el('div','scale-grid');
  for (let i=0;i<5;i++) {
    const choice=makeChoice(question,question.options[i],'scale-choice');
    choice.querySelector('.choice-label').textContent=String(i+1);
    choice.querySelector('input').setAttribute('aria-label',(i+1)+'. '+question.options[i].label);
    grid.append(choice);
  }
  const ends=el('div','scale-labels');
  ends.append(el('span','',question.options[0].label),el('span','',question.options[4].label));
  const alternative=el('div','scale-alternative');
  alternative.append(makeChoice(question,question.options[5]));
  target.append(description,grid,ends,alternative);
}
function renderTimeline(question,target) {
  const grid=el('div','timeline-grid');
  question.options.slice(0,4).forEach((option,i)=>{
    const choice=makeChoice(question,option,'timeline-choice');
    choice.querySelector('.check-indicator').remove();
    const dot=el('span','timeline-dot',String(i+1));dot.setAttribute('aria-hidden','true');
    choice.insertBefore(dot,choice.querySelector('.choice-label'));
    grid.append(choice);
  });
  const alternatives=el('div','supplementary');
  question.options.slice(4).forEach(option=>alternatives.append(makeChoice(question,option)));
  target.append(grid,alternatives);
}
function renderAnswers(question) {
  const target=$('#answers');target.replaceChildren();
  target.className='answers ui-'+(question.type==='text'?'text':question.ui);
  if (question.type==='text') {
    const text=el('textarea','open-answer');text.id='open-text';text.maxLength=question.maxChars||250;
    text.setAttribute('aria-label',question.title);text.rows=5;
    text.placeholder='Escribe aqu\u00ed tu experiencia, opini\u00f3n o sugerencia (opcional).';
    text.value=respuestas[question.id]||'';
    const counter=el('p','counter');counter.id='open-counter';
    const refresh=()=>{respuestas[question.id]=text.value;counter.textContent=text.value.length+' / '+text.maxLength;};
    text.addEventListener('input',refresh);refresh();target.append(text,counter);
  } else if(question.ui==='emotions') renderEmotions(question,target);
  else if(question.ui==='scale') renderScale(question,target);
  else if(question.ui==='timeline') renderTimeline(question,target);
  else question.options.forEach(option=>target.append(makeChoice(question,option)));
  updateOther(question);updateControls(question);
}
function renderQuestion() {
  if (actual==='INFO') { show('explain'); $('#explain-title').focus({preventScroll:true}); return; }
  const question=PREGUNTAS[actual];
  if(!question) throw new Error('Unknown question: '+actual);
  show('survey');
  $('#question-title').textContent=question.title;
  $('#question-help').textContent=question.help || (question.type==='multi'?'Puedes elegir varias opciones.':'Elige una opci\u00f3n.');
  $('#question-definition').hidden=!question.definition;
  $('#question-definition').textContent=question.definition||'';
  const closing=actual==='PA1'||actual==='PA2', common=actual.startsWith('PC')||actual.startsWith('PN');
  const stage=closing?'Para terminar':common?'Tu perspectiva':question.ui==='emotions'?'Una sensaci\u00f3n':'Tu experiencia';
  $('#step-name').textContent=stage;$('#section-description').textContent=stage;
  $('#section-number').textContent=closing?'03':common?'02':'01';
  setError();renderAnswers(question);
  $('#back-button').innerHTML=actual==='P1'?'\u2190 Inicio':'\u2190 Volver';
  $('#next-button').textContent=closing?(isSavedMode()?'Enviar respuesta':'Finalizar'):'Continuar \u2192';
  $('#question-title').focus({preventScroll:true});
}
function isValid(question) {
  const value=respuestas[question.id];
  if(question.type==='text') return true;
  const valid=question.type==='multi' ? Array.isArray(value)&&value.length>0 : typeof value==='string'&&value.length>0;
  if(!valid) {setError('Selecciona una opci\u00f3n para continuar.');return false;}
  if(selectedOther(question)&&!(otrasRespuestas[question.id]||'').trim()) {
    setError('Escribe cu\u00e1l es tu otra opci\u00f3n antes de continuar.');
    $('#other-input').focus();return false;
  }
  return true;
}
function next() {
  const question=PREGUNTAS[actual];if(actual!=='INFO'&&!isValid(question))return;
  const list=pasos(), position=list.indexOf(actual);
  if(position<list.length-1) {actual=list[position+1];renderQuestion();} else finalizar();
}
function back() {
  const list=pasos(),position=list.indexOf(actual);
  if(position<=0) {show('welcome');return;}
  actual=list[position-1];renderQuestion();
}
function comenzar() {
  if(!$('#consent').checked) {
    $('#consent-error').textContent='Confirma tu consentimiento antes de continuar.';
    $('#consent-error').hidden=false;$('#consent').focus();return;
  }
  $('#consent-error').hidden=true;inicio=inicio||Date.now();actual='P1';renderQuestion();
}
function limpiarTransportes() {
  clearTimeout(tiempoEspera);transportes.forEach(n=>n.remove());transportes.clear();envioEnCurso=false;
}
function reset() {
  limpiarTransportes();respuestas=Object.create(null);otrasRespuestas=Object.create(null);actual='P1';
  inicio=null;envioPendiente=null;$('#consent').checked=false;$('#consent-error').hidden=true;
  show('welcome');
}
function randomId() {
  if(window.crypto?.randomUUID) return window.crypto.randomUUID();
  const bytes=new Uint8Array(20);window.crypto.getRandomValues(bytes);
  return Array.from(bytes,x=>x.toString(16).padStart(2,'0')).join('');
}
function construirPayload() {
  const route=currentRoute(),list=pasos(),answers={},other_answers={};
  for(const id of list) {
    if(id==='INFO') continue;
    if(Object.hasOwn(respuestas,id))answers[id]=respuestas[id];
    if(selectedOther(PREGUNTAS[id]))other_answers[id]=(otrasRespuestas[id]||'').trim();
  }
  return {version:CONFIG.version,submission_id:randomId(),ack_token:randomId(),route,
    duration_seconds:inicio?Math.round((Date.now()-inicio)/1000):0,
    emotion_context:{A:'recordada_respuesta',B:'recordada_abandono',C:'recordada_invitacion',D:'hipotetica',E:'hipotetica'}[route],
    consent:true,consent_version:'v5-2026-10',answers,other_answers};
}
function finalizar() {
  if(!CONFIG.guardarEnSheets) {
    $('#finish-title').textContent='Gracias por participar';
    $('#finish-text').textContent='Gracias por recorrer el cuestionario.';
    show('finish');return;
  }
  if(!isSavedMode()||location.protocol==='file:') {
    $('#finish-title').textContent='Falta configurar el env\u00edo';
    $('#finish-text').textContent='No se envi\u00f3 ninguna respuesta. Revisa la conexi\u00f3n, el contacto, la aprobaci\u00f3n y el aviso de datos; luego abre el sitio publicado.';
    show('finish');return;
  }
  if(!envioPendiente)envioPendiente=construirPayload();enviar();
}
function googleOrigin(origin) {
  try {
    const url=new URL(origin);
    return url.protocol==='https:'&&(url.hostname==='script.google.com'||url.hostname==='script.googleusercontent.com'||url.hostname.endsWith('.googleusercontent.com'));
  }catch(_){return false;}
}
function confirmarMensaje(event) {
  const msg=event.data;
  if(!envioPendiente||!googleOrigin(event.origin)||!msg||msg.tipo!=='uniandes-encuesta-v5'||
     msg.submission_id!==envioPendiente.submission_id||msg.ack_token!==envioPendiente.ack_token)return;
  limpiarTransportes();
  if(msg.ok===true) {
    $('#finish-title').textContent='Gracias por participar';
    $('#finish-text').textContent='Gracias por compartir tu experiencia.';
    envioPendiente=null;respuestas=Object.create(null);otrasRespuestas=Object.create(null);show('finish');
  }else show('send-error');
}
function enviar() {
  if(!envioPendiente||envioEnCurso)return;
  limpiarTransportes();envioEnCurso=true;show('sending');
  const frame=document.createElement('iframe');frame.name='survey_sink_'+Date.now();frame.className='transport-frame';frame.tabIndex=-1;
  frame.setAttribute('aria-hidden','true');frame.title='Confirmaci\u00f3n de guardado';
  const form=document.createElement('form');form.method='POST';form.action=CONFIG.urlAppsScript;form.target=frame.name;form.hidden=true;
  const input=document.createElement('input');input.type='hidden';input.name='payload';input.value=JSON.stringify(envioPendiente);form.append(input);
  document.body.append(frame,form);transportes.add(frame);transportes.add(form);
  tiempoEspera=setTimeout(()=>{envioEnCurso=false;show('send-error');},30000);
  try{form.submit();}catch(_){limpiarTransportes();show('send-error');}
}
function init() {
  if(isSavedMode()) {
    $('#mode-banner').hidden=true;
    $('#storage-disclosure').replaceChildren();
    $('#storage-disclosure').append('Al finalizar, las respuestas se enviar\u00e1n a una hoja privada del equipo de investigaci\u00f3n. Consulta el ');
    const link=el('a','','aviso de tratamiento de datos');link.href=CONFIG.urlAvisoDatos;link.target='_blank';link.rel='noopener noreferrer';
    $('#storage-disclosure').append(link,'.');
    $('#contact-line').textContent='Responsable y contacto: '+CONFIG.contactoInvestigacion;
    $('#privacy-details').open=true;
  }else if(CONFIG.guardarEnSheets){$('#mode-banner').hidden=false;$('#mode-banner').textContent='Env\u00edo bloqueado: falta completar la configuraci\u00f3n.';}
  $('#start-button').addEventListener('click',comenzar);
  $('#explain-back').addEventListener('click',()=>{actual='P1';renderQuestion();});
  $('#explain-next').addEventListener('click',()=>{actual='P2';renderQuestion();});
  $('#next-button').addEventListener('click',next);$('#back-button').addEventListener('click',back);
  $('#restart-button').addEventListener('click',reset);$('#retry-button').addEventListener('click',enviar);
  $('#other-input').addEventListener('input',event=>{
    otrasRespuestas[actual]=event.target.value;
    $('#other-counter').textContent=event.target.value.length+' / '+event.target.maxLength;setError();
  });
  window.addEventListener('message',confirmarMensaje);show('welcome');
}
document.addEventListener('DOMContentLoaded',init);
