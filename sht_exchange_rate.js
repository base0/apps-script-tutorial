function USD2THB(x) {
  return x * getRate('USD', 'THB')
}

// should use CacheService.getScriptCache() or CacheService.getDocumentCache() to cache the rate, 
// otherwise it will make http request for every calculation.
// may try getting the rate from on open trigger.
function getRate(from, to) {  
  const response = UrlFetchApp.fetch('https://api.exchangeratesapi.io/latest?base=' + from);
  const rate = JSON.parse(response.getContentText()).rates[to];
  return rate;
}
