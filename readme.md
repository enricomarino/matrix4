# matrix4

Matrix 4D component

## Installation

    $ component install enricomarino/matrix4

## API

### create

#### matrix4.create(values:Float32Array):Float32Array

Create a 4d matrix.

### copy

#### matrix4.copy(self:Float32Array, values:Float32Array)

Copy `values` to `self` matrix.

### zero

#### matrix4.zero(self:Float32Array):Float32Array

Set to zero all values of `self` matrix.

### identity

#### matrix4.identity(self:Float32Array):Float32Array

Set to identity the matrix `self`.

### get

#### matrix4.get(self:Float32Array, i:Number):Float32Array

Get the value at the `i`-th position in the matrix `self`.

### get_value

#### matrix4.get_value(self:Float32Array, i:Number, j:Number):Float32Array

Get the value at the `i`-th row and `j`-th column of the matrix `self`.

### get_row

#### matrix4.get_row(self:Float32Array, i:Number, values:Float32Array):Float32Array

Get the `i`-th row of the matrix `self`.

### get_col

#### matrix4.get_col(self:Float32Array, j:Number, values:Float32Array):Float32Array

Get the `j`-th column of the matrix `self`.

### get_upper

#### matrix4.get_upper3(self:Float32Array, m:Float32Array):Float32Array

Copy to `m` the upper 3x3 matrix `self`.

### set

#### matrix4.set(self:Float32Array, i:Number, value:Number):Float32Array

Set to `value` the element at the `i`-th position (from `0` to `15`) in the matrix `self`. 

### set_value

#### matrix4.set_value(self:Float32Array, i:Number, j:Number, value:Number):Float32Array

Set to `value` the element at the `i`-th row and `j`-th column of the matrix `self`.

### set_row

#### matrix4.set_row(self:Float32Array, i:Number, values:Float32Array):Float32Array

Set to `values` the `i`-th row of the matrix `self`.

### set_col

#### matrix4.set_col(self:Float32Array, j:Number, values:Float32Array):Float32Array

Set to `values` the `j`-th column of the matrix `self`.

### set_upper

#### matrix4.set_upper3(self:Float32Array, m:Float32Array):Float32Array

Set to `m` the upper 3x3 matrix of `self`.

### sum

#### matrix4.sum(self:Float32Array, a:Float32Array, b:Float32Array):Float32Array

Get the sum of matrix a and b.

### diff

#### matrix4.diff(self:Float32Array, a:Float32Array, b:Float32Array):Float32Array

Get the difference of matrix a and b.

### prod

#### matrix4.prod(self:Float32Array, a:Float32Array, b:Float32Array):Float32Array

Get the product of matrix a and b.

### add

#### matrix4.add(self:Float32Array, m:Float32Array):Float32Array

Add matrix.

### sub

#### matrix4.sub(self:Float32Array, m:Float32Array):Float32Array

Subtract matrix.

### mul

#### matrix4.mul(self:Float32Array, m:Float32Array):Float32Array

Multiply matrix.

### rotation

#### matrix4.rotation(self:Float32Array, angle:Number, axis:Float32Array):Float32Array

Get rotation matrix.

### rotation_x

#### matrix4.rotation_x(self:Float32Array, angle:Number):Float32Array

Get rotation matrix on axis x.

### rotation_y

#### matrix4.rotation_y(self:Float32Array, angle:Number):Float32Array

Get rotation matrix on axis y.

### rotation_z

#### matrix4.rotation_z(self:Float32Array, angle:Number):Float32Array

Get rotation matrix on axis z.

### rotation_zyx

#### matrix4.rotation_zyx(self:Float32Array, alpha:Number, beta:Number, gamma:Number):Float32Array

Get rotation matrix on axis z, y, x.

### rotate

#### matrix4.rotate(self:Float32Array, angle:Number, axis:Float32Array):Float32Array

Rotate matrix.

### rotate_x

#### matrix4.rotate_x(self:Float32Array, angle:Number):Float32Array

Rotate matrix `self` on axis x.

### rotate_y

#### matrix4.rotate_y(self:Float32Array, angle:Number):Float32Array

Rotate matrix `self` on axis y.

### rotate_z

#### matrix4.rotate_z(self:Float32Array, angle:Number):Float32Array

Rotate matrix `self` on axis z.

### rotate_zyx

#### matrix4.rotate_zyx(self:Float32Array, alpha:Number, beta:Number, gamma:Number):Float32Array

Rotate matrix `self` on axis z, y, x.

## License

(The MIT License)

Copyright (c) 2013 Enrico Marino

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
