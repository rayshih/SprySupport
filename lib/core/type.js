exports.is_array = function ( object ){
  return Object.prototype.toString.call( object ) === '[object Array]';
};
