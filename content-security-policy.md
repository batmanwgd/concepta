default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval' 'unsafe-dynamic'; 
script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; 
connect-src * data: blob: 'unsafe-inline'; 
img-src * data: blob: 'unsafe-inline'; 
frame-src * data: blob: ; 
style-src * data: blob: 'unsafe-inline';
font-src * data: blob: 'unsafe-inline';
frame-ancestors * data: blob: 'unsafe-inline';

default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';


FROM

default-src 'self' https://texp.wiki https://texp.netlify.app; frame-ancestors https://jamstackthemes.dev https://texp.wiki https://texp.netlify.app; manifest-src 'self'; connect-src 'self'; font-src 'self'; img-src 'self' data:; script-src 'unsafe-inline' https://texp.netlify.app/js/highlight.min.js https://texp.netlify.app/main.min.js https://texp.netlify.app/index.min.js https://texp.wiki/js/highlight.min.js https://texp.wiki/main.min.js https://texp.wiki/index.min.js https://texp.wiki/js/bootstrap.min.js https://texp.netlify.app/js/bootstrap.min.js https://texp.netlify.app/js/vendor/katex/dist/contrib/auto-render.min.js https://texp.wiki/js/vendor/katex/dist/contrib/auto-render.min.js; style-src 'unsafe-inline' https://texp.netlify.app/main.css https://texp.wiki/main.css data:; base-uri 'self'; style-src-elem 'unsafe-inline' https://texp.netlify.app/main.css https://texp.wiki/main.css;

Original Persona for Carlos within the TEXP FlowMapp: https://app.flowmapp.com/share/fd1fd99f15132abb5ca4df11da8dd6bb/personas/46871/
