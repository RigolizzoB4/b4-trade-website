import React, { useEffect } from 'react';

// Exibe o conteúdo do zip "b4-news-system-corrected" exatamente como está,
// sem alterações, por meio de um iframe apontando para /news/public/index.html
// (os arquivos foram extraídos para /public/news/public/*, mantendo paths originais)
export default function Insights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white" style={{minHeight: 'calc(100vh - 200px)'}}>
      <div className="container-custom" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div style={{border: '1px solid #eee', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)'}}>
          <iframe
            title="B4 News System"
            src="/news/public/index.html"
            style={{width: '100%', height: '80vh', border: '0'}}
          />
        </div>
      </div>
    </div>
  );
}
