
import { GoogleGenAI, Type } from "@google/genai";
import type { QuizQuestion } from '../types';

if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const quizSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            questionText: { 
                type: Type.STRING,
                description: "El texto de la pregunta del quiz."
            },
            options: {
                type: Type.ARRAY,
                description: "Un arreglo de 4 posibles respuestas.",
                items: {
                    type: Type.OBJECT,
                    properties: {
                        text: {
                            type: Type.STRING,
                            description: "El texto de la opción de respuesta."
                        },
                        isCorrect: {
                            type: Type.BOOLEAN,
                            description: "Verdadero si esta es la respuesta correcta, falso en caso contrario."
                        }
                    },
                    required: ['text', 'isCorrect']
                }
            },
            explanation: {
                type: Type.STRING,
                description: "Una explicación breve y clara de por qué la respuesta correcta es correcta."
            }
        },
        required: ['questionText', 'options', 'explanation']
    }
};


export const generateQuiz = async (topic: string): Promise<QuizQuestion[]> => {
  try {
    const prompt = `
      Eres un experto en la creación de material educativo en español.
      Genera un quiz de 4 preguntas de opción múltiple sobre el tema: "${topic}".
      Las preguntas deben ser apropiadas para un estudiante de entre 12 y 16 años.
      Para cada pregunta, proporciona el texto de la pregunta, cuatro opciones de respuesta (una y solo una correcta y tres incorrectas), y una breve explicación de por qué la respuesta correcta lo es.
      Asegúrate de que las opciones y la explicación sean claras, concisas y no ambiguas.
      La respuesta debe ser únicamente el JSON.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
      },
    });
    
    // The response is a string that needs to be parsed
    const jsonText = response.text.trim();
    const parsedJson = JSON.parse(jsonText);
    
    // Basic validation
    if (!Array.isArray(parsedJson)) {
        throw new Error("La respuesta de la API no es un arreglo.");
    }

    return parsedJson as QuizQuestion[];

  } catch (error) {
    console.error("Error generating quiz with Gemini:", error);
    // In a real app, you might want to return a default quiz or an error object
    throw new Error("No se pudo generar el quiz. Inténtalo de nuevo más tarde.");
  }
};
