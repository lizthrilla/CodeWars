# [Build a Pile of Cubes](https://www.codewars.com/kata/build-a-pile-of-cubes/train/javascript)

## 6kyu

```function findNb(m) {
  // create an endless loop that increments n, the cube number, starting with a value of 1  
  for ( let n = 0;;n++ ) {
    if ( m > 0 ) {
      // if m, the total volume, is not 0, we will subtract the volume of the current cube from it
      // first calculate the volume of the current cube
      const currCubeVol = Math.pow( n+1, 3);
      // subtract the current cube volume from the total volume
      m = m - currCubeVol;
    } else if ( m == 0 ) {
      // if m is zero then we've found our n, so return n
      return n;
    } else if ( m < 0 ) {
      // if we've gone below zero there is no such n!
      return (-1);
    }
  }  
}```