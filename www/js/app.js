if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element


  name: 'Sales App', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data() {
    return {
      foo: 'bar'
    };
  },
  // App root methods
  methods: {
    doSomething() {
      // ...
    }
  },


  // App routes
  routes: routes,
});