
/* !
 * matrix4
 * JavaScript math library for 4d matrix
 * Copyright (c) 2012 Enrico Marino (http://onirame.no.de)
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */

  var matrix4 = exports.matrix4 = {};

  /**
   * Library version.
   */

  matrix4.version = '0.0.0';

  /**
   * create a 4d matrix
   * @param {Float32Array | Array} values matrix values
   * @return {Float32Array} a 4d matrix
   * @api public
   */

  matrix4.create = function (values) {
    if (values === undefined) {
      values = [
        1, 0, 0, 0, 
        0, 1, 0, 0, 
        0, 0, 1, 0, 
        0, 0, 0, 1
      ];
    }

    return new Float32Array(values);
  };

 }(this));