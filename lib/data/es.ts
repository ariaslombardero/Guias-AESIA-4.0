export interface Flashcard {
  front: string;
  back: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ContentSection {
  title: string;
  content: string;
  componentId?: string;
  componentProps?: Record<string, any>;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Guide {
  id: string;
  title: string;
  summary: string;
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  contentIndex?: ContentSection[];
  pdfUrl?: string; // URL to the official PDF guide
  glossary?: GlossaryTerm[];
}

export const guides: Guide[] = [
  {
    "id": "01",
    "title": "Guía introductoria al reglamento de IA",
    "summary": "Esta guía ofrece una visión general del Reglamento Europeo de IA, definiendo su alcance y obligaciones principales. Explica los niveles de riesgo (inaceptable, alto, transparencia, mínimo) y los roles de los operadores, como proveedores y responsables del despliegue. Detalla las obligaciones específicas para sistemas de alto riesgo, incluyendo gestión de riesgos, calidad de datos y documentación técnica, así como los requisitos de transparencia para sistemas como chatbots y deepfakes. También aborda la gobernanza de supervisión y los plazos de cumplimiento.",
    "contentIndex": [
      {
        "title": "1. Preámbulo",
        "content": "Este apartado establece el **propósito fundamental** del documento: servir como guía introductoria para comprender el Reglamento Europeo de Inteligencia Artificial.\n\n### Objetivos principales\n*   **Facilitar la comprensión:** Ofrecer una visión clara del alcance normativo, especialmente para quienes se inician en la materia.\n*   **Definir el alcance:** Clarificar el ámbito de aplicación y las principales obligaciones.\n*   **Contextualizar:** Situar al lector en el marco normativo europeo y las implicaciones para los distintos actores.\n\n> **Nota Importante:** Esta guía **no tiene carácter vinculante** ni sustituye a la normativa legal. Ofrece recomendaciones prácticas alineadas con los requisitos regulatorios a la espera de las normas armonizadas definitivas.\n\nSe complementa con guías técnicas especializadas para profundizar en requisitos específicos como la gestión de riesgos o la calidad de datos."
      },
      {
        "title": "2. Introducción",
        "content": "El Reglamento se basa en la estrategia europea de dos pilares: Excelencia (fomento de inversión e innovación) y Confianza (garantía de seguridad y derechos fundamentales). Busca crear un mercado único de IA seguro y confiable.\n\n### Exclusiones del ámbito de aplicación\nNo se aplica a sistemas utilizados exclusivamente para:\n1.  Fines militares, de defensa o seguridad nacional.\n2.  Investigación y desarrollo (I+D) científica antes de su comercialización.\n3.  Software de código abierto (Open Source), salvo que sean sistemas de alto riesgo, prohibidos, o tengan obligaciones de transparencia.\n4.  Uso personal por personas físicas en actividades no profesionales.\n\n### Niveles de riesgo\nEl Reglamento sigue un enfoque basado en el riesgo:\n\n*   🔴 Riesgo Inaceptable (Prohibidos): Sistemas que vulneran derechos fundamentales. Ejemplos:\n    *   Manipulación del comportamiento cognitivo.\n    *   Puntuación social (*social scoring*).\n    *   Categorización biométrica sensible.\n    *   Identificación biométrica remota en tiempo real en espacios públicos (salvo excepciones policiales estrictas).\n*   🟠 Alto Riesgo: Permitidos pero sujetos a estrictos requisitos antes de entrar al mercado. Incluye:\n    *   Componentes de seguridad en productos regulados (juguetes, ascensores, dispositivos médicos).\n    *   Sistemas en áreas sensibles: Biometría, infraestructuras críticas, educación, empleo, servicios esenciales, control fronterizo y justicia.\n*   🟡 Riesgo Limitado (Transparencia): Sistemas con riesgo de manipulación o engaño. Obligación principal: Informar al usuario.\n    *   *Chatbots* (saber que hablas con una IA).\n    *   *Deepfakes* (etiquetar contenido sintético).\n    *   Reconocimiento de emociones.\n*   🟢 Riesgo Mínimo: La inmensa mayoría de sistemas (filtros de spam, videojuegos). Se permite su uso libre, fomentando códigos de conducta voluntarios.\n\n### Actores clave\n*   Proveedor (*Provider*): Quien desarrolla un sistema de IA o lo pone en el mercado bajo su nombre o marca.\n*   Responsable del despliegue (*Deployer*): Quien utiliza el sistema bajo su propia autoridad en el ejercicio de una actividad profesional."
      },
      {
        "title": "2.1 Niveles de riesgo",
        "content": "El Reglamento clasifica los sistemas en 4 niveles de riesgo:\n\n🔴 **Prohibidos**: Manipulación cognitiva, social scoring, biometría sensible, vigilancia masiva.\n\n🟠 **Alto riesgo**: Sistemas en sectores críticos (empleo, educación, justicia, salud). Requieren gestión de riesgos, datos de calidad, documentación técnica, vigilancia humana y evaluación de conformidad.\n\n🟡 **Transparencia**: Chatbots y deepfakes deben informar al usuario.\n\n🟢 **Mínimo**: Sin obligaciones específicas (spam filters, videojuegos)."
      },
      {
        "title": "3. Principales obligaciones",
        "content": "Las obligaciones varían según el rol y el nivel de riesgo del sistema.\n\n### Obligaciones generales\n*   Alfabetización en IA: Proveedores y responsables del despliegue deben asegurar que su personal tenga la formación necesaria para operar y supervisar los sistemas de IA correctamente.\n\n### Obligaciones de transparencia (art. 50)\nAplicables a sistemas de riesgo limitado (chatbots, deepfakes, etc.):\n1.  Interacción: Informar al usuario de que está interactuando con una IA.\n2.  Contenido sintético: Marcar en formato legible digitalmente el contenido de audio, imagen o vídeo generado o manipulado artificialmente (deepfakes).\n3.  Reconocimiento de emociones/biométrico: Informar a las personas expuestas al sistema.\n\n### Obligaciones para sistemas de alto riesgo (proveedores)\nPara comercializar un sistema de alto riesgo, el proveedor debe cumplir con un ciclo de vida estricto:\n\n1.  Sistema de Gestión de Riesgos (Art. 9): Identificar, evaluar y mitigar riesgos durante toda la vida del sistema.\n2.  Gobernanza de datos (Art. 10): Usar datos de entrenamiento, validación y prueba de calidad, pertinentes y libres de sesgos.\n3.  Documentación técnica (Art. 11): Elaborar documentación detallada que demuestre la conformidad con el reglamento.\n4.  Registro automático (logs) (Art. 12): Capacidad de registrar eventos para trazabilidad y detección de errores.\n5.  Transparencia e información (Art. 13): Instrucciones de uso claras y diseño interpretable para el usuario.\n6.  Vigilancia humana (Art. 14): Herramientas para que una persona física pueda supervisar e intervenir en el sistema.\n7.  Precisión, solidez y ciberseguridad (Art. 15): Resistencia a errores, fallos y ataques malintencionados.\n8.  Evaluación de conformidad (Art. 43): Verificar el cumplimiento antes de la puesta en mercado (puede requerir un organismo notificado).\n\n### Calendario de aplicación\n*   6 meses: Prohibiciones (Riesgo Inaceptable).\n*   12 meses: IA de Uso General (GPAI) y Autoridades de Notificación.\n*   24 meses: Aplicación general (Sistemas de Alto Riesgo del Anexo III).\n*   36 meses: Sistemas de Alto Riesgo integrados en productos (Anexo I)."
      },
      {
        "title": "4. Anexo i. evaluación de la conformidad y autoridades",
        "content": "Este anexo clarifica quién supervisa y cómo se evalúan los sistemas de alto riesgo.\n\n### Tipos de sistemas y evaluación\n\n| Tipo de Sistema | Ejemplos | Autoridad de Vigilancia (España) | Evaluación de Conformidad |\n| :--- | :--- | :--- | :--- |\n| **Anexo I (Productos)** | Juguetes, ascensores, productos sanitarios, maquinaria agrícola. | **Sectorial** (ej. AEMPS, Ministerio de Industria). | **Integrada** en la legislación del producto (Marcado CE actual). |\n| **Anexo III (Finalidad)** | Educación, Empleo, Justicia, Servicios Públicos. | **AESIA** (generalmente), Banco de España, AEPD, etc. | Principalmente **Control Interno** (Autoevaluación). |\n| **Biometría (Anexo III)** | Identificación biométrica remota. | **AEPD / AESIA** | Requiere **Organismo Notificado** (tercero independiente). |\n\n> **AESIA:** La Agencia Española de Supervisión de la Inteligencia Artificial actuará como punto de contacto único y autoridad para sistemas de alto riesgo que no tengan una autoridad sectorial específica previa."
      }
    ],
    "flashcards": [
      {
        "front": "Sistemas de Alto Riesgo",
        "back": "Sistemas de IA permitidos pero sujetos a requisitos estrictos, como gestión de riesgos y calidad de datos, antes de su comercialización."
      },
      {
        "front": "Obligaciones de transparencia",
        "back": "Requisito de informar a las personas cuando interactúan con un sistema de IA o cuando se genera contenido sintético (deepfakes)."
      },
      {
        "front": "Alfabetización en IA",
        "back": "Obligación de que el personal encargado del funcionamiento de los sistemas tenga un conocimiento suficiente en materia de Inteligencia Artificial."
      },
      {
        "front": "Sandbox Regulatorio",
        "back": "Entorno controlado de pruebas supervisado por autoridades competentes que fomenta la innovación y facilita el desarrollo, validación y prueba de sistemas de IA antes de su puesta en mercado."
      },
      {
        "front": "AESIA",
        "back": "Agencia Española de Supervisión de la Inteligencia Artificial. Actúa como autoridad de vigilancia del mercado en España y supervisa el cumplimiento del Reglamento."
      },
      {
        "front": "Riesgo Limitado (Transparencia)",
        "back": "Categoría de sistemas de IA (como chatbots o deepfakes) sujetos a obligaciones específicas de transparencia, como informar al usuario de que interactúa con una máquina."
      },
      {
        "front": "Riesgo Mínimo",
        "back": "Categoría que engloba la mayoría de sistemas de IA (ej. videojuegos, filtros de spam). No tienen obligaciones adicionales más allá de la normativa general."
      },
      {
        "front": "Proveedor (Provider)",
        "back": "Persona o entidad que desarrolla un sistema de IA y lo introduce en el mercado o lo pone en servicio bajo su propio nombre o marca."
      },
      {
        "front": "Responsable del Despliegue (Deployer)",
        "back": "Entidad o persona que utiliza un sistema de IA bajo su propia autoridad en el ejercicio de una actividad profesional (no aplica al usuario personal)."
      },
      {
        "front": "Marcado CE",
        "back": "Distintivo que certifica que un sistema de IA cumple con los requisitos de seguridad y conformidad del Reglamento Europeo."
      },
      {
        "front": "Evaluación de Conformidad",
        "back": "Proceso obligatorio para sistemas de alto riesgo que verifica si cumplen los requisitos del Reglamento antes de su comercialización."
      },
      {
        "front": "Incidente Grave",
        "back": "Fallo de un sistema de IA que causa muerte, daños graves a la salud, interrupción de infraestructuras críticas o violación de derechos fundamentales."
      }
    ],
    "quiz": [
      {
        "question": "¿Qué sistemas de IA están prohibidos según el Reglamento?",
        "options": [
          "Los chatbots de atención al cliente",
          "Los sistemas que manipulan el comportamiento humano para eludir su libre albedrío",
          "Los sistemas de recomendación de películas",
          "Los filtros de spam"
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Qué obligación tienen los sistemas que generan 'deepfakes'?",
        "options": [
          "No tienen ninguna obligación",
          "Deben obtener una licencia especial",
          "Deben hacer público que el contenido ha sido generado o manipulado artificialmente",
          "Deben ser aprobados por un juez"
        ],
        "correctAnswer": 2
      },
      {
        "question": "¿A qué categoría pertenecen los sistemas de identificación biométrica remota en tiempo real en espacios públicos?",
        "options": [
          "Riesgo mínimo",
          "Alto riesgo",
          "Riesgo limitado",
          "Prácticas prohibidas (salvo excepciones)"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Según el Reglamento, ¿quién se considera 'Proveedor'?",
        "options": [
          "Quien usa la IA para fines profesionales.",
          "Quien desarrolla o introduce el sistema en el mercado bajo su marca.",
          "El distribuidor que vende el software.",
          "El usuario final."
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es una práctica prohibida por riesgo inaceptable?",
        "options": [
          "Chatbots sin supervisión.",
          "Sistemas de priorización de emergencias.",
          "Manipulación subliminal del comportamiento con riesgo de daño.",
          "Gestión de tráfico con IA."
        ],
        "correctAnswer": 2
      },
      {
        "question": "¿Cuándo asume el Responsable del despliegue las obligaciones del Proveedor?",
        "options": [
          "Al usar el sistema en varios países.",
          "Si realiza una modificación sustancial del sistema.",
          "Si lo usa para fines militares.",
          "Si no actualiza el software."
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Qué es un 'Sandbox regulatorio'?",
        "options": [
          "Un entorno controlado para pruebas e innovación supervisado por autoridades.",
          "Un mecanismo de sanción.",
          "Una base de datos de sistemas de alto riesgo.",
          "Un software de código abierto."
        ],
        "correctAnswer": 0
      },
      {
        "question": "¿Cuándo comienzan a aplicarse las prohibiciones de prácticas de riesgo inaceptable?",
        "options": [
          "Agosto 2026",
          "Febrero 2025 (6 meses después de entrada en vigor)",
          "Agosto 2030",
          "Inmediatamente"
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Qué obligación tienen los chatbots (Riesgo Limitado)?",
        "options": [
          "Revelar su código fuente.",
          "Informar al usuario de que está interactuando con una IA.",
          "Ninguna si son gratuitos.",
          "Obtener consentimiento biométrico."
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es el objetivo de la gestión de riesgos en IA de Alto Riesgo?",
        "options": [
          "Eliminar la intervención humana.",
          "Garantizar rentabilidad.",
          "Identificar y mitigar riesgos para salud, seguridad y derechos fundamentales.",
          "Asegurar compatibilidad con cualquier SO."
        ],
        "correctAnswer": 2
      }
    ],
    "glossary": [
      {
        "term": "Afectado",
        "definition": "Toda persona física o jurídica que se encuentra bajo la influencia o es destinataria de un sistema de IA. Es un concepto distinto al de 'usuario final' o 'responsable del despliegue'."
      },
      {
        "term": "Autoridad nacional competente",
        "definition": "Organismo encargado de supervisar la aplicación y ejecución del Reglamento en cada Estado miembro. En España, esta función la desempeña la Agencia Española de Supervisión de la IA (AESIA)."
      },
      {
        "term": "Ciclo de vida de la IA",
        "definition": "Período completo de existencia del sistema, que abarca desde la fase de diseño inicial y recopilación de datos, hasta su retirada definitiva del mercado o puesta fuera de servicio."
      },
      {
        "term": "Datos de entrenamiento",
        "definition": "Conjunto de datos utilizados para ajustar los parámetros internos de un modelo de IA mediante técnicas de aprendizaje automático, permitiendo que el sistema aprenda patrones."
      },
      {
        "term": "Datos de validación",
        "definition": "Conjunto de datos distinto al de entrenamiento, utilizado para proporcionar una evaluación imparcial del modelo durante su desarrollo y ajustar hiperparámetros, evitando el sobreajuste."
      },
      {
        "term": "Distribuidor",
        "definition": "Cualquier persona física o jurídica de la cadena de suministro, distinta del proveedor o el importador, que comercializa un sistema de IA en el mercado de la Unión."
      },
      {
        "term": "Entorno real",
        "definition": "Contexto de uso cotidiano del sistema de IA fuera de las condiciones controladas de laboratorio o pruebas (sandbox), donde interactúa con usuarios y datos reales."
      },
      {
        "term": "Exactitud (Accuracy)",
        "definition": "Métrica que mide la capacidad del sistema para proporcionar resultados correctos o predecibles. Es un requisito clave en la documentación técnica de sistemas de alto riesgo."
      },
      {
        "term": "Fabricante del producto",
        "definition": "Entidad que integra un sistema de IA en un producto físico o software bajo su propio nombre o marca (ej. en juguetes, maquinaria o dispositivos médicos)."
      },
      {
        "term": "IA de uso general (GPAI)",
        "definition": "Modelo de IA (como los modelos de lenguaje grandes) capaz de realizar de manera competente una gran variedad de tareas distintas, no limitado a una finalidad específica predefinida."
      },
      {
        "term": "Identificación biométrica",
        "definition": "Tratamiento automatizado de características físicas, fisiológicas o conductuales de una persona física para permitir su identificación única o autenticación."
      },
      {
        "term": "Importador",
        "definition": "Persona física o jurídica establecida en la UE que introduce en el mercado de la Unión un sistema de IA que lleva el nombre o marca de una persona física o jurídica de un tercer país."
      },
      {
        "term": "Instrucciones de uso",
        "definition": "Información obligatoria que acompaña al sistema de IA para informar al responsable del despliegue sobre su finalidad prevista, capacidades, limitaciones de rendimiento y medidas de supervisión humana."
      },
      {
        "term": "Logs (Registros automáticos)",
        "definition": "Capacidad técnica del sistema para grabar eventos durante su funcionamiento. Son esenciales para garantizar la trazabilidad de las decisiones y el funcionamiento del sistema post-comercialización."
      },
      {
        "term": "Norma armonizada",
        "definition": "Especificación técnica europea adoptada por organismos de normalización cuyo cumplimiento voluntario presupone la conformidad con los requisitos esenciales del Reglamento de IA."
      },
      {
        "term": "Plan de vigilancia poscomercialización",
        "definition": "Sistema documentado que detalla cómo el proveedor recopilará y analizará activamente datos sobre el rendimiento del sistema de IA una vez este se encuentre en el mercado."
      },
      {
        "term": "Representante autorizado",
        "definition": "Persona física o jurídica establecida en la UE que ha sido designada por escrito por un proveedor de fuera de la UE para cumplir en su nombre las obligaciones establecidas en el Reglamento."
      },
      {
        "term": "Robustez",
        "definition": "Capacidad de un sistema de IA para mantener su nivel de rendimiento en condiciones difíciles, resistiendo errores, fallos o ataques adversarios sin alterar su funcionamiento seguro."
      },
      {
        "term": "Sesgo algorítmico",
        "definition": "Desviación sistemática y repetible en los resultados de un sistema de IA que crea resultados injustos, como privilegiar a un grupo de usuarios sobre otros de manera arbitraria."
      },
      {
        "term": "Sistema de IA",
        "definition": "Definición legal: Sistema basado en máquinas diseñado para funcionar con autonomía y que puede, para objetivos explícitos o implícitos, generar salidas como predicciones, recomendaciones o decisiones que influyan en entornos físicos o virtuales."
      }
    ],
    "pdfUrl": "https://aesia.digital.gob.es/storage/media/01-guia-introductoria-al-reglamento-de-ia-1770802981.pdf"
  },
  {
      "id": "02",
      "title": "Guía práctica y ejemplos para entender el reglamento de IA",
      "summary": "La Guía 02 destaca la importancia de comprender el Reglamento Europeo de IA desde un enfoque práctico. Proporciona a pymes y startups un soporte para aclarar exigencias normativas, usando 'casos de uso' transversales como hilo conductor.",
      "contentIndex": [
          {
              "title": "1. Introducción y objetivos de la guía práctica",
              "content": "El Preámbulo y la Introducción a las Guías Técnicas de la **Guía 02** destacan la importancia de comprender el Reglamento Europeo de Inteligencia Artificial (RIA) desde un enfoque eminentemente práctico y didáctico.\n\nEsta guía ha sido concebida en el marco del desarrollo del piloto español de \"sandbox\" regulatorio de IA, un entorno de pruebas controlado impulsado por la Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA), con el respaldo continuo de la Comisión Europea.\n\n### 🎯 Objetivos principales\n\n*   **Soporte tangible:** Proporcionar a las organizaciones, con especial énfasis en pymes y startups, un soporte instructivo que aclare exigencias normativas.\n*   **Puente estructural:** Establecer una conexión entre las guías introductorias y el amplio catálogo de guías técnicas (como ciberseguridad, precisión y solidez).\n*   **Casos de uso transversales:** Utilizar ejemplos prácticos como hilo conductor para que conceptos abstractos (evaluación de riesgos, gobernanza de datos) sean accesibles.\n*   **Madurez empresarial:** Lograr que el tejido empresarial desarrolle sistemas intrínsecamente seguros y fiables."
          },
          {
              "title": "2. Ejemplos representativos de sistemas de IA de alto riesgo",
              "content": "La Guía 02 selecciona cinco ejemplos representativos de sistemas de Inteligencia Artificial de alto riesgo que ilustran de forma transversal la aplicación del Reglamento a lo largo de las distintas guías técnicas elaboradas en el entorno del Sandbox:\n\n1.  👁️ **Identificación biométrica en el trabajo** (Anexo III - Apartado 1): Su fin operativo es controlar la asistencia de los empleados mediante herramientas biométricas. Conlleva altos riesgos para la privacidad y derechos fundamentales.\n2.  📈 **Gestión de personal (Promoción)** (Anexo III - Apartado 4): Diseñado para evaluar el rendimiento histórico y actual de los trabajadores y recomendar ascensos. Influye sustancialmente en retribuciones y carreras.\n3.  🏦 **Predicción de riesgo de exclusión social** (Anexo III - Apartado 5): Utilizado por administraciones públicas para determinar la admisibilidad ciudadana a ayudas económicas, impactando a las poblaciones vulnerables.\n4.  💉 **Bomba de insulina inteligente** (Anexo I - Productos sanitarios): Analiza constantemente la glucosa y administra insulina de forma automática. Un fallo técnico resulta crítico para el paciente.\n5.  🚨 **Detección de denuncias falsas** (Anexo III - Apartado 6): Ayuda a las fuerzas de seguridad a evaluar matemáticamente la fiabilidad de pruebas y transcripciones policiales."
          },
          {
              "title": "3. Conceptos clave y definiciones prácticas (i)",
              "content": "Para interpretar correctamente las obligaciones del Reglamento Europeo de IA, es imprescindible dominar sus definiciones legales extraídas del Artículo 3:\n\n### 🧠 Conceptos Fundamentales\n\n*   **Sistema de Inteligencia Artificial:** Sistema basado en una máquina diseñado para funcionar con distintos niveles de autonomía, que infiere a partir de entradas cómo generar resultados (predicciones, recomendaciones o decisiones) que influyen en entornos físicos o virtuales.\n*   **Finalidad prevista:** El uso específico para el cual el proveedor diseñó el sistema, definiendo así su nivel de riesgo y contexto permitido.\n\n### 🛒 Fases Comerciales\n\n1.  **Introducción en el mercado:** Primera comercialización del sistema en la Unión Europea.\n2.  **Comercialización:** Cualquier tipo de suministro posterior, a título oneroso o gratuito.\n\n### ⚙️ Arquitectura Física\n\n*   **Componente de seguridad:** Aquel cuyo fallo originaría un peligro inminente para la salud, la integridad física o los bienes de las personas (ejemplo: sensores en dispositivos médicos)."
          },
          {
              "title": "4. Conceptos clave y definiciones prácticas (ii) - datos, biometría y modelos",
              "content": "En el desarrollo y validación técnica, la gestión de datos y los aspectos de reconocimiento biométrico requieren una atención especial.\n\n### 📊 Categorías de Datos\n\nEl Reglamento categoriza los datos en tres fases operativas:\n\n1.  **Datos de entrenamiento:** Usados para ajustar los parámetros entrenables del modelo algorítmico inicial.\n2.  **Datos de validación:** Empleados para evaluar el modelo entrenado y ajustar sus hiperparámetros iterativamente.\n3.  **Datos de prueba:** Aplicados al final del ciclo para lograr una evaluación independiente del rendimiento.\n\n### 🎭 Conceptos Avanzados\n\n*   **Ultrasuplantación (Deepfake):** Contenido de imagen, audio o vídeo generado sintéticamente por una IA que se asemeja con fidelidad a eventos reales induciendo al engaño (requiere transparencia estricta).\n*   **Modelos de IA de propósito general (GPAI):** Sistemas fundacionales entrenados con cantidades masivas de datos mediante autosupervisión a gran escala (ej: LLaMA o GPT-4).\n    *   ⚠️ **Riesgo sistémico:** Se considera cuando el modelo GPAI supera un umbral extraordinario de coste computacional (superior a 10^25 FLOPs), exigiendo seguridad rigurosa."
          },
          {
              "title": "5. Contexto de las guías técnicas y roles del piloto sandbox",
              "content": "Las guías técnicas nacen en el **Piloto Español de Sandbox de IA**, cuya meta es validar la documentación de apoyo y facilitar la transferencia de conocimiento regulatorio a las entidades desarrolladoras. \n\n### 👥 Operadores de la Cadena de Valor\n\nEl Reglamento impone distintas obligaciones según el rol que se ocupe:\n\n*   **Proveedor:** Entidad que desarrolla el sistema y lo introduce en el mercado bajo su propio nombre.\n    *   Asume las cargas regulatorias más exigentes (Sección 2).\n    *   Debe documentarlo técnicamente, establecer la gobernanza de datos y riesgos, garantizar la ciberseguridad, solidez y precisión y realizar la *evaluación de conformidad*.\n*   **Responsable del despliegue:** Persona u organización que utiliza activamente un sistema en su propio entorno profesional.\n    *   Tiene la obligación ineludible de asegurar una correcta supervisión humana.\n    *   Debe conservar diligentemente los archivos de registros (logs).\n    *   Debe informar inmediatamente de la existencia de incidentes graves que pongan en peligro derechos o la salud de las personas."
          }
      ],
      "flashcards": [
          {
              "front": "Sistema de Inteligencia Artificial",
              "back": "Sistema basado en una máquina diseñado para funcionar con distintos niveles de autonomía, que infiere de la información de entrada cómo generar resultados de salida que influyen en entornos físicos o virtuales."
          },
          {
              "front": "Introducción en el mercado",
              "back": "La primera comercialización en el mercado de la Unión Europea de un sistema de IA o de un modelo de IA de uso general."
          },
          {
              "front": "Comercialización",
              "back": "Todo suministro de un sistema de IA o un modelo de IA de uso general para su distribución o utilización en el mercado de la Unión en el transcurso de una actividad comercial, a título oneroso o gratuito."
          },
          {
              "front": "Finalidad prevista",
              "back": "El uso para el que un proveedor concibe un sistema de IA, incluidos el contexto y las condiciones de uso concretos, según la información facilitada por dicho proveedor."
          },
          {
              "front": "Componente de seguridad",
              "back": "Un componente de un producto o sistema de IA que cumple una función de seguridad o cuyo fallo pone en peligro la salud y la seguridad de las personas o los bienes."
          },
          {
              "front": "Datos de entrenamiento",
              "back": "Los datos usados para entrenar un sistema de Inteligencia Artificial mediante el ajuste de sus parámetros entrenables."
          },
          {
              "front": "Ultrasuplantación (Deepfake)",
              "back": "Contenido de imagen, audio o vídeo generado o manipulado por una IA que se asemeja a personas, objetos o sucesos reales induciendo a pensar erróneamente que son auténticos."
          },
          {
              "front": "Modelo de IA de propósito general (GPAI)",
              "back": "Modelo de IA entrenado con un gran volumen de datos utilizando autosupervisión a gran escala, que presenta un grado considerable de generalidad y es capaz de realizar múltiples tareas distintas."
          },
          {
              "front": "Riesgo sistémico",
              "back": "Riesgo específico de los modelos GPAI derivado de sus capacidades de alto impacto, típicamente asociados a modelos cuyo coste computacional de entrenamiento es mayor a 10^25 FLOPs."
          },
          {
              "front": "Ciclo de vida de un sistema IA",
              "back": "Secuencia estructurada de las etapas por las que pasa el software, desde la definición de los requisitos iniciales hasta su retirada, incluyendo diseño, validación, despliegue y operación."
          },
          {
              "front": "Datos de entrada",
              "back": "Información proporcionada a un sistema de IA, sobre la base de la cual este infiere y produce su resultado o salida correspondiente."
          },
          {
              "front": "Incidente grave",
              "back": "Evento en el que el uso de un sistema de IA de alto riesgo resulta en la muerte o daños graves a la salud, alteraciones graves en infraestructuras críticas, o vulneraciones de derechos fundamentales."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué diferencia existe normativamente entre 'Introducción en el mercado' y 'Comercialización' según el Reglamento de IA?",
              "options": [
                  "La comercialización es solo para software libre, y la introducción en el mercado para software de pago.",
                  "La introducción en el mercado es la primera vez que se ofrece en la UE, mientras que la comercialización abarca cualquier suministro posterior.",
                  "La comercialización solo aplica a los responsables de despliegue, y la introducción a los distribuidores.",
                  "No existe diferencia, ambos términos son sinónimos exactos en el Reglamento."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de los siguientes sistemas es un ejemplo de sistema de IA de alto riesgo contemplado en la legislación de armonización (Anexo I)?",
              "options": [
                  "Filtro de spam para correo electrónico.",
                  "Chatbot de atención al cliente de una tienda de ropa.",
                  "Bomba de insulina inteligente (producto sanitario).",
                  "Videojuego con inteligencia artificial generativa."
              ],
              "correctAnswer": 2
          },
          {
              "question": "De acuerdo a la Guía 02, ¿cuál es el objetivo primordial del piloto español de Sandbox IA?",
              "options": [
                  "Multar a las empresas que desarrollen IA sin autorización previa.",
                  "Crear un entorno controlado de pruebas para validar la adecuación de sistemas de alto riesgo a los requisitos del Reglamento y clarificar obligaciones.",
                  "Sustituir la legislación europea de Inteligencia Artificial por normas puramente nacionales.",
                  "Prohibir el uso de modelos de Inteligencia Artificial de propósito general (GPAI) en España."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué umbral de coste computacional define, como presunción general, que un modelo GPAI tiene 'Riesgo sistémico'?",
              "options": [
                  "Superior a 10^12 FLOPs.",
                  "Superior a 10^21 FLOPs.",
                  "Superior a 10^23 FLOPs.",
                  "Superior a 10^25 FLOPs."
              ],
              "correctAnswer": 3
          },
          {
              "question": "En el contexto de la gestión de personal, ¿por qué un sistema de IA que recomiende promociones se considera de Alto Riesgo (Anexo III)?",
              "options": [
                  "Porque puede predecir el futuro financiero de la empresa y quebrar el mercado bursátil.",
                  "Porque influye de forma determinante en las relaciones laborales, afectando la asignación de tareas y las retribuciones de los empleados.",
                  "Porque es un componente de seguridad física de un ascensor corporativo.",
                  "Porque utiliza tecnología de código abierto."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Para qué se utilizan específicamente los 'Datos de entrenamiento' en un sistema de Inteligencia Artificial?",
              "options": [
                  "Para realizar la evaluación final independiente del modelo antes de su salida al mercado.",
                  "Para ajustar las métricas de negocio del responsable del despliegue.",
                  "Para ajustar los parámetros entrenables del sistema durante su fase de desarrollo y aprendizaje.",
                  "Exclusivamente para generar los logs automáticos en caso de un incidente grave."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es la obligación directa de un 'Responsable del despliegue' frente a un riesgo detectado que afecte la salud o los derechos fundamentales?",
              "options": [
                  "Redactar las normas armonizadas del sector tecnológico.",
                  "Informar al proveedor o distribuidor, y suspender el uso del sistema si corresponde.",
                  "Crear el sistema de gestión de calidad desde cero.",
                  "Introducir el sistema por primera vez en el mercado bajo su propio nombre."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué término describe el contenido audiovisual manipulado por IA que induce erróneamente a pensar que es auténtico (p. ej. un video falso de un político)?",
              "options": [
                  "Verificación biométrica.",
                  "Datos de entrada anómalos.",
                  "Ultrasuplantación (Deepfake).",
                  "Redundancia algorítmica."
              ],
              "correctAnswer": 2
          },
          {
              "question": "A partir del concepto de 'Finalidad prevista', ¿quién es el principal responsable de definirla y concebirla?",
              "options": [
                  "El proveedor del sistema de IA.",
                  "El responsable del despliegue (usuario final).",
                  "El organismo notificado que realiza la auditoría.",
                  "El comité de expertos de la Comisión Europea."
              ],
              "correctAnswer": 0
          },
          {
              "question": "En el caso de uso sobre la 'Predicción de riesgo de exclusión social y acceso a ayudas', ¿a qué categoría de riesgo y anexo pertenece?",
              "options": [
                  "Riesgo mínimo (sistemas con obligaciones de transparencia ligeras).",
                  "Sistemas Prohibidos (Art. 5).",
                  "Alto Riesgo, Anexo III (Acceso y disfrute de servicios públicos y privados esenciales).",
                  "Alto Riesgo, Anexo I (Componentes de seguridad de vehículos)."
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/02-guia-practica-y-ejemplos-para-entender-el-reglamento-de-ia.pdf",
      "glossary": [
          {
              "term": "Sistema de Inteligencia Artificial (IA)",
              "definition": "Sistema basado en una máquina, diseñado para funcionar con autonomía, que infiere de la información de entrada cómo generar predicciones, decisiones o contenidos que influyen en el entorno."
          },
          {
              "term": "Introducción en el mercado",
              "definition": "La primera comercialización en el mercado de la Unión de un sistema de IA o de un modelo de IA de uso general."
          },
          {
              "term": "Comercialización",
              "definition": "Todo suministro de un sistema de IA para su distribución o utilización en el mercado de la Unión, a título oneroso o gratuito."
          },
          {
              "term": "Finalidad prevista",
              "definition": "Uso para el que el proveedor concibe un sistema de IA, según la información facilitada en las instrucciones o material técnico."
          },
          {
              "term": "Componente de seguridad",
              "definition": "Elemento de un producto o sistema de IA que cumple una función de prevención de riesgos; su fallo comprometería la salud y seguridad humana."
          },
          {
              "term": "Datos de entrenamiento",
              "definition": "Conjunto de datos utilizados en la fase de desarrollo para entrenar un sistema de IA mediante el ajuste iterativo de sus parámetros entrenables."
          },
          {
              "term": "Datos de validación",
              "definition": "Datos usados durante el entrenamiento para evaluar el desempeño temporal del modelo y ajustar sus hiperparámetros no entrenables."
          },
          {
              "term": "Datos de prueba",
              "definition": "Conjunto de datos independientes utilizados para proporcionar una evaluación final y objetiva del rendimiento del sistema entrenado."
          },
          {
              "term": "Ultrasuplantación (Deepfake)",
              "definition": "Contenido de imagen, audio o vídeo generado o manipulado que asemeja eventos reales con gran fidelidad, induciendo a engaño sobre su autenticidad."
          },
          {
              "term": "Modelo de IA de propósito general (GPAI)",
              "definition": "Modelo de gran escala entrenado con enormes cantidades de datos que es capaz de realizar de manera competente una enorme diversidad de tareas abstractas."
          },
          {
              "term": "Riesgo sistémico",
              "definition": "Clasificación asignada a modelos GPAI cuyas altas capacidades, medidas a menudo por un coste de entrenamiento mayor a 10^25 FLOPs, pueden generar impactos graves a gran escala en la sociedad."
          },
          {
              "term": "Ciclo de vida de un sistema IA",
              "definition": "Secuencia temporal desde la definición de los requisitos de diseño iniciales del software hasta su retirada o desmantelamiento definitivo."
          },
          {
              "term": "Identificación biométrica",
              "definition": "Reconocimiento automatizado de características físicas, fisiológicas o conductuales para establecer la identidad comparando contra una base de datos (1 a muchos)."
          },
          {
              "term": "Verificación biométrica",
              "definition": "Proceso de comprobación automatizada que asegura que una persona física es realmente la persona que afirma ser (comparación 1 a 1)."
          },
          {
              "term": "Proveedor",
              "definition": "Persona o entidad que desarrolla o manda desarrollar un sistema de IA para introducirlo en el mercado bajo su propia marca o nombre."
          }
      ]
  },
  {
      "id": "03",
      "title": "Guía evaluación de conformidad",
      "summary": "Esta guía orienta sobre el proceso para demostrar que un sistema de IA de alto riesgo cumple los requisitos del Reglamento (Art. 43). Explica los procedimientos de evaluación basados en el control interno frente a los que requieren la participación de un organismo notificado, dependiendo del tipo de sistema (ej. biometría) y el uso de normas armonizadas. Detalla los pasos para la declaración UE de conformidad, el marcado CE y la integración con la legislación de armonización de productos existente.",
      "contentIndex": [
          {
              "title": "1. Introducción a la evaluación de la conformidad",
              "content": "El Reglamento Europeo de Inteligencia Artificial (RIA) establece que la puesta en servicio o la utilización de sistemas de IA de alto riesgo debe supeditarse al cumplimiento de estrictos requisitos obligatorios.\n\n### 🛡️ ¿Qué es la Evaluación de la Conformidad?\n\nDestaca la **evaluación de la conformidad**, definida como el proceso por el que se demuestra si se han cumplido los requisitos establecidos en el Título III, Capítulo 2 del Reglamento relativos a los sistemas de IA de alto riesgo. Este proceso es fundamental para:\n\n*   Asegurar que los sistemas disponibles en la Unión no representen riesgos inaceptables.\n*   Proteger intereses públicos importantes.\n*   Garantizar el respeto a los derechos fundamentales de las personas.\n\n### 📦 Comercialización y Nuevo Marco Legislativo\n\nDentro del marco de la legislación de armonización de la Unión Europea, al igual que ocurre con productos físicos regulados, el *Nuevo Marco Legislativo* exige que el proveedor demuestre que el sistema de IA cumple con los requisitos vigentes antes de colocar el marcado CE o introducir el sistema en el mercado.\n\nExisten **dos formas principales** para llevar a cabo esta evaluación, cuya elección depende del tipo de sistema de IA y de si se han aplicado normas armonizadas:\n1.  **Control interno:** Realizado por el propio proveedor (autoevaluación).\n2.  **Organismo notificado:** Evaluación de la documentación técnica y del sistema de calidad con intervención de un tercero independiente."
          },
          {
              "title": "2. Procedimiento fundamentado en el control interno (anexo vi)",
              "content": "El procedimiento de evaluación de la conformidad fundamentado en un control interno (detallado en el Anexo VI del RIA) permite al propio proveedor realizar la evaluación de su sistema de IA **sin la intervención de un tercero notificado**.\n\nEste mecanismo aplica, por ejemplo, a los sistemas de alto riesgo mencionados en el Anexo III (puntos 2 a 8), o a sistemas de identificación biométrica cuando se han aplicado íntegramente las normas armonizadas.\n\n### 📋 Actuaciones Fundamentales del Proveedor\n\nEl proceso de control interno se estructura en tres acciones técnicas documentales:\n\n1.  **Verificación del sistema de gestión de la calidad (SGC):** Comprobar que se cumplen exhaustivamente los requisitos delineados en el artículo 17.\n2.  **Comprobación de la documentación técnica:** Examinar exhaustivamente toda la información para evaluar y evidenciar la conformidad del sistema con los requisitos esenciales (artículos 8 a 15 del Reglamento).\n3.  **Verificación del diseño y desarrollo:** Asegurar que el proceso de desarrollo y el sistema de vigilancia poscomercialización (artículo 72) sean totalmente coherentes con la documentación técnica del sistema.\n\n> 💡 **Facilidades para Pymes y Startups**\n> El RIA estipula que la Comisión Europea elaborará un **formulario simplificado** para que las empresas emergentes y pymes puedan presentar la documentación técnica de manera más ágil, considerándose suficiente a efectos de evaluar la conformidad documental."
          },
          {
              "title": "3. Conformidad con participación de un organismo notificado (anexo vii)",
              "content": "La evaluación de conformidad que se especifica en el Anexo VII requiere ineludiblemente la intervención externa de un **organismo notificado** independiente.\n\nEste procedimiento más estricto y riguroso es obligatorio para sistemas altamente sensibles (como los de identificación biométrica remota del Anexo III, punto 1), o cuando el proveedor no ha aplicado normas armonizadas / especificaciones comunes de forma íntegra.\n\n### 🔎 Fases Clave de la Evaluación Externa\n\nEl proceso comprende dos fases evaluativas clave por parte del organismo notificado:\n\n1.  **Evaluación del sistema de gestión de la calidad (SGC)**\n    *   El proveedor presenta una solicitud con sus datos, la lista de sistemas IA amparados, y la documentación del SGC.\n    *   El organismo evalúa el sistema y realiza **auditorías periódicas** (incluso sin previo aviso) para asegurar su aplicación adecuada.\n2.  **Control de la documentación técnica**\n    *   El organismo examina rigurosamente toda la documentación.\n    *   Para verificar la conformidad, puede exigir nuevas pruebas o **pleno acceso a los conjuntos de datos** de entrenamiento, validación y prueba a través de herramientas como APIs a distancia.\n    *   *Agotadas otras vías*, el organismo puede incluso solicitar acceso directo al modelo entrenado y a sus parámetros internos.\n\n### 📜 Certificado de la Unión\n\nSi tras este exhaustivo examen se comprueba de manera rigurosa que el sistema cumple con la sección 2 del capítulo III, el organismo notificado expedirá un **certificado de la Unión de evaluación de la documentación técnica**, un documento legal indispensable de validez temporal que acredita la legalidad y seguridad del producto."
          },
          {
              "title": "4. Instrumentos de conformidad: normas armonizadas, especificaciones, declaración UE y marcado CE",
              "content": "El Reglamento dispone de varios instrumentos legales y técnicos que facilitan a los proveedores certificar la evaluación de la conformidad.\n\n### 📚 Presunción de Conformidad\n\n*   **Normas Armonizadas (Artículo 40):** Cuando un sistema de IA se diseña cumpliendo con las normas armonizadas publicadas en el Diario Oficial de la Unión Europea, el proveedor se beneficia de una *presunción de conformidad* con los requisitos obligatorios.\n*   **Especificaciones Comunes (Artículo 41):** En ausencia de normas armonizadas, o si son insuficientes, la Comisión Europea puede dictar estas especificaciones; su cumplimiento otorga igualmente la citada presunción de conformidad.\n\n### 📄 Declaración UE de Conformidad\n\nUna vez completada de forma exitosa la evaluación de conformidad (control interno o notificado), el proveedor debe redactar la **Declaración UE de conformidad (Artículo 47)**.\n\n*   Es un documento (escrito o con firma electrónica) donde el proveedor asume plena responsabilidad legal del cumplimiento normativo del sistema.\n*   Contendrá la información estipulada en el Anexo V.\n*   Debe conservarse a disposición de las autoridades durante un periodo mínimo de diez años.\n\n### ✅ Marcado CE\n\nEl hito final del proceso estructural es colocar visualmente el **Marcado CE (Artículo 48)**.\n\n*   Este símbolo oficial debe fijarse de manera visible, legible e indeleble en el propio sistema.\n*   Si la naturaleza digital no lo permite (es un software abstracto), se colocará en los documentos que lo acompañan o su interfaz.\n*   Este distintivo certifica públicamente que el sistema de IA cumple de forma integral con la legislación de armonización de la UE."
          }
      ],
      "flashcards": [
          {
              "front": "Evaluación de la conformidad",
              "back": "Proceso por el que se demuestra si se han cumplido los requisitos establecidos en el Título III, Capítulo 2 del Reglamento para sistemas de IA de alto riesgo."
          },
          {
              "front": "Control Interno",
              "back": "Procedimiento de evaluación (Anexo VI) donde el propio proveedor verifica la conformidad de su SGC, documentación técnica y diseño sin intervención de terceros."
          },
          {
              "front": "Organismo Notificado",
              "back": "Tercero independiente que realiza la evaluación de la conformidad del sistema de gestión de la calidad y de la documentación técnica (Anexo VII)."
          },
          {
              "front": "Normas Armonizadas",
              "back": "Especificaciones técnicas europeas cuya aplicación voluntaria otorga la presunción de conformidad con los requisitos esenciales del Reglamento."
          },
          {
              "front": "Especificaciones Comunes",
              "back": "Requisitos técnicos elaborados por la Comisión Europea que proporcionan medios de cumplimiento cuando las normas armonizadas no existen o son insuficientes."
          },
          {
              "front": "Marcado CE",
              "back": "Distintivo visible, legible e indeleble que certifica formalmente que el sistema de IA cumple con toda la legislación de armonización de la Unión Europea."
          },
          {
              "front": "Declaración UE de conformidad",
              "back": "Documento escrito mediante el cual el proveedor asume la responsabilidad y certifica que el sistema de IA de alto riesgo cumple los requisitos del Reglamento."
          },
          {
              "front": "Modificación sustancial",
              "back": "Cambio relevante en el sistema de IA que afecta a su conformidad con el Reglamento, requiriendo un nuevo procedimiento de evaluación de la conformidad."
          },
          {
              "front": "Autoridad de Vigilancia del Mercado (AVM)",
              "back": "Entidad nacional responsable de supervisar la conformidad de los sistemas de IA comercializados y su cumplimiento con el Reglamento."
          },
          {
              "front": "Sistema de Gestión de la Calidad (SGC)",
              "back": "Conjunto documentado de políticas y procesos (Art. 17) que el proveedor debe implementar para garantizar el cumplimiento normativo continuo del sistema de IA."
          },
          {
              "front": "Documentación Técnica",
              "back": "Información requerida (Anexo IV) que el proveedor debe elaborar para demostrar de forma clara y completa que el sistema cumple los requisitos normativos."
          },
          {
              "front": "Certificado UE de evaluación",
              "back": "Documento expedido por un organismo notificado que avala que la documentación técnica de un sistema de IA cumple con los requisitos del Reglamento."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué anexo del Reglamento de IA detalla el procedimiento de evaluación de la conformidad fundamentado en un control interno?",
              "options": [
                  "Anexo IV",
                  "Anexo V",
                  "Anexo VI",
                  "Anexo VII"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Durante cuánto tiempo debe el proveedor mantener la Declaración UE de conformidad a disposición de las autoridades tras introducir el sistema en el mercado?",
              "options": [
                  "5 años",
                  "10 años",
                  "15 años",
                  "De forma indefinida"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Según el Anexo VII, ¿qué dos elementos fundamentales son evaluados por el organismo notificado?",
              "options": [
                  "El código fuente abierto y los algoritmos heurísticos",
                  "El sistema de gestión de la calidad y la documentación técnica",
                  "Los sesgos en los datos y la alfabetización del usuario",
                  "La ciberseguridad perimetral y el modelo de negocio"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué beneficio normativo otorga la aplicación de normas armonizadas publicadas en el Diario Oficial de la Unión Europea?",
              "options": [
                  "Presunción de conformidad con los requisitos del Reglamento de IA",
                  "Exención total de realizar evaluaciones de conformidad",
                  "Aprobación automática del marcado CE sin necesidad de documentación",
                  "Subvenciones directas para las pymes desarrolladoras"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Quién es responsable de elaborar las especificaciones técnicas comunes cuando no existen normas armonizadas?",
              "options": [
                  "Los proveedores de modelos fundacionales",
                  "Los Organismos Notificados",
                  "La Comisión Europea",
                  "La Autoridad de Vigilancia del Mercado Nacional"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Para qué tipo de sistemas del Anexo III es obligatoria la intervención de un organismo notificado si el proveedor no ha aplicado normas armonizadas?",
              "options": [
                  "Sistemas de IA para videojuegos",
                  "Sistemas de identificación biométrica remota",
                  "Sistemas de filtrado de spam de correo electrónico",
                  "Sistemas de predicción meteorológica"
              ],
              "correctAnswer": 1
          },
          {
              "question": "En el procedimiento de control interno, el proveedor debe realizar tres verificaciones principales. ¿Cuáles son?",
              "options": [
                  "Permisos de copyright, auditoría contable y revisión de hardware",
                  "Verificación del SGC, comprobación de la documentación técnica y verificación del proceso de diseño/desarrollo",
                  "Análisis de competidores, encuestas de mercado y pruebas beta abiertas",
                  "Marcado CE, etiquetado ecológico y registro de marca"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Si un sistema de IA de alto riesgo sufre una \"modificación sustancial\", ¿qué exige el Reglamento?",
              "options": [
                  "Únicamente actualizar el manual de instrucciones del usuario",
                  "Avisar a los usuarios finales mediante un correo electrónico masivo",
                  "Someterse a un nuevo procedimiento de evaluación de la conformidad",
                  "Pagar una tasa de renovación en el registro de la Unión Europea"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué facilidad contempla el Reglamento para que las PYMEs y empresas emergentes presenten la documentación técnica?",
              "options": [
                  "Están exentas de redactar cualquier tipo de documentación técnica",
                  "Pueden presentarla de manera simplificada mediante un formulario elaborado por la Comisión Europea",
                  "El Organismo Notificado redacta la documentación de forma gratuita",
                  "Tienen un plazo de gracia de 5 años tras la comercialización para entregarla"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué debe hacer el proveedor con el marcado CE una vez demostrada la conformidad del sistema de IA?",
              "options": [
                  "Ocultarlo en el código fuente para evitar copias",
                  "Fijarlo de manera visible, legible e indeleble en el sistema o en la documentación adjunta",
                  "Registrarlo en una notaría local pero no publicarlo en el producto",
                  "Enviarlo por carta a las autoridades pero no mostrarlo a los usuarios"
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/03-guia-evaluacion-de-conformidad.pdf",
      "glossary": [
          {
              "term": "Evaluación de la conformidad",
              "definition": "Proceso técnico y documental mediante el cual se demuestra fehacientemente si un sistema de IA de alto riesgo ha cumplido los requisitos obligatorios del Título III, Capítulo 2 del Reglamento."
          },
          {
              "term": "Control Interno",
              "definition": "Procedimiento de evaluación de la conformidad previsto en el Anexo VI, en el que el propio proveedor verifica la idoneidad de su SGC, su documentación técnica y el diseño del sistema."
          },
          {
              "term": "Organismo Notificado",
              "definition": "Entidad independiente de evaluación de la conformidad, designada y acreditada por un Estado miembro, encargada de certificar los sistemas de IA de alto riesgo según lo estipulado en el Anexo VII."
          },
          {
              "term": "Norma Armonizada",
              "definition": "Especificación técnica adoptada por una organización europea de normalización cuya aplicación dota a los sistemas de IA de una presunción legal de conformidad con los requisitos del Reglamento."
          },
          {
              "term": "Especificación Común",
              "definition": "Conjunto de directrices y soluciones técnicas elaboradas por la Comisión Europea que los proveedores pueden aplicar para obtener presunción de conformidad en ausencia de normas armonizadas."
          },
          {
              "term": "Declaración UE de conformidad",
              "definition": "Documento oficial redactado y firmado por el proveedor donde certifica bajo su estricta responsabilidad que el sistema de IA cumple todas las exigencias legales del Reglamento Europeo."
          },
          {
              "term": "Marcado CE",
              "definition": "Distintivo gráfico oficial que debe fijarse al sistema de IA de manera visible e indeleble, indicando que este cumple la legislación de armonización aplicable en la Unión Europea."
          },
          {
              "term": "Modificación Sustancial",
              "definition": "Cualquier alteración significativa en el sistema de IA que pueda afectar su conformidad con los requisitos de seguridad y precisión, requiriendo iniciar un nuevo proceso de evaluación de la conformidad."
          },
          {
              "term": "Sistema de Gestión de la Calidad (SGC)",
              "definition": "Conjunto estructurado de políticas, procesos e instrucciones exigido por el artículo 17 para asegurar sistemáticamente la calidad, la gestión de riesgos y el cumplimiento normativo en todo el ciclo de vida de la IA."
          },
          {
              "term": "Documentación Técnica",
              "definition": "Conjunto de información técnica, descrita en el Anexo IV, que el proveedor debe elaborar y mantener para evidenciar cómo su sistema de IA cumple los requisitos de seguridad y transparencia del Reglamento."
          }
      ]
  },
  {
      "id": "04",
      "title": "Guía del sistema de gestión de la calidad",
      "summary": "Establece las pautas para implementar el sistema de gestión de calidad (SGC) requerido por el Artículo 17 para proveedores de sistemas de IA de alto riesgo. El SGC debe documentar políticas y procedimientos para garantizar el cumplimiento normativo, gestión de riesgos, control del diseño y desarrollo, gestión de datos y vigilancia poscomercialización. La guía destaca la necesidad de proporcionalidad según el tamaño de la organización (pymes) y permite integrar el SGC con sistemas existentes exigidos por legislación sectorial.",
      "contentIndex": [
          {
              "title": "Introducción y obligaciones generales del sistema de gestión de la calidad (SGC)",
              "content": "El Sistema de Gestión de la Calidad (SGC) consiste en un conjunto de procesos diseñados para mejorar continuamente el desempeño global y proporcionar una base sólida para el desarrollo tecnológico sostenible (frecuentemente referenciado en normativas como la ISO 9001).\n\nEn el contexto del Reglamento Europeo de IA, el propósito fundamental de un SGC trasciende la mera eficiencia operativa:\n\n*   🎯 **Meta principal:** Garantizar de forma inquebrantable la salud, la seguridad y los derechos fundamentales de las personas que interactúan con los sistemas de IA.\n\n### 📝 Obligaciones Imperativas (Artículo 17)\n\nEl Artículo 17 establece que todos los proveedores de sistemas de IA de alto riesgo deben implementar un SGC robusto y documentado.\n\n*   No es conceptual ni opcional.\n*   Debe consignarse de manera sistemática en **documentación escrita** que recoja políticas, procedimientos e instrucciones aplicables a lo largo de todo el ciclo de vida del producto.\n*   Debe definir una **estrategia integral de cumplimiento**, incluyendo la ejecución rigurosa de los procedimientos de evaluación de la conformidad.\n\n### 🔄 Gestión de las Modificaciones\n\nCualquier cambio en el software, firmware o en los datos debe distinguirse entre cambios *sustanciales, no sustanciales y predefinidos*.\n\nCada modificación debe someterse a los mismos controles de calidad aplicables a todo el conjunto, garantizando que el sistema conserva los parámetros de precisión, solidez y ciberseguridad definidos inicialmente."
          },
          {
              "title": "Diseño, desarrollo y control de calidad del sistema de IA",
              "content": "El proveedor es el principal responsable de establecer procedimientos y actuaciones sistemáticas durante las fases de diseño, desarrollo y control de calidad. El diseño debe fundamentarse en los requisitos técnicos, funcionales y en las medidas de mitigación derivadas del plan de gestión de riesgos.\n\nPara asegurar un desarrollo adecuado, el SGC debe articularse en torno a **tres pilares fundamentales**:\n\n### 🔒 1. Ciberseguridad\n\nLa calidad debe integrarse desde la concepción del sistema (*seguridad por diseño*).\n*   Implicar a perfiles críticos (como el Delegado de Protección de Datos - DPD).\n*   Definir controles sobre los activos e implementar estrategias de desarrollo seguro.\n*   Recomendaciones en desarrollo: Dinámicas *red/blue teaming*, análisis SAST y DAST continuos, pruebas de penetración y evaluación frente a ataques adversarios.\n\n### 🎯 2. Precisión\n\nEstablecer durante el diseño las métricas pertinentes acordes a la finalidad prevista.\n*   Verificar funciones objetivo y mecanismos de garantía.\n*   El control de calidad se basa en pruebas automatizadas o manuales para validar el preprocesamiento de datos.\n*   Evitar el sobreaprendizaje (*overfitting*) y contrastar resultados con modelos base (*baseline models*).\n\n### 🏗️ 3. Solidez\n\nEl diseño requiere identificar características como fiabilidad, estabilidad, sensibilidad, relevancia y alcanzabilidad.\n\nSu control implica un **procedimiento iterativo de dos pasos**:\n1.  **Verificación:** Comprobar que el software cumple las especificaciones sin usar datos reales.\n2.  **Validación:** Ejecutar el modelo con datos reales para confirmar su desempeño.\n\nTodo esto debe estar soportado por prácticas de *ML-Ops* que mantengan la trazabilidad."
          },
          {
              "title": "Gestión de datos, riesgos y vigilancia poscomercialización",
              "content": "El Reglamento de IA exige que el SGC incorpore políticas y procedimientos explícitos en tres fases críticas posteriores o paralelas al diseño:\n\n### 📊 1. Datos y Gobernanza (Artículo 10)\n\nEl SGC debe detallar las operaciones de adquisición, recopilación, análisis, etiquetado, almacenamiento, depuración y agregación de datos.\n*   Documentar cómo se detectan y corrigen lagunas, errores o sesgos que puedan derivar en discriminaciones prohibidas.\n*   Aplicar siempre principios de minimización y cumplimiento del RGPD.\n\n### ⚠️ 2. Sistema de Gestión de Riesgos (Artículo 9)\n\nDebe integrarse de forma continua e iterativa.\n*   Orientado a identificar, analizar y evaluar riesgos con probabilidad e impacto sobre la salud, la seguridad y los derechos fundamentales.\n*   Establece medidas mitigadoras técnicas y organizativas durante todo el ciclo de vida de la IA.\n\n### 👁️ 3. Vigilancia Poscomercialización (Artículo 72)\n\nUna vez que el sistema entra en el mercado, el SGC debe establecer herramientas para recolectar proactivamente datos sobre el rendimiento del sistema en **entornos reales**.\n*   Permite detectar desviaciones que no fueron evidentes en las pruebas de laboratorio.\n\n> 🚨 **Notificación de Incidentes Graves (Artículo 73)**\n> Estrechamente ligado a la vigilancia, la organización debe contar con vías rápidas para investigar y comunicar a las Autoridades Nacionales Competentes (ANC) cualquier defecto o malfuncionamiento que haya podido causar daños graves. Todo debe quedar registrado para auditorías futuras."
          },
          {
              "title": "Gobernanza, recursos, documentación y rendición de cuentas",
              "content": "El SGC no solo abarca procesos técnicos, sino que se sustenta en un fuerte marco organizativo.\n\n### 🏢 Gestión de Recursos (Art. 17.1l)\n\nInspirada en estándares como la ISO 9001, exige proveer cuatro elementos clave:\n1.  **Personas:** Perfiles capacitados para abordar los requisitos de la IA.\n2.  **Infraestructura:** Recursos técnicos y tecnológicos adecuados para pruebas y despliegue.\n3.  **Ambiente de operación:** Factores físicos y psicológicos, en entornos de prueba estables y aislados.\n4.  **Conocimientos:** Mantener y actualizar el *know-how* necesario para el cumplimiento regulatorio.\n\n### ⚖️ Rendición de Cuentas y Responsabilidades (Art. 17.1m)\n\nEs fundamental establecer un marco que defina inequívocamente las responsabilidades del personal. Ejemplos de perfiles:\n*   **Perfil Legal:** Estrategia normativa.\n*   **Chief Data Officer (CDO):** Gobernanza de datos.\n*   **Equipo de QA (Calidad):** Validación del sistema.\n*   **Chief Risk Officer (CRO):** Gestión estructurada de riesgos.\n\nTodo debe apoyarse en un sólido **sistema de registro documental** (Art. 17.1k), preferiblemente mediante un gestor que garantice acceso para evaluaciones.\n\n### 🤝 Criterio de Proporcionalidad (Art. 17.2)\n\nEl Reglamento contempla que las exigencias del SGC se adapten al **tamaño del proveedor** (prestando especial atención a PYMES y microempresas) para reducir cargas administrativas.\n\nAdemás, las entidades financieras sujetas a legislación sectorial de la UE podrán integrar estos nuevos requisitos dentro de sus sistemas de gestión internos ya existentes."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es un Sistema de Gestión de la Calidad (SGC) en el contexto del Reglamento de IA?",
              "back": "Es un conjunto de políticas, procedimientos e instrucciones documentadas para garantizar el cumplimiento normativo y proteger la salud, seguridad y derechos fundamentales."
          },
          {
              "front": "¿Qué artículo del Reglamento Europeo de IA regula específicamente el Sistema de Gestión de la Calidad?",
              "back": "El Artículo 17."
          },
          {
              "front": "¿Cómo debe formalizarse el Sistema de Gestión de la Calidad según la normativa?",
              "back": "Deberá consignarse de manera sistemática y ordenada en documentación escrita que incluya políticas, procedimientos e instrucciones."
          },
          {
              "front": "¿Qué debe incluir la estrategia para el cumplimiento normativo dentro del SGC?",
              "back": "Debe incluir el cumplimiento de los procedimientos de evaluación de la conformidad y de la gestión de las modificaciones de los sistemas de IA."
          },
          {
              "front": "¿Qué tres dimensiones técnicas fundamentales se deben controlar durante el diseño y desarrollo del sistema?",
              "back": "La ciberseguridad, la precisión y la solidez."
          },
          {
              "front": "¿Qué aspectos abarca la gobernanza de datos exigida en el SGC?",
              "back": "Adquisición, recopilación, análisis, etiquetado, almacenamiento, filtrado, prospección, agregación y depuración de sesgos."
          },
          {
              "front": "¿A qué obliga el SGC en relación con la vigilancia del sistema una vez comercializado?",
              "back": "A establecer, aplicar y mantener un sistema de vigilancia poscomercialización de conformidad con el artículo 72."
          },
          {
              "front": "¿Qué procedimiento reactivo crítico debe estar definido en el SGC ante fallos graves?",
              "back": "Los procedimientos asociados a la investigación y notificación de un incidente grave con arreglo al artículo 73."
          },
          {
              "front": "¿En qué consiste la 'Gestión de Recursos' dentro del SGC?",
              "back": "En proporcionar las personas, infraestructura, ambiente de operación y conocimientos necesarios para la implementación eficaz del sistema de IA."
          },
          {
              "front": "¿Qué es el marco de rendición de cuentas (Accountability Framework) del SGC?",
              "back": "Es la definición clara de las responsabilidades y autorizaciones del personal directivo y técnico en todos los aspectos del ciclo de vida del IA."
          },
          {
              "front": "¿Cómo aplica el SGC a las pequeñas y medianas empresas (PYMES)?",
              "back": "Su implementación será proporcional al tamaño de la organización, reduciendo carga administrativa pero sin comprometer el nivel de protección requerido."
          },
          {
              "front": "¿Qué facilidad otorga el Reglamento de IA a las entidades financieras respecto al SGC?",
              "back": "Les permite integrar los requisitos de calidad del Reglamento de IA dentro de los sistemas de gestión o gobernanza interna que ya exigen las normativas sectoriales financieras."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué artículo del Reglamento de IA detalla las obligaciones relativas al Sistema de Gestión de la Calidad?",
              "options": [
                  "Artículo 9",
                  "Artículo 10",
                  "Artículo 17",
                  "Artículo 72"
              ],
              "correctAnswer": 2
          },
          {
              "question": "Según el Reglamento, ¿cómo debe materializarse el Sistema de Gestión de la Calidad (SGC)?",
              "options": [
                  "A través de auditorías verbales anuales",
                  "De manera sistemática en documentación con políticas, procedimientos e instrucciones",
                  "Mediante un software de control financiero exclusivo",
                  "Exclusivamente mediante la contratación de una consultora externa"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de los siguientes elementos NO es un requisito obligatorio del SGC según el Artículo 17?",
              "options": [
                  "Estrategia de cumplimiento normativo",
                  "Estrategia de marketing y posicionamiento web",
                  "Procedimientos de gestión de datos",
                  "Marco de rendición de cuentas"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Durante las fases de diseño y desarrollo, el SGC debe implementar controles técnicos para tres áreas críticas. ¿Cuáles son?",
              "options": [
                  "Privacidad, Rentabilidad y Velocidad",
                  "Ciberseguridad, Precisión y Solidez",
                  "Estética, Usabilidad y Accesibilidad",
                  "Costes, Beneficios y Tiempos de entrega"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué mecanismo se recomienda en la guía para asegurar el control de calidad durante el desarrollo del modelo de IA?",
              "options": [
                  "Prácticas de ML-Ops (Machine Learning Operations)",
                  "Outsourcing total del código fuente",
                  "Desarrollo sin control de versiones para ahorrar recursos",
                  "Eliminar la fase de testeo si los datos son públicos"
              ],
              "correctAnswer": 0
          },
          {
              "question": "El SGC debe integrar un sistema para monitorear el comportamiento del IA en entornos reales una vez lanzado. ¿Cómo se llama este sistema?",
              "options": [
                  "Sistema de gestión de riesgos",
                  "Sistema de auditoría contable",
                  "Sistema de vigilancia poscomercialización",
                  "Sistema de recolección de leads"
              ],
              "correctAnswer": 2
          },
          {
              "question": "En el marco de la gestión de recursos del SGC (inspirado en la ISO 9001), ¿qué elemento NO se incluye tradicionalmente?",
              "options": [
                  "Personas (competencias y roles)",
                  "Infraestructura (tecnológica y física)",
                  "Conocimientos de la organización",
                  "Inversiones en bolsa de valores"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Qué debe definir el 'marco de rendición de cuentas' del SGC?",
              "options": [
                  "El pago de impuestos trimestrales de la empresa",
                  "Las responsabilidades del personal directivo y de otra índole en los procesos de IA",
                  "Las cuentas bancarias utilizadas para el desarrollo",
                  "El balance de pérdidas y ganancias del software"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué establece el Reglamento sobre la aplicación del SGC en las PYMES?",
              "options": [
                  "Están totalmente exentas de cumplir con el SGC",
                  "Deben cumplirlo de forma proporcional a su tamaño sin rebajar el nivel de protección",
                  "Deben implementar requisitos el doble de estrictos que las grandes empresas",
                  "Solo necesitan cumplir con la fase de diseño, ignorando el resto"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cómo aplica el requisito del SGC a las entidades financieras ya reguladas por normativas sectoriales de la UE?",
              "options": [
                  "Deben crear un SGC paralelo y aislado exclusivamente para el Reglamento de IA",
                  "Están prohibidas de utilizar sistemas de IA de alto riesgo",
                  "Pueden integrar los requisitos del Reglamento de IA en sus sistemas de gestión sectoriales existentes",
                  "Se les exige subcontratar la gestión de calidad al Banco Central Europeo"
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/04-guia-del-sistema-de-gestion-de-la-calidad.pdf",
      "glossary": [
          {
              "term": "Sistema de Gestión de la Calidad (SGC)",
              "definition": "Conjunto documentado de políticas, procedimientos e instrucciones diseñado para garantizar que una organización y sus sistemas de IA cumplen con el Reglamento Europeo, asegurando la salud, seguridad y derechos fundamentales."
          },
          {
              "term": "Evaluación de la conformidad",
              "definition": "Procedimiento mediante el cual se demuestra y verifica que un sistema de IA cumple con los requisitos esenciales del Reglamento antes de su comercialización."
          },
          {
              "term": "Vigilancia poscomercialización",
              "definition": "Sistema continuo implementado por el proveedor para recabar y analizar datos sobre el rendimiento y uso del sistema de IA una vez que ya está en el mercado, con el fin de detectar riesgos ocultos."
          },
          {
              "term": "ML-Ops (Machine Learning Operations)",
              "definition": "Prácticas conjuntas de desarrollo y operaciones para el despliegue y mantenimiento de modelos de Machine Learning en producción de manera confiable y eficiente."
          },
          {
              "term": "Gobernanza de datos",
              "definition": "Conjunto de políticas y procesos que aseguran que los datos utilizados para entrenar, validar y probar los sistemas de IA son pertinentes, representativos, precisos y libres de sesgos dañinos."
          },
          {
              "term": "Gestión de riesgos",
              "definition": "Proceso sistemático e iterativo para identificar, analizar, evaluar y mitigar los peligros que el sistema de IA pueda representar para los usuarios o su entorno."
          },
          {
              "term": "Incidente grave",
              "definition": "Cualquier fallo o anomalía en un sistema de IA que cause o pueda causar lesiones, muerte, daños graves a la propiedad, al medio ambiente o vulneraciones de derechos fundamentales."
          },
          {
              "term": "Rendición de cuentas (Accountability)",
              "definition": "Marco organizativo que asigna de forma clara y documentada las responsabilidades y obligaciones de cada rol dentro del desarrollo y operación de la IA."
          },
          {
              "term": "Proporcionalidad",
              "definition": "Principio legal que permite adaptar la carga burocrática y documental del SGC al tamaño y capacidad de la empresa (ej. PYMES), manteniendo la rigurosidad técnica."
          },
          {
              "term": "Sobreaprendizaje (Overfitting)",
              "definition": "Problema de modelado donde la IA se ajusta demasiado a los datos de entrenamiento y pierde la capacidad de generalizar o mantener su precisión con datos nuevos y reales."
          }
      ]
  },
  {
      "id": "05",
      "title": "Guía de gestión de riesgos",
      "summary": "Proporciona el marco para el sistema de gestión de riesgos (Artículo 9), definido como un proceso iterativo continuo durante todo el ciclo de vida del sistema. Se centra en identificar y mitigar riesgos para la salud, la seguridad y los derechos fundamentales. Describe pasos como la definición del apetito al riesgo, análisis del contexto, identificación de amenazas (ej. envenenamiento de datos), evaluación de riesgos y adopción de medidas de tratamiento (eliminación, reducción, información), prestando atención a colectivos vulnerables como menores.",
      "contentIndex": [
          {
              "title": "Introducción y obligaciones del reglamento de IA (artículo 9)",
              "content": "El artículo 9 del Reglamento Europeo de Inteligencia Artificial (RIA) establece la obligación principal para los proveedores de sistemas de inteligencia artificial de alto riesgo (HRAIS) de establecer, implantar, documentar y mantener un **sistema de gestión de riesgos**.\n\n### 🔄 Proceso iterativo continuo\n\nEste sistema no es una actividad puntual, sino que se entiende como un proceso planificado y ejecutado durante todo el ciclo de vida del sistema, requiriendo revisiones y actualizaciones sistemáticas. Las etapas incluyen:\n\n1.  **Determinación y análisis pormenorizado:** Abarca los riesgos conocidos y previsibles que el sistema pueda plantear para la salud, la seguridad o los derechos fundamentales.\n2.  **Estimación de uso indebido:** Evaluar los riesgos que podrían surgir del uso indebido *razonablemente previsible* por parte de los usuarios.\n3.  **Evaluación de riesgos emergentes:** Analizar los datos recogidos con el sistema de vigilancia poscomercialización.\n\n### 🛡️ Medidas de gestión y colectivos vulnerables\n\nA partir de estas evaluaciones, el proveedor debe adoptar medidas para hacer frente a los riesgos detectados de forma proporcionada. \n*   *Nota:* Los riesgos referidos son únicamente aquellos que pueden mitigarse o eliminarse razonablemente mediante el desarrollo, diseño o el suministro de información técnica adecuada.\n\nAdemás, la normativa establece un mandato claro de protección hacia las poblaciones más sensibles, obligando a prestar especial atención a posibles afectaciones negativas sobre **menores de dieciocho años y otros colectivos vulnerables**."
          },
          {
              "title": "Determinación del apetito al riesgo y contexto del sistema",
              "content": "La determinación del apetito al riesgo y la comprensión del contexto son los pilares iniciales sobre los que se asienta cualquier sistema de gestión de riesgos eficaz.\n\n### 📊 Apetito al riesgo\n\nEl apetito al riesgo se define como el **nivel de riesgo que una organización está dispuesta a asumir o aceptar** frente a las posibles afectaciones sobre la salud, seguridad y derechos fundamentales que provoque su sistema.\n*   **Matriz de Riesgos:** Para cuantificarlo objetivamente, las organizaciones suelen cruzar la *probabilidad de ocurrencia* de un evento adverso con su *impacto/gravedad*.\n*   Esto establece un umbral máximo a partir del cual se deben determinar controles obligatorios.\n\n### 🌍 Contexto del sistema\n\nLa definición del contexto implica analizar de manera exhaustiva tanto el entorno externo como el interno en el que el sistema será diseñado, desarrollado y utilizado.\n\n*   Debe considerar factores **sociales, culturales, regulatorios y tecnológicos**.\n*   **Carta de los Derechos Fundamentales de la UE:** Es un elemento contextual indispensable. Los sistemas deben respetar derechos clave como la no discriminación y la protección de datos personales.\n\n> 💡 Una comprensión profunda de este entorno y contexto es la base esencial para identificar amenazas. Una evaluación inadecuada en esta fase inicial resultaría irremediablemente en una identificación incompleta de riesgos."
          },
          {
              "title": "Identificación, análisis y evaluación de riesgos",
              "content": "El núcleo operativo de la gestión de riesgos está compuesto por fases consecutivas:\n\n### 🔍 1. Identificación de riesgos\n\nEs el proceso de descubrimiento, reconocimiento y documentación de diferentes peligros.\n*   **Inventario de componentes:** Se recomienda comenzar identificando actores principales (científicos de datos), datos (sin procesar, entrenamiento, prueba), entornos, herramientas y procesos.\n*   **Amenazas asociadas:** Basándose en el contexto previo, se identifican amenazas que podrían explotar vulnerabilidades, como la discriminación por *sesgos algorítmicos* o la *filtración de información confidencial*.\n\n### 📈 2. Análisis y evaluación\n\nDetermina la criticidad asignando un valor cualitativo o numérico de **probabilidad de ocurrencia y nivel de impacto** a cada riesgo.\n\n1.  **Riesgo Inherente:** El resultado del cálculo inicial (antes de aplicar mitigaciones).\n2.  **Comparación:** El riesgo inherente se compara con el apetito de riesgo de la organización.\n3.  **Respuesta:** Si el riesgo evaluado supera el umbral (riesgo inaceptable), detona la necesidad imperativa de definir, seleccionar e implementar medidas de control para mitigarlo."
          },
          {
              "title": "Respuesta al riesgo y procedimientos de prueba",
              "content": "Una vez que los riesgos se declaran inaceptables, se entra en la fase de **respuesta al riesgo**, donde se seleccionan opciones de tratamiento (evitar, transferir, mitigar o aceptar).\n\n### ⚖️ Prioridad de mitigación (Reglamento IA)\n\nEl Reglamento establece un orden jerárquico para la adopción de medidas:\n\n1.  **Eliminar o reducir** riesgos mediante diseño técnico y desarrollo (seguridad por diseño).\n2.  **Mitigar y controlar** aquellos que no se puedan eliminar.\n3.  **Proporcionar información y formación** pertinente a los responsables del despliegue en última instancia.\n\nEl riesgo que subsiste después de aplicar estas medidas de control se denomina **riesgo residual**, el cual debe ser informado a los usuarios.\n\n### 🧪 Procedimientos de prueba\n\nPara verificar la eficacia real de las medidas, el Reglamento exige someter los sistemas a rigurosos **procedimientos de prueba**.\n\n*   Incluyen evaluaciones en condiciones de uso real.\n*   Destinadas a comprobar que el sistema es coherente con su finalidad prevista y la normativa de gestión de riesgos.\n*   **Obligatoriedad:** Las pruebas deben realizarse durante el desarrollo e *indispensablemente antes* de la introducción del sistema al mercado, garantizando la seguridad plena del HRAIS."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es el apetito al riesgo en el contexto de un sistema de IA?",
              "back": "Es el nivel de riesgo que una organización está dispuesta a aceptar en relación con la salud, seguridad y derechos fundamentales de las personas ."
          },
          {
              "front": "Según el artículo 9 del Reglamento de IA, ¿qué tipo de proceso es el sistema de gestión de riesgos?",
              "back": "Es un proceso iterativo continuo planificado y ejecutado durante todo el ciclo de vida de un sistema de IA de alto riesgo ."
          },
          {
              "front": "¿Qué dos dimensiones se utilizan generalmente para analizar y evaluar un riesgo identificado?",
              "back": "La probabilidad de que ocurra la amenaza y el impacto que generaría si se materializa ."
          },
          {
              "front": "¿A qué se le denomina \"riesgo residual\" en la gestión de sistemas de IA?",
              "back": "Es el riesgo que subsiste o permanece en el sistema después de haber implementado las medidas de tratamiento o controles de seguridad ."
          },
          {
              "front": "Nombra las tres categorías priorizadas de medidas de gestión de riesgos según el Reglamento de IA.",
              "back": "1) Eliminar o reducir riesgos por diseño, 2) Implantar medidas de mitigación/control, y 3) Proporcionar información y formación a los responsables ."
          },
          {
              "front": "¿Qué documento es de obligada consideración en el análisis de contexto para evitar vulneraciones de derechos en la UE?",
              "back": "La Carta de los Derechos Fundamentales de la Unión Europea, que incluye derechos como la no discriminación y la protección de datos ."
          },
          {
              "front": "¿Cuál es el propósito principal de los procedimientos de prueba del sistema de IA según el Reglamento?",
              "back": "Comprobar que el sistema funciona conforme a su finalidad prevista y determinar cuáles son las medidas de gestión de riesgos más adecuadas ."
          },
          {
              "front": "¿En qué momento deben realizarse obligatoriamente las pruebas de los sistemas de IA de alto riesgo?",
              "back": "En cualquier momento del desarrollo y, en todo caso, antes de su introducción en el mercado o puesta en servicio ."
          },
          {
              "front": "¿Qué es el riesgo inherente?",
              "back": "Es el riesgo intrínseco de cada actividad o componente, evaluado sin tener en cuenta las medidas de control que puedan implantarse ."
          },
          {
              "front": "Nombra las cuatro categorías principales de componentes de un sistema de IA útiles para identificar riesgos.",
              "back": "Actores principales, Datos, Entornos y herramientas, y Procesos."
          },
          {
              "front": "¿A qué grupos demográficos deben prestar especial atención los proveedores al implantar el sistema de gestión de riesgos?",
              "back": "A las personas menores de dieciocho años y, en su caso, a otros colectivos vulnerables ."
          },
          {
              "front": "¿En qué consiste exactamente la fase de \"identificación de riesgos\"?",
              "back": "Es el proceso de descubrimiento, reconocimiento y documentación de los diferentes riesgos que pueden afectar al sistema de IA y a las personas ."
          }
      ],
      "quiz": [
          {
              "question": "Según el artículo 9 del Reglamento de IA, el sistema de gestión de riesgos debe entenderse como :",
              "options": [
                  "Un proceso que finaliza tras lanzar el producto al mercado.",
                  "Un proceso iterativo continuo ejecutado durante todo el ciclo de vida.",
                  "Un trámite meramente administrativo de carácter anual.",
                  "Una revisión exclusiva correspondiente a la fase de diseño del sistema."
              ],
              "correctAnswer": 1
          },
          {
              "question": "En la evaluación de riesgos, si el riesgo inherente se calcula en 12 y el umbral de apetito al riesgo de la organización es 4, ¿qué acción se debe tomar ?",
              "options": [
                  "Ignorar el riesgo ya que el sistema está en desarrollo.",
                  "Aceptar el riesgo residual tal como está.",
                  "Implementar medidas de control y mitigación para reducirlo.",
                  "Transferir automáticamente todo el riesgo a los usuarios finales."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál de las siguientes es una medida prioritaria (la primera en la jerarquía) para la gestión de riesgos según el Reglamento de IA ?",
              "options": [
                  "Impartir formación a los usuarios y responsables del despliegue.",
                  "Proporcionar avisos legales y manuales técnicos.",
                  "Transferir la responsabilidad a terceros mediante contratos.",
                  "Eliminar o reducir los riesgos mediante un diseño y desarrollo adecuados."
              ],
              "correctAnswer": 3
          },
          {
              "question": "El nivel de riesgo que permanece en el sistema después de haber aplicado las medidas de control y mitigación se denomina :",
              "options": [
                  "Riesgo inherente.",
                  "Riesgo residual.",
                  "Riesgo absoluto.",
                  "Riesgo catastrófico."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué conjunto de derechos son fundamentales a considerar en el análisis de contexto de una IA de alto riesgo en Europa ?",
              "options": [
                  "Los derechos de autor de bases de datos exclusivamente.",
                  "Los derechos comerciales y de propiedad intelectual de la empresa.",
                  "Los recogidos en la Carta de los Derechos Fundamentales de la Unión Europea.",
                  "Los derechos de exportación y libre comercio de software."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Las pruebas obligatorias del sistema de IA de alto riesgo deben realizarse :",
              "options": [
                  "Solo si el usuario o cliente lo solicita expresamente.",
                  "Tras 10 años de uso ininterrumpido del sistema.",
                  "Exclusivamente en la fase conceptual de ideación.",
                  "En el desarrollo y, en todo caso, antes de su introducción en el mercado o puesta en servicio."
              ],
              "correctAnswer": 3
          },
          {
              "question": "Identificar los componentes del sistema de IA, como los datos de entrenamiento y los científicos de datos, es el primer paso del proceso de :",
              "options": [
                  "Identificación de riesgos.",
                  "Marketing y venta del sistema.",
                  "Definición del apetito al riesgo de la empresa.",
                  "Vigilancia poscomercialización del sistema."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Cómo define la Guía 05 la técnica de 'fuzzing' en el contexto de la gestión de riesgos de sistemas de IA?",
              "options": [
                  "Una vulnerabilidad intrínseca del hardware del sistema.",
                  "Una medida de control técnico para verificar la solidez del sistema.",
                  "Una técnica de testeo automatizado utilizada como vector de ataque, que introduce datos inválidos, aleatorios o inesperados al sistema.",
                  "Un proceso de evaluación del riesgo residual una vez desplegado el sistema."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué acción es estrictamente necesaria tras haber implementado una medida de respuesta o tratamiento del riesgo en el sistema ?",
              "options": [
                  "Eliminar el componente que causó el riesgo desde la raíz.",
                  "Evaluar la eficacia del tratamiento para confirmar que el riesgo residual sea aceptable.",
                  "Suspender permanentemente la comercialización del producto de IA.",
                  "Aumentar el límite de apetito al riesgo de la organización para que encaje."
              ],
              "correctAnswer": 1
          },
          {
              "question": "El Reglamento de IA exige que los proveedores presten especial atención a los probables impactos negativos del sistema en :",
              "options": [
                  "La infraestructura física de la nube que lo aloja.",
                  "La disponibilidad de código fuente abierto en el mercado.",
                  "Las personas menores de dieciocho años y otros colectivos vulnerables.",
                  "Los beneficios de los accionistas de la empresa desarrolladora."
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/05-guia-de-gestion-de-riesgos.pdf",
      "glossary": [
          {
              "term": "Amenaza",
              "definition": "Peligros a los que está expuesto el sistema de IA que pueden terminar materializándose en un riesgo causando daños, provenientes de ataques externos, sucesos inesperados o incumplimientos de políticas ."
          },
          {
              "term": "Vulnerabilidad",
              "definition": "Debilidad propia de un sistema que permite ser atacado y recibir un daño, frecuentemente producida por una baja protección contra ataques externos ."
          },
          {
              "term": "Riesgo",
              "definition": "Posibilidad de que un sistema sufra un incidente y que una amenaza se materialice causando daños, aprovechando una vulnerabilidad existente ."
          },
          {
              "term": "Medidas de control",
              "definition": "En el contexto de la gestión de riesgos, son las acciones técnicas u organizativas que deben tomarse para proteger el sistema de las amenazas, reduciendo la probabilidad del riesgo o su impacto ."
          },
          {
              "term": "Apetito al riesgo",
              "definition": "Es el volumen de riesgo, cuantificable a través del impacto y la probabilidad, que una organización está dispuesta a aceptar en la búsqueda de lograr su misión ."
          },
          {
              "term": "Riesgo inherente",
              "definition": "Es el riesgo intrínseco de cada actividad o sistema, evaluado sin tener en cuenta las medidas de control y mitigación que puedan implantarse ."
          },
          {
              "term": "Riesgo residual",
              "definition": "Es aquel riesgo que subsiste y permanece en el sistema después de haber implementado de manera efectiva los controles y medidas de tratamiento ."
          },
          {
              "term": "HRAIS (Sistemas de IA de alto riesgo)",
              "definition": "Sistemas basados en Inteligencia Artificial regulados por la normativa que tienen un impacto significativo potencial en la vida de las personas, la salud, la seguridad y sus derechos fundamentales ."
          },
          {
              "term": "Ataque de fuzzing",
              "definition": "Técnica de testeo automatizado utilizada como vector de ataque mediante la cual se introducen datos inválidos, aleatorios o inesperados a un sistema informático ."
          },
          {
              "term": "Identificación de riesgos",
              "definition": "Proceso iterativo de descubrimiento, reconocimiento y documentación de los diferentes peligros y amenazas que pueden afectar al sistema de IA y a las personas ."
          }
      ]
  },
  {
      "id": "06",
      "title": "Guía vigilancia humana",
      "summary": "Esta guía detalla las medidas necesarias para garantizar una supervisión humana efectiva en los sistemas de IA de alto riesgo, conforme al artículo 14 del Reglamento. Aborda el diseño de interfaces humano-máquina adecuadas, el establecimiento de modelos de gobernanza y la capacitación de las personas encargadas de la vigilancia. Su objetivo es asegurar que los supervisores puedan interpretar correctamente los resultados, detectar sesgos de automatización (como la confianza excesiva en el sistema) y tengan la capacidad técnica y autoridad para intervenir o detener el sistema si se detectan riesgos para la salud, seguridad o derechos fundamentales.",
      "contentIndex": [
          {
              "title": "Introducción y concepto de vigilancia humana en la inteligencia artificial",
              "content": "La vigilancia humana en la Inteligencia Artificial (IA) se concibe como un conjunto fundamental de medidas y capacidades que deben integrarse obligatoriamente en los sistemas de IA de alto riesgo (HRAIS).\n\n### 🛡️ Objetivo de la Supervisión\n\nEl objetivo primordial de estas medidas es **prevenir y minimizar los riesgos asociados a la tecnología**, protegiendo así la salud, la seguridad y los derechos fundamentales de las personas físicas.\n\nEl Reglamento Europeo de Inteligencia Artificial consagra el **Artículo 14** íntegramente a regular esta supervisión humana, estableciendo las bases para que los sistemas *no operen de forma completamente autónoma sin control*.\n\n### 🧠 La falibilidad de la IA y el 'Sesgo de Automatización'\n\nLa necesidad de esta vigilancia radica en que la IA no es infalible y sus decisiones pueden tener impactos drásticos. Un sistema puede cometer errores que una persona podría identificar gracias a su comprensión del contexto y al sentido común.\n\n*   **El riesgo del Sesgo de Automatización:** El ser humano tiende a confiar excesivamente en los sistemas automatizados, asumiendo que la máquina siempre tiene la razón y perdiendo la capacidad crítica para detectar fallos.\n\nPor ello, resulta vital que la vigilancia no sea una mera formalidad, sino una **supervisión activa, informada y crítica** que actúe como última barrera de defensa frente a comportamientos anómalos o discriminatorios generados por algoritmos."
          },
          {
              "title": "Requisitos del reglamento de inteligencia artificial (artículo 14)",
              "content": "El artículo 14 del Reglamento Europeo de IA detalla de forma exhaustiva los requisitos que deben cumplir los sistemas de alto riesgo para garantizar una supervisión humana efectiva.\n\n### ⚙️ Diseño y Clasificación de Medidas\n\n1.  **Diseño eficaz:** Los sistemas deben ser diseñados y desarrollados para que, durante su uso, puedan ser vigilados de manera eficaz por personas físicas.\n2.  **Clasificación de medidas de supervisión:** \n    *   Aquellas que el *proveedor* debe integrar directamente en el sistema desde su concepción.\n    *   Aquellas que el *responsable del despliegue* debe implementar en su entorno operativo.\n\n### 🧑‍💻 Requisitos para las Personas Encargadas\n\nUn aspecto crucial es el entendimiento y la autonomía de las personas encargadas de la vigilancia. Estas deben:\n\n*   **Comprender:** Las capacidades y limitaciones del sistema.\n*   **Interpretar:** Correctamente los resultados de salida utilizando las herramientas de interpretación disponibles.\n*   **Ser conscientes:** Del riesgo del *sesgo de automatización* para no depender ciegamente de la máquina.\n\n### 🛑 Autonomía de Decisión e Identificación Biométrica\n\nSe les debe otorgar la **autonomía necesaria** para:\n*   Decidir no utilizar el sistema en una situación concreta.\n*   Ignorar o revertir los resultados.\n*   Interrumpir el funcionamiento del sistema mediante un **'botón de parada'** que lo detenga de forma segura.\n\n> 🔍 **Sistemas de identificación biométrica remota:** Tienen un requisito muy estricto. Su uso no puede dar lugar a acciones que afecten a las personas sin que *al menos dos personas físicas competentes* hayan verificado y confirmado la identificación por separado."
          },
          {
              "title": "Medidas aplicables para la vigilancia efectiva: gobernanza e interfaz (HMI)",
              "content": "Para llevar a la práctica los requisitos normativos, la guía establece una serie de medidas operativas y de diseño.\n\n### 🏢 Modelo de Gobernanza\n\nEl Modelo de gobernanza establece una *estructura organizativa, procedimientos claros y un plan de formación continua* para el uso adecuado del sistema.\n\n*   Requiere disponer de un marco de gestión de riesgos y realizar evaluaciones periódicas del impacto del sistema a lo largo de todo su ciclo de vida.\n*   **Roles:** El *proveedor* debe definir el modelo durante la construcción, y el *responsable del despliegue* debe adaptarlo a su realidad corporativa durante el uso.\n\n### 🖥️ Interfaz Humano-Máquina (HMI)\n\nOtra medida esencial es habilitar una Interfaz Humano-Máquina (HMI) adecuada. La información debe reflejarse en interfaces comprensibles que permitan monitorear el comportamiento de la IA.\n\n*   **Adaptabilidad a Perfiles:** La HMI debe estar diseñada considerando los distintos niveles de interlocución.\n    *   *Perfiles técnicos:* Monitorizan las métricas del modelo (perspectiva de rendimiento).\n    *   *Usuarios de negocio / Perfiles médicos:* Toman la decisión final (lenguaje natural para el cumplimiento de políticas).\n*   **Documentación:** Todas las medidas técnicas de vigilancia deben estar documentadas para facilitar su evaluación."
          },
          {
              "title": "Concienciación, grados de autonomía y documentación técnica",
              "content": "### 🚩 Concienciación mediante error forzado\n\nPara combatir el peligroso *sesgo de automatización*, se propone esta técnica que consiste en **generar controladamente salidas erróneas** del sistema durante fases de prueba o entrenamiento.\n*   **Objetivo:** Testar el criterio humano, mantener la alerta del supervisor y evitar que confíe ciegamente en las predicciones algorítmicas.\n\n### 🤖 Grados de Autonomía ('Human in/on the loop')\n\nEl modelo de gobernanza debe definir explícitamente el nivel de autonomía concedido al sistema. Existen tres niveles principales:\n\n1.  **Human in Command (HIC):** El humano tiene la capacidad global de dirigir y supervisar el impacto del sistema.\n2.  **Human in the Loop (HITL):** El sistema sugiere, pero el humano *siempre* interviene y toma la decisión final.\n3.  **Human on the Loop (HOTL):** El sistema puede tomar decisiones automáticamente, pero el humano supervisa en tiempo real y puede intervenir o detener la operación si detecta anomalías.\n\n### 📄 Documentación Técnica (Artículo 11)\n\nTodo este esfuerzo debe quedar reflejado en la Documentación Técnica del sistema. Se deben generar:\n*   Manuales de uso y documentos técnicos que describan los mecanismos para interrumpir el sistema.\n*   El nivel de autonomía definido y los procedimientos del modelo de gobernanza.\n\nEsta documentación debe **demostrar de manera clara y completa ante las autoridades competentes** cómo el sistema cumple con la exigencia de permitir una vigilancia humana eficaz."
          }
      ],
      "flashcards": [
          {
              "front": "¿Cuál es el objetivo principal de la vigilancia humana en los sistemas de IA de alto riesgo?",
              "back": "Prevenir y minimizar los riesgos para la salud, la seguridad y los derechos fundamentales de las personas que puedan derivarse del uso de la IA."
          },
          {
              "front": "¿Qué artículo del Reglamento Europeo de IA (AI Act) regula específicamente la supervisión o vigilancia humana?",
              "back": "El artículo 14 del Reglamento Europeo de Inteligencia Artificial."
          },
          {
              "front": "¿Qué se entiende por 'sesgo de automatización' en el contexto de la IA?",
              "back": "Es la tendencia humana a confiar excesivamente en el sistema de IA, asumiendo que siempre tiene la razón, lo que disminuye la capacidad crítica del supervisor."
          },
          {
              "front": "¿Qué es la medida de 'error forzado' propuesta en la guía?",
              "back": "Consiste en generar de manera controlada salidas erróneas del sistema para testar el criterio del supervisor humano y evitar que sufra el sesgo de automatización."
          },
          {
              "front": "¿Qué requisito excepcional exige el Reglamento para los sistemas de identificación biométrica remota?",
              "back": "No se puede tomar ninguna acción basada en la IA sin que al menos dos personas físicas competentes hayan verificado y confirmado la identificación por separado."
          },
          {
              "front": "¿En qué consiste el nivel de autonomía 'Human in the Loop' (HITL)?",
              "back": "Es el nivel donde el sistema proporciona recomendaciones, pero la decisión final siempre es ejecutada e intervenida por un ser humano."
          },
          {
              "front": "¿Qué diferencia a 'Human on the Loop' (HOTL) del HITL?",
              "back": "En HOTL, el sistema puede tomar decisiones de forma automatizada, pero un humano supervisa el proceso en tiempo real y puede interrumpirlo si es necesario."
          },
          {
              "front": "¿Qué significa 'Human in Command' (HIC)?",
              "back": "Es el nivel más amplio de autonomía, donde las personas tienen la capacidad global de supervisar el impacto de la IA e incluso decidir si se utiliza o no para una tarea."
          },
          {
              "front": "¿Qué papel juega la Interfaz Humano-Máquina (HMI) en la vigilancia humana?",
              "back": "Permite que los usuarios (técnicos y no técnicos) puedan comprender, monitorizar y supervisar las métricas y decisiones del sistema de IA a través de un lenguaje adaptado."
          },
          {
              "front": "¿Qué capacidad crítica debe proporcionar obligatoriamente un sistema de IA de alto riesgo al supervisor humano?",
              "back": "La capacidad de intervenir en el sistema o interrumpir su funcionamiento de forma segura (por ejemplo, mediante un 'botón de parada')."
          },
          {
              "front": "¿De quién es la responsabilidad de diseñar el sistema de IA para que permita una vigilancia humana eficaz?",
              "back": "Es obligación del proveedor del sistema de IA desde su fase de diseño y desarrollo."
          },
          {
              "front": "¿Qué es el 'Modelo de Gobernanza' de un sistema de IA?",
              "back": "Una estructura organizativa que incluye procedimientos, responsabilidades, gestión de riesgos y planes formativos para las personas que interactúan con el sistema."
          }
      ],
      "quiz": [
          {
              "question": "¿A qué aspecto fundamental está dedicado el Artículo 14 del Reglamento de Inteligencia Artificial?",
              "options": [
                  "Ciberseguridad y encriptación de datos",
                  "Generación y conservación de registros",
                  "Supervisión y vigilancia humana",
                  "Creación de modelos de uso general"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es uno de los principales motivos por los que la IA requiere vigilancia humana según la Guía 06?",
              "options": [
                  "Porque la IA no requiere bases de datos para funcionar",
                  "Porque la inteligencia artificial no es infalible y carece del sentido común humano",
                  "Para acelerar la velocidad de procesamiento de los algoritmos",
                  "Para reducir el coste energético de los servidores en la nube"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué nombre recibe el fenómeno por el cual una persona asume que la máquina siempre tiene la razón, perdiendo su capacidad crítica?",
              "options": [
                  "Sesgo de confirmación",
                  "Sesgo de datos",
                  "Sesgo algorítmico",
                  "Sesgo de automatización"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Cuántas personas físicas deben verificar por separado un resultado de identificación biométrica remota antes de tomar una acción?",
              "options": [
                  "Al menos una persona",
                  "Al menos dos personas",
                  "Depende del comité de dirección",
                  "No requiere verificación humana, es automático"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué medida se utiliza para combatir el sesgo de automatización generando equivocaciones controladas durante las pruebas?",
              "options": [
                  "Modelo de gobernanza",
                  "Human in the loop",
                  "Error forzado",
                  "Auditoría técnica"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cómo se denomina el paradigma donde el sistema toma decisiones automáticamente, pero un humano vigila y puede interrumpir la operación?",
              "options": [
                  "Human on the Loop (HOTL)",
                  "Human in the Loop (HITL)",
                  "Human in Command (HIC)",
                  "Human Automation (HA)"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué acción específica exige el Reglamento que el supervisor humano pueda llevar a cabo en caso de emergencia?",
              "options": [
                  "Desinstalar el software",
                  "Interrumpir el sistema pulsando un 'botón de parada' o procedimiento similar",
                  "Reescribir el código fuente del algoritmo",
                  "Borrar todos los datos de entrenamiento"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál es el propósito del 'Modelo de gobernanza' relacionado con la vigilancia humana?",
              "options": [
                  "Definir el lenguaje de programación a utilizar",
                  "Establecer la estructura organizativa, procedimientos y formación para el uso del sistema",
                  "Comercializar el sistema de IA",
                  "Almacenar las bases de datos en servidores locales"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué debe hacer el humano encargado de la vigilancia ante cualquier situación concreta si detecta anomalías?",
              "options": [
                  "Ignorar la máquina y continuar",
                  "Decidir no utilizar el sistema, o descartar, invalidar o revertir los resultados",
                  "Notificar exclusivamente al fabricante sin detener la IA",
                  "Esperar a la siguiente actualización de software"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Para asegurar que las personas sin perfil técnico puedan vigilar correctamente el sistema, ¿qué elemento debe habilitarse de forma adecuada?",
              "options": [
                  "Acceso directo a la base de datos SQL",
                  "Una Interfaz Humano-Máquina (HMI) adaptada a su nivel de interlocución",
                  "Permisos para editar los hiperparámetros del modelo",
                  "Acceso al código fuente abierto (Open Source)"
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/06-guia-vigilancia-humana.pdf",
      "glossary": [
          {
              "term": "Vigilancia humana",
              "definition": "Medidas y capacidades integradas en los sistemas de IA para que puedan ser supervisados por personas, previniendo riesgos para la salud, la seguridad y los derechos fundamentales."
          },
          {
              "term": "Sesgo de automatización",
              "definition": "Tendencia de los usuarios humanos a confiar ciegamente en las salidas de un sistema automatizado, perdiendo la capacidad de cuestionar o detectar errores en las decisiones de la IA."
          },
          {
              "term": "HRAIS",
              "definition": "Siglas en inglés de High-Risk Artificial Intelligence System (Sistema de Inteligencia Artificial de Alto Riesgo), sujetos a estrictos controles normativos."
          },
          {
              "term": "Human in the Loop (HITL)",
              "definition": "Nivel de autonomía donde el sistema de IA proporciona información o recomendaciones, pero el ser humano siempre debe intervenir para tomar y ejecutar la decisión final."
          },
          {
              "term": "Human on the Loop (HOTL)",
              "definition": "Nivel de autonomía donde la IA realiza tareas y toma decisiones por sí misma, mientras que un supervisor humano observa en tiempo real y puede intervenir o abortar el proceso."
          },
          {
              "term": "Human in Command (HIC)",
              "definition": "Nivel superior de autonomía y gobernanza, donde las personas determinan la finalidad, dirigen el impacto del sistema y tienen el poder de decidir cuándo y cómo se utiliza la IA."
          },
          {
              "term": "Error forzado",
              "definition": "Medida de concienciación consistente en provocar fallos deliberados y controlados en el sistema durante simulaciones para comprobar que el supervisor humano mantiene un criterio analítico."
          },
          {
              "term": "Interfaz Humano-Máquina (HMI)",
              "definition": "Punto de interacción entre el usuario y el sistema de IA, que debe estar diseñado con un lenguaje y visualización adecuados para permitir una supervisión transparente y eficaz."
          },
          {
              "term": "Identificación biométrica remota",
              "definition": "Sistemas de IA de alto riesgo que identifican a personas a distancia mediante biometría, los cuales requieren por ley verificación por separado de al menos dos personas físicas."
          },
          {
              "term": "Modelo de gobernanza",
              "definition": "Marco organizativo que incluye la estructura, procedimientos, roles, responsabilidades y capacitación necesarios para gestionar adecuadamente los riesgos y la supervisión de un sistema de IA."
          }
      ]
  },
  {
      "id": "07",
      "title": "Guía de datos y gobernanza de datos",
      "summary": "Esta guía establece las prácticas de gobernanza y gestión de datos requeridas por el artículo 10 del Reglamento para sistemas de IA de alto riesgo. Cubre todo el ciclo de vida de los datos: desde la identificación de requisitos y recopilación, hasta su preparación (etiquetado, limpieza, agregación) y análisis de sesgos. Se enfoca en asegurar que los conjuntos de datos de entrenamiento, validación y prueba sean pertinentes, representativos, completos y libres de errores, garantizando así la calidad del sistema y evitando discriminaciones prohibidas.",
      "contentIndex": [
          {
              "title": "1. Preámbulo y estructura de la guía",
              "content": "La Guía 07 aborda el **gobierno y gestión de los datos** tal como exige el **Artículo 10** del Reglamento Europeo de IA para los sistemas de alto riesgo.\n\n### 🎯 Objetivo\n\nEstablecer las bases para que los datos de entrenamiento, validación y prueba cumplan con rigurosos **criterios de calidad**, sean pertinentes, representativos, libres de errores y completos.\n\n### 📋 Estructura del documento\n\nLa guía se organiza en 9 capítulos principales:\n1. **Preámbulo:** Objetivo, audiencia y casos de uso.\n2. **Introducción:** Concepto de gobierno del dato y elementos de implantación.\n3. **Reglamento de IA:** Análisis de los artículos aplicables y su correspondencia.\n4. **Gestión de los datos:** Todo el ciclo de vida (recopilación, preparación, disposición, eliminación).\n5. **Otros elementos:** Tratamiento de categorías especiales de datos personales.\n6. **Documentación técnica.**\n7. **Cuestionario de autoevaluación.**\n8. **Anexos:** Métodos de recopilación, calidad del dato y sesgos.\n9. **Referencias, estándares y normas.**"
          },
          {
              "title": "2. Introducción: el gobierno del dato en la IA",
              "content": "En el contexto de la IA, el **gobierno del dato** se define como el conjunto de políticas, procedimientos, procesos y normas que se implementan para garantizar que los datos utilizados en el entrenamiento, validación y prueba de los sistemas son **adecuados, pertinentes, suficientemente representativos y cumplen los requisitos de calidad**.\n\n### ⚠️ Impacto de una mala gobernanza\n\nLa falta de gobernanza adecuada puede conducir a **resultados sesgados o inexactos**, materializándose en riesgos para la salud, seguridad o **derechos fundamentales** de las personas.\n\n### 📌 Artículo 10 — Requisitos clave\n\nEl Artículo 10 del RIA establece que los conjuntos de datos deben someterse a las siguientes prácticas:\n*   Elección de un diseño adecuado.\n*   Procesos de recopilación y declaración del origen de los datos.\n*   Operaciones de tratamiento: anotación, etiquetado, depuración, actualización, enriquecimiento y agregación.\n*   Evaluación de disponibilidad, cantidad y adecuación.\n*   Análisis y mitigación de posibles sesgos que puedan afectar a la salud, seguridad o discriminación."
          },
          {
              "title": "4. Gestión de los datos: ciclo de vida completo",
              "content": "El núcleo de la guía describe en detalle las etapas del **ciclo de vida de los datos**:\n\n### 📥 Recopilación de los datos\n\nSe deben documentar la fuente y el método de recopilación (ver Anexo A). En el caso de datos personales, debe justificarse la finalidad original de su recogida.\n\n### 🛠️ Preparación de los datos (subapartados 4.3.1 a 4.3.8)\n\nEsta es la fase más extensa e incluye:\n*   **Medición y mejora de la calidad** (dimensiones: completitud, consistencia, precisión, equilibrio, diversidad, etc.).\n*   **Transformación, agregación y muestreo.**\n*   **Creación y selección de características** (*feature engineering*).\n*   **Enriquecimiento** de los conjuntos de datos.\n*   **Etiquetado y anotación:** Los datos etiquetados automáticamente no deben asumirse como correctos. Se requiere validación por muestra aleatoria.\n*   **Análisis de sesgos:** Identificar fuentes de sesgo (contextual, cultural, algorítmico) y aplicar métricas de mitigación.\n\n### 📤 Disposición y eliminación\n\nCada dato tiene un período de conservación definido. Los datos deben eliminarse cuando se corrija el sesgo o finalice su período de retención."
          },
          {
              "title": "5. Categorías especiales de datos personales (Art. 10.5)",
              "content": "Como medida excepcional, el **Artículo 10.5** del RIA permite tratar categorías especiales de datos personales en la medida en que sea **estrictamente necesario** para garantizar la detección y corrección de sesgos en sistemas de alto riesgo.\n\n### 🔒 Salvaguardias obligatorias\n\nPara que este tratamiento sea lícito, deben cumplirse todas las siguientes condiciones:\n\n1.  Los datos sintéticos o anonimizados **no son suficientes** para detectar el sesgo.\n2.  Establecer **limitaciones técnicas de reutilización** y aplicar **seudonimización** y cifrado.\n3.  Garantizar controles de acceso estrictos con trazabilidad de quién accede.\n4.  Los datos **no pueden transmitirse ni transferirse** a terceros bajo ninguna forma.\n5.  Los datos **deben eliminarse de inmediato** al corregir el sesgo o al fin de su período de conservación.\n6.  Mantener **registros de actividad** que justifiquen por qué el uso era estrictamente necesario.\n\n> ⚠️ Siempre que sea posible sin afectar la finalidad del tratamiento, debe priorizarse la **anonimización** completa sobre la mera seudonimización."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué artículo del Reglamento de IA regula los datos y la gobernanza de datos?",
              "back": "El Artículo 10, que establece los criterios de calidad y las prácticas de gobernanza para los datos de entrenamiento, validación y prueba de los sistemas de IA de alto riesgo."
          },
          {
              "front": "¿Cómo define la Guía 07 el 'gobierno del dato' en el contexto de la IA?",
              "back": "Conjunto de políticas, procedimientos, procesos y normas para garantizar que los datos usados en IA son adecuados, pertinentes, suficientemente representativos y cumplen los requisitos de calidad establecidos."
          },
          {
              "front": "¿Qué tres tipos de conjuntos de datos deben cumplir con los criterios de calidad del Art. 10?",
              "back": "Los conjuntos de datos de entrenamiento, de validación y de prueba."
          },
          {
              "front": "¿Qué es el etiquetado de datos o anotación en el contexto de la gobernanza de datos?",
              "back": "El proceso mediante el cual se asignan etiquetas identificativas a los datos recabados. Los datos etiquetados de forma automática no deben asumirse como correctos y deben validarse por muestra aleatoria."
          },
          {
              "front": "¿Qué dimensiones de calidad del dato se analizan según el Anexo B.1 de la Guía 07?",
              "back": "Completitud, consistencia, accesibilidad, auditabilidad, identificabilidad, portabilidad, precisión, cumplimiento normativo, credibilidad, equilibrio, imparcialidad, semántica y diversidad, entre otras."
          },
          {
              "front": "¿Bajo qué condición excepcional permite el Art. 10.5 tratar categorías especiales de datos personales?",
              "back": "Cuando sea estrictamente necesario para garantizar la detección y corrección de sesgos en sistemas de IA de alto riesgo, y siempre que los datos sintéticos o anonimizados no sean suficientes para ello."
          },
          {
              "front": "¿Qué obligación existe sobre los datos de categorías especiales una vez corregido el sesgo?",
              "back": "Deben eliminarse de inmediato cuando se haya corregido el sesgo o cuando haya llegado al final de su período de conservación."
          },
          {
              "front": "¿Cuáles son las tres dimensiones sobre las que el Art. 10 exige revisar los datos para evitar riesgos?",
              "back": "Los riesgos que puedan afectar a la salud, la seguridad y los derechos fundamentales de las personas."
          },
          {
              "front": "¿Qué es el análisis de sesgos según la Guía 07?",
              "back": "El examen de los datos para identificar posibles sesgos que puedan dar lugar a discriminación prohibida o afectar negativamente los derechos fundamentales, usando métricas estadísticas y aplicando medidas de mitigación."
          },
          {
              "front": "¿Qué es la seudonimización aplicada a categorías especiales de datos?",
              "back": "Una medida de seguridad que sustituye los datos identificativos directos por pseudónimos, de modo que los datos no puedan atribuirse a una persona específica sin información adicional."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué artículo del Reglamento de IA (AI Act) establece los requisitos de datos y gobernanza para sistemas de alto riesgo?",
              "options": [
                  "Artículo 9",
                  "Artículo 10",
                  "Artículo 13",
                  "Artículo 72"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Según el Art. 10, los conjuntos de datos que utilicen los HRAIS deben ser pertinentes y, en la mayor medida posible:",
              "options": [
                  "Masivos y completos, sin importar los sesgos.",
                  "Carecer de errores, estar completos y ser suficientemente representativos.",
                  "Provenir exclusivamente de fuentes gubernamentales europeas.",
                  "Ser de código abierto y verificados por organismos independientes."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de las siguientes NO es una operación de preparación de datos incluida en el Art. 10 del Reglamento de IA?",
              "options": [
                  "Anotación y etiquetado.",
                  "Depuración y actualización.",
                  "Monetización y licenciamiento.",
                  "Enriquecimiento y agregación."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Cuando se utiliza el etiquetado automático de datos, la Guía 07 establece que:",
              "options": [
                  "Los datos automáticos se asumen como correctos si el modelo tiene más de un 90% de precisión.",
                  "No se necesita validación posterior si el proveedor ha documentado el proceso.",
                  "Los datos etiquetados automáticamente NO deben asumirse como correctos y deben validarse por muestra aleatoria.",
                  "El etiquetado automático está prohibido por el Reglamento de IA."
              ],
              "correctAnswer": 2
          },
          {
              "question": "El Artículo 10.5 permite tratar categorías especiales de datos personales. ¿Para qué finalidad específica?",
              "options": [
                  "Para entrenar modelos de lenguaje de propósito general (GPAI).",
                  "Para la detección y corrección de sesgos en sistemas de IA de alto riesgo.",
                  "Para la vigilancia poscomercialización del sistema.",
                  "Para la evaluación de conformidad ante organismos notificados."
              ],
              "correctAnswer": 1
          },
          {
              "question": "Respecto a las categorías especiales de datos del Art. 10.5, ¿cuál de estas afirmaciones es CORRECTA?",
              "options": [
                  "Pueden transmitirse a terceros si hay un contrato de encargo de tratamiento.",
                  "Solo deben eliminarse si el responsable de tratamiento lo solicita expresamente.",
                  "Deben eliminarse de inmediato una vez corregido el sesgo o al final de su período de conservación.",
                  "Pueden conservarse indefinidamente para futuros proyectos de investigación."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué es la calidad del dato en el marco de la gobernanza de IA según la Guía 07?",
              "options": [
                  "El tamaño máximo en gigabytes que puede almacenar el conjunto de datos.",
                  "Un conjunto de dimensiones como completitud, consistencia y precisión que deben analizarse para cada dato.",
                  "La velocidad a la que se generan nuevos datos para entrenar el modelo.",
                  "El porcentaje mínimo de datos de validación respecto al total del dataset."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué garantiza el proceso de análisis de sesgos exigido por el Artículo 10?",
              "options": [
                  "Que el modelo alcance un F1 Score superior al 95%.",
                  "Que los datos no excedan el tamaño máximo de almacenamiento permitido.",
                  "Que se identifiquen y mitiguen posibles sesgos que puedan dar lugar a discriminación o afectar a los derechos fundamentales.",
                  "Que todos los datos sean verificados por un organismo notificado externo."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es el primer requisito que debe fallar para que sea lícito tratar categorías especiales de datos bajo el Art. 10.5?",
              "options": [
                  "Que el sistema de IA haya sido certificado por un organismo notificado.",
                  "Que los datos sintéticos o anonimizados no permitan detectar o corregir el sesgo de forma efectiva.",
                  "Que la empresa proveedora tenga más de 250 empleados.",
                  "Que el sistema sea de aplicación en el sector público."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué dice la Guía 07 sobre la transmisión de datos de categorías especiales a terceros?",
              "options": [
                  "Puede hacerse si se firma un acuerdo de confidencialidad.",
                  "Está permitida si el tercero es una autoridad pública europea.",
                  "Los datos no pueden transmitirse ni transferirse a terceros bajo ninguna forma.",
                  "Puede hacerse después de un período de conservación de 6 meses."
              ],
              "correctAnswer": 2
          }
      ],
      "glossary": [
          {
              "term": "Gobierno del dato",
              "definition": "Conjunto de políticas, procedimientos, procesos y normas implementados para garantizar que los datos utilizados en IA son adecuados, pertinentes, representativos y cumplen los requisitos de calidad y completitud exigidos por el Reglamento."
          },
          {
              "term": "Conjuntos de datos de entrenamiento",
              "definition": "Datos utilizados para ajustar los parámetros del modelo de IA. Según el Art. 10, deben ser pertinentes, representativos, libres de errores y completos en vista de la finalidad prevista del sistema."
          },
          {
              "term": "Etiquetado de datos (Anotación)",
              "definition": "Proceso por el que se asignan etiquetas identificativas a los datos. Los datos etiquetados automáticamente no deben asumirse como correctos y requieren validación por muestra aleatoria representativa."
          },
          {
              "term": "Sesgo algorítmico",
              "definition": "Error sistemático en los datos o el modelo que produce resultados injustos o discriminatorios. El Art. 10 obliga a identificar y mitigar los sesgos que puedan afectar a la salud, seguridad o derechos fundamentales."
          },
          {
              "term": "Categorías especiales de datos personales",
              "definition": "Datos especialmente sensibles como los relativos al origen étnico, creencias, salud o biometría. El Art. 10.5 permite su tratamiento solo de forma estrictamente necesaria para corregir sesgos, con salvaguardias muy estrictas."
          },
          {
              "term": "Seudonimización",
              "definition": "Medida de seguridad que sustituye los identificadores directos de los datos por pseudónimos, de modo que los datos no pueden atribuirse directamente a una persona sin información adicional."
          },
          {
              "term": "Calidad del dato",
              "definition": "Conjunto de dimensiones que determinan la idoneidad de un dato: completitud, consistencia, accesibilidad, precisión, equilibrio, diversidad, imparcialidad, entre otras. Deben analizarse de forma individual para cada dato."
          },
          {
              "term": "Riesgo de sesgo",
              "definition": "Posibilidad de que los datos de entrenamiento o el modelo produzcan resultados que discriminen a grupos de personas o vulneren sus derechos fundamentales. Debe identificarse y mitigarse activamente según el Art. 10."
          },
          {
              "term": "Disposición de los datos",
              "definition": "Etapa del ciclo de vida del dato en la que se define su almacenamiento, acceso, uso continuado y eventual eliminación, asegurando su gestión conforme a los principios de minimización y privacidad."
          },
          {
              "term": "Anonimización",
              "definition": "Proceso por el que se eliminan o modifican los datos de forma que la persona a la que se refieren no pueda ser identificada directa ni indirectamente. Tiene preferencia sobre la seudonimización cuando la finalidad lo permite."
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/07-guia-de-datos-y-gobernanza-de-datos.pdf"
  },
  {
      "id": "08",
      "title": "Guía transparencia",
      "summary": "Centrada en el artículo 13 del Reglamento, esta guía explica cómo diseñar sistemas de IA que sean interpretables y comprensibles. Detalla la necesidad de proporcionar instrucciones de uso claras, información sobre la identidad del proveedor, y descripciones de las capacidades y limitaciones del sistema. Promueve el uso de técnicas de explicabilidad (como la contrafactualidad) y la adaptación del lenguaje al perfil del usuario (desplegador) para asegurar que se entienda el funcionamiento del sistema y sus resultados.",
      "contentIndex": [
          {
              "title": "Introducción a la transparencia en la inteligencia artificial",
              "content": "La presente **Guía 08** se centra en la Transparencia de los sistemas de Inteligencia Artificial de alto riesgo. Su objetivo es proporcionar medidas de implementación y recomendaciones prácticas para entidades proveedoras y responsables del despliegue, facilitando el cumplimiento del Reglamento Europeo de IA.\n\n### 👁️ El Concepto de Transparencia\n\nLa transparencia implica diseñar sistemas que informen sobre su funcionamiento de manera **clara y comprensible**, permitiendo a los usuarios entender la lógica subyacente y utilizar adecuadamente el sistema.\n\n*   **El desafío de la 'Caja Negra':** Algoritmos complejos (como *deep learning* o redes neuronales) requieren garantizar que las decisiones automatizadas puedan ser interpretadas por un ser humano, evitando riesgos inaceptables.\n*   **Enfoque centrado en el ser humano:** Pretende construir un entorno de confianza. Los operadores deben poder identificar *por qué* el sistema toma una decisión, *qué datos* utiliza y cuáles son sus *limitaciones*.\n\n### 🛡️ Transparencia y Supervisión\n\nLa transparencia funcional y técnica es indispensable para una correcta **supervisión humana** (exigida en el Artículo 14). Un operador no puede vigilar, corregir ni interrumpir eficazmente un sistema cuyas decisiones no comprende.\n\nPor tanto, la transparencia **no es opcional ni un simple valor añadido**: es un requisito legal ineludible que debe integrarse en todo el ciclo de vida del sistema."
          },
          {
              "title": "Requisitos de transparencia según el reglamento de IA (artículo 13)",
              "content": "El **Artículo 13** del Reglamento establece los pilares obligatorios sobre la transparencia y la información a los responsables del despliegue. Se divide en tres requerimientos principales:\n\n1.  **Diseño Transparente (Ap. 1):** Los sistemas deben diseñarse garantizando un nivel de transparencia suficiente para que los responsables interpreten y usen correctamente los resultados.\n2.  **Instrucciones de Uso (Ap. 2):** El sistema debe acompañarse de instrucciones (digitales o en otro soporte) que sean *concisas, completas, claras, accesibles y comprensibles*.\n3.  **Contenido Mínimo (Ap. 3):** Detalla exhaustivamente la información obligatoria que deben contener dichas instrucciones.\n\n### 📝 Contenido Mínimo de las Instrucciones\n\nLas instrucciones de uso deben incluir obligatoriamente:\n\n*   **Identidad:** Datos completos y de contacto del proveedor.\n*   **Capacidades y Limitaciones:** Finalidad prevista, nivel de precisión, solidez, ciberseguridad y circunstancias que puedan generar riesgos.\n*   **Impacto en Personas:** Rendimiento respecto a colectivos vulnerables.\n*   **Datos:** Especificaciones de los datos de entrenamiento, validación y prueba.\n*   **Supervisión y Recursos:** Medidas de supervisión aplicables e infraestructura (hardware/software) necesaria para el mantenimiento y lectura de registros (logs)."
          },
          {
              "title": "Medidas prácticas para alcanzar la transparencia",
              "content": "Para lograr el cumplimiento efectivo, la Guía detalla un catálogo de medidas técnicas y organizativas:\n\n### 🛠️ Medidas Clave\n\n*   **Atender al domino de la funcionalidad:** Cubrir los requisitos del caso de uso y especificar explícitamente posibles riesgos por usos indebidos.\n*   **Transparencia sobre los datos:** Realizar un *Análisis Exploratorio de Datos (EDA)* para entender la representatividad, distribución y posibles sesgos de la muestra.\n*   **De lo global a lo particular:** Explicar desde el mecanismo de razonamiento general hasta la justificación de predicciones individuales.\n*   **Adaptar el lenguaje:** Interfaz que traduzca la salida técnica a un vocabulario comprensible (para perfiles técnicos, gestores de negocio o ciudadanos).\n\n### 🧠 Abordando la Complejidad Algorítmica\n\n*   **Gestionar la complejidad:** Si existen modelos de \"caja negra\", usar herramientas de interpretabilidad o sustituirlos por modelos más sencillos.\n*   **Aplicar prudencia:** Ocultar información personal o confidencial al justificar algoritmos.\n*   **Utilizar contrafactualidad:** Mostrar al usuario *qué variables tendrían que haber cambiado* para obtener una decisión distinta.\n*   **Canal de información:** Habilitar un portal web o wiki accesible permanentemente para todas las partes."
          },
          {
              "title": "Documentación técnica vinculada a la transparencia",
              "content": "El **Artículo 11** estipula que todos los sistemas de IA de alto riesgo deben mantener una *Documentación Técnica* rigurosa (siguiendo el Anexo IV).\n\n### 📑 Elementos Documentales de Transparencia\n\n*   **Manuales de usuario:** Y la definición del canal oficial de contacto para gestión de incidencias.\n*   **Dominio funcional:** Circunstancias previsibles de uso indebido y el procedimiento para supervisarlas.\n*   **Análisis de datos:** Fuentes de datos originales, su utilidad práctica y herramientas estadísticas (EDA) empleadas.\n\n### 🧠 Justificación y Complejidad del Modelo\n\nSe debe justificar en la documentación la elección y **complejidad del modelo**:\n\n*   Explicar si el uso de técnicas de *caja negra* es estrictamente indispensable.\n*   Describir las herramientas o algoritmos de interpretabilidad utilizados (como LIME o SHAP).\n*   Documentar las métricas de precisión utilizadas en MLOps, los umbrales que exigen reentrenamiento por obsolescencia y correlaciones estadísticas clave.\n*   **Prudencia y contrafactualidad:** Especificar qué información sensible se omite en explicaciones y los requisitos lógicos aplicados para brindar explicaciones contrafactuales al usuario."
          }
      ],
      "flashcards": [
          {
              "front": "¿A qué artículo del Reglamento de IA hace referencia principal la Guía 08 sobre Transparencia?",
              "back": "Al Artículo 13 'Transparencia y comunicación de información a los responsables del despliegue'."
          },
          {
              "front": "¿Cuál es el objetivo primordial del diseño transparente en un sistema de IA de alto riesgo?",
              "back": "Garantizar que los responsables del despliegue puedan interpretar y usar correctamente los resultados de salida generados."
          },
          {
              "front": "¿Qué características deben cumplir las instrucciones de uso según el Artículo 13.2?",
              "back": "Deben contener información concisa, completa, correcta, clara, pertinente, accesible y comprensible para el responsable del despliegue."
          },
          {
              "front": "¿Qué es la 'contrafactualidad' aplicada a la transparencia de la IA?",
              "back": "Es la capacidad de explicar qué tendría que haber sido diferente en los datos de entrada para que el sistema tomara una decisión o resultado distinto."
          },
          {
              "front": "¿Por qué la guía recomienda 'adaptar el lenguaje' en la interfaz humano-máquina?",
              "back": "Para asegurar que las predicciones y decisiones se expliquen utilizando un vocabulario comprensible tanto para perfiles técnicos como para usuarios de negocio o personas afectadas."
          },
          {
              "front": "¿A quién aplica la obligación de dotar al sistema de mecanismos técnicos de información de lo global a lo particular?",
              "back": "Al proveedor del sistema de IA, quien debe diseñar las herramientas para que la entidad usuaria comprenda el razonamiento a distintos niveles de detalle."
          },
          {
              "front": "¿Qué información específica sobre el proveedor deben incluir las instrucciones de uso (Art. 13.3.a)?",
              "back": "La identidad y los datos de contacto del proveedor y, en su caso, de su representante autorizado."
          },
          {
              "front": "¿Qué significa 'aplicar prudencia' como medida técnica de transparencia?",
              "back": "Implementar mecanismos para que el sistema no revele información sensible, personal o confidencial al momento de explicar los argumentos de sus decisiones."
          },
          {
              "front": "¿Qué métricas se deben especificar obligatoriamente en la información sobre el sistema (Art. 13.3.b.ii)?",
              "back": "El nivel esperado de precisión (incluyendo sus parámetros de medición), solidez y ciberseguridad probados y validados."
          },
          {
              "front": "¿Qué debe documentarse sobre los datos de entrada según las normativas de transparencia?",
              "back": "Las especificaciones relativas a los datos de entrada y la información pertinente sobre los conjuntos de datos de entrenamiento, validación y prueba."
          },
          {
              "front": "¿Para qué sirve el Análisis Exploratorio de Datos (EDA) en el contexto de la transparencia?",
              "back": "Sirve para conocer la esencia, significado y metainformación de las fuentes de datos, detectar valores atípicos y asegurar que la muestra es justa y representativa."
          },
          {
              "front": "¿Qué relación tiene la transparencia (Art. 13) con la vigilancia humana (Art. 14)?",
              "back": "La transparencia es un pre-requisito; proporciona las medidas técnicas para facilitar la interpretación de resultados de salida, posibilitando así que los humanos supervisen el sistema adecuadamente."
          }
      ],
      "quiz": [
          {
              "question": "Según el Artículo 13 del Reglamento de IA, ¿quién es el principal responsable de redactar las instrucciones de uso del sistema?",
              "options": [
                  "El responsable del despliegue",
                  "El proveedor del sistema de IA",
                  "La autoridad de vigilancia del mercado (AVM)",
                  "El usuario final"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál es el propósito central de la medida técnica 'Utilizar contrafactualidad'?",
              "options": [
                  "Proteger la información sensible del modelo evitando que sea revelada al público.",
                  "Explicar al usuario bajo qué valores diferentes se habría tomado una decisión distinta.",
                  "Automatizar completamente el proceso de reentrenamiento del modelo de IA.",
                  "Traducir automáticamente el código fuente a lenguaje natural comprensible."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué información NO se menciona como obligatoria en las instrucciones de uso según el Artículo 13.3?",
              "options": [
                  "Datos de contacto y la identidad del proveedor.",
                  "Características, capacidades y limitaciones del sistema.",
                  "El código fuente íntegro del algoritmo utilizado.",
                  "Recursos de hardware y software necesarios para el mantenimiento."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Para cumplir con la medida 'Adaptar el lenguaje', la Guía 08 requiere:",
              "options": [
                  "Usar únicamente lenguaje de programación para maximizar la exactitud técnica.",
                  "Traducir la interfaz del sistema a todos los idiomas oficiales de la Unión Europea.",
                  "Emplear exclusivamente un lenguaje estadístico para científicos de datos.",
                  "Adecuar el nivel de interlocución a diferentes perfiles (técnicos, gestores de negocio y personas afectadas)."
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Qué aconseja la guía sobre cómo 'Gestionar la complejidad' para favorecer la transparencia?",
              "options": [
                  "Añadir más capas ocultas de redes neuronales para aumentar la precisión.",
                  "Ocultar el funcionamiento del sistema para evitar confusiones al usuario inexperto.",
                  "Utilizar herramientas que expliquen modelos de caja negra o emplear modelos directamente interpretables.",
                  "Desactivar las funcionalidades más avanzadas del sistema en entornos de producción."
              ],
              "correctAnswer": 2
          },
          {
              "question": "La medida de transparencia 'Aplicar prudencia' busca principalmente:",
              "options": [
                  "Aumentar el número de parámetros medibles para optimizar el rendimiento y la precisión del modelo.",
                  "Evitar revelar información sensible, confidencial o que vulnere la privacidad al explicar las decisiones.",
                  "Reducir el consumo energético (Green AI) y el coste computacional del entrenamiento del sistema.",
                  "Restringir el uso del sistema a entornos de prueba cerrados (sandboxes)."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿En qué etapa del ciclo de vida debe aplicarse principalmente el nivel de transparencia según el Art. 13.1?",
              "options": [
                  "Solamente en la fase de auditoría poscomercialización.",
                  "Exclusivamente durante la etapa de recopilación y limpieza de los datos iniciales.",
                  "Desde el diseño y desarrollo inicial del sistema para garantizar que su funcionamiento general sea interpretable.",
                  "Únicamente al redactar las instrucciones de uso justo antes de poner el sistema en el mercado."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Para aplicar 'Transparencia sobre los datos utilizados', la Guía 08 recomienda específicamente realizar:",
              "options": [
                  "Un Análisis Exploratorio de Datos (EDA).",
                  "Una eliminación inmediata de los datos originales por motivos de GDPR.",
                  "Una ofuscación criptográfica total del conjunto de datos.",
                  "Un cambio aleatorio de hiperparámetros de entrenamiento."
              ],
              "correctAnswer": 0
          },
          {
              "question": "La transparencia de un sistema de IA de alto riesgo está directamente vinculada con la Supervisión Humana (Art. 14) porque:",
              "options": [
                  "Obliga a que todas las decisiones sean tomadas exclusivamente por humanos, sustituyendo a la IA.",
                  "Facilita las medidas técnicas que permiten a los responsables del despliegue interpretar las salidas del sistema.",
                  "Disminuye deliberadamente el nivel de precisión del modelo para dar más control al usuario.",
                  "Requiere la generación de un registro de auditoría encriptado inalterable."
              ],
              "correctAnswer": 1
          },
          {
              "question": "En la documentación técnica requerida para la transparencia, ¿qué se exige sobre las correlaciones detectadas en los datos?",
              "options": [
                  "No es necesario documentarlas, ya que son procesos internos de la red neuronal.",
                  "Documentar las correlaciones válidas y también las explícitamente no deseadas que dificulten la transparencia o precisión.",
                  "Se deben listar únicamente las correlaciones que tengan un efecto positivo sobre la equidad.",
                  "Debe justificarse económicamente el coste de calcular dichas correlaciones."
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/08-guia-transparencia.pdf",
      "glossary": [
          {
              "term": "Transparencia",
              "definition": "Capacidad de un sistema de IA para proporcionar información estructurada sobre su funcionamiento, características y limitaciones, de manera que los usuarios lo comprendan y utilicen adecuadamente."
          },
          {
              "term": "Contrafactualidad",
              "definition": "Capacidad del sistema de IA para explicar bajo qué valores, variables o circunstancias diferentes en los datos de entrada se habría tomado una decisión o generado una predicción distinta."
          },
          {
              "term": "Caja negra",
              "definition": "Modelo de inteligencia artificial (como ciertas redes neuronales profundas) cuyo funcionamiento o razonamiento interno es difícil o imposible de interpretar de forma directa por los humanos."
          },
          {
              "term": "Árbol de decisión",
              "definition": "Modelo de aprendizaje automático interpretable y estructurado donde la lógica de inferencia se codifica de manera transparente como caminos desde un nodo raíz hasta un nodo hoja que determina la decisión final."
          },
          {
              "term": "MLOps",
              "definition": "Conjunto de prácticas, procesos y herramientas que soportan la integración continua, validación y despliegue de modelos de IA en entornos de producción mediante flujos de trabajo automatizados."
          },
          {
              "term": "Análisis Exploratorio de Datos (EDA)",
              "definition": "Fase analítica y estadística inicial sobre las fuentes de datos para conocer su esencia, metainformación, representatividad y detectar valores atípicos que puedan sesgar el sistema de IA."
          },
          {
              "term": "Equidad (Fairness)",
              "definition": "Principio que persigue un trato igualitario, imparcial y no discriminatorio, garantizando que el sistema de IA no incurra en prejuicios indebidos hacia individuos o colectivos concretos."
          },
          {
              "term": "Instrucciones de uso",
              "definition": "Documentación en formato digital o físico que acompaña preceptivamente al sistema de IA de alto riesgo, brindando información concisa, pertinente y comprensible para operar el sistema correctamente."
          },
          {
              "term": "Responsable del despliegue",
              "definition": "Toda persona física o jurídica, autoridad pública u organismo que utilice un sistema de IA bajo su autoridad en un contexto profesional, distinguiéndose de los desarrolladores y de los usuarios finales afectados."
          },
          {
              "term": "Ciclo de vida",
              "definition": "Conjunto de fases sucesivas por las que atraviesa un sistema de IA desde su concepción, diseño, entrenamiento y despliegue, hasta su mantenimiento, monitorización y eventual desmantelamiento."
          }
      ]
  },
  {
      "id": "09",
      "title": "Guía de precisión",
      "summary": "Esta guía aborda el artículo 15 en lo relativo a la precisión de los sistemas de IA. Define cómo seleccionar y documentar métricas de evaluación adecuadas (como exactitud, F1-score, matriz de confusión) según la finalidad prevista. Trata la importancia de evitar el sobreaprendizaje (overfitting), el uso de conjuntos de validación y prueba disjuntos, y la necesidad de mantener la precisión a lo largo del ciclo de vida del sistema mediante monitorización continua y benchmarks.",
      "contentIndex": [
          {
              "title": "Introducción a la precisión en sistemas de inteligencia artificial",
              "content": "La precisión es uno de los **pilares fundamentales** establecidos por el Reglamento Europeo de Inteligencia Artificial (AI Act) para los sistemas de IA de alto riesgo. En este marco normativo, la precisión no es simplemente una métrica matemática aislada, sino un *requisito esencial* para mitigar riesgos asociados a la salud, la seguridad y los derechos fundamentales.\n\n### ⚖️ Finalidad y Precisión\n\nA través de la evaluación de la precisión, se obtiene una medida cuantitativa de la relación entre la *finalidad prevista* del sistema y su *desempeño real*. El Reglamento exige:\n\n*   Alcanzar un nivel adecuado de precisión.\n*   Mantener dicho nivel de manera consistente y uniforme a lo largo de todo su ciclo de vida.\n*   Evitar degradaciones imprevistas de rendimiento debido a cambios en datos de entrada o incompatibilidades tecnológicas.\n\n> 📝 **Nota terminológica:** En la Guía 09 de AESIA, 'accuracy' se ha traducido generalmente como exactitud, 'precision' como precisión y 'performance' como rendimiento (o genéricamente precisión).\n\n### 🔗 Relación Transversal\n\nLa precisión no opera en el vacío; se relaciona transversalmente con otras exigencias:\n\n*   **Ciberseguridad:** Si un sistema sufre un ataque de *envenenamiento de datos*, su precisión se compromete.\n*   **Supervisión humana:** El nivel de precisión debe documentarse y comunicarse al responsable del despliegue mediante instrucciones claras, permitiéndole entender los umbrales de fallo."
          },
          {
              "title": "La precisión a lo largo del ciclo de vida del sistema",
              "content": "Establecer y medir la precisión de un sistema de IA es un proceso iterativo en todo su ciclo de vida, existiendo puntos críticos decisivos:\n\n### 🛠️ Preprocesamiento de los Datos\n\nLas decisiones de diseño al preparar los datos (filtrado, escalado de magnitudes, manejo de valores nulos) alteran la distribución del conjunto de entrenamiento e **impactan directamente en la función objetivo** que debe aprender el algoritmo. Todo preprocesamiento debe estar justificado y documentado.\n\n### 🧠 El Peligro del Sobreaprendizaje (Overfitting)\n\nOcurre cuando el modelo se ajusta demasiado a las particularidades de los datos de entrenamiento (memorizando el *ruido*), perdiendo capacidad de generalización y reduciendo drásticamente su precisión ante datos nuevos. Para mitigarlo:\n\n*   Aplicar técnicas de regularización.\n*   Separar rigurosamente los datos en conjuntos disjuntos de **entrenamiento, validación y prueba**.\n\n### 📊 Modelos de Referencia (Baseline Models)\n\nDurante el desarrollo es esencial utilizar modelos base. La precisión de un sistema solo tiene verdadero significado cuando se contextualiza frente al *estado del arte* o modelos base simples. Esto demuestra objetivamente que el modelo complejo implementado **aporta un valor real**.\n\nFinalmente, el ciclo de vida debe considerar la incertidumbre de las predicciones, acompañando las salidas con *métricas de confianza*."
          },
          {
              "title": "Evaluación y selección de métricas y funciones objetivo",
              "content": "La correcta evaluación requiere seleccionar meticulosamente las métricas de precisión y la función objetivo.\n\n### 📏 Indicadores Clave de Rendimiento (KPIs)\n\nEl proveedor debe elegir las métricas más adecuadas según el tipo de algoritmo:\n\n*   **Modelos de regresión:** Se emplean métricas de error como el MSE (*Mean Squared Error*), RMSE, MAE o R².\n*   **Modelos de clasificación:** Es fundamental apoyarse en la **matriz de confusión** (que desglosa verdaderos/falsos positivos y negativos), derivando métricas como Tasa de Aciertos (*Accuracy*), Precisión, Exhaustividad (*Recall*), Especificidad y el valor F1.\n\n### 🎯 Función Objetivo (Loss Function)\n\nEs la fórmula matemática que el modelo buscará optimizar durante el entrenamiento. Es vital que esté **perfectamente alineada** con la métrica seleccionada y la finalidad última del sistema para no aprender a resolver un problema incorrecto.\n\n### ⚖️ Imparcialidad (Fairness) y Sesgos\n\nUna alta precisión global puede enmascarar un bajo rendimiento para *minorías o subgrupos específicos*, algo inaceptable si afecta a derechos fundamentales. \n*   Las métricas deben desglosarse y someterse a herramientas de juicio equitativo.\n*   Deben monitorizarse continuamente para evitar discriminación algorítmica."
          },
          {
              "title": "Garantizando la precisión: medidas técnicas y benchmarks",
              "content": "Para mantener la precisión de forma consistente, se deben implementar medidas técnicas concretas:\n\n*   **Documentación de rangos:** Especificar rangos operativos, latencia y eficiencia.\n*   **Registro histórico (logs):** Mecanismos automáticos que registren precisiones calculadas en producción.\n*   **Panel de monitorización:** Interfaz gráfica para el responsable del despliegue que refleje la evolución temporal y active alarmas si el rendimiento cae.\n\n### 📐 Significancia Estadística\n\nNo basta con observar una métrica aislada. El proveedor debe **justificar la validez de las mejoras** a través de evaluaciones de significancia estadística (como Wilcoxon, T-Test o ANOVA). Esto demuestra que la superioridad frente a los modelos base no se debe simplemente al azar o a la varianza.\n\n### 🏆 Benchmarks y Comparativas\n\nPara validar plenamente la precisión, se recurre a pruebas estandarizadas (*benchmarks*):\n\n*   Comparan el modelo frente a **bases de datos reconocidas** (como ImageNet o CIFAR-10).\n*   Al establecer comparativas con el estado del arte (*State of the Art - SOTA*), se proporciona al sistema un contexto de rendimiento repetible y una garantía robusta de calidad ante autoridades y usuarios."
          },
          {
              "title": "Documentación técnica y tarjetas de modelo",
              "content": "El Anexo IV del Reglamento establece requerimientos rigurosos sobre cómo documentar la precisión.\n\n### 📄 Exigencias de Documentación (Punto 2g)\n\nSe exige detallar: procedimientos de validación y prueba, características de los conjuntos de datos, parámetros matemáticos y evaluación de efectos discriminatorios. Además, debe declararse el **nivel de precisión desglosado** para colectivos específicos.\n\n### 📇 Tarjeta del Modelo (Model Card)\n\nEs una ficha técnica resumida pero profunda que debe acompañar al sistema. En su apartado de precisión debe detallar:\n*   Métricas utilizadas y su justificación.\n*   Umbrales de decisión configurados.\n*   Cálculo de la incertidumbre (intervalos de confianza, varianza).\n*   Limitaciones de adaptabilidad a nuevos datos.\n*   Impacto previsto sobre colectivos vulnerables.\n\n### 🗄️ Tarjeta de Base de Datos (Datasheets for Datasets)\n\nDe forma análoga, esta tarjeta documenta el **origen, motivación, proceso de limpieza y posibles sesgos** de los datos de entrenamiento y evaluación. Esta transparencia fáctica favorece las auditorías técnicas y promueve la supervisión humana efectiva."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es la precisión en el contexto del Reglamento de IA y cómo se define en la Guía 09?",
              "back": "Es una medida cuantitativa que refleja la relación entre la finalidad prevista del sistema de IA y su desempeño, desde su fase de diseño hasta su funcionamiento en producción."
          },
          {
              "front": "¿Qué es el 'sobreaprendizaje' (overfitting) y por qué representa un riesgo crítico?",
              "back": "Ocurre cuando el modelo se ajusta excesivamente a los datos de entrenamiento, memorizando el ruido y perdiendo su capacidad de generalizar para realizar predicciones precisas sobre datos nuevos."
          },
          {
              "front": "¿Para qué sirve establecer un 'modelo base' (baseline model) durante el desarrollo?",
              "back": "Sirve como una referencia simple inicial, a menudo sin complejidad profunda, para establecer comparaciones sistemáticas y demostrar que el modelo avanzado aporta mejoras reales a la precisión."
          },
          {
              "front": "¿Qué es la función objetivo (loss function) en un modelo de IA?",
              "back": "Es la función matemática que el algoritmo busca optimizar (minimizar o maximizar) durante la fase de entrenamiento para ajustar sus parámetros internos y lograr la precisión deseada."
          },
          {
              "front": "Menciona tres métricas de precisión sugeridas comúnmente para modelos de regresión.",
              "back": "Error Cuadrático Medio (MSE), Raíz del Error Cuadrático Medio (RMSE), Error Absoluto Medio (MAE), y R² (Coeficiente de determinación)."
          },
          {
              "front": "¿En qué tipo de modelos se utiliza la 'matriz de confusión' y qué información proporciona?",
              "back": "Se utiliza en modelos de clasificación. Muestra un resumen de las predicciones del modelo frente a los valores reales (verdaderos/falsos positivos y negativos)."
          },
          {
              "front": "¿Por qué es fundamental realizar pruebas de 'significancia estadística' en la precisión?",
              "back": "Para demostrar matemáticamente que las mejoras de precisión observadas frente a un modelo base no son producto del azar o de variaciones aleatorias en los datos."
          },
          {
              "front": "¿Qué es un 'benchmark' en la evaluación de la precisión de un sistema de IA?",
              "back": "Es una prueba de rendimiento estandarizada utilizando bases de datos públicas (ej. ImageNet) para comparar el modelo con el estado del arte de forma repetible y medible."
          },
          {
              "front": "¿Qué debe incluir una 'Tarjeta del Modelo' (Model Card) respecto a la precisión?",
              "back": "Debe detallar las métricas de precisión elegidas, umbrales de decisión, estimaciones de incertidumbre, métodos de cálculo y consideraciones sobre limitaciones y sesgos."
          },
          {
              "front": "¿Qué requiere el Punto 3 del Anexo IV sobre los niveles de precisión frente a distintos usuarios?",
              "back": "Exige documentar no solo la precisión global esperada, sino también desglosar los niveles de precisión específicos para distintos grupos demográficos o colectivos vulnerables."
          },
          {
              "front": "¿Cómo impacta el preprocesamiento de datos en la precisión final del modelo?",
              "back": "Operaciones como escalado o manejo de nulos alteran la distribución de los datos, lo que modifica directamente la función que el algoritmo aprenderá y, por tanto, afecta el resultado de la precisión."
          },
          {
              "front": "¿Qué debe hacer el sistema si durante su uso en producción caen drásticamente sus métricas de precisión?",
              "back": "Debe contar con alarmas e interfaces que notifiquen al humano supervisor para detectar la anomalía, permitiendo intervenir e incluso interrumpir o detener el sistema de forma segura."
          }
      ],
      "quiz": [
          {
              "question": "¿Cuál de las siguientes métricas NO es apropiada para evaluar un problema de regresión según la Guía 09?",
              "options": [
                  "Mean Squared Error (MSE)",
                  "Mean Absolute Error (MAE)",
                  "Área bajo la curva ROC (AUROC)",
                  "Root Mean Squared Error (RMSE)"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué documento estandarizado exige el diseño para reportar de forma transparente las características, la precisión y las limitaciones de un modelo de IA?",
              "options": [
                  "Tarjeta del Modelo (Model Card)",
                  "Certificado de Conformidad Cifrado",
                  "Manual de Envenenamiento de Datos",
                  "Contrato de Confidencialidad de Entrenamiento"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué fenómeno negativo se produce cuando un modelo memoriza excesivamente los datos de entrenamiento y pierde la capacidad de generalizar sobre datos no vistos?",
              "options": [
                  "Desplazamiento del dominio (Domain Shift)",
                  "Sobreaprendizaje (Overfitting)",
                  "Sesgo cognitivo algorítmico",
                  "Subajuste (Underfitting)"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué técnica técnica/organizativa recomienda la Guía 09 para garantizar que no existan muestras solapadas entre los conjuntos de entrenamiento, validación y prueba?",
              "options": [
                  "Duplicar deliberadamente muestras para aumentar el volumen",
                  "Procesar los tres conjuntos en la misma carpeta física",
                  "El uso de identificadores únicos (hashes) y partición aleatoria estricta",
                  "Evaluarlos manualmente mediante supervisión visual"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué prueba de significancia estadística no paramétrica se menciona para comparar evaluaciones de modelos cuando los datos son dependientes?",
              "options": [
                  "Test de Chi-Cuadrado",
                  "Análisis de Varianzas (ANOVA)",
                  "Prueba de los rangos con signo de Wilcoxon",
                  "Distribución Normal T-Student Independiente"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cómo define la Guía el concepto que mide cuantitativamente la relación entre la finalidad prevista del sistema de IA y su desempeño real?",
              "options": [
                  "Gobernanza de Datos",
                  "Precisión",
                  "Ciberseguridad",
                  "Solidez (Robustness)"
              ],
              "correctAnswer": 1
          },
          {
              "question": "En la evaluación de modelos de clasificación binaria, ¿qué herramienta visual tabular desglosa los verdaderos/falsos positivos y negativos?",
              "options": [
                  "Histograma de distribución de sesgos",
                  "Árbol de Decisión Gráfico",
                  "Matriz de Confusión",
                  "Diagrama de Pareto"
              ],
              "correctAnswer": 2
          },
          {
              "question": "De acuerdo con los requisitos del Anexo IV, ¿qué información fundamental debe declararse sobre la precisión operativa del modelo?",
              "options": [
                  "Solo la precisión lograda durante la fase inicial de prototipo",
                  "El nivel general de precisión, desglosado además para colectivos o grupos de personas específicos",
                  "El código fuente completo del cálculo matemático",
                  "La lista de identificadores personales usados en el cálculo"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué métrica es específicamente adecuada para evaluar la precisión en sistemas de ordenación (ranking), penalizando posiciones bajas?",
              "options": [
                  "Frechet Inception Distance (FID)",
                  "Mean Absolute Percentage Error (MAPE)",
                  "Discounted Cumulative Gain (DCG)",
                  "Inception Score (IS)"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Por qué es importante documentar y vigilar los sesgos o imparcialidad al hablar de precisión global?",
              "options": [
                  "Para aumentar la velocidad de inferencia de la máquina",
                  "Para reducir el costo de procesamiento en la nube",
                  "Porque una métrica global alta puede ocultar impactos discriminatorios o baja precisión sobre minorías",
                  "Porque el Reglamento prohíbe el uso de métricas exactas en la Unión Europea"
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/09-guia-de-precision.pdf",
      "glossary": [
          {
              "term": "Precisión",
              "definition": "Medida cuantitativa que refleja el grado en que el desempeño y las salidas de un sistema de IA se ajustan a su finalidad prevista a lo largo de su ciclo de vida."
          },
          {
              "term": "Sobreaprendizaje (Overfitting)",
              "definition": "Fenómeno del aprendizaje automático que ocurre cuando un modelo se ajusta en exceso al conjunto de datos de entrenamiento, perdiendo su capacidad para generalizar correctamente sobre datos nuevos o no vistos."
          },
          {
              "term": "Baseline model (Modelo base)",
              "definition": "Modelo computacional sencillo y de baja complejidad que sirve como referencia inicial estandarizada para comparar y evaluar la mejora de precisión aportada por el sistema de IA más complejo."
          },
          {
              "term": "Matriz de Confusión",
              "definition": "Tabla utilizada en tareas de clasificación que visualiza el desempeño del modelo comparando las predicciones realizadas contra los valores reales, desglosando verdaderos y falsos positivos/negativos."
          },
          {
              "term": "Tarjeta del Modelo (Model Card)",
              "definition": "Documentación técnica resumida y estandarizada de un sistema de IA que detalla sus características operativas, las métricas de precisión elegidas, umbrales, incertidumbres y recomendaciones éticas de uso."
          },
          {
              "term": "Función objetivo",
              "definition": "Ecuación matemática que el algoritmo de entrenamiento de IA busca minimizar (o maximizar) durante la fase de aprendizaje para ajustar de forma óptima los parámetros y lograr la precisión deseada."
          },
          {
              "term": "Benchmark",
              "definition": "Prueba de evaluación de rendimiento estandarizada en la que se utiliza un conjunto de datos público reconocido para medir y comparar la precisión de un modelo frente al estado del arte."
          },
          {
              "term": "Significancia Estadística",
              "definition": "Evaluación analítica (mediante pruebas como Wilcoxon, ANOVA o T-Test) orientada a justificar que las diferencias de precisión obtenidas entre modelos no se deben al azar, sino a mejoras sistémicas reales."
          },
          {
              "term": "Curva ROC",
              "definition": "Representación gráfica utilizada en evaluación de precisión para modelos de clasificación binaria, que ilustra el rendimiento del modelo en todos los umbrales posibles (tasa de verdaderos positivos vs. falsos positivos)."
          },
          {
              "term": "Discounted Cumulative Gain (DCG)",
              "definition": "Métrica de precisión utilizada comúnmente en tareas de recomendación y ranking; valora la relevancia de las salidas y penaliza logarítmicamente aquellos aciertos que aparecen en rangos inferiores de la lista."
          }
      ]
  },
  {
      "id": "10",
      "title": "Guía solidez",
      "summary": "Desarrolla los requisitos de solidez (robustez) técnica del artículo 15. Explica cómo asegurar que el sistema sea resistente a errores, fallos o inconsistencias en el entorno de operación. Incluye estrategias como la redundancia técnica, planes de respaldo (fail-safe), pruebas de estrés y validación en entornos que repliquen las condiciones reales. El objetivo es minimizar riesgos y garantizar que el funcionamiento no se degrade de forma peligrosa ante situaciones imprevistas.",
      "contentIndex": [
          {
              "title": "Introducción a la solidez en sistemas de IA de alto riesgo",
              "content": "La solidez en los sistemas de IA de alto riesgo es un requisito fundamental establecido en el Artículo 15. Este artículo exige que se diseñen y desarrollen para alcanzar un nivel adecuado de solidez y funcionen de manera uniforme durante todo su ciclo de vida. La solidez implica estar preparado para **minimizar y prevenir comportamientos perjudiciales**, detectando cuándo se sale del dominio establecido.\n\n### 🛡️ Cinco Propiedades Deseables\n\nLa Guía 10 detalla las propiedades que todo sistema debe contemplar en su diseño:\n\n1.  **Fiabilidad:** Consistencia entre valores estimados inicialmente y estimaciones subsecuentes.\n2.  **Estabilidad:** Insensibilidad a cambios irrelevantes en las características de entrada.\n3.  **Sensibilidad:** Reacción adecuada a cambios relevantes en los datos de entrada.\n4.  **Relevancia:** Las respuestas deben pertenecer de manera efectiva al dominio del problema.\n5.  **Alcanzabilidad:** Define y delimita las fronteras de operación segura.\n\n### 🔍 Perspectivas de Solidez\n\nLa solidez puede evaluarse desde dos perspectivas esenciales para mitigar riesgos sobre la salud y seguridad:\n\n*   **Solidez Local:** Verifica el comportamiento frente a *pequeñas perturbaciones intencionadas* (ej. ruido en una imagen o alteraciones de palabras) cerca de una entrada específica.\n*   **Solidez Global:** Ofrece garantías sobre el comportamiento en *todos los rangos* de entrada del dominio esperado."
          },
          {
              "title": "Evaluación de la solidez y ciclo de vida del sistema",
              "content": "La evaluación no es un evento aislado, sino un proceso **continuo e iterativo** (concepción, diseño, implementación, verificación, prueba, puesta en marcha, vigilancia y retirada). En el diseño se deben establecer los requisitos técnicos frente a variables predefinidas, utilizando, por ejemplo, técnicas de aprendizaje por conjuntos (*ensemble learning*) para aumentar la resistencia a ataques.\n\n### ✔️ Verificación vs. Validación (V&V)\n\nUna distinción crítica abordada en la Guía 10:\n\n*   **Verificación:** Comprobar matemática o analíticamente que el sistema cumple estrictamente las especificaciones de diseño *sin ejecutarlo con datos reales*, para encontrar errores tempranos.\n*   **Validación:** Requiere ejecutar obligatoriamente el sistema con *datos reales* (de prueba y validación) para aportar evidencia objetiva sobre su finalidad.\n\n### ⚡ Rendimiento y Eficiencia Computacional\n\nPara medir la solidez efectivamente se seleccionan métricas como el Área Bajo la Curva (AUC) o matrices de confusión. \n\nEl rendimiento y la eficiencia computacional (FLOPS, latencia, RAM) son inseparables de la solidez. Un sistema que excede el hardware o presenta alta latencia puede causar **fallos críticos de seguridad**. Para subsanarlo, se utilizan técnicas de optimización (destilación, aprendizaje continuo, poda de redes)."
          },
          {
              "title": "Resistencia a errores, redundancia y protocolos de fallo seguro",
              "content": "El Artículo 15.4 subraya categóricamente que la solidez técnica debe garantizar la resistencia frente a errores, fallos o incoherencias del entorno operativo, originados por problemas internos o interacción directa con personas y otros sistemas.\n\n### 🚨 Paradigma de «Fallo Seguro» (*Fail-safe*)\n\nSe exige diseñar los sistemas para que actúen ante una eventual degradación:\n\n*   Si detecta una alta incertidumbre o detecta que opera fuera de los parámetros garantizados.\n*   Debe contar con **mecanismos preprogramados para interrumpir su funcionamiento** de forma segura.\n*   Esto evita previsiones o decisiones erróneas que perjudiquen a usuarios finales.\n\n### 🔁 Redundancia Técnica y Respaldo\n\nResulta indispensable implementar **copias de seguridad automáticas** de datos, modelos entrenados y registros de ejecución (*logs*) para restaurar rápidamente el sistema.\n\nUna estrategia de máximo impacto es la integración de **sistemas paralelos no basados en IA** (ej. sistemas de reglas heurísticas o árboles deterministas). Estos actúan como red de seguridad y pueden tomar el control de forma ininterrumpida si el modelo de machine learning falla o se degrada.\n\nEl responsable del despliegue debe recibir capacitación para interpretar alertas en el panel de control y ejecutar los planes manuales."
          },
          {
              "title": "Solidez en sistemas de aprendizaje continuo e información transparente",
              "content": "Los sistemas que continúan aprendiendo tras ser comercializados presentan el desafío de que su comportamiento y precisión pueden degradarse dinámicamente al incorporar nueva información. Se deben aplicar **medidas técnicas de mitigación** para garantizar que este aprendizaje no provoque desviaciones inaceptables.\n\n### 🧠 Olvido Catastrófico (*Catastrophic Forgetting*)\n\nEs un fenómeno crítico donde el modelo pierde irreversiblemente la capacidad de realizar de forma correcta las tareas para las que fue entrenado inicialmente al absorber los nuevos datos. Para mitigarlo se aplican medidas avanzadas:\n\n*   Consolidación de Pesos Elásticos (EWC).\n*   Uso de arquitecturas *Piggyback*.\n*   Estrategias de *Experience Replay* y memoria (reentrenar reteniendo patrones pasados).\n\n### 📉 Derivas (Drift)\n\nEn producción se puede sufrir **Deriva de datos** (*Data Drift*) y **Deriva de conceptos** (*Concept Drift*):\n\n*   Ocurre cuando la distribución de los datos del mundo real cambia, o cuando evoluciona la relación entradas-predicción.\n*   Se recomiendan técnicas de *Domain Adaptation* (adaptación de dominio) y transferencia de conocimiento.\n\n### 📇 Fomento del Control\n\nLos proveedores deben documentar rigurosamente el nivel de solidez mediante las **Tarjetas de Modelo (Model Cards)** y las Tarjetas de Bases de Datos. Estas deben detallar parámetros clave, límites operativos y métricas de incertidumbre, facilitando auditorías futuras."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué exige el Artículo 15.1 del Reglamento de IA en relación con la solidez?",
              "back": "Exige que los sistemas de IA de alto riesgo mantengan un nivel adecuado y consistente de precisión, solidez y ciberseguridad durante todo su ciclo de vida."
          },
          {
              "front": "¿Cuál es la diferencia entre Solidez Local y Solidez Global?",
              "back": "La solidez local verifica el sistema frente a pequeñas perturbaciones cerca de una entrada específica. La solidez global garantiza el comportamiento seguro del modelo en todos los rangos de entrada del dominio esperado."
          },
          {
              "front": "¿A qué se refiere la propiedad de 'Estabilidad' en el contexto de la solidez?",
              "back": "Se refiere a la insensibilidad del sistema de IA frente a cambios irrelevantes en las características de entrada."
          },
          {
              "front": "¿Qué es el paradigma de 'Fallo Seguro' (Fail-safe) en los sistemas de IA?",
              "back": "Es la capacidad del sistema para detectar cuándo no puede funcionar de manera sólida y, en respuesta, detener su operación de forma segura o transferir el control a un sistema redundante."
          },
          {
              "front": "¿Cuál es la diferencia principal entre Verificación y Validación (V&V)?",
              "back": "La Verificación comprueba que el diseño cumple especificaciones sin usar datos reales. La Validación ejecuta el sistema con datos reales de prueba para demostrar que cumple su finalidad prevista."
          },
          {
              "front": "¿Qué es el 'Olvido Catastrófico' en modelos de aprendizaje continuo?",
              "back": "Es la degradación de un modelo de IA en la que pierde la capacidad de realizar tareas para las que fue entrenado inicialmente al aprender de información nueva."
          },
          {
              "front": "¿Qué técnica algorítmica ayuda a mitigar el Olvido Catastrófico?",
              "back": "Técnicas como Elastic Weight Consolidation (EWC), Piggyback y Experience Replay (repetición de experiencias pasadas)."
          },
          {
              "front": "¿Qué se entiende por 'Deriva de Datos' (Data Drift)?",
              "back": "Ocurre cuando la distribución estadística de los datos reales de entrada que recibe el modelo en producción cambia respecto a los datos con los que fue entrenado."
          },
          {
              "front": "¿Qué es una Tarjeta de Modelo (Model Card)?",
              "back": "Un documento estandarizado que detalla el rendimiento, métricas de precisión y solidez, limitaciones operativas y umbrales de decisión de un sistema de IA."
          },
          {
              "front": "¿Qué implica la 'Adaptación de Dominio' (Domain Adaptation)?",
              "back": "Es una técnica para mitigar la desviación de los datos y del concepto, ajustando un modelo entrenado en un dominio de origen para que funcione de manera sólida en un nuevo dominio de destino."
          },
          {
              "front": "¿Por qué es importante incluir sistemas paralelos no basados en IA como plan de respaldo?",
              "back": "Porque proporcionan redundancia técnica, permitiendo que un sistema heurístico o basado en reglas tome el control si el modelo de machine learning principal falla o sufre ataques."
          },
          {
              "front": "¿Qué propiedad de la solidez se asegura de que las respuestas del sistema de IA pertenezcan a las opciones del dominio del problema?",
              "back": "La propiedad de 'Relevancia'."
          }
      ],
      "quiz": [
          {
              "question": "De acuerdo con el Artículo 15.4, ¿cómo puede lograrse la solidez técnica frente a fallos y errores del entorno?",
              "options": [
                  "Aumentando indefinidamente el número de parámetros del modelo oculto.",
                  "Mediante la implementación de soluciones de redundancia técnica y planes de respaldo.",
                  "Reentrenando el sistema de inteligencia artificial cada 24 horas sin supervisión humana.",
                  "Delegando la responsabilidad legal de las pruebas únicamente en el usuario final."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué propiedad de la solidez de un sistema de IA define las fronteras y límites dentro de los cuales el sistema puede operar de forma esperada?",
              "options": [
                  "Alcanzabilidad",
                  "Sensibilidad",
                  "Estabilidad",
                  "Fiabilidad"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué ocurre en un sistema de aprendizaje continuo cuando experimenta 'Olvido catastrófico'?",
              "options": [
                  "El modelo memoriza contraseñas de los usuarios y las filtra externamente.",
                  "El modelo procesa los datos más lentamente debido al consumo excesivo de memoria RAM.",
                  "El modelo pierde la capacidad de realizar tareas pasadas al ser entrenado con nueva información.",
                  "El modelo se niega a aprender nuevos datos para proteger su arquitectura interna."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es la principal diferencia entre la validación y la verificación en la evaluación de la solidez de un sistema IA?",
              "options": [
                  "La validación siempre usa métodos formales matemáticos, mientras que la verificación requiere despliegue en la nube.",
                  "La verificación se hace con datos reales, mientras que la validación usa modelos pre-entrenados sin datos.",
                  "La verificación comprueba especificaciones sin datos reales; la validación confirma el funcionamiento con conjuntos de datos reales.",
                  "No existe ninguna diferencia; el Reglamento de IA utiliza ambos términos de forma intercambiable."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué técnica técnica es idónea para abordar situaciones en las que el sistema de IA presenta limitaciones de memoria en el dispositivo final (ej. Edge computing)?",
              "options": [
                  "El aumento indiscriminado de la dimensionalidad de entrada.",
                  "La destilación de modelos y las técnicas de poda de redes (pruning).",
                  "El entrenamiento exclusivo mediante redes neuronales no supervisadas masivas.",
                  "El almacenamiento de los datos en servidores públicos sin anonimizar."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de las siguientes es una estrategia de mitigación recomendada contra el 'Data Drift' o desplazamiento de la distribución de los datos?",
              "options": [
                  "Desactivar las alertas en tiempo real para evitar falsos positivos.",
                  "Uso de técnicas de adaptación del dominio (domain adaptation).",
                  "Obligar al usuario a insertar los datos exclusivamente en formato binario puro.",
                  "Eliminar los protocolos de redundancia del sistema central."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué debe documentarse en relación con la solidez según la sección sobre Tarjetas de Modelo (Model Cards)?",
              "options": [
                  "Las contraseñas de administrador y claves de encriptación del servidor del proveedor.",
                  "El código fuente completo de la interfaz gráfica desarrollada por el cliente final.",
                  "El tamaño del modelo, umbrales de decisión, enfoques hacia la incertidumbre e interpretabilidad.",
                  "Los datos de contacto personales de todos los usuarios que han evaluado el modelo."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué significa diseñar un sistema bajo el principio de 'fallo seguro' (fail-safe)?",
              "options": [
                  "El sistema no tiene errores de código por lo que es inmune a ataques adversarios.",
                  "El sistema no necesita copias de seguridad de datos porque es redundante.",
                  "El sistema se reinicia solo borrando toda su memoria ante cualquier entrada nueva.",
                  "El sistema puede detectar incoherencias o falta de solidez y detenerse o delegar funciones de forma segura."
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿A qué se refiere la propiedad de 'Sensibilidad' en el contexto de la medición de la solidez?",
              "options": [
                  "A la resistencia del sistema ante cualquier tipo de cambio en las entradas.",
                  "A que el sistema reaccione correctamente y de forma predecible a cambios relevantes en la entrada.",
                  "A la capacidad del modelo para predecir exclusivamente las emociones humanas del usuario.",
                  "A la protección de los datos personales sensibles en la base de datos."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué técnica es un ejemplo de 'Experience Replay' utilizada para mantener la solidez en sistemas que continúan aprendiendo?",
              "options": [
                  "Almacenar y reutilizar ejemplos representativos del pasado para reentrenar el modelo junto con los nuevos datos.",
                  "Grabar la pantalla del usuario para auditar visualmente los fallos del sistema.",
                  "Eliminar todos los pesos de la red neuronal y entrenarla desde cero semanalmente.",
                  "Exportar el modelo antiguo y mantenerlo guardado en un disco duro desconectado de internet."
              ],
              "correctAnswer": 0
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/10-guia-solidez.pdf",
      "glossary": [
          {
              "term": "Solidez (Robustness)",
              "definition": "Capacidad de un sistema de IA para mantener un rendimiento confiable, preciso y seguro ante errores, fallos operativos o alteraciones de su entorno, minimizando riesgos para los derechos y la salud de las personas."
          },
          {
              "term": "Fiabilidad (Reliability)",
              "definition": "Propiedad del sistema que describe la consistencia y coherencia general entre los valores estimados inicialmente por el modelo y las estimaciones subsecuentes a lo largo del tiempo."
          },
          {
              "term": "Estabilidad",
              "definition": "Capacidad del sistema de IA para mantenerse invariable o insensible frente a alteraciones irrelevantes y ruido en las características de entrada."
          },
          {
              "term": "Fallo Seguro (Fail-safe)",
              "definition": "Mecanismo de diseño que permite al sistema interrumpir su funcionamiento o transferir el control a un método de respaldo seguro cuando opera fuera de los márgenes de solidez y certidumbre establecidos."
          },
          {
              "term": "Olvido Catastrófico (Catastrophic Forgetting)",
              "definition": "Degradación crítica en un modelo de aprendizaje continuo donde pierde o corrompe de manera abrupta la capacidad para realizar las tareas en las que fue entrenado previamente al incorporar nueva información."
          },
          {
              "term": "Data Drift (Deriva de Datos)",
              "definition": "Situación que ocurre en sistemas en producción cuando la distribución estadística de los datos del mundo real experimenta cambios significativos en comparación con los datos originales de entrenamiento."
          },
          {
              "term": "Concept Drift (Deriva de Concepto)",
              "definition": "Desviación del modelo producida cuando la relación subyacente entre las variables de entrada y el objetivo que se intenta predecir cambia con el paso del tiempo."
          },
          {
              "term": "Domain Adaptation (Adaptación de Dominio)",
              "definition": "Estrategia técnica para mitigar la deriva de datos mediante el ajuste de un modelo previamente entrenado en un entorno específico, para que mantenga su nivel de precisión y solidez en un nuevo entorno operativo."
          },
          {
              "term": "Tarjeta del Modelo (Model Card)",
              "definition": "Ficha documental estandarizada que recopila métricas operativas de precisión, solidez, limitaciones conocidas, detalles de entrenamiento y análisis de variabilidad e incertidumbre de un modelo de IA."
          },
          {
              "term": "Verificación y Validación (V&V)",
              "definition": "Fases de control de calidad conjuntas. La verificación comprueba el cumplimiento de las reglas formales de diseño del sistema, y la validación confirma con datos reales objetivos que el sistema cumple verdaderamente su finalidad prevista."
          }
      ]
  },
  {
      "id": "11",
      "title": "Guía ciberseguridad",
      "summary": "Guía para cumplir los requisitos de ciberseguridad del artículo 15, protegiendo al sistema de IA contra ataques específicos (adversarios). Detalla vulnerabilidades como el envenenamiento de datos (data poisoning), la evasión del modelo o el robo del modelo. Propone medidas como el control de accesos, auditorías de seguridad, equipos de prueba (Red Teams) y la integración de la seguridad de la IA dentro de la estrategia general de ciberseguridad de la organización.",
      "contentIndex": [
          {
              "title": "Introducción a la ciberseguridad en sistemas de IA",
              "content": "La Guía 11 está destinada a desarrollar el cumplimiento de las medidas de ciberseguridad para los sistemas de IA de alto riesgo, asegurando que se integren en un **esquema de seguridad de la información más amplio**. La ciberseguridad en IA no es una opción, sino una obligación crítica.\n\n### 🛡️ Superficie de Ataque Expandida\n\nA diferencia de la ciberseguridad tradicional en tecnologías de la información (IT), la IA presenta vulnerabilidades únicas. Las principales amenazas incluyen:\n\n*   **Envenenamiento de datos** (*data poisoning*).\n*   **Ataques adversarios** que buscan engañar al modelo durante la inferencia.\n*   Explotación de defectos intrínsecos del propio modelo.\n*   Ataques a la privacidad y confidencialidad (extracción o inversión de modelos).\n\nEs fundamental identificar activos y actores involucrados en el ciclo de vida del sistema, estableciendo relaciones e implementando controles de seguridad revisados periódicamente."
          },
          {
              "title": "Requisitos del reglamento de inteligencia artificial (artículo 15)",
              "content": "El marco normativo que regula la ciberseguridad de la IA de alto riesgo se articula en el Artículo 15 del RIA.\n\n### 📜 Disposiciones del Artículo 15\n\n*   **Apartado 1:** Los sistemas deben diseñarse y desarrollarse para alcanzar un *nivel adecuado de ciberseguridad* de manera uniforme y consistente durante todo su ciclo de vida.\n*   **Apartado 5:** Exige que los sistemas sean **resistentes a los intentos de terceros no autorizados** de alterar su uso, resultados o funcionamiento.\n\n### 🔒 Medidas de Prevención y Combate\n\nExiste la obligación legal de implementar soluciones técnicas para prevenir, detectar, combatir, resolver y controlar vulnerabilidades concretas. El Reglamento menciona explícitamente:\n*   Envenenamiento de datos y modelos.\n*   Introducción de información diseñada para forzar errores (ejemplos adversarios).\n*   Ataques a la confidencialidad.\n\nEl cumplimiento exige una **aproximación integral** desde el diseño hasta la retirada, asegurando la integridad, confidencialidad y disponibilidad."
          },
          {
              "title": "Gestión de vulnerabilidades y controles en los datos (envenenamiento)",
              "content": "El envenenamiento de datos (*data poisoning*) busca manipular el comportamiento alterando los conjuntos utilizados en entrenamiento, validación o prueba. Esta amenaza suele originarse en las fases tempranas y su impacto es muy alto.\n\n### ☢️ Mitigación del Envenenamiento\n\nLa Guía 11 exige a los proveedores implementar controles de seguridad estrictos:\n\n*   **Control de versiones:** Herramientas (como DVC) para mantener una traza inmutable de los cambios de datos y de los actores que los realizan.\n*   **Higienización de datos:** Técnicas de limpieza o sanitización para tratar anomalías y valores atípicos (*outliers*).\n*   **Monitorización continua:** Analizar la distribución de los datos de entrada para detectar firmas de envenenamiento.\n*   **Permisos restrictivos:** Limitar de forma estricta los permisos de modificación en repositorios y utilizar arquitecturas con resiliencia matemática frente a perturbaciones."
          },
          {
              "title": "Protección frente a ataques adversarios y defectos del modelo",
              "content": "Durante la producción, los sistemas están muy expuestos a ataques adversarios de extracción, inversión y evasión.\n\n### 🎭 Evasión y Defensa\n\nLos ataques de evasión introducen perturbaciones (a menudo imperceptibles al humano) para **engañar al modelo**. Para combatirlos se usa:\n\n*   Detección de datos fuera de dominio.\n*   **Entrenamiento adversario** (*adversarial training*), exponiendo al modelo a ataques durante el aprendizaje para robustecerlo.\n\n### 🕵️‍♂️ Extracción e Inversión\n\nBuscan deducir información sensible de entrenamiento o replicar la arquitectura basándose en consultas. Sus mitigaciones incluyen:\n\n*   Limitación estricta de peticiones por usuario (*rate limiting*).\n*   Privacidad diferencial (*differential privacy*).\n*   Reducción de verbosidad en errores.\n\n### 🐛 Defectos Intrínsecos del Software\n\nLos modelos pueden tener defectos subyacentes en sus propios marcos (TensorFlow, PyTorch). Para mitigarlos se requiere análisis SAST (estático) y DAST (dinámico), comprobación de vulnerabilidades comunes en librerías y actualización constante para evitar obsolescencia."
          },
          {
              "title": "Gobernanza, políticas de acceso y formación en ciberseguridad",
              "content": "La primera línea de defensa se basa en **controlar adecuadamente el acceso** a todos los activos en todo momento.\n\n### 🔑 Control de Accesos y Privilegios\n\n*   Implementar Control de Acceso Basado en Roles (RBAC).\n*   Aplicar rigurosamente el **principio de mínimo privilegio**. Es decir, científicos de datos o administradores deben tener acceso exclusiva y estrictamente a los recursos de su función.\n\n### 📚 Capacitación y Formación Continua\n\nComplementariamente, organizaciones proveedoras o usuarias deben establecer planes de formación en ciberseguridad IA. El personal debe comprender el envenenamiento, ataques adversarios y explotación del modelo.\n\n### 📝 Documentación Exhaustiva\n\nEstas políticas y controles deben quedar recogidas en la **Documentación Técnica y Manual de Instrucciones**. Dicha documentación detallará las vulnerabilidades, medidas de control y cómo el responsable debe configurar de forma segura todas las herramientas de mitigación proporcionadas."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es el envenenamiento de datos (Data Poisoning) en IA?",
              "back": "Es una amenaza que busca manipular la integridad del sistema de IA alterando o introduciendo datos maliciosos durante la fase de entrenamiento, lo que provoca que el modelo aprenda comportamientos incorrectos o sesgados."
          },
          {
              "front": "¿Qué es un ataque de evasión en modelos de IA?",
              "back": "Es un ataque en el que se manipulan los datos de entrada en la fase de inferencia (producción) insertando perturbaciones casi imperceptibles para forzar al modelo a cometer un error de clasificación o predicción."
          },
          {
              "front": "¿En qué consiste un ataque de inversión de modelo (Model Inversion)?",
              "back": "Es un ataque donde un adversario utiliza la información de salida del modelo para inferir o reconstruir los datos sensibles que fueron utilizados originalmente para entrenar el sistema."
          },
          {
              "front": "¿Qué exige explícitamente el Artículo 15.5 del Reglamento de IA en materia de ciberseguridad?",
              "back": "Exige que los sistemas de IA de alto riesgo sean resistentes a intentos no autorizados de alterar su uso y prevengan ataques como el envenenamiento de datos, ejemplos adversarios y ataques a la confidencialidad."
          },
          {
              "front": "¿Qué es el principio de mínimo privilegio (Least Privilege) en las políticas de acceso?",
              "back": "Es una política de seguridad que dicta que a los usuarios (ej. científicos de datos, administradores) solo se les deben otorgar los permisos estrictamente necesarios y durante el tiempo indispensable para realizar su tarea."
          },
          {
              "front": "¿Qué significan las siglas SAST y DAST en el contexto del desarrollo seguro de IA?",
              "back": "SAST significa Static Application Security Testing (análisis de código sin ejecutarlo) y DAST significa Dynamic Application Security Testing (análisis del sistema en ejecución); ambos se usan para detectar vulnerabilidades."
          },
          {
              "front": "¿Qué es la técnica de Destilación Defensiva (Defensive Distillation)?",
              "back": "Es una técnica de entrenamiento adversarial donde un segundo modelo se entrena usando las probabilidades 'suaves' del primer modelo, haciéndolo más robusto y menos susceptible a ataques de evasión."
          },
          {
              "front": "¿Cuál es el objetivo principal de los ataques de extracción de modelos?",
              "back": "Su objetivo es 'clonar' o replicar la funcionalidad y arquitectura de un modelo de IA de caja negra interrogándolo masivamente y analizando sus respuestas."
          },
          {
              "front": "¿Qué rol juega el DVC (Data Version Control) en la ciberseguridad de la IA?",
              "back": "Permite mantener un control estricto y versionado de las fuentes de datos utilizadas, creando una traza de los cambios y los actores que los realizan para prevenir el envenenamiento silencioso de datos."
          },
          {
              "front": "¿A qué fases del ciclo de vida de la IA aplica la ciberseguridad según la Guía 11?",
              "back": "Aplica de manera uniforme a todo el ciclo de vida: concepción, diseño, implementación, verificación y prueba, puesta en marcha, vigilancia poscomercialización y retirada."
          },
          {
              "front": "¿Qué es la privacidad diferencial (Differential Privacy) en la IA?",
              "back": "Es una técnica matemática que añade ruido controlado a los datos o al modelo para minimizar el riesgo de ataques de inferencia de pertenencia y proteger la privacidad de los individuos del conjunto de entrenamiento."
          },
          {
              "front": "¿Qué riesgo crítico de ciberseguridad supone utilizar un framework de IA obsoleto?",
              "back": "El riesgo de compromiso del framework, ya que versiones antiguas de herramientas (como TensorFlow o PyTorch) pueden contener vulnerabilidades públicas (CVEs) que los atacantes pueden explotar para atacar el modelo."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué artículo del Reglamento de Inteligencia Artificial aborda específicamente los requisitos de Precisión, Solidez y Ciberseguridad?",
              "options": [
                  "Artículo 9",
                  "Artículo 11",
                  "Artículo 15",
                  "Artículo 72"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cómo se denomina el ataque que busca manipular el conjunto de datos de entrenamiento para que la IA aprenda reglas incorrectas?",
              "options": [
                  "Ataque de Extracción",
                  "Envenenamiento de datos (Data Poisoning)",
                  "Ataque de Canal Lateral",
                  "Evasión de modelo"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué tipo de ataque se caracteriza por introducir perturbaciones diseñadas en los datos de entrada durante la fase de inferencia para engañar al modelo?",
              "options": [
                  "Ataques de Inversión",
                  "Ataques de Evasión (Ejemplos Adversarios)",
                  "Inferencia de Pertenencia",
                  "Jailbreak"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál es un control técnico recomendado para mitigar los ataques de inversión o extracción de modelos a través de una API?",
              "options": [
                  "Aumentar el detalle de los mensajes de error mostrados al usuario.",
                  "Publicar los pesos del modelo en repositorios abiertos.",
                  "Limitar el número de consultas o peticiones permitidas por minuto (Rate Limiting).",
                  "Desactivar el cifrado de datos en reposo."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué técnica de seguridad analiza el código fuente del sistema de IA en busca de vulnerabilidades sin llegar a ejecutar el programa?",
              "options": [
                  "DAST (Dynamic Application Security Testing)",
                  "DVC (Data Version Control)",
                  "SAST (Static Application Security Testing)",
                  "RBAC (Role-Based Access Control)"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué modelo de control de acceso se recomienda encarecidamente implementar en el entorno de desarrollo y operación de la IA?",
              "options": [
                  "Acceso anónimo universal",
                  "RBAC (Control de Acceso Basado en Roles) con principio de mínimo privilegio",
                  "Concesión de privilegios de administrador a todos los científicos de datos",
                  "Mecanismos basados exclusivamente en contraseñas compartidas"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué significan las siglas CVE en el contexto del escaneo de vulnerabilidades de librerías de IA?",
              "options": [
                  "Common Vulnerabilities and Exposures",
                  "Cyber Verification Environment",
                  "Critical Vector Exploitation",
                  "Code Versioning Engine"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué ataque busca averiguar si el dato de un individuo concreto fue utilizado dentro del conjunto de datos de entrenamiento del modelo?",
              "options": [
                  "Ataque de Inferencia de Pertenencia (Membership Inference)",
                  "Envenenamiento de modelos",
                  "Ataque de fuerza bruta",
                  "Ataque de denegación de servicio (DDoS)"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué medida es efectiva para prevenir ataques basados en defectos intrínsecos de componentes de software de terceros?",
              "options": [
                  "Ignorar las actualizaciones para mantener la estabilidad del código.",
                  "Uso de herramientas como 'Dependency-check' para monitorizar componentes obsoletos y vulnerables.",
                  "Desactivar el registro de logs del sistema.",
                  "Permitir la descarga de librerías desde fuentes no verificadas."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿A quién asigna principalmente el Reglamento de IA la responsabilidad de generar y conservar la Documentación Técnica de Ciberseguridad?",
              "options": [
                  "Al usuario final",
                  "A la autoridad de vigilancia del mercado",
                  "Al responsable del despliegue exclusivamente",
                  "Al proveedor del sistema de IA"
              ],
              "correctAnswer": 3
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/11-guia-ciberseguridad.pdf",
      "glossary": [
          {
              "term": "Ataque Adversario",
              "definition": "Ataque dirigido contra un sistema de inteligencia artificial, modificando las entradas o el entorno, que puede ejecutarse bajo condiciones de Caja Blanca, Caja Gris o Caja Negra dependiendo del conocimiento del atacante sobre el modelo."
          },
          {
              "term": "Envenenamiento de datos (Data Poisoning)",
              "definition": "Ataque que consiste en inyectar datos falsos, maliciosos o ruidosos en los conjuntos de datos de entrenamiento para alterar el aprendizaje del modelo de IA y causar un mal funcionamiento intencionado."
          },
          {
              "term": "Evasión (Ejemplos Adversarios)",
              "definition": "Técnica de ataque durante la fase de inferencia donde se introducen perturbaciones sutiles en los datos de entrada reales para engañar al sistema de IA, haciéndole producir un resultado o clasificación incorrecta."
          },
          {
              "term": "Extracción de modelos",
              "definition": "Ataque en el cual un actor malicioso realiza numerosas consultas a un sistema de IA de caja negra con el fin de replicar o clonar su comportamiento, parámetros y funcionalidad."
          },
          {
              "term": "SAST",
              "definition": "Pruebas Estáticas de Seguridad de Aplicaciones (Static Application Security Testing). Metodología que analiza el código fuente, los binarios o el bytecode de una aplicación en busca de vulnerabilidades de seguridad sin ejecutar el código."
          },
          {
              "term": "DAST",
              "definition": "Pruebas Dinámicas de Seguridad de Aplicaciones (Dynamic Application Security Testing). Proceso de análisis de seguridad en el que se interactúa con una aplicación en tiempo de ejecución para detectar vulnerabilidades, simulando ataques externos."
          },
          {
              "term": "RBAC",
              "definition": "Control de Acceso Basado en Roles (Role Based Access Control). Enfoque de seguridad que restringe el acceso a los sistemas y datos basándose en los roles que los usuarios individuales tienen dentro de la organización."
          },
          {
              "term": "CVE",
              "definition": "Common Vulnerabilities and Exposures. Lista pública y estandarizada de vulnerabilidades y exposiciones de seguridad de la información conocidas en componentes de software y hardware."
          },
          {
              "term": "Destilación defensiva",
              "definition": "Técnica de entrenamiento adversarial que añade flexibilidad al modelo entrenando un segundo modelo con las probabilidades 'blandas' generadas por el primero, haciendo que el sistema final sea menos susceptible a intentos de explotación."
          },
          {
              "term": "Inversión de modelos",
              "definition": "Ataque que abusa del acceso a las inferencias (salidas) de un modelo de IA para deducir o recuperar características sensibles de los datos originales que se utilizaron durante el proceso de entrenamiento."
          }
      ]
  },
  {
      "id": "12",
      "title": "Guía de registros",
      "summary": "Esta guía detalla las obligaciones establecidas en el artículo 12 del Reglamento de IA respecto a la capacidad de los sistemas de alto riesgo para generar registros (logs) automáticos. Explica cómo estos registros garantizan la trazabilidad del funcionamiento del sistema durante su ciclo de vida, permitiendo detectar situaciones de riesgo y facilitar la vigilancia poscomercialización. Se definen los elementos mínimos que deben registrarse, como la fecha y hora de uso, bases de datos de referencia y datos de entrada, así como las responsabilidades de conservación compartidas entre proveedores y responsables del despliegue.",
      "contentIndex": [
          {
              "title": "Introducción a la conservación de registros en sistemas de IA",
              "content": "La gestión de registros (*logging*) es un pilar fundamental para garantizar la trazabilidad, la transparencia y la rendición de cuentas de los sistemas HRAIS. Un registro es un archivo que almacena información crítica sobre el comportamiento y decisiones del sistema (entrenamiento, validación y producción). El sistema de gestión es el conjunto estructurado de procesos para **recopilar, almacenar, analizar, proteger y gestionar** estos archivos.\n\n### 🛡️ Principios Fundamentales\n\n1.  **Autenticidad:** Asegurar que un registro es lo que afirma ser y ha sido generado por el proceso autorizado.\n2.  **Fiabilidad:** El contenido debe ser una representación exacta y completa de las operaciones documentadas.\n3.  **Integridad:** Los registros deben estar protegidos de forma robusta contra modificación o eliminación no autorizada.\n4.  **Usabilidad:** Deben ser fácilmente localizables, recuperables y comprensibles para auditorías.\n\nLa gestión de registros aporta innumerables beneficios, permitiendo la **detección temprana de errores** y anomalías, mejorando la supervisión humana y probando de forma objetiva que el sistema opera de acuerdo a su diseño dentro de la legalidad."
          },
          {
              "title": "Marco regulatorio de los registros (artículos 12 y 19)",
              "content": "El marco normativo se asienta en los Artículos 12 y 19 del Reglamento de Inteligencia Artificial.\n\n### ⚖️ Artículo 12: Obligación Técnica\n\n*   Establece la obligación de diseñar y desarrollar sistemas con **capacidades técnicas** que permitan la generación automática de archivos de registro (*logs*) de eventos y las interacciones producidas en todo el ciclo de vida.\n*   Permite detectar riesgos a escala nacional o europea y facilitar la vigilancia.\n\n### 👁️ Sistemas de Identificación Biométrica (Anexo III)\n\nEl Artículo 12 establece exigencias aún más estrictas para estos sistemas. Las capacidades de registro deben incluir:\n*   Registro temporal exacto (fecha y hora).\n*   Base de datos de referencia concreta.\n*   Datos de entrada específicos que arrojan coincidencia (*match*).\n*   Identificación clara de las personas implicadas en la validación.\n\n### 💾 Artículo 19: Conservación\n\nSeñala que los proveedores y responsables del despliegue (en ciertos casos) deben conservar los archivos automáticamente generados por los sistemas bajo su control operativo. El período de conservación mínimo será de **seis meses**, salvo normativas sectoriales (como en entidades financieras) que dicten algo diferente."
          },
          {
              "title": "Evaluación, captura, almacenamiento y control de acceso",
              "content": "El adecuado sistema de gestión de registros comienza en el diseño.\n\n### 📝 Fase de Evaluación y Diseño\n\n*   Se analiza de forma pormenorizada qué información (*logs*, horas, errores) debe ser recabada para garantizar la seguridad legal y preoperativa.\n*   Se crean registros para nutrir planes de **vigilancia y alertas humanas** (como predecir sobre predicciones de muy baja confianza, etc.).\n\n### 📥 Captura y Almacenamiento\n\nDefinido lo que se registra (identificador, hora, error), es fundamental asegurar una **captura ininterrumpida** sin afectar al rendimiento. \n*   La arquitectura para el almacenamiento (bases en la nube u *on-premise*) debe disponer de **copias de seguridad, redundancia y cifrado en reposo**.\n\n### 🔒 Control de Acceso\n\nComo componente esencial, se debe implementar una estricta Gestión de Accesos (IAM/RBAC), aplicando el **Principio de Mínimo Privilegio**. El historial de auditoría del sistema **no puede ser alterado**; así se protege su autenticidad como evidencia legal en caso de una auditoría forzada."
          },
          {
              "title": "Retención, disposición, documentación y mejora continua",
              "content": "La fase final del ciclo de vida comprende la retención, disposición, transferencia o eliminación, y la documentación asociada.\n\n### ⏳ Retención y Disposición (Destrucción)\n\nEl periodo legal especificado suele ser de **6 meses** (general). Si el registro contuviera información o datos de categoría especial o personales, se aplicará el RGPD de forma combinada bajo reglas de retención mínima, planificando una destrucción segura o anonimización superado su fin.\n\n### 🔄 Análisis y Mejora Continua\n\nEl sistema requiere una mejora y seguimiento por medio de auditorías periódicas:\n*   Comprobar las herramientas periódicamente para detectar caídas de registro.\n*   Verificar si no han sido vulnerados los controles de seguridad.\n\n### 📄 Documentación Técnica\n\nTodas las funciones y políticas relativas deben incluirse explícitamente en la Documentación Técnica descrita en el Anexo IV. Deben detallar:\n*   Dispositivos y recursos empleados.\n*   Planes de poscomercialización.\n*   Ciberseguridad del repositorio.\n*   Es fundamental incorporar en los **Manuales de instrucciones** instrucciones precisas sobre cómo el Responsable debe gestionar e interpretar tales ficheros de la Inteligencia Artificial."
          }
      ],
      "flashcards": [
          {
              "front": "Registro (en un sistema de IA)",
              "back": "Archivo que almacena información sobre el comportamiento y desempeño del sistema durante su entrenamiento o uso en producción."
          },
          {
              "front": "Sistema de gestión de registros",
              "back": "Conjunto de procesos definidos para recopilar, almacenar, analizar y gestionar los registros generados por un sistema de IA."
          },
          {
              "front": "Artículo 12 del Reglamento de IA",
              "back": "Establece que los sistemas de IA de alto riesgo deberán incorporar las capacidades técnicas necesarias para la generación automática de registros (logs)."
          },
          {
              "front": "Artículo 19 del Reglamento de IA",
              "back": "Obliga a los proveedores de sistemas de IA a conservar los archivos de registro generados automáticamente que estén bajo su control."
          },
          {
              "front": "Responsabilidad sobre la conservación de registros",
              "back": "Recae tanto sobre el proveedor como sobre el responsable del despliegue del sistema de IA de alto riesgo, siempre que estén bajo su control."
          },
          {
              "front": "Registros en sistemas de identificación biométrica remota",
              "back": "Deben incluir obligatoriamente el período de cada uso, la base de datos de referencia cotejada, los datos de entrada que arrojen correspondencia y la identificación de las personas físicas verificadoras."
          },
          {
              "front": "Evaluación y diseño de los registros",
              "back": "Fase analítica donde se determina la necesidad de generar registros y los requisitos sobre su información, respondiendo a riesgos y necesidades de vigilancia."
          },
          {
              "front": "Captura, almacenamiento y control de acceso",
              "back": "Proceso técnico y organizativo para guardar los registros asegurando su protección frente a accesos no autorizados, modificaciones, pérdidas o destrucción."
          },
          {
              "front": "Retención mínima obligatoria de registros",
              "back": "El período de conservación de registros automáticos será de al menos seis meses, sujeto a excepciones dictadas por leyes específicas o sectoriales."
          },
          {
              "front": "Vigilancia poscomercialización y registros",
              "back": "Los registros actúan como fuente principal de datos e indicadores para detectar funcionamientos anómalos o incidentes una vez que el sistema se encuentra en el mercado."
          },
          {
              "front": "Principio de Integridad en registros",
              "back": "El sistema debe asegurar que los registros estén protegidos de cualquier intento de modificación, eliminación o alteración no autorizada."
          },
          {
              "front": "Registro de entidades financieras",
              "back": "Mantendrán los archivos de registro como parte de la documentación conservada en virtud de las normativas de la Unión en materia de servicios financieros."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué es un registro en el contexto de un sistema de Inteligencia Artificial?",
              "options": [
                  "Un contrato vinculante entre el proveedor y el responsable del despliegue.",
                  "Un archivo que almacena información sobre el comportamiento y desempeño del sistema.",
                  "Un código de ética de programación interno para el desarrollador.",
                  "Un glosario público de términos matemáticos de IA."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué artículo del Reglamento Europeo de IA estipula la obligación de disponer de capacidades técnicas para generar registros automáticamente?",
              "options": [
                  "Artículo 9",
                  "Artículo 12",
                  "Artículo 15",
                  "Artículo 72"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Según el Artículo 19, ¿cuál es el plazo mínimo de conservación para los archivos de registro generados por sistemas de IA de alto riesgo?",
              "options": [
                  "Un mes.",
                  "Seis meses.",
                  "Tres años.",
                  "Diez años."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Quiénes tienen la responsabilidad de conservar los registros, siempre y cuando estén bajo su control?",
              "options": [
                  "Únicamente las Autoridades de Vigilancia del Mercado.",
                  "Solo los proveedores de sistemas de IA.",
                  "Los proveedores y los responsables del despliegue de sistemas de alto riesgo.",
                  "Solo los usuarios finales que sufren las predicciones del sistema."
              ],
              "correctAnswer": 2
          },
          {
              "question": "En un sistema de identificación biométrica remota, los registros deben contener OBLIGATORIAMENTE:",
              "options": [
                  "La base de datos de referencia y la identificación de las personas implicadas en la verificación.",
                  "El código fuente completo de la red neuronal empleada en el entrenamiento.",
                  "La firma digital del director de la empresa desarrolladora.",
                  "Un resumen del coste financiero de cada operación generada."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿A qué se refiere el principio de 'Usabilidad' en la gestión de registros?",
              "options": [
                  "A que los registros no ocupen espacio de memoria excesivo.",
                  "A que los registros sean fácilmente localizables, recuperables y comprensibles.",
                  "A que el registro esté alojado en hardware físico y no en la nube.",
                  "A que se utilice un formato en papel para los tribunales."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿En qué documento deben reflejarse los procedimientos de registro, las reglas de almacenamiento y su plan de evaluación?",
              "options": [
                  "En la Documentación Técnica descrita en el Anexo IV del Reglamento.",
                  "En el Libro de Actas de la organización.",
                  "En los metadatos de las imágenes de entrenamiento.",
                  "En el folleto de publicidad comercial del sistema."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué paso es esencial durante la fase de 'Captura, almacenamiento y control de acceso' de registros?",
              "options": [
                  "Eliminar todos los datos personales cada 24 horas por motivos de espacio.",
                  "Garantizar la protección de los registros frente a modificaciones indeseadas o accesos no autorizados mediante ciberseguridad.",
                  "Hacer los registros accesibles a todos los empleados de la organización para fomentar la transparencia.",
                  "Deshabilitar las copias de seguridad redundantes."
              ],
              "correctAnswer": 1
          },
          {
              "question": "Las entidades financieras sujetas a normativas de servicios financieros, ¿cómo deben mantener los registros generados?",
              "options": [
                  "Deben enviarlos obligatoriamente al Banco Central Europeo cada mes.",
                  "Como parte de la documentación conservada en virtud del Derecho de la Unión en materia de servicios financieros.",
                  "No están obligadas a mantenerlos gracias a su exención sectorial.",
                  "En un repositorio físico exclusivamente ubicado en territorio nacional."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué significa el concepto de 'Disposición' dentro de un sistema de gestión de registros?",
              "options": [
                  "La forma en que se muestran los iconos en la interfaz gráfica del usuario.",
                  "Gama de procesos asociados con la retención, destrucción o transferencia de los registros.",
                  "La voluntad de los empleados para cumplir con las normativas legales de la IA.",
                  "La creación de una política de marketing basada en los datos almacenados."
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/12-guia-de-registros.pdf",
      "glossary": [
          {
              "term": "Acceso al registro",
              "definition": "Derecho, oportunidad o medios proporcionados para encontrar, utilizar o recuperar información almacenada en un registro."
          },
          {
              "term": "Agente",
              "definition": "Individuo, grupo de trabajo u organización que es responsable o se encuentra involucrado en los procesos de creación, captura y/o gestión de registros."
          },
          {
              "term": "Clasificación",
              "definition": "Identificación sistemática y/o disposición de actividades y/o registros comerciales en categorías de acuerdo con convenciones, métodos y reglas estructuradas."
          },
          {
              "term": "Conversión",
              "definition": "Proceso que consiste en el cambio de registros de un formato a otro garantizando la persistencia de la información."
          },
          {
              "term": "Destrucción",
              "definition": "Proceso definitivo de eliminación de un registro, de manera que sea imposible cualquier posible reconstrucción del mismo."
          },
          {
              "term": "Disposición",
              "definition": "Gama de procesos asociados con la implementación de las políticas de retención de registros, incluyendo decisiones documentadas sobre su destrucción o transferencia."
          },
          {
              "term": "Evidencia",
              "definition": "Documentación objetiva y fehaciente que deja constancia de una transacción, operación o evento dentro del sistema."
          },
          {
              "term": "Migración",
              "definition": "Proceso de mover registros de una configuración de hardware o software a otra diferente, sin alterar su formato original."
          },
          {
              "term": "Registro",
              "definition": "Información creada, recibida y mantenida como evidencia y como un activo por una organización o persona, en cumplimiento de obligaciones legales o de control."
          },
          {
              "term": "Sistema de registros",
              "definition": "El sistema informático o de información global que captura, gestiona, asegura y proporciona acceso a los registros generados a lo largo del tiempo."
          }
      ]
  },
  {
      "id": "13",
      "title": "Guía vigilancia poscomercialización",
      "summary": "Esta guía aborda el artículo 72 del Reglamento, estableciendo la obligación de los proveedores de implementar un sistema de vigilancia poscomercialización. Este sistema debe recopilar, documentar y analizar datos sobre el rendimiento del sistema de IA durante toda su vida útil de manera activa y sistemática. El objetivo es evaluar el cumplimiento continuo de los requisitos, detectar riesgos emergentes y actualizar el sistema de gestión de riesgos. Incluye la creación de un plan de vigilancia, la definición de indicadores de rendimiento y seguridad, y el establecimiento de procesos de análisis.",
      "contentIndex": [
          {
              "title": "Introducción y conceptos básicos de la vigilancia poscomercialización",
              "content": "El Artículo 72 establece la obligatoriedad de que proveedores y responsables implementen un **plan de vigilancia poscomercialización** para sistemas de IA de alto riesgo. Este plan recolecta y evalúa de forma continua la experiencia operativa obtenida tras la introducción del sistema inteligente. El propósito es garantizar que sigan siendo seguros, funcionen correctamente y no supongan riesgos inaceptables durante toda su vida útil.\n\n### 🔧 Componentes Principales\n\nEl sistema de vigilancia se concibe integrado en cuatro componentes:\n\n1.  **Sistemas de captación de indicadores:** Procesos automáticos dedicados a recopilar datos brutos sobre el rendimiento del modelo, infraestructura e interacciones.\n2.  **Sistemas de registro de indicadores:** Servicios de almacenamiento que guardan de forma segura, estructurada y trazable la información recabada.\n3.  **Sistema de alertas automatizadas:** Monitorea en tiempo real los cambios en los indicadores frente a umbrales preestablecidos emitiendo avisos ante desviaciones.\n4.  **Interfaces de análisis:** Dotan a los responsables de vigilancia humana de un acceso visual (cuadros de mando) para investigar incidentes y gestionar las intervenciones."
          },
          {
              "title": "Fases para la implementación del sistema de vigilancia",
              "content": "La implementación requiere que los proveedores y responsables de despliegue sigan un riguroso proceso en cinco pasos fundamentales:\n\n*   **Paso 1: Selección de indicadores**: El proveedor establece las métricas más relevantes (rendimiento, ciberseguridad, infraestructura, interacción) basadas en la gestión de riesgos diseñada.\n*   **Paso 2: Despliegue del sistema de captación**: Modificar o configurar la IA para que envié los datos de interés (archivos *log*) de forma estable, sin interferir con la latencia.\n*   **Paso 3: Configuración de la base de datos**: Establecer un sistema de registro robusto que garantice integridad, políticas de control de acceso, retención y eliminación segura.\n*   **Paso 4: Desarrollo de alertas e interfaz de análisis**: Diseñar herramientas en tiempo real que comparen datos con umbrales, y paneles visuales para que los equipos respondan.\n*   **Paso 5: Pruebas y validación**: Garantizar de forma fiable que recolección de datos y alertas funcionan correctamente, apoyándose en auditorías independientes."
          },
          {
              "title": "Vigilancia continua, pruebas del sistema y capacitación del personal",
              "content": "Para asegurar altos niveles de seguridad, precisión y eficacia, esta vigilancia se divide en tres áreas operativas fundamentales:\n\n1.  **Rendimiento algorítmico:** Precisión, aparición de posibles sesgos no detectados o cambios en la latencia o tiempo de respuesta.\n2.  **Interacciones de usuarios:** Comandos, consultas, comportamientos inusuales y retroalimentación para detectar usos no previstos.\n3.  **Seguridad y Hardware:** Detección de brechas o cuellos de botella de hardware (estrés de CPU, RAM faltante, red comprometida).\n\n### 🧪 Pruebas Activas y de Estrés\n\nEl plan exige pruebas dinámicas que interactúen con la red de forma activa:\n\n*   **Pruebas de estrés:** Evaluación ante cargas de volumen de datos intensivos.\n*   **Pruebas de precisión:** Verificación empírica mantenida.\n*   **Pruebas de robustez y ciberseguridad:** Evalúa las capacidades frente al ruido incorporado o intrusión de la red y repositorios.\n\n### 🧑‍💻 Componente Humano\n\nLa norma exige **capacitación exhaustiva** a los equipos de alerta. El personal responsable debe comprender la lógica y el algoritmo para interpretar adecuadamente la alerta recibida y sus posteriores incidencias. Deben generarse informes asépticos, profesionales y transparentes con afectados y Administraciones."
          },
          {
              "title": "Indicadores de vigilancia y conexiones con el ecosistema regulatorio",
              "content": "La eficacia del plan reposa en un buen catálogo de indicadores divididos en cuatro categorías de seguimiento:\n\n1.  **Del sistema inteligente:** Volumen de inferencias, tasas de la predicción (*Accuracy*), sensibilidad o robustez de la *Recall* (exhaustividad) y variables como *F1 Score*.\n2.  **De infraestructura:** Monitoreo de Hardware, temperatura, RAM y procesos de CPU disponibles. \n3.  **De acciones del entorno:** Volumetrías y ubicaciones anómalas por simultaneidad u orígenes improcedentes.\n4.  **De seguridad algorítmica y técnica:** Uso general de intrusiones, credenciales defectuosas y alteraciones detectadas en directorios internos.\n\n### 🔗 Ecosistema y Documentación\n\nEste plan está profundamente interconectado con el resto de las obligaciones y guías del AI Act:\n*   Se nutre de la **Guía de Riesgos** (qué peligros deben vigilarse para diseñar indicadores) y la **Guía de Registros** (almacenamiento y retención).\n*   Delega atribuciones específicas establecidas en la **Guía de Supervisión Humana**.\n\nEl plan debe anexarse de forma íntegra a la **Documentación Técnica**, como lo exige el Anexo IV del Reglamento."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es el plan de vigilancia poscomercialización?",
              "back": "Es un conjunto de actividades llevadas a cabo para recolectar y evaluar de forma continua la experiencia obtenida de los sistemas de IA de alto riesgo que han sido puestos en el mercado."
          },
          {
              "front": "¿Cuáles son los cuatro componentes clave de un sistema de vigilancia poscomercialización?",
              "back": "1) Sistemas de captación de indicadores, 2) Sistemas de registro de indicadores, 3) Sistema de alertas automatizadas, 4) Interfaces de análisis para supervisores."
          },
          {
              "front": "¿Cuál es la función del Sistema de alertas automatizadas?",
              "back": "Monitorear en tiempo real los cambios en los indicadores para alertar sobre posibles escenarios de riesgo, basándose en escalas o umbrales preestablecidos."
          },
          {
              "front": "¿Cuáles son los primeros tres pasos para implementar el sistema de vigilancia?",
              "back": "1. Selección de indicadores, 2. Despliegue del sistema de captación, 3. Configuración de la base de datos de almacenamiento (registros)."
          },
          {
              "front": "¿Qué se debe hacer si el riesgo continuado de un sistema de IA supera a sus beneficios?",
              "back": "El sistema de vigilancia debe identificar la necesidad de tomar acciones correctivas inmediatas, que pueden incluir ajustes técnicos o la retirada del sistema."
          },
          {
              "front": "¿Qué indicadores clave se deben vigilar sobre el \"sistema inteligente\" algorítmico?",
              "back": "Predicciones por unidad de tiempo, tasa de errores de predicción, precisión del modelo, Recall (Exhaustividad) y F1 Score."
          },
          {
              "front": "¿Qué papel juegan las pruebas de estrés en la vigilancia continua?",
              "back": "Someten al sistema de IA a condiciones extremas de carga de datos o procesamiento para evaluar su estabilidad y prevenir caídas de disponibilidad."
          },
          {
              "front": "¿Por qué es obligatoria la capacitación de los responsables de supervisión?",
              "back": "Para asegurar que comprendan la lógica del algoritmo, sepan interpretar las métricas y alertas, y conozcan el protocolo de actuación ante comportamientos anómalos del sistema."
          },
          {
              "front": "¿Qué relación tiene la Vigilancia Poscomercialización con la Guía de Gestión de Riesgos?",
              "back": "La evaluación de riesgos previa determina qué información, peligros y datos se necesitan recabar para poder diseñar los indicadores de vigilancia adecuados."
          },
          {
              "front": "¿Qué datos recaban los indicadores de infraestructura tecnológica?",
              "back": "Monitorean el estado físico o virtual del entorno, incluyendo el uso de CPU, la memoria RAM, el ancho de banda consumido y la temperatura del sistema."
          },
          {
              "front": "¿Para qué sirve medir el \"Número de orígenes de sesión diferentes\" de un usuario?",
              "back": "Para controlar la dispersión de inicios de sesión y poder detectar posibles anomalías técnicas o incidentes de ciberseguridad relacionados con robo de credenciales."
          },
          {
              "front": "¿Qué artículo del Reglamento de IA (AI Act) obliga a documentar e implementar el plan de vigilancia poscomercialización?",
              "back": "El Artículo 72 (y el Anexo IV referente a la inclusión de dicho plan en la Documentación Técnica)."
          }
      ],
      "quiz": [
          {
              "question": "¿Cuál es el objetivo principal del plan de vigilancia poscomercialización?",
              "options": [
                  "Recolectar y evaluar experiencia del uso del sistema en el mercado para identificar riesgos y tomar acciones correctivas.",
                  "Generar únicamente campañas de marketing basadas en el rendimiento del software.",
                  "Automatizar las ventas de los sistemas de inteligencia artificial de bajo riesgo.",
                  "Sustituir por completo la intervención humana en la toma de decisiones algorítmicas."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué componente NO forma parte de la arquitectura base del sistema de vigilancia poscomercialización?",
              "options": [
                  "Sistemas de captación de indicadores.",
                  "Sistemas de marketing y ventas automáticas.",
                  "Sistemas de registro e histórico.",
                  "Sistemas de alertas automatizadas."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál es el primer paso metodológico para implementar un sistema de vigilancia poscomercialización?",
              "options": [
                  "Selección de indicadores basados en los riesgos.",
                  "Contratación de un equipo externo de ciberseguridad.",
                  "Desarrollo de las interfaces gráficas.",
                  "Pruebas y validación en un entorno simulado."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué métrica es considerada un indicador de rendimiento propio del \"sistema inteligente\"?",
              "options": [
                  "Consumo de Memoria RAM.",
                  "Temperatura del sistema de servidores.",
                  "Intentos fallidos de inicio de sesión.",
                  "F1 Score del modelo y Tasa de errores de predicción."
              ],
              "correctAnswer": 3
          },
          {
              "question": "Según la guía, ¿qué tipo de prueba somete al sistema a condiciones de carga extrema o procesamiento inusual?",
              "options": [
                  "Pruebas de precisión.",
                  "Pruebas de sesgo demográfico.",
                  "Pruebas de estrés.",
                  "Pruebas unitarias de código."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿A qué artículo del Reglamento de IA (AI Act) hace referencia principal la vigilancia poscomercialización?",
              "options": [
                  "Artículo 9.",
                  "Artículo 72.",
                  "Artículo 15.",
                  "Artículo 12."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Dentro de qué categoría de indicadores se sitúa el \"Número de intentos fallidos de inicio de sesión\"?",
              "options": [
                  "Indicadores sobre la infraestructura.",
                  "Indicadores sobre el rendimiento del sistema inteligente.",
                  "Indicadores financieros.",
                  "Indicadores de seguridad."
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Con qué guía está estrechamente relacionada la vigilancia para definir CÓMO almacenar la información recabada de forma segura?",
              "options": [
                  "Guía de Conservación de Registros.",
                  "Guía de Transparencia.",
                  "Guía de Alfabetización en IA.",
                  "Guía de Precisión."
              ],
              "correctAnswer": 0
          },
          {
              "question": "De acuerdo al Artículo 72, ¿qué entidades tienen la opción de integrar la vigilancia en sus sistemas internos preexistentes debido a su propia legislación del Derecho de la Unión?",
              "options": [
                  "Las plataformas de streaming.",
                  "Las universidades públicas.",
                  "Las entidades financieras.",
                  "Las fábricas de productos de consumo."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es la utilidad principal de las \"interfaces de análisis\" en el plan de vigilancia?",
              "options": [
                  "Servir de punto de acceso para que los supervisores analicen los indicadores y gestionen las alertas.",
                  "Procesar los cálculos de las redes neuronales en tiempo real.",
                  "Captar los datos brutos del hardware y sensores sin intervención humana.",
                  "Almacenar las copias de seguridad de la infraestructura a largo plazo."
              ],
              "correctAnswer": 0
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/13-guia-vigilancia-poscomercializacion.pdf",
      "glossary": [
          {
              "term": "Vigilancia poscomercialización",
              "definition": "Conjunto de actividades conducidas por proveedores o responsables para recolectar y evaluar experiencia de sistemas de IA de alto riesgo tras su puesta en el mercado, identificando la necesidad de acciones correctivas."
          },
          {
              "term": "Sistema de captación de indicadores",
              "definition": "Conjunto de procesos tecnológicos diseñados para recopilar sistemáticamente datos de rendimiento del sistema de IA, infraestructura y acciones de usuarios para su posterior análisis."
          },
          {
              "term": "Indicador de vigilancia",
              "definition": "Dato cuantitativo o cualitativo evaluado dentro de una escala o rango de normalidad que permite medir un comportamiento específico del sistema frente a un riesgo identificado."
          },
          {
              "term": "Sistema de alertas automatizadas",
              "definition": "Mecanismo informático que monitorea los indicadores en tiempo real y envía notificaciones cuando los valores superan los umbrales críticos de normalidad preestablecidos."
          },
          {
              "term": "Pruebas de estrés",
              "definition": "Evaluaciones técnicas en las que se somete al sistema de IA a condiciones extremas de carga o volumen de datos para comprobar su estabilidad, disponibilidad y respuesta frente a fallos."
          },
          {
              "term": "Tasa de errores de predicción",
              "definition": "Porcentaje de predicciones o resultados incorrectos generados por el modelo de IA en relación con el total de predicciones realizadas en un periodo de tiempo."
          },
          {
              "term": "Recall (Exhaustividad)",
              "definition": "Métrica que indica el porcentaje de casos positivos reales (verdaderos positivos y falsos negativos) que el sistema de IA es capaz de identificar correctamente; es crucial en conjuntos de datos desbalanceados."
          },
          {
              "term": "Pruebas de robustez",
              "definition": "Procedimientos de evaluación que buscan verificar la capacidad del sistema de IA para mantener su precisión y rendimiento ante entradas ruidosas, datos imprevistos o intentos de alteración."
          },
          {
              "term": "Plan de contingencia",
              "definition": "Conjunto de medidas y procedimientos predefinidos que se deben ejecutar inmediatamente en caso de producirse un incidente grave, fallo crítico o desviación inaceptable en el sistema de IA."
          },
          {
              "term": "Latencia del sistema",
              "definition": "Tiempo de respuesta del sistema de inteligencia artificial, medido habitualmente desde que recibe una petición o dato de entrada hasta que emite el resultado o predicción."
          }
      ]
  },
  {
      "id": "14",
      "title": "Guía gestión de incidentes",
      "summary": "Esta guía explica el procedimiento del artículo 73 para la notificación de incidentes graves relacionados con sistemas de IA de alto riesgo. Define qué constituye un incidente grave (muerte, daños graves a la salud, propiedad, medio ambiente o derechos fundamentales) y establece los plazos estrictos para su comunicación a las autoridades de vigilancia del mercado: 15 días para incidentes graves en general, 10 días en caso de fallecimiento (Art. 73.4) y 2 días para infraestructuras críticas o infracción generalizada (Art. 73.3). También detalla el flujo de investigación y las excepciones para ciertos sectores.",
      "contentIndex": [
          {
              "title": "Introducción y concepto de incidente grave",
              "content": "La Guía 14 de las Guías AESIA está dedicada a la \"Gestión de Incidentes\" (el Artículo 73 del Reglamento de IA de alto riesgo aborda la notificación de estos). Un **«incidente grave»** se define como un suceso o defecto de funcionamiento del sistema que, directa o indirectamente, tenga consecuencias severas, como:\n\n*   Fallecimiento de una persona o daños graves para la salud.\n*   Alteraciones graves y potencialmente irreversibles en infraestructuras críticas.\n*   Incumplimiento de las obligaciones de Derecho de la Unión para proteger los derechos fundamentales.\n*   Daños graves a la propiedad o al medio ambiente.\n\n### ⏱️ Proceso de gestión\n\nLa gestión de incidentes es un **proceso continuo** que implica:\n1.  Monitorización constante tras su comercialización.\n2.  Detección de la anomalía.\n3.  Establecimiento de vínculo causal (sistema-incidente).\n4.  Notificación inmediata y cooperación constante en las investigaciones subsiguientes."
          },
          {
              "title": "Obligaciones y requisitos de notificación",
              "content": "El Artículo 73 establece directrices estrictas para los proveedores. La regla general dicta que todo incidente grave debe ser notificado **inmediatamente** después de que el proveedor logre establecer un vínculo causal (o una posibilidad razonable). En ningún caso se excederán los **15 días** desde el conocimiento inicial del incidente (Artículo 73.2).\n\n### 🚨 Plazos estrictos por severidad (Artículo 73)\n\n*   **Plazo general — resto de incidentes graves (Art. 73.2):** Notificación en un plazo máximo de **15 días** desde el conocimiento del incidente. Se aplica también a vulneraciones de **Derechos Fundamentales**.\n*   **Fallecimiento de una persona (Art. 73.4):** El plazo se acorta a un máximo de **10 días** desde el conocimiento del incidente. La notificación debe ser inmediata en cuanto se sospeche o establezca la relación causal.\n*   **Infracción generalizada o incidente en infraestructuras críticas (Art. 73.3):** El plazo más breve es de **2 días**, dado el carácter urgente y de alta afectación de estos casos.\n\n### ⚖️ Excepciones y cooperación\n\nEn el caso de infraestructuras críticas, si notificar de inmediato obstaculizara la mitigación de daños urgentes, el Reglamento permite una breve demora que no exceda en ningún caso el plazo de 2 días.\nLos proveedores deben cooperar plenamente con las autoridades en investigaciones, garantizando transparencia."
          },
          {
              "title": "Procedimiento y medidas aplicables para la gestión de incidentes",
              "content": "Para abordar la notificación de forma efectiva, tanto proveedores como responsables de despliegue deben integrar operativas clave.\n\n### 🔄 Sistema de gestión de calidad (SGC)\n\nEnmarcar la notificación de incidentes dentro del SGC de la organización. Deben existir protocolos de actuación, así como cadenas de responsabilidad para actuar con rapidez y eficacia frente a cualquier contingencia.\n\n### 📞 Comunicación bidireccional ágil\n\nEs indispensable asegurar un contacto fluyente y directo:\n\n*   El responsable del despliegue (usuario directo y primero en la línea de detección) debe informar al proveedor inmediatamente.\n*   El conocimiento y asignación del **Punto de Contacto Oficial** de la Autoridad de Vigilancia del Mercado (AVM) debe ser prioritario.\n\n### 🛡️ Nivel de categorización\n\nResulta imprescindible conocer la categorización exacta del sistema IA según los Anexos del RIA, de los que dependen las notificaciones aplicables y sus exenciones. Los responsables también deben evaluar el grado potencial de afectación sobre los Derechos Fundamentales."
          },
          {
              "title": "Documentación técnica y relación con el sistema de gestión de calidad",
              "content": "El cumplimiento de todas las responsabilidades del sistema debe quedar reflejado de manera exhaustiva en la **Documentación Técnica** exigida en el Artículo 11 y el Anexo IV. Debe mantenerse viva y actualizada.\n\n### 📝 Contenidos documentales críticos\n\nLa documentación en el contexto de gestión de incidentes debe incluir:\n\n*   **Procedimientos operativos:** Reglas y flujos de notificación que se enmarcan fuertemente integrados en el Sistema de Gestión de la Calidad.\n*   **Manuales de usuario:** Información detallada de los canales de comunicación hacia los responsables para soporte rápido.\n*   **Información y anexos institucionales:** Contacto oficial con la Autoridad de Vigilancia del Mercado e información que establezca el nivel de riesgo correspondiente según legislaciones competentes (CE).\n*   **Evaluación y Concienciación general:** Documentos corporativos que avalen la formación y concientización sobre Derechos Fundamentales de la UE en el seno de la entidad para el manejo crítico de incidentes."
          }
      ],
      "flashcards": [
          {
              "front": "¿Cuál es el objetivo principal de la Guía 14 de AESIA?",
              "back": "Servir de apoyo para la gestión y notificación de incidentes graves de los sistemas de Inteligencia Artificial de alto riesgo (Art. 73)."
          },
          {
              "front": "¿Cómo define el Reglamento de IA un 'incidente grave'?",
              "back": "Un defecto o suceso que causa muerte, daños graves a la salud, propiedad, medio ambiente, o incumple la protección de derechos fundamentales."
          },
          {
              "front": "¿Cuál es el plazo general para notificar un incidente grave a la AVM?",
              "back": "Máximo 15 días desde que se establece un vínculo causal (o posibilidad razonable) entre el sistema de IA y el incidente."
          },
          {
              "front": "¿Qué plazo aplica si un incidente grave resulta en el fallecimiento de una persona (Art. 73.4)?",
              "back": "Debe notificarse inmediatamente, con un plazo máximo de 10 días desde que el proveedor tenga conocimiento del incidente."
          },
          {
              "front": "¿Cuál es el plazo de notificación si el incidente vulnera derechos fundamentales (Art. 73.2)?",
              "back": "Se aplica el plazo general de máximo 15 días. El plazo de 2 días es exclusivamente para infraestructuras críticas o infracción generalizada (Art. 73.3)."
          },
          {
              "front": "¿A quién le recae principalmente la obligación legal de notificar el incidente a la AVM?",
              "back": "Al proveedor del sistema de Inteligencia Artificial de alto riesgo."
          },
          {
              "front": "¿Qué obligación tiene el responsable del despliegue frente a un incidente?",
              "back": "Informar inmediatamente al proveedor a través de los canales establecidos y, si no logra contactarlo, informar él mismo a la AVM."
          },
          {
              "front": "¿En qué sistema organizativo deben integrarse los procedimientos de notificación de incidentes?",
              "back": "En el Sistema de Gestión de la Calidad (SGC)."
          },
          {
              "front": "¿Qué significa AVM?",
              "back": "Autoridad de Vigilancia del Mercado."
          },
          {
              "front": "¿Qué excepción temporal existe para notificar en infraestructuras críticas?",
              "back": "Se puede retrasar la notificación si hacerla inmediatamente obstaculiza las labores urgentes para restablecer la infraestructura."
          },
          {
              "front": "¿Qué debe contener la documentación técnica respecto al contacto institucional?",
              "back": "Debe contener el documento con el contacto responsable de la Autoridad de Vigilancia del Mercado correspondiente."
          },
          {
              "front": "¿Qué medida proactiva en formación exige la Guía 14 para la gestión de incidentes?",
              "back": "Documentar y certificar el conocimiento de los responsables sobre los derechos fundamentales de la Unión Europea."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué artículo del Reglamento Europeo de IA (AI Act) regula específicamente la notificación de incidentes graves?",
              "options": [
                  "Artículo 9",
                  "Artículo 12",
                  "Artículo 15",
                  "Artículo 73"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Cuál es el plazo máximo general establecido por el Reglamento para notificar un incidente grave a las autoridades?",
              "options": [
                  "2 días",
                  "10 días",
                  "15 días",
                  "30 días"
              ],
              "correctAnswer": 2
          },
          {
              "question": "En el supuesto de que un incidente grave resulte en el fallecimiento de una persona (Art. 73.4), ¿cuál es el plazo máximo para realizar la notificación?",
              "options": [
                  "24 horas",
                  "2 días",
                  "10 días",
                  "15 días"
              ],
              "correctAnswer": 2
          },
          {
              "question": "Si se produce una vulneración de derechos fundamentales a causa del sistema de IA, el plazo de notificación a la AVM según el Artículo 73.2 es de un máximo de:",
              "options": [
                  "2 días",
                  "5 días",
                  "10 días",
                  "15 días"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Qué debe hacer el responsable del despliegue (usuario profesional) si detecta un incidente grave en su operativa?",
              "options": [
                  "Apagar el sistema para siempre y borrar los logs.",
                  "Notificar directamente a la Comisión Europea.",
                  "Avisar inmediatamente al proveedor mediante el canal establecido.",
                  "Modificar el código fuente para solucionar el problema."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Si el responsable del despliegue identifica un incidente grave pero no logra contactar con el proveedor, ¿cómo debe proceder?",
              "options": [
                  "Ignorar el incidente hasta que el proveedor responda.",
                  "Notificar directamente a la Autoridad de Vigilancia del Mercado (AVM).",
                  "Informar a los usuarios finales a través de redes sociales.",
                  "Contratar a un tercero para auditar el sistema."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Dentro de qué sistema organizativo obligatorio deben enmarcarse los procedimientos de gestión y notificación de incidentes graves?",
              "options": [
                  "Sistema de Gestión de la Calidad (SGC)",
                  "Sistema de Prevención de Riesgos Laborales",
                  "Sistema de Ventas y Marketing",
                  "Sistema de Logs Abiertos"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué excepción temporal contempla el Reglamento sobre la notificación en el ámbito de infraestructuras críticas?",
              "options": [
                  "Están exentas de notificar cualquier tipo de incidente.",
                  "Solo notifican si el incidente afecta a la facturación.",
                  "Pueden retrasar la notificación si esta obstaculiza las labores urgentes de restablecimiento de los servicios.",
                  "El plazo máximo general se amplía automáticamente a 60 días."
              ],
              "correctAnswer": 2
          },
          {
              "question": "De acuerdo con la Guía 14, la documentación técnica generada sobre incidentes debe estar respaldada y conectada directamente con:",
              "options": [
                  "La página web promocional del proveedor.",
                  "Las medidas descritas en el Anexo IV del Reglamento de IA.",
                  "El código fuente disponible en repositorios públicos.",
                  "El libro de reclamaciones físico de la empresa."
              ],
              "correctAnswer": 1
          },
          {
              "question": "Además del contacto con la AVM y el protocolo de notificación, la Guía 14 exige documentar explícitamente el conocimiento de los operadores sobre:",
              "options": [
                  "Los lenguajes de programación de IA.",
                  "Los algoritmos de aprendizaje profundo no supervisado.",
                  "Los Derechos Fundamentales de la Unión Europea.",
                  "Las reglas de mercado internacionales."
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/14-guia-gestion-de-incidentes.pdf",
      "glossary": [
          {
              "term": "Incidente grave",
              "definition": "Suceso o defecto de funcionamiento de un sistema de IA que causa consecuencias extremas, como fallecimiento, daños graves a la salud, a infraestructuras críticas, al medio ambiente o vulneración de derechos fundamentales."
          },
          {
              "term": "AVM",
              "definition": "Autoridad de Vigilancia del Mercado, entidad nacional encargada de supervisar el cumplimiento de la normativa de los productos e investigar los incidentes notificados."
          },
          {
              "term": "Proveedor",
              "definition": "Entidad o persona que desarrolla o bajo cuyo nombre se comercializa y pone en servicio un sistema de IA de alto riesgo, recayendo en ella la obligación principal de notificación."
          },
          {
              "term": "Responsable del despliegue",
              "definition": "Entidad o persona que hace uso profesional del sistema de IA y tiene el deber de informar al proveedor frente a cualquier anomalía severa en el entorno de producción."
          },
          {
              "term": "Vínculo causal",
              "definition": "Relación de causa y efecto demostrada o razonablemente posible entre el comportamiento del sistema de Inteligencia Artificial y el incidente grave ocurrido."
          },
          {
              "term": "SGC",
              "definition": "Sistema de Gestión de la Calidad, marco organizativo que documenta e integra, entre otras políticas, los procedimientos estándar de notificación de incidentes graves."
          },
          {
              "term": "Derechos fundamentales",
              "definition": "Conjunto de derechos reconocidos en la Carta de los Derechos Fundamentales de la UE, cuya vulneración por un sistema de IA constituye un incidente grave."
          },
          {
              "term": "Documentación técnica",
              "definition": "Conjunto de documentos requeridos por el Anexo IV del AI Act que detallan el diseño, los contactos de AVM y los procedimientos ante incidentes, asegurando la conformidad del sistema."
          },
          {
              "term": "Infraestructura crítica",
              "definition": "Instalaciones, sistemas o redes esenciales para el funcionamiento de la sociedad, cuya interrupción grave justifica exenciones temporales en los plazos inmediatos de notificación."
          },
          {
              "term": "Reglamento Europeo de IA (AI Act)",
              "definition": "Marco legislativo de la Unión Europea que establece obligaciones armonizadas de seguridad, calidad, supervisión y notificación de incidentes para los sistemas de inteligencia artificial."
          }
      ]
  },
  {
      "id": "15",
      "title": "Guía documentación técnica",
      "summary": "Esta guía detalla los requisitos del artículo 11 y el Anexo IV para la elaboración de la documentación técnica de los sistemas de IA de alto riesgo. Esta documentación debe demostrar la conformidad del sistema antes de su puesta en el mercado e incluir una descripción general, detalles de diseño, datos de entrenamiento, medidas de supervisión humana y gestión de riesgos. Además, según el artículo 18, debe conservarse a disposición de las autoridades nacionales competentes durante al menos 10 años.",
      "contentIndex": [
          {
              "title": "Documentación técnica y conservación de la documentación",
              "content": "La Guía 15 se centra en la Documentación Técnica para sistemas de Inteligencia Artificial de alto riesgo (HRAIS), detallando los requisitos y responsabilidades establecidos en los artículos 11 y 18, así como en el Anexo IV.\n\n### 📋 Obligaciones del Artículo 11\n\nObliga a los proveedores a elaborar la documentación técnica **antes de la introducción en el mercado o puesta en servicio**, y a mantenerla constantemente actualizada. Fundamental para:\n*   Demostrar que el sistema cumple con los requisitos del Capítulo III.\n*   Permitir evaluar la conformidad a autoridades y organismos notificados.\n*   *Excepción:* Pymes y empresas emergentes pueden usar un formulario simplificado de la Comisión Europea.\n\n### ⏳ Obligaciones de Conservación (Artículo 18)\n\nLa documentación técnica, junto con el sistema de gestión de la calidad, las aprobaciones y la declaración UE de conformidad, debe **conservarse de forma segura y accesible durante un período mínimo de 10 años** tras la puesta en el mercado o servicio.\n\n### 📑 Estructura Mínima (Anexo IV)\n\nEl Anexo IV desgrana el contenido mínimo en bloques clave:\n\n1.  **Descripción general del sistema:** Finalidad prevista, interacción hardware/software, formas de comercialización (API, SaaS, on-premise) e instrucciones de uso.\n2.  **Elementos y procesos:** Metodología, especificaciones de diseño (algoritmos, *trade-offs*), arquitectura y recursos operacionales. Incluye fichas de datos (procedencia, depuración) y ciberseguridad.\n3.  **Gestión de riesgos y seguimiento:** Resultados no deseados previsibles (Art. 9), métricas de precisión y rendimiento (Art. 15) y plan de vigilancia poscomercialización (Art. 72).\n\nEl proveedor debe asegurar que la estructura documental permita la **trazabilidad técnica y sea auditable**."
          }
      ],
      "flashcards": [
          {
              "front": "Artículo 11 del RIA",
              "back": "Establece la obligación de elaborar la documentación técnica de un sistema de IA de alto riesgo antes de su introducción en el mercado y de mantenerla actualizada."
          },
          {
              "front": "Artículo 18 del RIA",
              "back": "Establece las obligaciones referentes a la conservación de la documentación de los sistemas de IA de alto riesgo."
          },
          {
              "front": "Plazo de conservación de la documentación",
              "back": "10 años a contar desde la introducción en el mercado o la puesta en servicio del sistema de IA de alto riesgo."
          },
          {
              "front": "Anexo IV del RIA",
              "back": "Define el contenido mínimo obligatorio que deberá tener la documentación técnica del sistema de Inteligencia Artificial."
          },
          {
              "front": "Facilidad para Pymes y empresas emergentes",
              "back": "Pueden facilitar los elementos de la documentación técnica exigida utilizando un formulario simplificado proporcionado por la Comisión Europea."
          },
          {
              "front": "Descripción general del sistema (Anexo IV.1)",
              "back": "Bloque de la documentación técnica que incluye finalidad prevista, nombre del proveedor, versión, interacción con hardware/software e instrucciones de uso."
          },
          {
              "front": "Fichas técnicas de datos (Anexo IV.2.d)",
              "back": "Documentación que describe las metodologías y técnicas de entrenamiento, procedencia, alcance, selección, etiquetado y depuración de los conjuntos de datos."
          },
          {
              "front": "Especificaciones de diseño (Anexo IV.2.b)",
              "back": "Información sobre la lógica de los algoritmos, decisiones clave, parámetros a optimizar y compensaciones (trade-offs) adoptadas para cumplir los requisitos."
          },
          {
              "front": "Declaración UE de conformidad",
              "back": "Documento obligatorio emitido bajo responsabilidad del proveedor (Art. 47), cuya copia debe adjuntarse en la documentación técnica."
          },
          {
              "front": "Plan de vigilancia poscomercialización",
              "back": "Descripción detallada del sistema para evaluar el funcionamiento de la IA tras su comercialización (Art. 72), que forma parte del Anexo IV.9."
          },
          {
              "front": "Actualización continua de documentación",
              "back": "La documentación técnica no finaliza en la comercialización; debe mantenerse actualizada frente a cambios predeterminados o modificaciones del sistema."
          },
          {
              "front": "Regla para Entidades Financieras",
              "back": "Pueden mantener la documentación técnica como parte de la documentación ya conservada en virtud del Derecho de la Unión en materia de servicios financieros."
          }
      ],
      "quiz": [
          {
              "question": "¿Durante cuánto tiempo debe el proveedor mantener la documentación técnica a disposición de las autoridades nacionales?",
              "options": [
                  "10 años desde la introducción en el mercado o puesta en servicio",
                  "5 años desde el final de la fase de pruebas",
                  "Indefinidamente",
                  "3 años o hasta la primera actualización sustancial"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué anexo del Reglamento Europeo de IA detalla el contenido mínimo de la documentación técnica?",
              "options": [
                  "Anexo I",
                  "Anexo IV",
                  "Anexo VII",
                  "Anexo III"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué mecanismo prevé el RIA para reducir la carga de documentación en las pymes y empresas emergentes?",
              "options": [
                  "Exención completa de realizar documentación",
                  "Uso de un formulario simplificado de documentación técnica",
                  "Subcontratación obligatoria a un auditor externo",
                  "Aprobación automática sin revisión"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de las siguientes informaciones se requiere en la 'Descripción general del sistema' (Anexo IV.1)?",
              "options": [
                  "El código fuente íntegro del algoritmo",
                  "Su finalidad prevista, nombre del proveedor y versión del sistema",
                  "La cuenta de resultados de la empresa proveedora",
                  "Los nombres personales de los sujetos de los datos de entrenamiento"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿A quién va dirigida principalmente la obligación de generar y conservar la documentación técnica del sistema de IA?",
              "options": [
                  "Al usuario final",
                  "A la Comisión Europea",
                  "Al proveedor del sistema de IA",
                  "Al distribuidor minorista"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué debe hacerse con la documentación técnica una vez el sistema se pone en servicio a lo largo de su ciclo de vida?",
              "options": [
                  "Archivarla inmutable y sellada ante notario",
                  "Mantenerla actualizada reflejando los cambios y versiones del sistema",
                  "Destruirla por motivos de privacidad",
                  "Hacerla pública en internet"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Si el sistema de IA es un componente de un producto de hardware, ¿qué elemento exige incluir el Anexo IV.1.f?",
              "options": [
                  "El manual de ventas",
                  "Fotografías o ilustraciones de características exteriores, marcado y configuración interna",
                  "La patente industrial del hardware",
                  "El listado de todos los compradores del hardware"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cómo debe documentarse una decisión de compensación técnica (trade-off) tomada durante el diseño (ej. ceder levemente precisión para reducir sesgos)?",
              "options": [
                  "Omitiéndola para no alertar al usuario",
                  "Indicando la motivación, descripción funcional, técnica y consecuencias en relación a la finalidad prevista",
                  "Enviándola como notificación de incidente grave",
                  "Exclusivamente en los archivos de registro automático"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué artículo regula específicamente la conservación de la documentación?",
              "options": [
                  "Artículo 9",
                  "Artículo 11",
                  "Artículo 18",
                  "Artículo 72"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué incluye el requerimiento de documentación relativo a la supervisión humana (Anexo IV.2.e y IV.3)?",
              "options": [
                  "Evaluación de las medidas técnicas necesarias para facilitar la interpretación por parte de los responsables del despliegue",
                  "Nombres y contratos laborales de los operadores humanos",
                  "Copia de los exámenes médicos del personal de vigilancia",
                  "Ninguna, no se documenta en la fase técnica"
              ],
              "correctAnswer": 0
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/15-guia-documentacion-tecnica.pdf",
      "glossary": [
          {
              "term": "Documentación Técnica",
              "definition": "Conjunto de información estructurada y comprensible sobre el desarrollo, funcionamiento y características de un sistema de IA de alto riesgo, elaborada antes de su comercialización para demostrar la conformidad regulatoria."
          },
          {
              "term": "Conservación de la documentación",
              "definition": "Obligación legal del proveedor de almacenar de manera segura y accesible toda la documentación técnica, certificaciones y registros de calidad del sistema durante un mínimo de 10 años tras su comercialización."
          },
          {
              "term": "Anexo IV",
              "definition": "Sección específica del Reglamento Europeo de IA que enumera los requisitos y el contenido mínimo obligatorio que debe incluir la documentación técnica de un sistema de IA de alto riesgo."
          },
          {
              "term": "Pymes y empresas emergentes",
              "definition": "Organizaciones de menor tamaño (start-ups) que el reglamento exime parcialmente permitiéndoles cumplir con la documentación técnica a través de un formulario simplificado creado por la Comisión Europea."
          },
          {
              "term": "Finalidad prevista",
              "definition": "Descripción explícita y precisa sobre el uso proyectado, el contexto de utilización y las condiciones bajo las cuales se ha diseñado para operar el sistema de inteligencia artificial."
          },
          {
              "term": "Compensación (Trade-off)",
              "definition": "Decisión de diseño técnico documentada donde se asume el sacrificio parcial de un parámetro (p. ej., precisión) en favor de mejorar otro requisito clave (p. ej., explicabilidad o reducción de sesgo)."
          },
          {
              "term": "Fichas técnicas de datos",
              "definition": "Documentación específica dentro de la técnica que describe el origen, metodología, técnicas de limpieza, etiquetado y evaluación de los conjuntos de datos empleados en entrenamiento, validación y prueba."
          },
          {
              "term": "Arquitectura del sistema",
              "definition": "Explicación documentada sobre la manera en que los distintos componentes de software y hardware se conectan, interactúan y se integran en el procesamiento general de la inteligencia artificial."
          },
          {
              "term": "Modelos pre-entrenados",
              "definition": "Sistemas o modelos de IA desarrollados previamente por terceros que se integran en un sistema nuevo, cuyo uso y modificaciones deben justificarse detalladamente en la documentación técnica."
          },
          {
              "term": "Declaración UE de conformidad",
              "definition": "Documento legal oficial, del cual se debe guardar copia en la documentación, que emite el proveedor asumiendo la responsabilidad formal de que el sistema cumple con todos los requisitos del Reglamento Europeo de IA."
          }
      ]
  },
  {
      "id": "16",
      "title": "Manual de checklist de guías de requisitos",
      "summary": "Este manual explica el uso de la herramienta de autodiagnóstico (checklist en Excel) desarrollada para el sandbox español de IA. Permite a las entidades evaluar el nivel de madurez de sus sistemas respecto a los requisitos del Reglamento (transparencia, precisión, riesgos, etc.). La herramienta ayuda a identificar brechas de cumplimiento y a diseñar un Plan de Adaptación (PDA) asignando niveles de madurez desde 'No documentada' hasta 'Implementada'. Es un recurso clave para la fase de diagnóstico del sandbox.",
      "contentIndex": [
          {
              "title": "Manual de uso de las checklist de guías de requisitos (guía 16)",
              "content": "# Manual de uso de la checklist (Guía 16)\n\nEl **Manual de uso de las checklist de guías de requisitos** (Guía 16) tiene como objetivo servir de apoyo detallado para el autodiagnóstico y adaptación de los sistemas de Inteligencia Artificial de alto riesgo a las normativas del Reglamento Europeo de IA (RIA), operando dentro del marco estratégico del sandbox regulatorio piloto español. Este entorno controlado de pruebas facilita enormemente la detección temprana de riesgos, la adaptación ágil a la regulación y la transferencia de conocimiento práctico.\n\nLa fase de diagnóstico del sandbox persigue dos grandes objetivos principales: en primer lugar, permitir a las entidades participantes realizar un autodiagnóstico exhaustivo de su sistema frente a las directrices del RIA para conocer la brecha técnica y operativa existente; en segundo lugar, diseñar un **Plan de Adaptación (PDA)**, que funcionará como una hoja de ruta estricta que la entidad ejecutará para lograr el cumplimiento legal. Para llevar esto a cabo, se ha diseñado una herramienta de checklist en formato Excel por cada uno de los 12 requisitos normativos fundamentales (tales como Gestión de la calidad, Riesgos, Supervisión humana, Gobernanza de datos, Transparencia, Precisión, Solidez, Ciberseguridad, Registros, Documentación técnica, Vigilancia poscomercialización y Gestión de Incidentes graves).\n\nLa estructura interna de la herramienta de checklist se divide meticulosamente en **9 pestañas** (5 informativas y 4 operativas).\n\nLas pestañas **informativas** incluyen:\n* **Portada**: Avisos de confidencialidad y contexto normativo.\n* **Intro**: Instrucciones de uso resumidas y didácticas.\n* **Artículo RIA**: Detalle de los apartados normativos aplicables a evaluar.\n* **Medidas Guías (MG)**: Catálogo descriptivo de las medidas propuestas extraídas de buenas prácticas de la industria, indicando el 'CÓMO' cumplir los requerimientos paso a paso, incluyendo preguntas orientativas.\n* **Relación MG-Apart**: Mapeo visual y matricial de cada medida recomendada con su apartado legal correspondiente.\n\nLas pestañas **operativas** (aquellas que requieren interacción de la entidad) son:\n* **Autoeval MG**: La entidad debe seleccionar el \"Nivel de dificultad percibido\" (Alto, Medio, Bajo) y el \"Nivel de madurez\" (una escala codificada de L1 a L8, que clasifica desde 'No documentada ni implementada' hasta 'Medida no necesaria'). En función de esta elección, el Excel actualiza automáticamente el Estado del Diagnóstico y arroja el hito correspondiente para el Plan de Adaptación.\n* **Medidas Adicionales (MA)**: Espacio habilitado para que las entidades propongan soluciones operativas propias no contempladas explícitamente en las guías técnicas. Estas medidas innovadoras deben documentarse y luego son evaluadas por la SEDIA (Estado: Pendiente, OK, o NO_OK).\n* **Relación MA-Apart**: Permite a los desarrolladores vincular las nuevas medidas adicionales propuestas con los apartados normativos específicos que mitigan, marcándolos con una 'X'.\n* **Autoeval MA**: Paso definitivo para evaluar la dificultad y madurez de estas medidas adicionales aportadas, operando con la misma lógica que la pestaña de Autoeval MG para completar íntegramente el autodiagnóstico."
          }
      ],
      "flashcards": [
          {
              "front": "¿Cuál es el doble objetivo de la fase de diagnóstico en el sandbox de IA?",
              "back": "Realizar un autodiagnóstico del sistema frente al Reglamento y diseñar un Plan de Adaptación (PDA)."
          },
          {
              "front": "¿Cuántas herramientas de checklist existen en total dentro del marco analizado?",
              "back": "Existen 12 herramientas de checklist, una por cada requisito normativo del RIA evaluado."
          },
          {
              "front": "¿Qué formato y estructura tiene la herramienta de checklist?",
              "back": "Es un documento Excel estructurado en 9 pestañas: 5 de carácter informativo y 4 operativas."
          },
          {
              "front": "¿Qué información se proporciona en la pestaña informativa 'Portada'?",
              "back": "Contiene un recordatorio obligatorio de confidencialidad y el contexto de uso de la herramienta para la SEDIA."
          },
          {
              "front": "¿Qué expone detalladamente la pestaña 'Medidas Guías (MG)'?",
              "back": "Las medidas basadas en buenas prácticas de la industria para facilitar el cumplimiento del RIA, junto a cuestiones orientativas."
          },
          {
              "front": "¿Qué dos valores cualitativos principales debe rellenar la entidad en la pestaña 'Autoeval MG'?",
              "back": "El 'Nivel de dificultad percibido' (Alto, Medio, Bajo) y el 'Nivel de madurez' (de L1 a L8)."
          },
          {
              "front": "¿Qué genera automáticamente la herramienta cuando se elige un 'Nivel de madurez'?",
              "back": "Actualiza el 'Estado Diagnóstico' a '01. Ya diagnosticada' y define el hito del 'Plan de adaptación'."
          },
          {
              "front": "¿Qué indica el nivel de madurez 'L8'?",
              "back": "Indica que la medida es 'No necesaria en mi sistema', por lo que el plan de adaptación marca '05. Ninguna adaptación requerida'."
          },
          {
              "front": "¿Para qué sirve la pestaña operativa 'Medidas Adicionales (MA)'?",
              "back": "Permite a las entidades proponer e incorporar medidas de cumplimiento alternativas basadas en su propia experiencia."
          },
          {
              "front": "¿Quién es el organismo encargado de validar y aprobar las 'Medidas Adicionales' (MA)?",
              "back": "La Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA), consultando a expertos si es necesario."
          },
          {
              "front": "¿Cómo se vincula una Medida Adicional a un apartado del reglamento en la pestaña 'Relación MA-Apart'?",
              "back": "Marcando con una 'X' mayúscula la intersección entre el apartado normativo y la medida adicional."
          },
          {
              "front": "¿Qué acción se realiza en la última pestaña operativa, 'Autoeval MA'?",
              "back": "Se informa el nivel de dificultad y el nivel de madurez de las medidas adicionales aportadas, igual que se hace con las medidas guías."
          }
      ],
      "quiz": [
          {
              "question": "¿Cuál de los siguientes NO es uno de los objetivos del entorno controlado de pruebas (sandbox)?",
              "options": [
                  "Sancionar económicamente a los sistemas que no cumplan el RIA.",
                  "Aportar claridad sobre los requisitos establecidos en el Reglamento.",
                  "Validar la aplicabilidad de las guías técnicas puestas a disposición.",
                  "Transferir conocimiento sobre el cumplimiento a entidades de desarrollo."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Cuál es la distribución exacta de las pestañas en el documento Excel de la checklist?",
              "options": [
                  "4 pestañas informativas y 5 operativas",
                  "5 pestañas informativas y 4 operativas",
                  "6 pestañas informativas y 3 operativas",
                  "3 pestañas informativas y 6 operativas"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué representa la columna 'Nivel de dificultad percibido' en la pestaña Autoeval MG?",
              "options": [
                  "El estado legal del sistema de Inteligencia Artificial.",
                  "El grado de cumplimiento formal exigido por la Comisión Europea.",
                  "La dificultad que la entidad entiende que tendría aplicar la medida (Alto, Medio o Bajo).",
                  "El porcentaje de inversión económica requerido para el proyecto."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Si una empresa asigna un nivel de madurez 'L5. Documentada e Implementada', ¿qué valor tomará el Plan de adaptación?",
              "options": [
                  "01. Documentar e implementar",
                  "02. Implementar",
                  "04. Documentar",
                  "03. Adaptación completa"
              ],
              "correctAnswer": 3
          },
          {
              "question": "Si una empresa necesita informar sobre prácticas de su ecosistema que cumplen con el RIA pero no están en la guía, ¿qué pestaña utilizará?",
              "options": [
                  "Artículo RIA",
                  "Relación MG-Apart",
                  "Medidas Adicionales (MA)",
                  "Autoeval MG"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué estados de evaluación emite la SEDIA frente a una Medida Adicional propuesta?",
              "options": [
                  "Aprobada, Suspendida, Prorrogada",
                  "Pendiente, OK, NO_OK",
                  "L1, L2, L3",
                  "Alto, Medio, Bajo"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué tipo de pestaña es 'Relación MG-Apart' en la estructura del documento?",
              "options": [
                  "Informativa",
                  "Operativa",
                  "Evaluativa",
                  "De configuración técnica"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué ocurre automáticamente con la columna 'Estado Diagnóstico' cuando se selecciona un valor de Nivel de madurez?",
              "options": [
                  "Se bloquea impidiendo la edición.",
                  "Se actualiza al valor '01. Ya diagnosticada'.",
                  "Borra las entradas de dificultad percibida.",
                  "Envía la información a la SEDIA por correo."
              ],
              "correctAnswer": 1
          },
          {
              "question": "De acuerdo con el manual, ¿cuál es el prefijo fijo utilizado en el identificador único de una medida sugerida por la empresa (ID Medida)?",
              "options": [
                  "MG (Medida Guía)",
                  "ID (Identificador)",
                  "RIA (Reglamento IA)",
                  "MA (Medida Adicional)"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Qué se busca conseguir finalmente mediante la cumplimentación de todas las pestañas operativas de la checklist?",
              "options": [
                  "Reemplazar completamente el Reglamento Europeo de Inteligencia Artificial.",
                  "Configurar una red neuronal de caja negra.",
                  "Obtener los inputs para diseñar un Plan de Adaptación (PDA) personalizado.",
                  "Delegar la responsabilidad jurídica a la autoridad nacional."
              ],
              "correctAnswer": 2
          }
      ],
      "glossary": [
          {
              "term": "Plan de Adaptación (PDA)",
              "definition": "Plan de trabajo estructurado que la entidad ejecutará en una fase posterior para implementar las medidas necesarias que garanticen el cumplimiento del RIA."
          },
          {
              "term": "Checklist",
              "definition": "Herramienta operativa en formato Excel compuesta por pestañas informativas y operativas, utilizada para realizar el autodiagnóstico del cumplimiento normativo."
          },
          {
              "term": "Medidas Guías (MG)",
              "definition": "Conjunto de medidas técnicas y organizativas propuestas por la herramienta, extraídas de buenas prácticas de la industria para cumplir los requisitos legales."
          },
          {
              "term": "Medidas Adicionales (MA)",
              "definition": "Medidas de cumplimiento sugeridas directamente por las empresas participantes basadas en su experiencia, que no estaban contempladas originalmente en las guías."
          },
          {
              "term": "Nivel de madurez",
              "definition": "Métrica cualitativa (desde L1 hasta L8) que indica en qué punto de documentación e implementación se encuentra actualmente una medida en el sistema de IA."
          },
          {
              "term": "Nivel de dificultad percibido",
              "definition": "Valoración subjetiva de la entidad (00. Alto, 01. Medio, 02. Bajo) referente al esfuerzo técnico u organizativo que supondría aplicar una medida."
          },
          {
              "term": "Sandbox regulatorio",
              "definition": "Entorno controlado y supervisado que permite experimentar, testear marcos normativos, detectar riesgos tempranamente e impulsar una innovación tecnológica responsable."
          },
          {
              "term": "SEDIA",
              "definition": "Secretaría de Estado de Digitalización e Inteligencia Artificial, institución pública española encargada, entre otras labores, de validar las medidas adicionales en el sandbox."
          },
          {
              "term": "Autodiagnóstico",
              "definition": "Fase inicial donde las entidades evalúan su sistema de IA contra la checklist para descubrir la brecha técnica y operativa frente a la regulación europea."
          },
          {
              "term": "RIA",
              "definition": "Reglamento Europeo de Inteligencia Artificial (Reglamento UE 2024/1689), normativa comunitaria que establece obligaciones estrictas para los sistemas de IA de alto riesgo."
          }
      ]
  }
];
