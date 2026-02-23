import { GoogleGenAI } from "@google/genai";
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            text: 'A sports team logo for "VOLT VIPERS". The logo features a fierce green snake (viper) with glowing neon green and blue lightning effects. The snake is coiled around a glowing cricket ball. In the background, there is a shield shape with neon green outlines. There are cricket stumps on the right side of the snake. The text "VOLT VIPERS" is written in bold, aggressive, light blue typography across the bottom, with a small yellow lightning bolt between the words. The overall style is an esports or sports mascot logo, with dark background and vibrant neon colors. Transparent or dark background.',
          },
        ],
      },
      config: {
        imageConfig: {
              aspectRatio: "1:1",
              imageSize: "1K"
          }
      },
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        fs.writeFileSync('logo.png', Buffer.from(base64EncodeString, 'base64'));
        console.log('Logo generated and saved to logo.png');
      }
    }
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

generate();
