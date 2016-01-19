System.config({
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    },
    'angular2-google-maps': {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});

System
  .import('app/boot')
  .then(null, console.error.bind(console));