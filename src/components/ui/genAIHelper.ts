import * as dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

export async function fetchAIResponse(prompt: string): Promise<string | null> {
    try {
        const genAI = new GoogleGenerativeAI("AIzaSyAIZ645009UH6t76Ac1iR1NyJxtDtPLMo0");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt + "\nalso do not use any bullet points, just summarize it as normal text seperated by empty lines. word limit 200. tell the user how they can optimise their savings and whether they are close to finishing the budget or not and also tell them why they spending too much (close to full budget) if they are");
        return result.response.text || null;
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return null;
    }
}
