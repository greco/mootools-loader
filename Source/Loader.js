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

if (typeof exports != 'undefined') (function(){

for (var key in this) if (!GLOBAL_ITEMS.contains(key)){
	exports[key] = this[key];
}

exports.into = function(object){
	Object.append(object, exports);
};

})();
