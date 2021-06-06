
let cookie = Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')))
console.log(cookie)
document.getElementById('model').innerHTML = cookie.model
document.getElementById('color').innerHTML = cookie.color
document.getElementById('storage').innerHTML = cookie.stockage
document.getElementById('total').innerHTML = cookie.total