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
      setTranslatedText(result);
    } catch (err) {
      console.error("Translation Error:", err);
      setError("An error occurred during translation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translation-container">
      <h2 className="translation-title">Text Translator</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
        rows={4}
        cols={50}
        className="translation-textarea"
      />
      <br />
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
      <br />
      <button
        type="button"
        onClick={handleTranslate}
        disabled={loading}
        className="translation-button"
      >
        {loading ? "Translating..." : "Translate"}
      </button>
      {error && <p className="translation-error">{error}</p>}
      {translatedText && (
        <div className="translation-result">
          <h3 className="translation-result-title">Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default TranslationComponent;
