import axios from './axios'; 

export const getGeminiResponse = (prompt) => {
    return axios.get('/gemini-response/', {
        params: {
            prompt: prompt,
        },
    });
};
