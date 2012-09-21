
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
   * Math functions.
   */

  var sqrt = Math.sqrt;
  var sin = Math.sin;
  var cos = Math.cos;
  var tan = Math.tan;

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

  /**
   * mul
   * Multiply matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} m matrix to add
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.mul = function (self, m) {
    var m00 = self[ 0];
    var m10 = self[ 1];
    var m20 = self[ 2];
    var m30 = self[ 3];

    var m01 = self[ 4];
    var m11 = self[ 5];
    var m21 = self[ 6];
    var m31 = self[ 7];

    var m02 = self[ 8];
    var m12 = self[ 9];
    var m22 = self[10];
    var m32 = self[11];

    var m03 = self[12];
    var m13 = self[13];
    var m23 = self[14];
    var m33 = self[15];

    self[ 0] = m00 * m[ 0] + m01 * b[ 1] + m02 * b[ 2] + m03 * b[ 3];
    self[ 1] = m10 * m[ 0] + m11 * b[ 1] + m12 * b[ 2] + m13 * b[ 3];
    self[ 2] = m20 * m[ 0] + m21 * b[ 1] + m22 * b[ 2] + m23 * b[ 3];
    self[ 3] = m30 * m[ 0] + m31 * b[ 1] + m32 * b[ 2] + m33 * b[ 3];

    self[ 4] = m00 * m[ 4] + m01 * b[ 5] + m02 * b[ 6] + m03 * b[ 7];
    self[ 5] = m10 * m[ 4] + m11 * b[ 5] + m12 * b[ 6] + m13 * b[ 7];
    self[ 6] = m20 * m[ 4] + m21 * b[ 5] + m22 * b[ 6] + m23 * b[ 7];
    self[ 7] = m30 * m[ 4] + m31 * b[ 5] + m32 * b[ 6] + m33 * b[ 7];

    self[ 8] = m00 * m[ 8] + m01 * b[ 9] + m02 * b[10] + m03 * b[11];
    self[ 9] = m10 * m[ 8] + m11 * b[ 9] + m12 * b[10] + m13 * b[11];
    self[10] = m20 * m[ 8] + m21 * b[ 9] + m22 * b[10] + m23 * b[11];
    self[11] = m30 * m[ 8] + m31 * b[ 9] + m32 * b[10] + m33 * b[11];

    self[12] = m00 * m[12] + m01 * b[13] + m02 * b[14] + m03 * b[15];
    self[13] = m10 * m[12] + m11 * b[13] + m12 * b[14] + m13 * b[15];
    self[14] = m20 * m[12] + m21 * b[13] + m22 * b[14] + m23 * b[15];
    self[15] = m30 * m[12] + m31 * b[13] + m32 * b[14] + m33 * b[15];

    return self;
  };

  /**
   * rotation
   * Get rotation matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle
   * @param {Float32Array} axis rotation axis
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotation = function (self, angle, axis) {
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var w = sqrt(x*x + y*y + z*z)
    var sin_a;
    var cos_a;
    var one_minus_cos;

    if (w == 0.0) {
      self[ 0] = 1.0;
      self[ 1] = 0.0;
      self[ 2] = 0.0;
      self[ 3] = 0.0;

      self[ 4] = 0.0;
      self[ 5] = 1.0;
      self[ 6] = 0.0;
      self[ 7] = 0.0;

      self[ 8] = 0.0;
      self[ 9] = 0.0;
      self[10] = 1.0;
      self[11] = 0.0;

      self[12] = 0.0;
      self[13] = 0.0;
      self[14] = 0.0;
      self[15] = 1.0;

      return self;
    }

    w = 1/w;
    x *= w;
    y *= w;
    z *= w;

    sin_a = sin(angle);
    cos_a = cos(angle);
    one_minus_cos = 1.0 - cos_a;

    self[ 0] = x * x * one_minus_cos + 1 * cos_a;
    self[ 1] = y * x * one_minus_cos + z * sin_a;
    self[ 2] = z * x * one_minus_cos - y * sin_a;
    self[ 3] = 0.0;

    self[ 4] = x * y * one_minus_cos - z * sin_a;
    self[ 5] = y * y * one_minus_cos + 1 * cos_a;
    self[ 6] = y * z * one_minus_cos + x * sin_a;
    self[ 7] = 0.0;

    self[ 8] = x * z * one_minus_cos + y * sin_a;
    self[ 9] = y * z * one_minus_cos - x * sin_a;
    self[10] = z * z * one_minus_cos + 1 * cos_a;
    self[11] = 0.0;

    self[12] = 0.0;
    self[13] = 0.0;
    self[14] = 0.0;
    self[15] = 1.0;

    return self;
  };

  /**
   * rotation_x
   * Get rotation matrix on axis x.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotation_x = function (self, angle) {
    var sin_a = sin(angle);
    var cos_a = cos(angle);

    self[ 0] = 1.0;
    self[ 1] = 0.0;
    self[ 2] = 0.0;
    self[ 3] = 0.0;

    self[ 4] = 0.0;
    self[ 5] = cos_a;
    self[ 6] = sin_a;
    self[ 7] = 0.0;

    self[ 8] = 0.0;
    self[ 9] = -sin_a;
    self[10] = cos_a;
    self[11] = 0.0;

    self[12] = 0.0;
    self[13] = 0.0;
    self[14] = 0.0;
    self[15] = 1.0;

    return self;
  };

  /**
   * rotation_y
   * Get rotation matrix on axis y.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotation_y = function (self, angle) {
    var sin_a = sin(angle);
    var cos_a = cos(angle);

    self[ 0] = cos_a;
    self[ 1] = 0.0;
    self[ 2] = sin_a;
    self[ 3] = 0.0;

    self[ 4] = 0.0;
    self[ 5] = 1.0;
    self[ 6] = 0.0;
    self[ 7] = 0.0;

    self[ 8] = -sin_a;
    self[ 9] = 0.0;
    self[10] = cos_a;
    self[11] = 0.0;

    self[12] = 0.0;
    self[13] = 0.0;
    self[14] = 0.0;
    self[15] = 1.0;

    return self;
  };

  /**
   * rotation_z
   * Get rotation matrix on axis z.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotation_z = function (self, angle) {
    var sin_a = sin(angle);
    var cos_a = cos(angle);

    self[ 0] = cos_a;
    self[ 1] = -sin_a;
    self[ 2] = 0.0;
    self[ 3] = 0.0;

    self[ 4] = sin_a;
    self[ 5] = cos_a;
    self[ 6] = 0.0;
    self[ 7] = 0.0;

    self[ 8] = 0.0;
    self[ 9] = 0.0;
    self[10] = 1.0;
    self[11] = 0.0;

    self[12] = 0.0;
    self[13] = 0.0;
    self[14] = 0.0;
    self[15] = 1.0;

    return self;
  };

  /**
   * rotation_zyx
   * Get rotation matrix on axis z, y, x.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle on axiz z
   * @param {Number} angle rotation angle on axiz z
   * @param {Number} angle rotation angle on axiz z
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotation_zyx = function (self, a, b, c) {
    var sin_a = sin(a);
    var cos_a = cos(a);

    var sin_b = sin(b);
    var cos_b = cos(b);

    var sin_c = sin(c);
    var cos_c = cos(c);

    self[ 0] = cos_c * cos_b;
    self[ 1] = sin_c * cos_b;
    self[ 2] = -sin_b;
    self[ 3] = 0.0;

    self[ 4] = cos_c * sin_b * sin_a - sin_c * cos_a;
    self[ 5] = cos_c * sin_b * sin_a + cos_c * cos_a;
    self[ 6] = cos_b * sin_a;
    self[ 7] = 0.0;

    self[ 8] = cos_c * sin_b * cos_a + sin_c * sin_a;
    self[ 9] = sin_c * sin_b * cos_a - cos_c * sin_a;
    self[10] = cos_b * cos_a;
    self[11] = 0.0;

    self[12] = 0.0;
    self[13] = 0.0;
    self[14] = 0.0;
    self[15] = 1.0;

    return self;
  };

  /**
   * rotate
   * Rotate matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle
   * @param {Float32Array} axis rotation axis
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotate = function (self, angle, axis) {
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var w = sqrt(x*x + y*y + z*z);

    var sin_a = sin(angle);
    var cos_a = cos(angle);
    var one_minus_cos = 1 - cos_a;

    var r00 = x * x * one_minus_cos + 1 * cos_a;
    var r10 = y * x * one_minus_cos + z * sin_a;
    var r20 = z * x * one_minus_cos - y * sin_a;

    var r01 = x * y * one_minus_cos - z * sin_a;
    var r11 = y * y * one_minus_cos + 1 * cos_a;
    var r21 = y * z * one_minus_cos + x * sin_a;

    var r02 = x * z * one_minus_cos + y * sin_a;
    var r12 = y * z * one_minus_cos - x * sin_a;
    var r22 = z * z * one_minus_cos + 1 * cos_a;

    var m00 = self[ 0];
    var m10 = self[ 1];
    var m20 = self[ 2];
    var m30 = self[ 3];

    var m01 = self[ 4];
    var m11 = self[ 5];
    var m21 = self[ 6];
    var m31 = self[ 7];

    var m02 = self[ 8];
    var m12 = self[ 9];
    var m22 = self[10];
    var m32 = self[11];

    if (w == 0.0) {
      self[ 0] = 1.0;
      self[ 1] = 0.0;
      self[ 2] = 0.0;
      self[ 3] = 0.0;

      self[ 4] = 0.0;
      self[ 5] = 1.0;
      self[ 6] = 0.0;
      self[ 7] = 0.0;

      self[ 8] = 0.0;
      self[ 9] = 0.0;
      self[10] = 1.0;
      self[11] = 0.0;

      self[12] = 0.0;
      self[13] = 0.0;
      self[14] = 0.0;
      self[15] = 1.0;

      return self
    }

    if (w != 1) {
      one_div_w = 1 / w;
      x *= one_div_w;
      y *= one_div_w;
      z *= one_div_w;
    }

    self[ 0] = r00 * m00 + r10 * m01 + r20 * m02;
    self[ 1] = r00 * m10 + r10 * m11 + r20 * m12;
    self[ 2] = r00 * m20 + r10 * m21 + r20 * m22;
    self[ 3] = r00 * m30 + r10 * m31 + r20 * m32;

    self[ 4] = r01 * m00 + r11 * m01 + r21 * m02;
    self[ 5] = r01 * m10 + r11 * m11 + r21 * m12;
    self[ 6] = r01 * m20 + r11 * m21 + r21 * m22;
    self[ 7] = r01 * m30 + r11 * m31 + r21 * m32;

    self[ 8] = r02 * m00 + r12 * m01 + r22 * m02;
    self[ 9] = r02 * m10 + r12 * m11 + r22 * m12;
    self[10] = r02 * m20 + r12 * m21 + r22 * m22;
    self[11] = r02 * m30 + r12 * m31 + r22 * m32;

    return self;
  };

  /**
   * rotate_x
   * Rotate matrix on axis x.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotate_x = function (self, angle) {
    var sin_a = sin(angle);
    var cos_a = cos(angle);

    var m01 = self[ 4];
    var m11 = self[ 5];
    var m21 = self[ 6];
    var m31 = self[ 7];

    var m02 = self[ 8];
    var m12 = self[ 9];
    var m22 = self[10];
    var m32 = self[11];

    self[ 4] = cos_a * m01 + sin_a * m02;
    self[ 5] = cos_a * m11 + sin_a * m12;
    self[ 6] = cos_a * m21 + sin_a * m22;
    self[ 7] = cos_a * m31 + sin_a * m32;

    self[ 8] = cos_a * m02 - sin_a * m01;
    self[ 9] = cos_a * m12 - sin_a * m11;
    self[10] = cos_a * m22 - sin_a * m21;
    self[11] = cos_a * m32 - sin_a * m31;

    return self;
  };

  /**
   * rotate_y
   * Rotate matrix on axis y.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotate_y = function (self, angle) {
    var sin_a = sin(angle);
    var cos_a = cos(angle);

    var m00 = self[ 0];
    var m10 = self[ 1];
    var m20 = self[ 2];
    var m30 = self[ 3];

    var m02 = self[ 8];
    var m12 = self[ 9];
    var m22 = self[10];
    var m32 = self[11];

    self[ 0] = cos_a * m00 - sin_a * m02;
    self[ 1] = cos_a * m10 - sin_a * m12;
    self[ 2] = cos_a * m20 - sin_a * m22;
    self[ 3] = cos_a * m30 - sin_a * m32;

    self[ 8] = cos_a * m02 + sin_a * m00;
    self[ 9] = cos_a * m12 + sin_a * m10;
    self[10] = cos_a * m22 + sin_a * m20;
    self[11] = cos_a * m32 + sin_a * m30;

    return self;
  };

  /**
   * rotate_z
   * Rotate matrix on axis z.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotate_z = function (self, angle) {
    var sin_a = sin(angle);
    var cos_a = cos(angle);

    var m00 = self[ 0];
    var m10 = self[ 1];
    var m20 = self[ 2];
    var m30 = self[ 3];

    var m01 = self[ 4];
    var m11 = self[ 5];
    var m21 = self[ 6];
    var m31 = self[ 7];

    self[ 0] = cos_a * m00 + sin_a * m01;
    self[ 1] = cos_a * m10 + sin_a * m11;
    self[ 2] = cos_a * m20 + sin_a * m21;
    self[ 3] = cos_a * m30 + sin_a * m31;

    self[ 4] = cos_a * m01 - sin_a * m00;
    self[ 5] = cos_a * m11 - sin_a * m10;
    self[ 6] = cos_a * m21 - sin_a * m20;
    self[ 7] = cos_a * m31 - sin_a * m30;

    return self;
  };

  /**
   * rotate_zyx
   * Rotate matrix on axis z, y, x
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} angle rotation angle on z axis
   * @param {Number} angle rotation angle on y axis
   * @param {Number} angle rotation angle on x axis
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.rotate_zyx = function (self, a, b, c) {
    var sin_a = sin(a);
    var cos_a = cos(a);

    var sin_b = sin(b);
    var cos_b = cos(b);

    var sin_c = sin(c);
    var cos_c = cos(c);

    var r00 = cos_c * cos_b;
    var r10 = sin_c * cos_b;
    var r20 = -sin_b;

    var r01 = cos_c * sin_b * sin_a - sin_c * cos_a;
    var r11 = cos_c * sin_b * sin_a + cos_c * cos_a;
    var r21 = cos_b * sin_a;

    var r02 = cos_c * sin_b * cos_a + sin_c * sin_a;
    var r12 = sin_c * sin_b * cos_a - cos_c * sin_a;
    var r22 = cos_b * cos_a;

    var m00 = self[ 0];
    var m10 = self[ 1];
    var m20 = self[ 2];
    var m20 = self[ 3];

    var m01 = self[ 4];
    var m11 = self[ 5];
    var m21 = self[ 6];
    var m21 = self[ 7];

    var m02 = self[ 8];
    var m12 = self[ 9];
    var m22 = self[10];
    var m22 = self[11];

    self[ 0] = r00 * m00 + r10 * m01 + r20 * m02;
    self[ 1] = r00 * m10 + r10 * m11 + r20 * m12;
    self[ 2] = r00 * m20 + r10 * m21 + r20 * m22;
    self[ 3] = r00 * m30 + r10 * m31 + r20 * m32;

    self[ 4] = r01 * m00 + r11 * m01 + r21 * m02;
    self[ 5] = r01 * m10 + r11 * m11 + r21 * m12;
    self[ 6] = r01 * m20 + r11 * m21 + r21 * m22;
    self[ 7] = r01 * m30 + r11 * m31 + r21 * m32;

    self[ 8] = r02 * m00 + r12 * m01 + r22 * m02;
    self[ 9] = r02 * m10 + r12 * m11 + r22 * m12;
    self[10] = r02 * m20 + r12 * m21 + r22 * m22;
    self[11] = r02 * m30 + r12 * m31 + r22 * m32;

    return self;
  };

  /**
   * scaling
   * Get scaling matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} v scale factors
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.scaling = function (self, v) {
    self[ 0] = v[0];
    self[ 1] = 0.0;
    self[ 2] = 0.0;
    self[ 3] = 0.0;

    self[ 4] = 0.0;
    self[ 5] = v[1];
    self[ 6] = 0.0;
    self[ 7] = 0.0;

    self[ 8] = 0.0;
    self[ 9] = 0.0;
    self[10] = v[2];
    self[11] = 0.0;

    self[12] = 0.0;
    self[13] = 0.0;
    self[14] = 0.0;
    self[15] = 1.0;

    return self;
  };

  /**
   * scale
   * Scale matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} v scale factors
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.scale = function (self, v) {
    self[ 0] *= v[0];
    self[ 1] *= v[0];
    self[ 2] *= v[0];
    self[ 3] *= v[0];

    self[ 4] *= v[1];
    self[ 5] *= v[1];
    self[ 6] *= v[1];
    self[ 7] *= v[1];

    self[ 8] *= v[2];
    self[ 9] *= v[2];
    self[10] *= v[2];
    self[11] *= v[2];

    return self;
  };

  /**
   * scale_x
   * Scale matrix on x axis.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} value scale factor
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.scale_x = function (self, value) {
    self[ 0] *= value;
    self[ 1] *= value;
    self[ 2] *= value;
    self[ 3] *= value;

    return self;
  };

  /**
   * scale_y
   * Scale matrix on y axis.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} value scale factor
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.scale_y = function (self, value) {
    self[ 4] *= value;
    self[ 5] *= value;
    self[ 6] *= value;
    self[ 7] *= value;

    return self;
  };

  /**
   * scale_z
   * Scale matrix on z axis.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} value scale factor
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.scale_z = function (self, value) {
    self[ 8] *= value;
    self[ 9] *= value;
    self[10] *= value;
    self[11] *= value;

    return self;
  };

  /**
   * translation
   * Get translation matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} v translation vector
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.translation = function (self, v) {
    self[ 0] = 1.0;
    self[ 1] = 0.0;
    self[ 2] = 0.0;
    self[ 3] = 0.0;

    self[ 4] = 0.0;
    self[ 5] = 1.0;
    self[ 6] = 0.0;
    self[ 7] = 0.0;

    self[ 8] = 0.0;
    self[ 9] = 0.0;
    self[10] = 1.0;
    self[11] = 0.0;

    self[12] = v[0];
    self[13] = v[1];
    self[14] = v[2];
    self[15] = 1.0;

    return self;
  };

  /**
   * translate
   * Translate matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} v translation vector
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.translate = function (self, v) {
    self[12] += self[ 0] * v[0] + self[ 4] * v[1] + self[ 8] * v[2];
    self[13] += self[ 1] * v[0] + self[ 5] * v[1] + self[ 9] * v[2];
    self[14] += self[ 2] * v[0] + self[ 6] * v[1] + self[10] * v[2];

    return self;
  };

  /**
   * translate_x
   * Translate matrix on x axis.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} value translation value
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.translate_x = function (self, x) {
    self[12] += self[ 0] * x;
    self[13] += self[ 1] * x;
    self[14] += self[ 2] * x;

    return self;
  };

  /**
   * translate_y
   * Translate matrix on y axis.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} value translation value
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.translate_y = function (self, y) {
    self[12] += self[ 4] * y;
    self[13] += self[ 5] * y;
    self[14] += self[ 6] * y;

    return self;
  };

  /**
   * translate_z
   * Translate matrix on z axis.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Array} value translation value
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.translate_z = function (self, z) {
    self[12] += self[ 8] * z;
    self[13] += self[ 9] * z;
    self[14] += self[10] * z;

    return self;
  };

  /**
   * transposition
   * Get transposition matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} self source matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.transposition = function (self, m) {
    self[ 0] = m[ 0];
    self[ 1] = m[ 4];
    self[ 2] = m[ 8];
    self[ 3] = m[12];

    self[ 4] = m[ 1];
    self[ 5] = m[ 5];
    self[ 6] = m[ 9];
    self[ 7] = m[13];

    self[ 8] = m[ 2];
    self[ 9] = m[ 6];
    self[10] = m[10];
    self[11] = m[14];

    self[12] = m[ 3];
    self[13] = m[ 7];
    self[14] = m[11];
    self[15] = m[15];

    return self;
  };

  /**
   * transpose
   * Transpose matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} self source matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.transpose = function (self) {
    var temp;

    temp = self[ 1]; self[ 1] = self[ 4]; self[ 4] = temp;
    temp = self[ 2]; self[ 2] = self[ 8]; self[ 8] = temp;
    temp = self[ 3]; self[ 3] = self[12]; self[12] = temp;

    temp = self[ 6]; self[ 6] = self[ 9]; self[ 9] = temp;
    temp = self[ 7]; self[ 7] = self[13]; self[13] = temp;

    temp = self[11]; self[11] = self[14]; self[14] = temp;

    return self;
  };

  /**
   * frustum
   * Get the frustum matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} left left plane distance
   * @param {Number} right right plane distance
   * @param {Number} bottom bottom plane distance
   * @param {Number} top top plane distance
   * @param {Number} zfar far plane distance
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.frustum = function (self, left, right, bottom, top, znear, zfar) {
    self[ 0] = (2 * znear) / (right - left);
    self[ 1] = 0.0;
    self[ 2] = 0.0;
    self[ 3] = 0.0;

    self[ 4] = 0.0;
    self[ 5] = (2 * znear) / (top - bottom);
    self[ 6] = 0.0;
    self[ 7] = 0.0;

    self[ 8] = (right + left) / (right - left);
    self[ 9] = (top + bottom) / (top - bottom);
    self[10] = (zfar + znear) / (znear - zfar);
    self[11] = -1.0;

    self[12] = 0.0;
    self[13] = 0.0;
    self[14] = (2 * zfar * znear) / (znear - zfar);
    self[15] = 0.0;

    return self;
  };

  /**
   * perspective
   * Get the frustum matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} fovy field of view
   * @param {Number} aspect aspect ratio
   * @param {Number} znear near plane distance
   * @param {Number} zfar far plane distance
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.perspective = function (self, fovy, aspect, znear, zfar) {
    var radiant = fovy * PI / 180.0;
    var f = tan(0.5 * (PI - radiant));

    self[ 0] = f / aspect;
    self[ 1] = 0.0;
    self[ 2] = 0.0;
    self[ 3] = 0.0;

    self[ 4] = 0.0;
    self[ 5] = f;
    self[ 6] = 0.0;
    self[ 7] = 0.0;

    self[ 8] = 0.0;
    self[ 9] = 0.0;
    self[10] = (zfar + znear) / (znear - zfar);
    self[11] = -1;

    self[12] = 0.0;
    self[13] = 0.0;
    self[14] = (2 * zfar * znear) / (znear - zfar);
    self[15] = 0.0;

    return self;
  };

  /**
   * ortho
   * Get the frustum matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Number} left left plane distance
   * @param {Number} right right plane distance
   * @param {Number} bottom bottom plane distance
   * @param {Number} top top plane distance
   * @param {Number} znear z near plane distance
   * @param {Number} zfar z far plane distance
   * @return {Float32Array} matrix
   * @api public
   */

  matrix4.ortho = function (self, left, right, bottom, top, znear, zfar) {
    self[ 0] = 2.0 / (right - left);
    self[ 1] = 0.0;
    self[ 2] = 0.0;
    self[ 3] = 0.0;

    self[ 4] = 0.0;
    self[ 5] = 2.0 / (top - bottom);
    self[ 6] = 0.0;
    self[ 7] = 0.0;

    self[ 8] = 0.0;
    self[ 9] = 0.0;
    self[10] = 2.0 / (znear - zfar);
    self[11] = 0.0;

    self[12] = (right + left) / (left - right);
    self[13] = (top + bottom) / (bottom - top);
    self[14] = (zfar + znear) / (znear - zfar);
    self[15] = 0.0;

    return self;
  };

}(this));