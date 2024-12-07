import * as dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config()

const genAI = new GoogleGenerativeAI("AIzaSyAIZ645009UH6t76Ac1iR1NyJxtDtPLMo0");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());