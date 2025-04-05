//  url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//  url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//  url = "https://www.cnet.com"                -> domain name = cnet"

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function getDomainName(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("/", "")
    .replace("www.", "")
    .split(".")[0];
}


// const arr = ['apple','banana','qukambar','piyara']
// for(let i = 0; i < arr.length; i++){
//   console.table(arr[i])
// }

