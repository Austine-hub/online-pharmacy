// src/components/HighlightText.jsx
export default function HighlightText({ text, query }) {
  if (!query) return text;

  // normalize utility
  const normalizeText = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);

  const startIndex = normalizedText.indexOf(normalizedQuery);
  if (startIndex === -1) return text;

  const endIndex = startIndex + normalizedQuery.length;

  return (
    <>
      {text.slice(0, startIndex)}
      <span className="bg-yellow-200 font-semibold">
        {text.slice(startIndex, endIndex)}
      </span>
      {text.slice(endIndex)}
    </>
  );
}
