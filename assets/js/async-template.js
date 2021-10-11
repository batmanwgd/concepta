var result;

function validate() {

  (function date(){
    console.log('\tDate & Time');
  })();

  (function browser(){
    console.log('\tBrowser');
  })();
  
  (function emoji(){
    console.log('\tEmoji');
  })();

  (function subject(){
    console.log('\tSubject');
  })();
  
  (function message(){
    console.log('\tMessage');
  })();
  
  (function captcha(){
    console.log('\tCaptcha');
  })();
}

function xhr() {
	console.log('XHR info: ');
}

async function validated() {
  await xhr();
	return result;
}

validated().then(
  function(value) {validate(value);},
  function(error) {validate(error);}
);