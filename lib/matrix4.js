
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

  matrix4.version = '0.0';

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

  /**
   * copy `values` to `self` matrix
   * @param {Float32Array | Array} self destination matrix
   * @param {Float32Array | Array} values source matrix
   * @return {Float32Array | Array} updated `self` matrix
   * @api public
   */

  matrix4.copy = function (self, values) {
    self[ 0] = values[ 0];
    self[ 1] = values[ 1];
    self[ 2] = values[ 2];
    self[ 3] = values[ 3];

    self[ 4] = values[ 4];
    self[ 5] = values[ 5];
    self[ 6] = values[ 6];
    self[ 7] = values[ 7];

    self[ 8] = values[ 8];
    self[ 9] = values[ 9];
    self[10] = values[10];
    self[11] = values[11];

    self[12] = values[12];
    self[13] = values[13];
    self[14] = values[14];
    self[15] = values[15];

    return self;
  };

  /**
   * set to zero all values of `self` matrix
   * @param {Float32Array | Array} self matrix destination
   * @return {Float32Array | Array} updated `self` matrix
   * @api public
   */ 

  matrix4.zero = function (self) {
    self[ 0] = 0;
    self[ 1] = 0;
    self[ 2] = 0;
    self[ 3] = 0;

    self[ 4] = 0;
    self[ 5] = 0;
    self[ 6] = 0;
    self[ 7] = 0;

    self[ 8] = 0;
    self[ 9] = 0;
    self[10] = 0;
    self[11] = 0;

    self[12] = 0;
    self[13] = 0;
    self[14] = 0;
    self[15] = 0;

    return self;
  };
  
 }(this));