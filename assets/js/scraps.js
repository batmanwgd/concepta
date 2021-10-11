function validate() {

    (function date(){
      var currentdate = new Date(),
      datetime = "Form Completed: " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
      const dateTime = console.log(t, datetime);
      return dateTime;
    })();
  
    (function browser(){
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
  
      const specs = console.log(t, 'Browser: '+browserName+'\n'
      +t, 'Full Version: '+fullVersion+'\n'
      +t, 'Major Version: '+majorVersion+'\n'
      +t, 'Navigator App: '+navigator.appName+'\n'
      +t, 'Navigator User Agent: '+navigator.userAgent+'\n'
      );
  
      return specs;
    })();
    
    (function emoji(){
      //console.log(t, 'Emoji: 🧐');
      const emoji = (t, 'Emoji: 🧐');
      console.log(t, emoji);
    })();
  
    (function subject(){
      console.log(t, 'Subject: Ideas');
    })();
    
    (function comments(){
      var comments = 'This is neat!';
      console.log(t, 'Comments: ', comments);
    })();
    
    (function captcha(){
      var math =  Math.round(5 + Math.random()*10);
      console.log(t, 'Captcha:', math);
    })();
  }
  
  function xhr() {
      console.log('XHR Information', emoji);
  }
  
  async function validated() {
    await xhr();
      return result;
  }
  
  validated().then(
    function(value) {validate(value);},
    function(error) {validate(error);}
  );