MooTools Loader
===============

Loads MooTools as a CommonJS Module. Implementation Version ~42.

### Usage

Build via Packager

	./packager register /path/to/Loader
	./packager build Loader/Prefix Loader/Loader -blocks 1.2compat > MooTools.js

With Additional MooTools Components

	./packager build Loader/Prefix Core/Class Core/Class.Extras Loader/Loader -blocks 1.2compat > MooTools.js

Using within a CommonJS Environment (for example NodeJS)

	require('./MooTools').into(GLOBAL);
	
Or

	var Class = require('./MooTools').Class;

### Credits

based on work by [@keeto](http://keetology.com) and me :)