/*
---

name: Loader

description: Loads MooTools as a CommonJS Module.

license: MIT-style license.

copyright: Copyright (c) 2010 [Christoph Pojer](http://cpojer.net/).

authors: Christoph Pojer

requires: [Core/Core, Core/Object]

provides: [Loader]

...
*/

(function(context){

if (!context) return;

for (var key in this) if (!GLOBAL_ITEMS.contains(key)){
	context[key] = this[key];
}

context.into = function(object){
	Object.append(object, context);
};

})((typeof exports != 'undefined') ? exports : null);