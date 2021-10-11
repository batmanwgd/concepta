const t = '\t',
      validations = {
        required: function(value){
          return value !== '';
        },
        phone: function(value){
          return value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          );
        },
        email: function(value){
          return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        }
      },
      xhr = new XMLHttpRequest();


var result, datetime, specs, msg;
    // form = document.getElementById('jsForm'),
    // postmail = document.getElementById('postmail'),
    // inputsArr = form.querySelectorAll('input'),
    // subjectChosen = form.querySelector('#subject'),
    // textArr = form.querySelectorAll('textarea'),
    // errorMessage = document.querySelector(".error"),
    // successMessage = document.querySelector(".success"),
    // subjectContents = document.querySelector("[name='subjects']").value,
    // subjectStaple = encodeURIComponent("Anonymous Form Submission on Wiki: "),
    // commentsContents = encodeURIComponent(document.querySelector("[name='comments']").value),
    // texpToken = "kc4rdpwqn6uwcvrzkvxmqpzc",
    // batmanToken = "5cwzhcoce1l0o87xn7mi3o0w";
    // simple = `subject=${subjectStaple}${subjectContents}&text=${commentsContents}&access_token=${texpToken}`;

function date(){
  var currentdate = new Date(),
  datetime = "Completed: " + currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();
  return datetime;
};

// Browser Specifications
function browser(){
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browserName  = navigator.appName;
  var fullVersion  = ''+parseFloat(navigator.appVersion); 
  var majorVersion = parseInt(navigator.appVersion,10);
  var nameOffset,verOffset,ix;

  // In Opera 15+, the true version is after "OPR/" 
  if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset+4);
  }
  // In older Opera, the true version is after "Opera" or after "Version"
  else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset+6);
  if ((verOffset=nAgt.indexOf("Version"))!=-1) 
    fullVersion = nAgt.substring(verOffset+8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
  browserName = "Microsoft Internet Explorer";
  fullVersion = nAgt.substring(verOffset+5);
  }
  // In Chrome, the true version is after "Chrome" 
  else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
  browserName = "Chrome";
  fullVersion = nAgt.substring(verOffset+7);
  }
  // In Safari, the true version is after "Safari" or after "Version" 
  else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
  browserName = "Safari";
  fullVersion = nAgt.substring(verOffset+7);
  if ((verOffset=nAgt.indexOf("Version"))!=-1) 
    fullVersion = nAgt.substring(verOffset+8);
  }
  // In Firefox, the true version is after "Firefox" 
  else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
  browserName = "Firefox";
  fullVersion = nAgt.substring(verOffset+8);
  }
  // In most other browsers, "name/version" is at the end of userAgent 
  else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
            (verOffset=nAgt.lastIndexOf('/')) ) 
  {
  browserName = nAgt.substring(nameOffset,verOffset);
  fullVersion = nAgt.substring(verOffset+1);
  if (browserName.toLowerCase()==browserName.toUpperCase()) {
    browserName = navigator.appName;
  }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix=fullVersion.indexOf(";"))!=-1)
    fullVersion=fullVersion.substring(0,ix);
  if ((ix=fullVersion.indexOf(" "))!=-1)
    fullVersion=fullVersion.substring(0,ix);

  majorVersion = parseInt(''+fullVersion,10);
  if (isNaN(majorVersion)) {
  fullVersion  = ''+parseFloat(navigator.appVersion); 
  majorVersion = parseInt(navigator.appVersion,10);
  }

  specs = 'Specs:'+'\n'
  +t, 'Browser: '+browserName+'\n'
  +t, 'Full Version: '+fullVersion+'\n'
  +t, 'Major Version: '+majorVersion+'\n'
  +t, 'Navigator App: '+navigator.appName+'\n'
  +t, 'Navigator User Agent: '+navigator.userAgent+'\n';

  return specs;
};

async function message() {
  // await date();
  // browser();
  msg = `subject=${date()}&text=${browser()}&access_token=5cwzhcoce1l0o87xn7mi3o0w`;
}

async function validate() {
  console.log('Validated logic here...');
  await message();
}

/** START ASYNC - LESS AWAIT, BUT WITH PROMISE */
  // Ensuring Only Fire on Correct Page
  function confirmPage() {
    const page = window.location.href,
        local = [page.includes('localhost:1313')],
        live = [
          page.includes('https://texp.wiki'), 
          page.includes('https://texp.netlify.app')
        ],
        modals = [page.includes('/introduction')],
        confirmPass = 'Modal script should be running 😎',
        confirmFail = 'Modal script should not be running 🧐';
    var result;
  
    function checkPage(arr, val) {
      return arr.some(function(arrVal) {
        return val === arrVal;
      });
    }
  
    const isLocal = checkPage(local, true),
        isLive = checkPage(live, true),
        isModal = checkPage(modals, true);
  
        if(isLocal & isModal) {
          // localhost/dev & correct modals page
          result = console.log('Page:', page, confirmPass),
          validate();
        } else if(isLocal & !isModal){
          // localhost/dev & NOT modals page
          result = console.log('Page:', page, confirmFail);
        } else if(isLive & isModal) {
          // live/prod & correct modals page
          result = console.clear(),
          validate();
        } else {
          // live/prod & NOT modals page
          result = console.clear();
        }
  }
  // run the function with appropriate result promised by confirmPage()
  async function correctPage() {return result}
  
  correctPage().then(
    function(value) {confirmPage(value);},
    function(error) {confirmPage(error);}
  );
  
  /** END ASYNC - LESS AWAIT, BUT WITH PROMISE */


  // Sending the PostMail Message
  function sendPostmail() {
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log('ready state:', this.readyState); // should be 4
        console.log('status:', this.status); // should be 200 OK
        console.log('response:', this.responseText); // response return from request
      }
    });

    xhr.open("POST", "https://postmail.invotes.com/send?");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:1313");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(msg);
    
    // printing output/send
    console.log(xhr.status, msg);
  }

  sendPostmail();