const logPlease = (param) => {
  console.log(param);
}
class Ellipse {
  //properties (egyfajta változó)
  private xCoordCenter: number;
  private yCoordCenter: number;
  private height: number;
  private width: number;
  //constructors
  constructor( xCoordCenter: number = 100,
    yCoordCenter: number = 100,
    height: number = 51.5,
    width: number = 50) {
    this.xCoordCenter = xCoordCenter;      // (setter) 
    this.yCoordCenter = yCoordCenter;
    this.height = height;
    this.width = width;
  }
  changeXCoord(newXCoord: number ) {
    this.xCoordCenter = newXCoord         // setter
  }
  //other methods
  name2() {
    logPlease(this);
  }
  sumOfCoordinates(): number {
    return this.xCoordCenter + this.yCoordCenter;   // getter <- return (nem tipikus)
  }
}

let first: Ellipse = new Ellipse(100, 100, 51.5, 50); // ha itt nem adok meg értékeket, akkor a
// contructoron belüli ún default(=alapértelmezett) értékekkel számol

first.name2();
first.changeXCoord(6000000000);
first.name2();

let sum:number = first.sumOfCoordinates();