// This package polyfills Blob implementation on PhantomJS
// which is used in Travis CI tests. PhantomJS uses internally
// an old WebKit implementation which has some bugs.
//
// See:
// https://github.com/peerlibrary/peerlibrary/issues/157
// https://github.com/ariya/phantomjs/issues/11013

Package.describe({
  summary: "Polyfill for Blob to use in tests in PhantomJS",
  version: '0.1.2',
  name: 'peerlibrary:blob',
  git: 'https://github.com/peerlibrary/meteor-blob.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.add_files([
    'Blob/Blob.js'
  ], 'client', {bare: true});
});

// If it runs among other tests, it pollyfills as well
Package.on_test(function (api) {
  api.add_files([
    'Blob/Blob.js'
  ], 'client', {bare: true});
});
