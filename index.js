
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

  matrix4.version = '0.0.5';

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
  
  /**
   * set 'self' matrix to the identity matrix
   * @param {Float32Array | Array} self destination matrix
   * @return {Float32Array | Array} updated `self` matrix
   * @api public
   */

  matrix4.identity = function (self) {
    self[ 0] = 1;
    self[ 1] = 0;
    self[ 2] = 0;
    self[ 3] = 0;

    self[ 4] = 0;
    self[ 5] = 1;
    self[ 6] = 0;
    self[ 7] = 0;

    self[ 8] = 0;
    self[ 9] = 0;
    self[10] = 1;
    self[11] = 0;

    self[12] = 0;
    self[13] = 0;
    self[14] = 0;
    self[15] = 1;

    return self;
  };

  /** 
   * set
   * Set the `i`-th value (from `0` to `15`) of the matrix 
   *
   * @param {Float32Array | Array} self destination matrix
   * @param {Number} the `i`-th value of `self` matrix
   * @return {Float32Array | Array} matrix
   * @api public
   */ 

  matrix4.set = function (self, i, value) {
    self[i] = value;

    return self;
  };

  /**
   * set_value
   * Set the value at i-th row, j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} j index of col
   * @param {Number} value value to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.set_value = function (self, i, j, value) {
    self[i + 4*j] = value;

    return self;
  };

  /**
   * set_row
   * Set the i-th row of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} values values to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.set_row = function (self, i, values) {
    self[i +  0] = values[0];
    self[i +  4] = values[1];
    self[i +  8] = values[2];
    self[i + 12] = values[3];

    return self;
  };  

  /**
   * set_col
   * Set the j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} j index of col
   * @param {Number} values values to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.set_col = function (self, j, values) {
    self[0 + 4*j] = values[0];
    self[1 + 4*j] = values[1];
    self[2 + 4*j] = values[2];
    self[3 + 4*j] = values[3];

    return self;
  };

  /**
   * set_upper3
   * Set the upper 3x3 matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} m source matrix
   * @return {Float32Array} destination matrix
   * @api public
   */

  matrix4.set_upper3 = function (self, m) {
    self[0] = m[ 0];
    self[1] = m[ 1];
    self[2] = m[ 2];

    self[3] = m[ 4];
    self[4] = m[ 5];
    self[5] = m[ 6];

    self[6] = m[ 8];
    self[7] = m[ 9];
    self[8] = m[10];

    return self;
  };

  /**
   * get
   * Get the i-th value of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index (from 0 to 15)
   * @return {Number} the i-th value of the matrix 
   * @api public
   */

  matrix4.get = function (self, i) {
    return self[i];
  };

  /**
   * get_value
   * Get the value at the i-th row, j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} j index of col
   * @return {Number} the value of the matrix 
   * @api public
   */

  matrix4.get_value = function (self, i, j) {
    return self[i + 4*j];
  };

  /**
   * get_row
   * Get the i-th row of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} values values to set 
   * @return {Float32Array} the i-th row of the matrix
   * @api public
   */

  matrix4.get_row = function (self, i, values) {
    values[0] = self[row +  0];
    values[1] = self[row +  4];
    values[2] = self[row +  8];
    values[3] = self[row + 12];

    return values;
  };

  /**
   * get_col
   * Get the j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} j index of col
   * @param {Number} values values to set 
   * @return {Float32Array} the i-th row of the matrix
   * @api public
   */

  matrix4.get_col = function (self, j, values) {
    values[0] = self[    4*col];
    values[1] = self[1 + 4*col];
    values[2] = self[2 + 4*col];
    values[3] = self[3 + 4*col];

    return values;
  };

  /**
   * get_upper3
   * Get the upper 3x3 matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} m source matrix
   * @return {Float32Array} destination matrix
   * @api public
   */

  matrix4.get_upper3 = function (self, m) {
    m[0] = self[ 0];
    m[1] = self[ 1];
    m[2] = self[ 2];

    m[3] = self[ 4];
    m[4] = self[ 5];
    m[5] = self[ 6];

    m[6] = self[ 8];
    m[7] = self[ 9];
    m[8] = self[10];

    return m;
  };

  /**
   * sum
   * Get the sum of matrix a and b.
   * 
   * @param {Float32Array} self matrix
   * @param {Float32Array} a matrix
   * @param {Float32Array} b matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.sum = function (self, a, b) {
    self[ 0] = a[ 0] + b[ 0];
    self[ 1] = a[ 1] + b[ 1];
    self[ 2] = a[ 2] + b[ 2];
    self[ 3] = a[ 3] + b[ 3];

    self[ 4] = a[ 4] + b[ 4];
    self[ 5] = a[ 5] + b[ 5];
    self[ 6] = a[ 6] + b[ 6];
    self[ 7] = a[ 7] + b[ 7];

    self[ 8] = a[ 8] + b[ 8];
    self[ 9] = a[ 9] + b[ 9];
    self[10] = a[10] + b[10];
    self[11] = a[11] + b[11];

    self[12] = a[12] + b[12];
    self[13] = a[13] + b[13];
    self[14] = a[14] + b[14];
    self[15] = a[15] + b[15];

    return self;
  };

  /**
   * diff
   * Get the difference of matrix a and b.
   * 
   * @param {Float32Array} self matrix
   * @param {Float32Array} a matrix
   * @param {Float32Array} b matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.diff = function (self, a, b) {
    self[ 0] = a[ 0] - b[ 0];
    self[ 1] = a[ 1] - b[ 1];
    self[ 2] = a[ 2] - b[ 2];
    self[ 3] = a[ 3] - b[ 3];

    self[ 4] = a[ 4] - b[ 4];
    self[ 5] = a[ 5] - b[ 5];
    self[ 6] = a[ 6] - b[ 6];
    self[ 7] = a[ 7] - b[ 7];

    self[ 8] = a[ 8] - b[ 8];
    self[ 9] = a[ 9] - b[ 9];
    self[10] = a[10] - b[10];
    self[11] = a[11] - b[11];

    self[12] = a[12] - b[12];
    self[13] = a[13] - b[13];
    self[14] = a[14] - b[14];
    self[15] = a[15] - b[15];

    return self;
  };

  /**
   * prod
   * Get the product of matrix a and b.
   * 
   * @param {Float32Array} self matrix
   * @param {Float32Array} a matrix
   * @param {Float32Array} b matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.prod = function (self, a, b) {
    self[ 0] = a[ 0] * b[ 0] + a[ 4] * b[ 1] + a[ 8] * b[ 2] + a[12] * b[ 3];
    self[ 1] = a[ 1] * b[ 0] + a[ 5] * b[ 1] + a[ 9] * b[ 2] + a[13] * b[ 3];
    self[ 2] = a[ 2] * b[ 0] + a[ 6] * b[ 1] + a[10] * b[ 2] + a[14] * b[ 3];
    self[ 3] = a[ 3] * b[ 0] + a[ 7] * b[ 1] + a[11] * b[ 2] + a[15] * b[ 3];

    self[ 4] = a[ 0] * b[ 4] + a[ 4] * b[ 5] + a[ 8] * b[ 6] + a[12] * b[ 7];
    self[ 5] = a[ 1] * b[ 4] + a[ 5] * b[ 5] + a[ 9] * b[ 6] + a[13] * b[ 7];
    self[ 6] = a[ 2] * b[ 4] + a[ 6] * b[ 5] + a[10] * b[ 6] + a[14] * b[ 7];
    self[ 7] = a[ 3] * b[ 4] + a[ 7] * b[ 5] + a[11] * b[ 6] + a[15] * b[ 7];

    self[ 8] = a[ 0] * b[ 8] + a[ 4] * b[ 9] + a[ 8] * b[10] + a[12] * b[11];
    self[ 9] = a[ 1] * b[ 8] + a[ 5] * b[ 9] + a[ 9] * b[10] + a[13] * b[11];
    self[10] = a[ 2] * b[ 8] + a[ 6] * b[ 9] + a[10] * b[10] + a[14] * b[11];
    self[11] = a[ 3] * b[ 8] + a[ 7] * b[ 9] + a[11] * b[10] + a[15] * b[11];

    self[12] = a[ 0] * b[12] + a[ 4] * b[13] + a[ 8] * b[14] + a[12] * b[15];
    self[13] = a[ 1] * b[12] + a[ 5] * b[13] + a[ 9] * b[14] + a[13] * b[15];
    self[14] = a[ 2] * b[12] + a[ 6] * b[13] + a[10] * b[14] + a[14] * b[15];
    self[15] = a[ 3] * b[12] + a[ 7] * b[13] + a[11] * b[14] + a[15] * b[15];

    return self;
  };

  /**
   * add
   * Add matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} m matrix to add
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.add = function (self, m) {
    self[ 0] += m[ 0];
    self[ 1] += m[ 1];
    self[ 2] += m[ 2];
    self[ 3] += m[ 3];

    self[ 4] += m[ 4];
    self[ 5] += m[ 5];
    self[ 6] += m[ 6];
    self[ 7] += m[ 7];

    self[ 8] += m[ 8];
    self[ 9] += m[ 9];
    self[10] += m[10];
    self[11] += m[11];

    self[12] += m[12];
    self[13] += m[13];
    self[14] += m[14];
    self[15] += m[15];

    return self;
  };

  /**
   * sub
   * Subtract matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} m matrix to add
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.sub = function (self, m) {
    self[ 0] -= m[ 0];
    self[ 1] -= m[ 1];
    self[ 2] -= m[ 2];
    self[ 3] -= m[ 3];

    self[ 4] -= m[ 4];
    self[ 5] -= m[ 5];
    self[ 6] -= m[ 6];
    self[ 7] -= m[ 7];

    self[ 8] -= m[ 8];
    self[ 9] -= m[ 9];
    self[10] -= m[10];
    self[11] -= m[11];

    self[12] -= m[12];
    self[13] -= m[13];
    self[14] -= m[14];
    self[15] -= m[15];

    return self;
  };

  

}(this));