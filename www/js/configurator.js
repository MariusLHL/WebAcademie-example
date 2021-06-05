let total = 0
let preview = document.getElementById('preview')
let mini = document.getElementById('mini')
let max = document.getElementById('max')
let price = document.getElementById('price')


mini.addEventListener('mouseenter', () => {
    preview.setAttribute("src", "./static/mini.jpg")
})

max.addEventListener('mouseenter', () => {
    preview.setAttribute("src", "./static/max.jpg")
})

function model(x) {
    switch (x) {
        case 'mini':
            total += 1200
            break;

        case 'max':
            x = ""
            total += 1300
    }

    document.cookie = "model=" + x;
    document.getElementById('toggle').hidden = true
    document.getElementById('color').hidden = false
}

function color(color) {
    switch (color) {
        case 'purple':
            total += 200
            document.cookie = "color=" + color;
            break;

        default:
            document.cookie = "color=" + color;
    }
    document.getElementById('color').hidden = true
    document.getElementById('storage').hidden = false
}


function info(){
    let cookie = Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')))
    console.log(cookie)
    document.getElementById('model').innerHTML = cookie.model
    document.getElementById('color-label').innerHTML = cookie.color
    document.getElementById('storage-label').innerHTML = cookie.stockage
}


function stockage(ammount) {
    switch (ammount) {
        case '128':
            break;
        case '256':
            total += 150
            document.cookie = "stockage=" + ammount;
            break;

        case '512':
            total += 400
            document.cookie = "stockage=" + ammount;
    }
    price.innerHTML = total + "$"
    document.cookie = "total=" + total + ";"
    document.getElementById('storage').hidden = true
    document.getElementById('total').hidden = false
    info()
}

