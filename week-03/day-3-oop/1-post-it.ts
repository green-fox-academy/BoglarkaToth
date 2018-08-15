'use srtict'
export{}

/*
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

class PostIt {
  private backgroundColor: string;
  private text: string;
  private textColor: string;
  constructor (backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor; 
    this.text = text;
    this.textColor = textColor;
  }
}

let orange: PostIt = new PostIt('green', 'Idea 1', 'orange' );
let pink: PostIt = new PostIt('green', 'Awesome', 'pink');
let yellow: PostIt = new PostIt('orange', 'Superb', 'green');

console.log(orange, '\n', pink, '\n', yellow);