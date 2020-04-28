addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let response = await fetch('https://cfw-takehome.developers.workers.dev/api/variants');

  let variantArray = await response.json();
  console.log(variantArray);
  let randNum = Math.round(Math.random());
  console.log(randNum);
  let urlVar = variantArray.variants[randNum]
  console.log(urlVar);
  let secondResponse = await fetch(urlVar);
  console.log(secondResponse);
  return secondResponse;
}
