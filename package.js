Package.describe({
  summary: "Polyfill for Blob to use in tests in PhantomJS",
  version: '0.1.2',
  name: 'mrt:blob',
  git: 'https://github.com/peerlibrary/meteor-blob.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:blob@0.1.2');
});
