import TranslationComponent from "./components/TranslationComponent";
import SummarizerComponent from "./components/SummarizerComponent";
import LanguageDetector from "./components/LanguageDetector";

export default function Home() {
  return (
    <>
      <TranslationComponent />
      <SummarizerComponent />
      <LanguageDetector />
    </>
  );
}
