'use srtict'
export{}

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = "https:" + url.replace("bots", "odds").substring(5);

console.log(url);

/*
// a feadat nem kér function-t

function fixUrl(line: string): string {
  
  let changeUrl = url.replace("bots", "odds");
  // let url: string = url.replace("bots", "odds");    miért húzza alá a 2.url-t ????
 
  let substringUrl = changeUrl.substring(5);
  url = "https:" + substringUrl;
  
  console.log(url);

  return url
}

fixUrl(url);
*/