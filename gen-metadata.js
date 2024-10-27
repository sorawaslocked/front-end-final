let bootstrapLink = document.createElement('link');
bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
bootstrapLink.rel = 'stylesheet';
bootstrapLink.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
bootstrapLink.crossOrigin = 'anonymous';
document.head.appendChild(bootstrapLink);

let iconsLink = document.createElement('link');
iconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
iconsLink.rel = 'stylesheet';
document.head.appendChild(iconsLink);

let preconnectGoogleFonts = document.createElement('link');
preconnectGoogleFonts.href = 'https://fonts.googleapis.com';
preconnectGoogleFonts.rel = 'preconnect';
document.head.appendChild(preconnectGoogleFonts);

let preconnectGoogleStatic = document.createElement('link');
preconnectGoogleStatic.href = 'https://fonts.gstatic.com';
preconnectGoogleStatic.rel = 'preconnect';
preconnectGoogleStatic.crossOrigin = 'anonymous';
document.head.appendChild(preconnectGoogleStatic);

let fontsLink = document.createElement('link');
fontsLink.href = 'https://fonts.googleapis.com/css2?family=Fascinate+Inline&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';
fontsLink.rel = 'stylesheet';
document.head.appendChild(fontsLink);

let customStylesheet = document.createElement('link');
customStylesheet.href = 'styles/main.css';
customStylesheet.rel = 'stylesheet';
document.head.appendChild(customStylesheet);

let customStylesheet2 = document.createElement('link');
customStylesheet2.href = 'styles/auth.css';
customStylesheet2.rel = 'stylesheet';
document.head.appendChild(customStylesheet2);
