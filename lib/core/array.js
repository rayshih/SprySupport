/**
 * remove
 *
 * remove all the match object
 *
 * @param origin
 * @param object_to_remove
 * @return
 */
exports.remove = function ( origin, object_to_remove ){
  var result = [];

  origin.forEach( function( item ){
    if( item === object_to_remove ) return;
    result.push( item );
  });

  return result;
}
