
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
   * @param {Number} angle rotation angle on axiz y
   * @param {Number} angle rotation angle on axiz x
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

}(this));