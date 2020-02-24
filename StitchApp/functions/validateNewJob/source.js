exports = function(payload) {
  
  // do some kind of validation'
  var returnObject = {
    valid: true,
  };
  
  console.log(JSON.stringify(payload.commits[0]));
  
  // deleting a branch should not kick off build
  if (payload.newHead && payload.newHead.match('^[0]+$')) {
    returnObject.valid = false;
    returnObject.error = 'branch deleted so new build will not start';
  }
  
  /*if (!payload.commits || !payload.commits[0] || !payload.commits[0].id) {
    returnObject.valid = false;
    returnObject.error = 'no commit associated with this message';
  }*/
  
  console.log('validation: ', JSON.stringify(returnObject));
  return returnObject;
  
};