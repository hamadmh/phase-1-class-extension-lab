class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      let perimeter = 0;
      for (let side of this.sides) {
        perimeter += side;
      }
      return perimeter;
    }
  }
class Triangle extends Polygon {
    constructor(sides) {
        super(sides);
    }
    isValid() {
        if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) {
            return true;
        } else return false;
    }
}
class Square extends Polygon {
    constructor(sides) {
        super(sides);
    }
    get area() {
        return this.sides[0] * this.sides[1];
    }
    isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) return true;
        else return false;
    }
}