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

// export function fetchArrays(arr) {
//   let results = []
//   arr.map(element => {
//     fetch(element)
//       .then(data=>data.json())
//       .then(data=>results.push(data.name))
//   })
  
//   return results
// }

export async function fetchAll(arr) {
  const results = await Promise.all(arr.map((url) => fetch(url).then((r) => r.json()).then(d=>d.name)));
  return results
}

