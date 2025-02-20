export async function detectLanguage(inputText) {
  if (!window.translation || !window.translation.canDetect) {
    throw new Error("Language detection API is not available.");
  }

  // Check if language detection is possible
  const canDetect = await window.translation.canDetect();
  if (canDetect === "no") {
    throw new Error("Language detection is not available.");
  }

  // Create a language detector
  const detector = await window.translation.createDetector();

  // Detect the language of the input text
  const results = await detector.detect(inputText);
  const detectedLang = results[0]?.detectedLanguage || "unknown";

  return detectedLang;
}
