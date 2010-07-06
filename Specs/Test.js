var keys = [];
for (var key in GLOBAL)
	keys.push(key);

require('./MooTools').apply(GLOBAL);

console.log('------------------');
console.log('## New Globals');

for (var key in GLOBAL)
	if (!keys.contains(key))
		console.log(key);

console.log('------------------');
console.log('MooTools Version: ' + require('./MooTools').MooTools.version);
console.log('Global MooTools Version: ' + MooTools.version);
console.log('------------------');
console.log('## TypeOf Function?')
console.log('+' + typeof Class);
console.log('+' + typeof GLOBAL.Class);
console.log('+' + typeof require('./MooTools').Class);
console.log('------------------');

new new Class({
	
	initialize: function(){
		console.log('It works!');
	}
	
});
