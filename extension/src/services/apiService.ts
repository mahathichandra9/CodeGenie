// import axios from "axios";
// import { CodeGenerationResponse } from "../templates/codeGenerationResponse";
// import { CodeConversionResponse } from "../templates/codeConversionResponse";
// import { CodeAnalysisResponse } from "../templates/codeAnalysisResponse";
// import { CodeOptimizationResponse } from "../templates/codeOptimizationResponse";
// import { ProjectAnalysisResponse } from "../templates/projectAnalysisResponse";

// const API_BASE_URL = "http://localhost:5000"; 
// // const API_BASE_URL = "https://73aa-34-126-148-61.ngrok-free.app";

// export async function generateCodeFromAI(
//     prompt: string,
//     file_content: string,
//     cursor_line: number,
//     language_id: string
// ): Promise<CodeGenerationResponse> {
//     try {
//         console.log(`{prompt: ${prompt}, file_content: ${file_content}, cursor_line: ${cursor_line}, language_id: ${language_id}}`);
//         const response = await axios.post(`${API_BASE_URL}/generate`, {
//             prompt,
//             file_content,
//             cursor_line,
//             language_id
//         });
        
//         if (!response.data || !response.data.status || response.data.status !== "success") {
//             throw new Error(response.data?.error || "Unknown error from backend (generate)");
//         }
        
//         return response.data;
//     } catch (error: any) {
//         console.error("Backend error (generateCodeFromAI):", error?.response?.data || error.message);
//         let errorMessage = "❌ Error fetching AI response for code generation";
//         if (error?.response?.data?.error) {
//             errorMessage += `: ${error.response.data.error}`;
//         } else if (error.message) {
//             errorMessage += `: ${error.message}`;
//         }
//         // vscode.window.showErrorMessage(errorMessage);
//         throw error; // Re-throw to be caught by the caller
//     }
// }

// export async function convertCodeLang(
//     code: string,
//     source_language: string,
//     target_language: string
// ): Promise<CodeConversionResponse> {
//     try {
//         console.log(`{code: ${code}, source_language: ${source_language}, target_language: ${target_language}}`);
//         const response = await axios.post(`${API_BASE_URL}/convert`, {
//             code,
//             source_language,
//             target_language
//         });
        
//         // Check if response has data and status is success
//         if (!response.data || !response.data.status || response.data.status !== "success") {
//             throw new Error(response.data?.error || "Unknown error from backend (convert)");
//         }
        
//         // Validate the response contains the refined_code property (from backend)
//         if (!response.data.refined_code) {
//             console.error("API response missing refined_code property:", response.data);
//             throw new Error(`API response missing refined_code property for ${target_language}`);
//         }
        
//         return response.data;
//     } catch (error: any) {
//         console.error("Backend error (convertCodeLang):", error?.response?.data || error.message);
//         let errorMessage = "❌ Error fetching AI response for code conversion";
//         if (error?.response?.data?.error) {
//             errorMessage += `: ${error.response.data.error}`;
//         } else if (error.message) {
//             errorMessage += `: ${error.message}`;
//         }
//         // vscode.window.showErrorMessage(errorMessage);
//         throw error; 
//     }
// }

// export async function analyzeCode (
// code: string, language_id: string, p0: boolean): Promise<CodeAnalysisResponse> {
//     try {
//         console.log(`{code: ${code}, language_id: ${language_id}}`);
//         const response = await axios.post(`${API_BASE_URL}/analyze`, {
//             code,
//             language_id
//         });

//         if (!response.data || !response.data.status || response.data.status !== "success") {
//             throw new Error(response.data?.error || "Unknown error from backend (convert)");
//         }

//         return response.data;
//     } catch (error: any) {
//         let errorMessage = "";
//         if (error?.response?.data?.error) {
//             errorMessage += `: ${error.response.data.error}`;
//         } else if (error.message) {
//             errorMessage += `: ${error.message}`;
//         }

//         // vscode.window.showErrorMessage(errorMessage);
//         throw error;
//     }
// }

// export async function optimizeCode(
//     code: string,
//     language_id: string
// ): Promise<CodeOptimizationResponse> {
//     try {
//         console.log(`{"code": "${code}", "language_id": "${language_id}"}`);
//         const response = await axios.post(`${API_BASE_URL}/optimize`, {
//             code, 
//             language_id
//         });

//         if (!response.data || !response.data.status) {
//             throw new Error(response.data?.error || "Unknown error from backend (optimize)");
//         }

//         return response.data;
//     } catch (error: any) {
//         let errorMessage = "";
//         if (error?.response?.data?.error) {
//             errorMessage += `: ${error.response.data.error}`;
//         } else if (error.message) {
//             errorMessage += `: ${error.message}`;
//         }

//         // vscode.window.showErrorMessage(errorMessage);
//         throw error;
//     }
// }

// export async function analyzeProject(): Promise<ProjectAnalysisResponse> {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/analyze-project`, {});
//         if (!response.data || response.data.status !== "success") {
//             throw new Error(response.data?.error || "Unknown error from backend (analyze-project)");
//         }
//         return response.data;
//     } catch (error: any) {
//         let errorMessage = "Error fetching project analysis";
//         if (error?.response?.data?.error) {
//             errorMessage += `: ${error.response.data.error}`;
//         } else if (error.message) {
//             errorMessage += `: ${error.message}`;
//         }
//         throw new Error(errorMessage);
//     }
// }


































import axios from "axios";
import { CodeGenerationResponse } from "../templates/codeGenerationResponse";
import { CodeConversionResponse } from "../templates/codeConversionResponse";
import { CodeAnalysisResponse } from "../templates/codeAnalysisResponse";
import { CodeOptimizationResponse } from "../templates/codeOptimizationResponse";
import { ProjectAnalysisResponse } from "../templates/projectAnalysisResponse";

// const API_BASE_URL = "http://localhost:5000"; 
const API_BASE_URL = "https://126b-35-199-180-54.ngrok-free.app";

export async function generateCodeFromAI(
    prompt: string,
    file_content: string,
    cursor_line: number,
    language_id: string
): Promise<CodeGenerationResponse> {
    try {
        console.log(`{prompt: ${prompt}, file_content: ${file_content}, cursor_line: ${cursor_line}, language_id: ${language_id}}`);
        const response = await axios.post(`${API_BASE_URL}/generate`, {
            prompt,
            file_content,
            cursor_line,
            language_id
        });
        
        if (!response.data || !response.data.status || response.data.status !== "success") {
            throw new Error(response.data?.error || "Unknown error from backend (generate)");
        }
        
        return response.data;
    } catch (error: any) {
        console.error("Backend error (generateCodeFromAI):", error?.response?.data || error.message);
        let errorMessage = "❌ Error fetching AI response for code generation";
        if (error?.response?.data?.error) {
            errorMessage += `: ${error.response.data.error}`;
        } else if (error.message) {
            errorMessage += `: ${error.message}`;
        }
        // vscode.window.showErrorMessage(errorMessage);
        throw error; // Re-throw to be caught by the caller
    }
}

export async function convertCodeLang(
    code: string,
    source_language: string,
    target_language: string
): Promise<CodeConversionResponse> {
    try {
        console.log(`{code: ${code}, source_language: ${source_language}, target_language: ${target_language}}`);
        const response = await axios.post(`${API_BASE_URL}/convert`, {
            code,
            source_language,
            target_language
        });
        
        // Check if response has data and status is success
        if (!response.data || !response.data.status || response.data.status !== "success") {
            throw new Error(response.data?.error || "Unknown error from backend (convert)");
        }
        
        // Validate the response contains the refined_code property (from backend)
        if (!response.data.refined_code) {
            console.error("API response missing refined_code property:", response.data);
            throw new Error(`API response missing refined_code property for ${target_language}`);
        }
        
        return response.data;
    } catch (error: any) {
        console.error("Backend error (convertCodeLang):", error?.response?.data || error.message);
        let errorMessage = "❌ Error fetching AI response for code conversion";
        if (error?.response?.data?.error) {
            errorMessage += `: ${error.response.data.error}`;
        } else if (error.message) {
            errorMessage += `: ${error.message}`;
        }
        // vscode.window.showErrorMessage(errorMessage);
        throw error; 
    }
}

export async function analyzeCode(
    code: string, 
    language_id: string, 
    includeFixes: boolean = false
): Promise<CodeAnalysisResponse> {
    try {
        console.log(`{code: ${code}, language_id: ${language_id}, includeFixes: ${includeFixes}}`);
        
        // Choose the appropriate endpoint based on whether fixes are requested
        const endpoint = includeFixes ? '/analyze-with-fixes' : '/analyze';
        
        const response = await axios.post(`${API_BASE_URL}${endpoint}`, {
            code,
            language_id,
            include_fixes: includeFixes
        });

        // Handle different response statuses
        if (!response.data || !response.data.status) {
            throw new Error(response.data?.error || "Unknown error from backend (analyze)");
        }

        // Allow both "success" and "partial_success" status
        if (response.data.status !== "success" && response.data.status !== "partial_success") {
            throw new Error(response.data?.error || `Analysis failed with status: ${response.data.status}`);
        }

        return response.data;
    } catch (error: any) {
        console.error("Backend error (analyzeCode):", error?.response?.data || error.message);
        let errorMessage = "❌ Error fetching AI response for code analysis";
        if (error?.response?.data?.error) {
            errorMessage += `: ${error.response.data.error}`;
        } else if (error.message) {
            errorMessage += `: ${error.message}`;
        }

        // Log the full error for debugging
        console.error("Full error details:", error);
        
        // Re-throw to be caught by the caller
        throw error;
    }
}

export async function optimizeCode(
    code: string,
    language_id: string
): Promise<CodeOptimizationResponse> {
    try {
        console.log(`{"code": "${code}", "language_id": "${language_id}"}`);
        const response = await axios.post(`${API_BASE_URL}/optimize`, {
            code, 
            language_id
        });

        if (!response.data || !response.data.status) {
            throw new Error(response.data?.error || "Unknown error from backend (optimize)");
        }

        return response.data;
    } catch (error: any) {
        console.error("Backend error (optimizeCode):", error?.response?.data || error.message);
        let errorMessage = "❌ Error fetching AI response for code optimization";
        if (error?.response?.data?.error) {
            errorMessage += `: ${error.response.data.error}`;
        } else if (error.message) {
            errorMessage += `: ${error.message}`;
        }

        // vscode.window.showErrorMessage(errorMessage);
        throw error;
    }
}

export async function analyzeProject(): Promise<ProjectAnalysisResponse> {
    try {
        const response = await axios.post(`${API_BASE_URL}/analyze-project`, {});
        if (!response.data || response.data.status !== "success") {
            throw new Error(response.data?.error || "Unknown error from backend (analyze-project)");
        }
        return response.data;
    } catch (error: any) {
        console.error("Backend error (analyzeProject):", error?.response?.data || error.message);
        let errorMessage = "❌ Error fetching project analysis";
        if (error?.response?.data?.error) {
            errorMessage += `: ${error.response.data.error}`;
        } else if (error.message) {
            errorMessage += `: ${error.message}`;
        }
        throw new Error(errorMessage);
    }
}