import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini AI client
// The API key is guaranteed to be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Fetches a creative hello world greeting from Gemini.
 * @returns A string containing the greeting.
 */
export const fetchCreativeGreeting = async (): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = "Generate a short, creative, and enthusiastic 'Hello World' message for a developer building their first AI app. Keep it under 50 words. Add a few emojis.";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Hello World! (Fallback response)";
  } catch (error) {
    console.error("Error fetching greeting from Gemini:", error);
    return "Hello World! (Could not connect to AI)";
  }
};