// sidepanel.js
document.getElementById("summarize").addEventListener("click", async () => {
  document.getElementById("results").textContent = "Summarizing the page content..."
  // Example fetch from local backend
  const note = document.getElementById("noteArea").value || "No content provided";
try {
  const response = await fetch("http://localhost:8080/api/research/process", {
    method: "POST", // 👈 must be POST
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: note,          // ✅ matches backend field name
      operation: "summarize"  // ✅ you can customize this
    })
  });

  if (!response.ok) throw new Error(`Server error: ${response.status}`);
  
  const data = await response.text();
  document.getElementById("results").textContent = data;

} catch (error) {
  document.getElementById("results").textContent = "Error: " + error.message;
}
});

document.getElementById("extract").addEventListener("click", async () => {
  document.getElementById("results").textContent = "Extracting data...";
  // Add your logic here later
});

document.getElementById("saveNote").addEventListener("click", () => {
  const note = document.getElementById("noteArea").value;
  chrome.storage.local.set({ note }, () => {
    document.getElementById("results").textContent = "Note saved!";
  });
});

// Load saved note
chrome.storage.local.get("note", (data) => {
  if (data.note) document.getElementById("noteArea").value = data.note;
});
