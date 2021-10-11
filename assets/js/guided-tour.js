import Shepherd from 'shepherd.js';
const t = '\t',
      n = '\n';

const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      },
      classes: 'class-1 class-2',
      scrollTo: { behavior: 'smooth', block: 'center' }
    }
  });
  
  tour.addStep({
    title: 'Welcome to the NEW Total Expert Wiki',
    text: `Getting started can be a little overwhelming, so let's take a look around together! ☺️`,
    attachTo: {
      element: '.tour1',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'teal-doks-dark',
        classes: 'teal-doks-dark',
        text: 'Next'
      }
    ],
    id: 'step1',
    arrow: false
  });

  tour.addStep({
    title: 'Feature: Dark Mode 😎',
    text: `Toggling dark mode on/off can help match your system theme, and avoid eye strain depending on your preferences.<br/><br/>Regardless which you prefer, you can set it once or change throughout your time on the wiki. ☺️`,
    attachTo: {
      element: '.tour2',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'teal-doks-dark',
        text: 'Next'
      }
    ],
    id: 'step2',
    arrow: true
  });

  tour.addStep({
    title: 'Navigation: Deck 😶‍🌫️',
    text: `This really isn't ready for production so to speak, but you can checkout my notes if you want <em>(updated daily)</em> to help me prep for presentation of all these new materials.`,
    attachTo: {
      element: 'ul.navbar-nav:nth-child(1) > li:nth-child(1) > a:nth-child(1)',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'teal-doks-dark',
        text: 'Next'
      }
    ],
    id: 'step3',
    arrow: true
  });
  tour.addStep({
    title: 'Navigation: Update(s)',
    text: `This really isn't ready for production either, but whenever we have major updates, I'll be adding in details on those here.`,
    attachTo: {
      element: 'li.nav-item:nth-child(3) > a:nth-child(1)',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'teal-doks-dark',
        text: 'Next'
      }
    ],
    id: 'step4',
    arrow: true
  });

  tour.addStep({
    title: 'Feature: Live Search ',
    text: `Looking for something? No problemo! This active/live search should be able to get you there, lickity-split!`,
    attachTo: {
      element: 'html body.home.dark header.navbar.fixed-top.navbar-expand-md.navbar-light div.container div.collapse.navbar-collapse.order-4.order-md-1 form.navbar-form.flex-grow-1.order-7.order-md-3 input#userinput.form-control.is-search',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'teal-doks-dark',
        text: 'Next'
      }
    ],
    id: 'step5',
    arrow: true
  });

  tour.addStep({
    title: 'Feature: Tooltips ',
    text: `Not sure about a word? We've got that covered too!<br/><br/>Certain words that might be a little less obvious regarding their meaning &amp; context, will have a purple dashed underline, that you can hover over, and see a brief explanation in a tooltip design.<br/><br/>Other words, requiring a bit more of a comprehensive review, will be linked directly to our site dictionary, which features more in depth explananations, examples &amp; resources.`,
    attachTo: {
      element: 'html body.home.dark header.navbar.fixed-top.navbar-expand-md.navbar-light div.container div.collapse.navbar-collapse.order-4.order-md-1 form.navbar-form.flex-grow-1.order-7.order-md-3 input#userinput.form-control.is-search',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'teal-doks-dark',
        text: 'Next'
      }
    ],
    id: 'step6',
    arrow: true
  });

  tour.addStep({
    title: 'Navigation: Doks ',
    text: `Ah... yes, where the magic happens! This is the main place where all the good stuff is.`,
    attachTo: {
      element: 'ul.navbar-nav:nth-child(1) > li:nth-child(1) > a:nth-child(1)',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'teal-doks-dark',
        text: 'Next'
      }
    ],
    id: 'step7',
    arrow: true
  });

  tour.addStep({
    title: 'Getting Started! ',
    text: `Now that we've gotten the initial tour out of the way, let's get started!`,
    attachTo: {
      element: '.tour6',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'teal-doks-dark',
        classes: 'teal-doks-dark',
        text: 'Finish'
      }
    ],
    id: 'step8',
    arrow: true
  });
  

  /** START ASYNC - LESS AWAIT, BUT WITH PROMISE */
  // Ensuring Only Fire on Correct Page
  function confirmPage() {
    const page = window.location.href,
        local = [page.includes('localhost')],
        live = [
          page.includes('https://texp.wiki'), 
          page.includes('https://texp.netlify.app')
        ],
        modals = ['/', 'https://texp.wiki/', 'https://texp.netlify.app/', 'https://texp.wiki', 'https://texp.netlify.app', 'localhost:1313/', 'localhost:1313', 'http://localhost:1313/'],
        confirmPass = 'Tour script should be running 😎',
        confirmFail = 'Tour script should not be running 🧐';
    var result;
  
    function checkPage(arr, val) {
      return arr.some(function(arrVal) {
        return val === arrVal;
      });
    }
  
    var isLocal = checkPage(local, true),
        isLive = checkPage(live, true),
        isModal = checkPage(modals, page);
  
        if(isModal) {
          result = console.log('Page:', page, n, confirmPass),
          tour.start();
        } else {
          result = console.log('Page:', page, n, confirmFail);
        }
  }
  // run the function with appropriate result promised by confirmPage()
  async function correctPage() {return result}
  
  correctPage().then(
    function(value) {confirmPage(value);},
    function(error) {confirmPage(error);}
  );
  
  /** END ASYNC - LESS AWAIT, BUT WITH PROMISE */