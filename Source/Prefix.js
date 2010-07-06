/*
---

name: Prefix

description: Loads MooTools as a CommonJS Module.

license: MIT-style license.

copyright: Copyright (c) 2010 [Christoph Pojer](http://cpojer.net/).

authors: Christoph Pojer

provides: [Prefix]

...
*/

var GLOBAL_ITEMS = function(){
	var items = [];
	
	for (var key in this)
		items.push(key);
	
	return items;
}();