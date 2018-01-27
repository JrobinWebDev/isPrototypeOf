(function() {
    
  function isPrototypeOf(originalObj, objCheck) {
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