import React, { useState } from 'react';

function ConteoArchivo() {
  const [fileContent, setFileContent] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleFileRead = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
        setWordCount(countWords(content));
      };
      reader.readAsText(file);
    }
  };

  const countWords = (text) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  };

  return (
    <div>
      <h1>Contar Palabras en Archivo</h1>
      <input type="file" accept=".txt" onChange={handleFileRead} />
      {fileContent && (
        <div>
          <h2>Contenido del Archivo:</h2>
          <pre>{fileContent}</pre>
          <p>Número de palabras: {wordCount}</p>
        </div>
      )}
    </div>
  );
}

export default ConteoArchivo;
