'use strict';

var name = 'import-inspector-metadata';
var key = typeof Symbol === 'function' ? Symbol(name) : name;
var callbacks = [];

function wrap(promise, metadata) {
  promise[key] = metadata;

  callbacks.forEach(function(callback) {
    callback(metadata);
  });

  return promise;
}

function inspect(promise) {
  return promise[key];
}

function addCallback(callback) {
  callbacks.push(callback);
}

exports.wrap = wrap;
exports.inspect = inspect;
exports.addCallback = addCallback;
