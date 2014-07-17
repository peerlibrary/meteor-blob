Blob
====

Meteor smart package which provides a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) polyfill.
Useful when your code uses `Blob`, but you are testing [Meteor packages on Travis CI](https://github.com/arunoda/travis-ci-meteor-packages/)
which uses PhantomJS which is lacking it.

Adding this package to your [Meteor](http://www.meteor.com/) application polyfills `Blob` in the global scope.

Client side only.

Installation
------------

Add it as a dependency to tests of your package which uses `Blob`. In `Package.on_test` section of your `package.js`
file add it to `api.use`. For example:
 
```
Package.on_test(function (api) {
  api.use(['blob'], 'client');
});
```

Add a dependency to the package in `smart.json` file as well:

```
{
  "packages": {
    "blob": {}
  }
}
```
