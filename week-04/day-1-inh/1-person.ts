'use srtict'

export class Person {         // export
  protected name: string;     // protected -- globallá válik
  protected age: number;
  protected gender: string;
  //Person(): sets name to Jane Doe, age to 30, gender to female: SETS NAME??
  constructor (name: string = 'Jane Doe', age: number = 20, gender: string = 'female') {
              // default érték = alapébeégetett
            // ha pl name? akkor nem fog várni sehol értéket, üres marad a logolásnál
        // ide bármit lehet írni, spec methodus, mondhatom, h nem csinál semmit-majd később
        //modom meg h mit csináljon-
    // ha nem kap értéket a meghívásnál, akkor azokkal működjön, amit itt adok meg, ez az alaphelyzet,
    //ez mindenképpen le fog futni egyszer, bármi van benne


    /*if (gender!== 'male' || gender !== 'female'){
    }*/                                                 // Árnikától kérni, nem működött
   

    this.name = name;  // .deklarálás (=nincs értéke)
    this.age = age;    // .ha ide írok vmit, az naagyon' be van égetve, mindig azzal indul(lsd student)
    this.gender = gender;
    
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`); 
  }
    getGoal() {
    console.log(`My goal is: Live for the moment!`);
  }
}

// person1.introduce();  // Árnika megnézi miért piros


/*
introduce() {
    console.log(this.getIntroductionText() + '.'); 
  }
getIntroductionText() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}` // 7esen a ` jel
*/