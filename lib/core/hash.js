/**
 * reverse_merge
 *
 * merge hash from source to target only if
 * the property is not exists in target
 *
 * And this is deep merge for hash
 * THIS WILL NOT MERGE ARRAY !!!
 *
 * @param target
 * @param source
 * @return result
 */
// function name should leave here, or recursive wont work
exports.reverse_merge = function reverse_merge( target, source ){
  var result = {};

  // copy all from target to result
  Object.keys( target ).forEach( function ( key ){
    result[ key ] = target[ key ];
  });


  // merge source to result
  Object.keys( source ).forEach( function ( key ){
    var tvalue = result[ key ];
    var svalue = source[ key ];

    if( tvalue ){

      // there is a value, check the type, deep_merge if it's object
      if( typeof tvalue === 'object' && typeof svalue === 'object' ){
        result[ key ] = reverse_merge( tvalue, svalue );
      };
    }else{

      // no value, write it!
      result[ key ] = svalue;
    }

  });

  return result;
}
