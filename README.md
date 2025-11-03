# 🧠 Research Assistant – AI-Powered Chrome Extension

A **Chrome Extension** integrated with a **Spring Boot backend** that helps users summarize, extract data, and take notes directly from any webpage.  
This project demonstrates full-stack integration between a browser extension frontend and a RESTful backend API.

---

## 🚀 Features

- 🧩 **Summarize Text:** Sends selected or input text to backend for summarization.
- 📊 **Extract Data:** Extracts key information from the provided text.
- 🗒️ **Take Notes:** Save, edit, and persist notes locally in Chrome storage.
- 🔗 **Seamless Integration:** Communicates securely between Chrome and Spring Boot using REST APIs.
- ⚙️ **Extensible Design:** Easy to connect with AI APIs like OpenAI or Gemini for advanced text processing.

---

## 🏗️ Tech Stack

**Frontend (Chrome Extension)**  
- HTML, CSS, JavaScript  
- Chrome Extension API (Manifest V3)  
- Local Storage for notes persistence

**Backend (Spring Boot)**  
- Java, Spring Boot  
- RESTful API (`/api/research/process`)  
- CORS configuration for frontend-backend communication

---

## 📁 Project Structure

```

research-assistant/
├── backend/
│   ├── src/main/java/com/example/research/...
│   ├── pom.xml
│   └── ...
│
├── frontend/
│   ├── manifest.json
│   ├── background.js
│   ├── sidepanel.html
│   ├── sidepanel.js
│   ├── sidepanel.css
│   └── icons/
│
└── README.md

````

---

## ⚙️ Setup Instructions

### 🔹 1. Backend Setup (Spring Boot)
1. Navigate to the backend folder  
   ```bash
   cd backend
````

2. Run the Spring Boot application

   ```bash
   mvn spring-boot:run
   ```
3. API will start at
   👉 **[http://localhost:8080/api/research/process](http://localhost:8080/api/research/process)**

---

### 🔹 2. Frontend Setup (Chrome Extension)

1. Open Chrome and go to

   ```
   chrome://extensions/
   ```
2. Turn on **Developer Mode**
3. Click **Load unpacked**
4. Select the **frontend** folder
5. The extension icon will appear in your Chrome toolbar

---

## 🧩 Usage

1. Open any webpage and click the **Research Assistant** extension.
2. In the side panel:

   * ✍️ Write or paste text in the note area
   * ⚙️ Click **Summarize** or **Extract Data** to send it to the backend
   * 💾 Click **Save Notes** to store notes locally
3. The result will appear in the **output area**.

---

## 🧠 API Reference

**Endpoint:**
`POST /api/research/process`

**Request Body:**

```json
{
  "content": "Your input text here",
  "operation": "summarize" // or "extract"
}
```

**Response:**

```json
"Processed: your summarized or extracted data"
```

---

## 💡 Future Enhancements

* 🔹 Integrate **AI APIs** (OpenAI/Gemini) for real-time summarization.
* 🔹 Add **keyword extraction** and **contextual analysis**.
* 🔹 Implement **user authentication** for saved sessions.

---

## 🧑‍💻 Author

**Dheeraj Singh**
📍 Varanasi, India
💼 Full Stack Developer (Java | Spring Boot | React | Chrome Extensions)
🔗 [GitHub Profile](https://github.com/dhrax21)

```

---

Would you like me to include a **“Screenshots” section** (with placeholders for images) and a **demo GIF section** so your GitHub page looks even more polished and recruiter-friendly?
```
