/* The Rocketship Exercise - This exercise will teach you method chaining.
 *
 *        |
 *       / \
 *      / _ \
 *     |.o '.|
 *     |'._.'|
 *     |     |
 *   ,'|  |  |`.
 *  /  |  |  |  \
 *  |,-'--|--'-.|
 *
 * In this exercise you will write a Rocketship object that contains:
 *   - A coordinate object (stores [x,y] location of ship)
 *   - An up function: moves the rocket up one space on the y-axis
 *   - A down function: moves the rocket down one space on the y-axis
 *   - A left function: moves the rocket left one space on the x-axis
 *   - A right function: moves the rocket right one space on the x-axis
 *
 * ------------------------------
 * Normally we can call the object methods (up, down, left, right)
 * one by one.
 *
 * Rocketship.up();
 * Rocketship.up();
 * Rocketship.left();
 *
 * To simplify code we want to be able to put these method calls
 * one after another on the same line (method chaining).
 *
 * Rocketship.up().up().left();
 * ------------------------------
 *
 * Method chaining allows for simpler execution of code when methods
 * are consecutively called on the same object.
 *
 * --------
 * EXAMPLES
 * --------
 * Assuming the Rocketship starts at coors (0,0) before each
 * example is executed, here are a few examples to clarify
 * what your methods should do.
 *
 * ex. Rocketship.up() -> Rocketship.coords == {x: 0, y: 1}
 * ex. Rocketship.left() -> Rocketship.coords == {x: -1, y: 0}
 * ex. Rocketship.down() -> Rocketship.coords == {x: 0, y: -1}
 * ex. Rocketship.down().down().down() -> Rocketship.coords == {x: 0, y: -3}
 * ex. Rocketship.left().up().right().left().left() -> Rocketship.coords == {x: -2, y: 1}
 *
 */

var Rocketship = {
  coords: {x: 0, y: 0},
  up: function() {
    // YOUR CODE HERE
  },
  down: function() {
    // YOUR CODE HERE
  },
  left: function() {
    // YOUR CODE HERE
  },
  right: function() {
    // YOUR CODE HERE
  },
};
