(function() {
    
  function isPrototypeOf(originalObj, objCheck) {
    if (typeof originalObj !== 'object') {
      throw Error('First parameter must be an object');
    }
    if (typeof objCheck !== 'object') {
      throw Error('Second parameter must be an object');
    } 
      
    var proto = Object.getPrototypeOf(objCheck);
    // base case
	if (proto === originalObj) {
      return true;
    // check whether the objCheck even has a prototype
	} else if (!proto) { 
      return false;
	// recursive case
	} else {
      return isPrototypeOf(originalObj, proto)
	}
  }
  window.isPrototypeOf = isPrototypeOf;
    
})();