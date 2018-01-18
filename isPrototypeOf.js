(function() {
    
  function isPrototypeOf(objProto, objCheck) {
    // base case
	if (Object.getPrototypeOf(objCheck) === objProto) {
      return true;
    // check whether the objCheck even has a prototype
	} else if (!Object.getPrototypeOf(objCheck)) { 
      return false;
	// recursive case
	} else {
      return isPrototypeOf(objProto, Object.getPrototypeOf(objCheck))
	}
  }
  window.isPrototypeOf = isPrototypeOf;
    
})();