#  CodeGenie - AI-Powered Coding Assistant for VS Code 

## 🚀 Introduction  
CodeGenie is an AI-powered coding assistant integrated into Visual Studio Code that enhances developer productivity through real-time code generation, intelligent suggestions, and automated code transformations.  
Powered by DeepSeek Coder, CodeGenie helps developers write faster, reduce errors, and simplify complex coding tasks.

---

## 🎯 Key Highlights  
⚡ Real-time AI code generation from comments  
🧠 Context-aware intelligent suggestions  
🔄 Code conversion between programming languages  
🐞 Early bug and vulnerability detection  
🧹 Automatic removal of unnecessary comments  
📄 Project-level code summarization  

---

## 🔥 Use Cases  
💻 Software Development — Faster coding and reduced manual effort  
🛠️ Refactoring — Clean and optimized code suggestions  
🐞 Debugging — Detects issues and suggests fixes  
📚 Learning — Helps students understand and write code efficiently  

---

## 🏗️ System Architecture  

<p align="center">
  <img src="images/codegenie arc.jpg" width="700"/>
</p>

The system consists of three main components:  
• VS Code Extension — Captures user input and displays AI-generated suggestions  
• Flask Backend — Handles API requests and processes data  
• DeepSeek Coder Model — Generates intelligent code outputs using GPU acceleration  

---

## 🔄 Workflow  

<p align="center">
  <img src="images/codegenie workflow.png" width="700"/>
</p>

User Input (comments/code) → Extension → Flask API → AI Model → Processed Output → Display in VS Code  

---

## 🧠 Core Technologies  
• DeepSeek Coder 1.3B (LLM for code generation)  
• Python & Flask (Backend API)  
• JavaScript / TypeScript (VS Code Extension)  
• GPU Acceleration (RTX 4090)  

---

## ⚙️ System Design & Processing  
• Input: Code snippets or comments from user  
• Preprocessing: Validation, normalization, and context extraction  
• Processing: AI model generates relevant code  
• Output: Suggestions, completions, or transformations  

---

## 🏆 Key Features  
✅ Comment-based code generation  
✅ Multi-language code conversion  
✅ Intelligent autocompletion  
✅ Bug detection and optimization suggestions  
✅ Project summarization  

---

## 🧪 Technical Learnings  
• Prompt tuning for better AI outputs  
• Reducing latency using GPU acceleration  
• Efficient communication between extension and backend  
• Modular backend design for scalability  

---

## ⚠️ Challenges  
• Managing latency in real-time code generation  
• Optimizing model performance with limited resources  
• Balancing speed vs accuracy in model selection  

---

## 🚀 Future Scope  
🔮 Deployment on VS Code Marketplace  
🔮 Support for more programming languages  
🔮 Voice-based coding assistance  
🔮 Cloud-based scalable backend  

---

## 📌 Project Vision  
To build an intelligent AI coding assistant that simplifies development, enhances productivity, and makes coding more accessible for everyone.
