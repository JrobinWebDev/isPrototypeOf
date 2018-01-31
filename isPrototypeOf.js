(function() {
  // used to check for the presence of an object
  var objToStringCheck = Object.prototype.toString;
    
  function isPrototypeOf(originalObj, objCheck) {
    if (objToStringCheck.call(originalObj) !== '[object Object]') {
      throw Error('First parameter must be an object');
    }
    if (objToStringCheck.call(objCheck) !== '[object Object]') {
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