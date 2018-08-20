'use strict';
export{}

// hogy veszem ki a watchlist-et a queue-ból ???

const watchlist: string[] = [];
let securityAlcoholLoot: number = 0;
const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a
// list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and
// let them enter the festival

function securityCheck(queue: any[]): any[] {
  let festivalgoers: any[] = [];

  queue.forEach((elem, index) => { // egyel beljebb lépett arr-en beül
    //   forEach -> Function -> forEach miatt ez egy fix Function (elem(kötelező), index(opc), arr(opc))
    //          if-en belüli queue.splice-hoz kell ... nem működik: 
    if ( elem.guns === 1 ) {
      // console.log(elem); // lássam, h kik kerültek bele
      watchlist.push(elem.name);  // ..nem müködik: queue.spice( index , 1 ) .. kiveszi a Wade obj-et
    } 
    
    if ( elem.alcohol > 0 ) {
      securityAlcoholLoot += elem.alcohol;
      // console.log(elem.alcohol); // lássam, h mit nullázok
      elem.alcohol = 0;
      // console.log(elem.alcohol); // lássam, h valóban lenollázta
     }
    
  })
  console.log(watchlist);
  console.log(securityAlcoholLoot);
  console.log(queue);
  return festivalgoers;
}
securityCheck(queue);
