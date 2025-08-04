import React from 'react';
import type { Module } from './types';
import { WelcomeIcon, CommunicationIcon, LanguageIcon, SpellingIcon, GrammarIcon, WritingIcon, ReadingIcon, TipsIcon } from './components/ui/Icons';

export const MODULES: Module[] = [
  {
    id: 'intro',
    title: 'Bienvenido a Maestro del Lenguaje',
    description: 'Tu aventura para dominar el español comienza aquí. Aprende a usar la plataforma y prepárate para el éxito.',
    icon: WelcomeIcon,
    lessons: [
      {
        id: 'intro-1',
        title: 'Propósito de la Guía',
        content: (
          <p>
            Esta plataforma está diseñada para ser tu compañera interactiva en el estudio del lenguaje. Nuestro objetivo es que aprendas de forma dinámica, clara y a tu propio ritmo.
          </p>
        ),
      },
      {
        id: 'intro-2',
        title: 'Metodología de Estudio',
        content: (
            <div className="space-y-2">
                <p>Te recomendamos seguir este camino para un aprendizaje efectivo:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Explora cada módulo en orden.</li>
                    <li>Lee con atención las lecciones teóricas.</li>
                    <li>Realiza los quizzes para poner a prueba tus conocimientos.</li>
                    <li>No te preocupes por los errores, ¡son oportunidades para aprender!</li>
                </ul>
            </div>
        ),
      },
    ],
    quizTopic: 'Conceptos básicos de la plataforma',
  },
  {
    id: 'comunicacion',
    title: 'La Comunicación',
    description: 'Explora los elementos, funciones y vicios del proceso comunicativo.',
    icon: CommunicationIcon,
    lessons: [
      {
        id: 'com-1',
        title: 'Elementos de la Comunicación',
        content: (
          <div className="space-y-4">
            <p>
              La comunicación es un proceso complejo que involucra varios elementos clave: <strong>Emisor</strong> (quien envía el mensaje), <strong>Receptor</strong> (quien lo recibe), <strong>Mensaje</strong> (la información), <strong>Código</strong> (el sistema de signos, como el idioma), <strong>Canal</strong> (el medio físico), y <strong>Contexto</strong> (la situación).
            </p>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo práctico:</p>
                <p className="text-slate-600 mt-1">Si le envías un mensaje de WhatsApp a un amigo para quedar, los elementos son:
                    <ul className="list-disc list-inside mt-1">
                    <li><strong>Emisor:</strong> Tú</li>
                    <li><strong>Receptor:</strong> Tu amigo</li>
                    <li><strong>Mensaje:</strong> "¿Quedamos a las 5?"</li>
                    <li><strong>Código:</strong> El idioma español</li>
                    <li><strong>Canal:</strong> El teléfono móvil (WhatsApp)</li>
                    <li><strong>Contexto:</strong> Una conversación informal entre amigos</li>
                    </ul>
                </p>
            </div>
          </div>
        ),
      },
      {
        id: 'com-2',
        title: 'Funciones del Lenguaje',
        content: (
            <div className="space-y-4">
                <p>
                    El lenguaje tiene diferentes propósitos o funciones. La <strong>función informativa</strong> transmite datos, la <strong>emotiva</strong> expresa sentimientos, y la <strong>apelativa</strong> busca influir en el receptor. ¿Listo para aprender las demás?
                </p>
                <div className="p-3 bg-slate-100 rounded-lg">
                    <p className="font-semibold text-slate-700">Ejemplos:</p>
                    <ul className="list-disc list-inside mt-1 text-slate-600">
                        <li><strong>Informativa:</strong> "El tren llega a las 10:30."</li>
                        <li><strong>Emotiva:</strong> "¡Qué película tan emocionante!"</li>
                        <li><strong>Apelativa:</strong> "Por favor, siéntate."</li>
                    </ul>
                </div>
            </div>
        ),
      },
    ],
    quizTopic: 'Elementos y funciones de la comunicación',
  },
  {
    id: 'lenguaje',
    title: 'Lenguaje y Signos',
    description: 'Diferencia entre lenguaje, lengua y habla. Descubre el signo lingüístico.',
    icon: LanguageIcon,
    lessons: [
      {
        id: 'len-1',
        title: 'Lenguaje, Lengua, Habla y Dialecto',
        content: (
          <div className="space-y-4">
            <p>Aunque a menudo los usamos como sinónimos, estos conceptos son distintos:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Lenguaje:</strong> Es la capacidad universal del ser humano para comunicarse mediante signos. Es una habilidad abstracta.</li>
              <li><strong>Lengua (o Idioma):</strong> Es el sistema de signos específico que utiliza una comunidad. Por ejemplo, el español, el inglés o el francés. Es un código social.</li>
              <li><strong>Habla:</strong> Es el uso individual y concreto que cada persona hace de la lengua en un momento dado. Es un acto personal.</li>
              <li><strong>Dialecto:</strong> Es una variante de una lengua hablada en una zona geográfica específica. Por ejemplo, el español de Andalucía o el de México.</li>
            </ul>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo práctico:</p>
                <p className="text-slate-600 mt-1">Tu capacidad para usar palabras (tu <strong>lenguaje</strong>) te permite usar la <strong>lengua</strong> española para decir "¡qué calor hace!". La forma en que lo pronuncias (tu <strong>habla</strong>) puede incluir una palabra como "chacho" si eres de Canarias (tu <strong>dialecto</strong>).</p>
            </div>
          </div>
        )
      },
      {
        id: 'len-2',
        title: 'El Signo Lingüístico',
        content: (
          <div className="space-y-4">
            <p>Propuesto por Ferdinand de Saussure, el signo lingüístico une un concepto y una imagen acústica. Tiene dos partes inseparables:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Significante:</strong> La parte material, la secuencia de sonidos o letras.</li>
              <li><strong>Significado:</strong> El concepto o idea mental que asociamos a ese significante.</li>
            </ul>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo: La palabra "gato"</p>
                <ul className="list-disc list-inside mt-1 text-slate-600">
                  <li><strong>Significante:</strong> Los sonidos /g/ /a/ /t/ /o/.</li>
                  <li><strong>Significado:</strong> La idea de un animal felino, doméstico, que maúlla.</li>
                </ul>
                <p className="text-slate-600 mt-2">La relación entre ambos es <em>arbitraria</em>: no hay nada en los sonidos /g/ /a/ /t/ /o/ que se parezca a un gato real.</p>
            </div>
          </div>
        )
      },
      {
        id: 'len-3',
        title: 'Denotación y Connotación',
        content: (
           <div className="space-y-4">
            <p>
                Las palabras tienen un significado literal y otro figurado. <strong>Denotación</strong> es el significado objetivo y literal de una palabra, el que encuentras en el diccionario. La <strong>connotación</strong> es el conjunto de significados subjetivos o culturales añadidos.
            </p>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo: La palabra "noche"</p>
                <ul className="list-disc list-inside mt-1 text-slate-600">
                  <li><strong>Denotación:</strong> Período del día sin luz solar.</li>
                  <li><strong>Connotación:</strong> Tristeza, miedo, fiesta, misterio.</li>
                </ul>
            </div>
           </div>
        )
      }
    ],
    quizTopic: 'Signo lingüístico y niveles de la lengua',
  },
  {
    id: 'ortografia',
    title: 'Ortografía Maestra',
    description: 'Domina las reglas de acentuación, puntuación y el uso de las letras.',
    icon: SpellingIcon,
    lessons: [
        {
            id: 'ort-1',
            title: 'Reglas de Acentuación',
            content: (
              <div className="space-y-4">
                <p>
                    Las palabras se clasifican en <strong>agudas</strong> (acento en la última sílaba), <strong>graves</strong> (acento en la penúltima) y <strong>esdrújulas/sobresdrújulas</strong> (acento en la antepenúltima o anterior). La tilde (') se usa según unas reglas claras.
                </p>
                <div className="p-3 bg-slate-100 rounded-lg">
                    <p className="font-semibold text-slate-700">Ejemplos:</p>
                    <ul className="list-disc list-inside mt-1 text-slate-600">
                        <li><strong>Agudas:</strong> Llevan tilde si terminan en -n, -s o vocal. Ej: <em>corazón, compás, sofá</em>. No llevan: <em>cantar, pared</em>.</li>
                        <li><strong>Graves:</strong> Llevan tilde si NO terminan en -n, -s o vocal. Ej: <em>árbol, lápiz, césped</em>. No llevan: <em>mesa, cantan</em>.</li>
                        <li><strong>Esdrújulas y sobresdrújulas:</strong> Siempre llevan tilde. Ej: <em>música, pájaro, cómetelo</em>.</li>
                    </ul>
                </div>
              </div>
            ),
        },
        {
          id: 'ort-2',
          title: 'Signos de Puntuación Principales',
          content: (
            <div className="space-y-4">
              <p>Los signos de puntuación estructuran el texto y le dan sentido.</p>
              <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplos de uso:</p>
                <ul className="list-disc list-inside mt-1 text-slate-600 space-y-1">
                    <li><strong>Punto (.):</strong> "El partido terminó. Fue un gran día."</li>
                    <li><strong>Coma (,):</strong> "Necesito harina, huevos, leche y azúcar."</li>
                    <li><strong>Punto y coma (;):</strong> "Le encanta el rock; a su hermana, la música clásica."</li>
                    <li><strong>Dos puntos (:):</strong> "Tengo tres pasiones: leer, viajar y aprender."</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          id: 'ort-3',
          title: 'Uso de B/V y G/J',
          content: (
            <div className="space-y-4">
                <p>
                    Algunas de las confusiones más comunes se dan con estas letras. Las reglas nos ayudan a decidir cuál usar.
                </p>
                <div className="p-3 bg-slate-100 rounded-lg">
                    <p className="font-semibold text-slate-700">Ejemplos de reglas comunes:</p>
                    <ul className="list-disc list-inside mt-1 text-slate-600">
                        <li>Se usa <strong>B</strong> después de 'm': <em>ambiente, cambio, bombilla</em>.</li>
                        <li>Se usa <strong>V</strong> después de 'n': <em>envidia, invento, conversación</em>.</li>
                        <li>Sonido /j/ con <strong>G</strong> ante e, i: <em>gente, girar, proteger</em>.</li>
                        <li>Sonido /j/ con <strong>J</strong> ante a, o, u: <em>caja, joya, juego</em>.</li>
                    </ul>
                </div>
            </div>
          )
        }
    ],
    quizTopic: 'Acentuación y reglas ortográficas',
  },
  {
    id: 'gramatica',
    title: 'Gramática y Vocabulario',
    description: 'Analiza la oración, las categorías gramaticales y enriquece tu vocabulario.',
    icon: GrammarIcon,
    lessons: [
      {
        id: 'gram-1',
        title: 'La Oración y sus Partes',
        content: (
          <div className="space-y-4">
            <p>
                La oración es la unidad mínima de comunicación con sentido completo. Generalmente se divide en dos partes fundamentales: <strong>Sujeto</strong> (quien realiza la acción o de quien se dice algo) y <strong>Predicado</strong> (lo que se dice del sujeto, donde el verbo es el núcleo).
            </p>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo de análisis:</p>
                <p className="text-slate-600 mt-1">Oración: "El gato negro duerme en el sofá."</p>
                <ul className="list-disc list-inside mt-1 text-slate-600">
                    <li><strong>Sujeto:</strong> "El gato negro"</li>
                    <li><strong>Predicado:</strong> "duerme en el sofá"</li>
                    <li><strong>Núcleo del Sujeto (nombre):</strong> "gato"</li>
                    <li><strong>Núcleo del Predicado (verbo):</strong> "duerme"</li>
                </ul>
            </div>
          </div>
        )
      },
      {
        id: 'gram-2',
        title: 'Categorías Gramaticales',
        content: (
          <div className="space-y-4">
            <p>Las palabras se clasifican según su función en la oración: sustantivos, adjetivos, verbos, adverbios, pronombres, preposiciones, etc.</p>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo en una oración:</p>
                <p className="italic text-slate-600 mt-1">"Mi (pronombre) perro (sustantivo) fiel (adjetivo) corre (verbo) muy (adverbio) rápido (adverbio) por (preposición) el (artículo) parque (sustantivo)."</p>
            </div>
          </div>
        )
      },
      {
        id: 'gram-3',
        title: 'Ampliando el Vocabulario',
        content: (
            <div className="space-y-4">
              <p>
                Un vocabulario rico mejora tu expresión. Conocer las relaciones entre palabras es clave.
              </p>
              <div className="p-3 bg-slate-100 rounded-lg">
                  <p className="font-semibold text-slate-700">Ejemplos de relaciones:</p>
                  <ul className="list-disc list-inside mt-1 text-slate-600">
                    <li><strong>Sinónimos</strong> (significado similar): <em>feliz, contento, alegre</em>.</li>
                    <li><strong>Antónimos</strong> (significado opuesto): <em>grande / pequeño, alto / bajo</em>.</li>
                    <li><strong>Parónimos</strong> (escritura parecida): <em>actitud</em> (comportamiento) y <em>aptitud</em> (habilidad).</li>
                    <li><strong>Homónimos</strong> (suenan igual): <em>hola</em> (saludo) y <em>ola</em> (del mar).</li>
                  </ul>
              </div>
            </div>
        )
      }
    ],
    quizTopic: 'Categorías gramaticales y sintaxis',
  },
  {
    id: 'expresion',
    title: 'Expresión Oral y Escrita',
    description: 'Aprende a redactar textos coherentes y a comunicarte eficazmente.',
    icon: WritingIcon,
    lessons: [
      {
        id: 'exp-1',
        title: 'Pilares de la Buena Redacción',
        content: (
          <div className="space-y-4">
            <p>Un buen texto se sostiene sobre tres pilares:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Adecuación:</strong> El texto debe ser apropiado para la situación comunicativa (el tema, el receptor, el propósito).</li>
              <li><strong>Coherencia:</strong> Las ideas deben estar organizadas de forma lógica y tener relación entre sí.</li>
              <li><strong>Cohesión:</strong> Las diferentes partes del texto deben estar bien conectadas.</li>
            </ul>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo práctico:</p>
                <p className="text-slate-600 mt-1">Un texto que no es <strong>adecuado</strong> sería usar lenguaje muy informal en un examen. Un texto sin <strong>coherencia</strong> podría saltar de hablar del fútbol a la física cuántica sin conexión. Un texto sin <strong>cohesión</strong> repetiría palabras constantemente en lugar de usar pronombres (ej. "María fue al parque. María jugó en el parque.").</p>
            </div>
          </div>
        )
      },
      {
        id: 'exp-2',
        title: 'Tipos de Textos',
        content: (
          <div className="space-y-4">
            <p>
                Cada texto tiene un propósito diferente. Los principales son: <strong>narrativos</strong>, <strong>descriptivos</strong>, <strong>expositivos</strong> y <strong>argumentativos</strong>.
            </p>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplos de inicio:</p>
                <ul className="list-disc list-inside mt-1 text-slate-600">
                    <li><strong>Narrativo:</strong> "Aquella mañana, el detective recibió una llamada misteriosa..."</li>
                    <li><strong>Descriptivo:</strong> "La habitación era oscura, olía a humedad y solo una pequeña vela iluminaba los muebles antiguos."</li>
                    <li><strong>Expositivo:</strong> "El ciclo del agua consta de tres fases principales: evaporación, condensación y precipitación."</li>
                    <li><strong>Argumentativo:</strong> "Es fundamental fomentar el uso de la bicicleta en las ciudades para reducir la contaminación."</li>
                </ul>
            </div>
          </div>
        )
      }
    ],
    quizTopic: 'Tipos de texto y técnicas de redacción',
  },
  {
    id: 'comprension',
    title: 'Comprensión Lectora',
    description: 'Desarrolla estrategias para entender, analizar e interpretar textos.',
    icon: ReadingIcon,
    lessons: [
      {
        id: 'comp-1',
        title: 'Idea Principal e Ideas Secundarias',
        content: (
          <div className="space-y-4">
            <p>
                La <strong>idea principal</strong> es la información más importante del texto, sin la cual no tendría sentido. Las <strong>ideas secundarias</strong> la complementan, explican, ejemplifican o amplían.
            </p>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo en un párrafo:</p>
                <p className="text-slate-600 mt-1 italic">"El reciclaje es crucial para el medio ambiente. Ayuda a reducir la cantidad de basura en los vertederos. Además, ahorra energía y recursos naturales, ya que se utiliza menos materia prima para fabricar nuevos productos."</p>
                <ul className="list-disc list-inside mt-2 text-slate-600">
                    <li><strong>Idea principal:</strong> El reciclaje es crucial para el medio ambiente.</li>
                    <li><strong>Ideas secundarias:</strong> Reduce la basura, ahorra energía y recursos.</li>
                </ul>
            </div>
          </div>
        )
      },
      {
        id: 'comp-2',
        title: 'Estrategias de Comprensión',
        content: (
          <div className="space-y-4">
            <p>No leas siempre de la misma manera. Adapta tu estrategia al objetivo que tengas.</p>
             <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplo de aplicación:</p>
                 <ul className="list-disc list-inside mt-1 text-slate-600">
                     <li><strong>Skimming (vistazo rápido):</strong> Hojeas un periódico para ver qué noticias hay.</li>
                     <li><strong>Scanning (búsqueda de datos):</strong> Buscas tu nombre en una lista de admitidos.</li>
                     <li><strong>Lectura profunda:</strong> Estudias este mismo módulo para un examen.</li>
                 </ul>
            </div>
          </div>
        )
      },
      {
        id: 'comp-3',
        title: 'Figuras Literarias',
        content: (
          <div className="space-y-4">
            <p>
                Son recursos del lenguaje para dar más expresividad o belleza al texto, muy comunes en poesía y literatura.
            </p>
            <div className="p-3 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-700">Ejemplos comunes:</p>
                <ul className="list-disc list-inside mt-1 text-slate-600">
                    <li><strong>Metáfora</strong> (identificar A con B): "Sus dientes son perlas."</li>
                    <li><strong>Símil</strong> (comparar A con B usando "como"): "Sus dientes brillan como perlas."</li>
                    <li><strong>Personificación</strong> (cualidades humanas a algo no humano): "La ciudad dormía."</li>
                </ul>
            </div>
          </div>
        )
      }
    ],
    quizTopic: 'Idea principal y figuras literarias',
  },
  {
    id: 'consejos',
    title: 'Consejos para tu Éxito',
    description: 'Recomendaciones prácticas para afrontar tus exámenes y evaluaciones.',
    icon: TipsIcon,
    lessons: [
      {
        id: 'cons-1',
        title: 'Antes de una Prueba',
        content: (
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>No dejes todo para el final:</strong> Estudia un poco cada día. Es mejor que estudiar 8 horas seguidas el día antes.</li>
              <li><strong>Organiza tu material:</strong> Ten claros los temas que necesitas repasar y crea un pequeño calendario de estudio.</li>
              <li><strong>Practica con ejercicios:</strong> Usa los quizzes de esta plataforma para autoevaluarte y encontrar tus puntos débiles.</li>
              <li><strong>Duerme bien la noche anterior:</strong> Un cerebro descansado funciona mucho mejor. Cenar ligero también ayuda.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'cons-2',
        title: 'Durante y Después de la Prueba',
        content: (
          <div className="space-y-2">
            <p><strong>Durante la prueba:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Lee todas las preguntas con calma antes de empezar. Te dará una idea general y te ayudará a gestionar el tiempo.</li>
              <li>Gestiona tu tiempo. No te quedes atascado en una pregunta; si no la sabes, pasa a la siguiente y vuelve después.</li>
              <li>Si tienes dudas, marca la pregunta y vuelve a ella más tarde.</li>
              <li>Repasa tus respuestas antes de entregar, buscando errores de escritura o despistes.</li>
            </ul>
            <p className="mt-2"><strong>Después de la prueba:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Una vez entregada, ¡relájate! Ya hiciste el trabajo.</li>
              <li>Cuando recibas los resultados, revisa tus errores para aprender de ellos. No lo veas como un fracaso, sino como una guía para mejorar.</li>
            </ul>
          </div>
        )
      }
    ],
    quizTopic: 'Estrategias de estudio y manejo del estrés',
  },
];