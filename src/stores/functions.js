export function arrSort (arr)  {
  arr.sort(function(a, b) {
  var textA = a.title.toUpperCase();
  var textB = b.title.toUpperCase();
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
  return arr
}
export function regularArrSort (arr)  {
  arr.sort(function(a, b) {
  var textA = a.toUpperCase();
  var textB = b.toUpperCase();
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
  return arr
}

export async function fetchAll(arr) {
  const results = await Promise.all(arr.map((url) => fetch(url).then((r) => r.json()).then(d=>d.name)));
  return results
}

export function fetchSearch(category, input){
  switch(category){
    case 'people':
    return myFetch('people', input)
    break;
    case 'starships':
    return myFetch('starships', input)
    break;
    case 'vehicles':
    return myFetch('vehicles', input)
    break;
    case 'species':
    return myFetch('species', input)
    break;
    case 'planets':
    return myFetch('planets', input)
    break;  
  }
}
 function myFetch(category, input){
  return fetch(`https://swapi.dev/api/${category}?search=${input}`)
  .then(data=>data.json())
}

