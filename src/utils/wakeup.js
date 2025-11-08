export async function wakeBackend() {
  const url = "https://movie-app-ifk9.onrender.com/";
  try {
    await fetch(url, { method: "GET", mode: "no-cors" });
    console.log("Wake-up ping sent to backend:", url);
  } catch (err) {
    console.warn("Wake-up ping to backend failed (likely sleeping):", err);
  }
}
