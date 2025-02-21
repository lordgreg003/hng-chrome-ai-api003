"use client";
import React, { useState } from "react";

function TranslationComponent() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("es");

  const handleTranslate = async () => {
    setLoading(true);
    setError("");
    setTranslatedText("");

    const translationOptions = {
      sourceLanguage: "en", // assuming the input is in English
      targetLanguage: targetLanguage,
    };

    try {
      const availability = await window.translation.canTranslate(
        translationOptions
      );

      if (availability === "no") {
        setError("Translation not available for these languages.");
        setLoading(false);
        return;
      }

      const translator = await window.translation.createTranslator(
        translationOptions
      );
      const result = await translator.translate(inputText);

      // Show translated text above as chat output
      setTranslatedText(result);
    } catch (err) {
      console.error("Translation Error:", err);
      setError("An error occurred during translation.");
    } finally {
      setLoading(false);
      setInputText(""); // Clear input field after sending
    }
  };

  return (
    <div className="translation-container">
      <h2 className="translation-title">Text Translator</h2>

      {/* Chat Display Area */}
      <div className="translation-chat">
        {translatedText && (
          <div className="chat-bubble translated">
            <p>{translatedText}</p>
          </div>
        )}
        {error && <p className="translation-error">{error}</p>}
      </div>

      {/* Input Section */}
      <div className="translation-input-section">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to translate"
          rows={3}
          className="translation-textarea"
        />
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          className="translation-select"
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
        </select>
        <button
          type="button"
          onClick={handleTranslate}
          disabled={loading}
          className="translation-button"
        >
          {loading ? "Translating..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default TranslationComponent;
