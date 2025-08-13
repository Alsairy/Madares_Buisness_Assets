function ensureTesseract(cb){
  if (typeof Tesseract !== 'undefined') return cb();
  const s = document.createElement('script');
  s.src = 'https://unpkg.com/tesseract.js@4.0.2/dist/tesseract.min.js';
  s.defer = true; s.onload = cb; document.head.appendChild(s);
}
async function madaresRunOCR(fileOrUrl, onProgress){
  await new Promise(res => ensureTesseract(res));
  const worker = await Tesseract.createWorker({ logger: m => onProgress && onProgress(m) });
  await worker.loadLanguage('ara+eng'); await worker.initialize('ara+eng');
  const { data: { text } } = await worker.recognize(fileOrUrl);
  await worker.terminate();
  return text;
}
