const valel = document.getElementById('val')
//console.log(valel)
const bt1ele = document.getElementById('min')
const bt2ele = document.getElementById('plus')
//console.log(bt1ele)

bt1ele.addEventListener('click', () => {
    var x=parseInt(valel.innerHTML)
    valel.innerHTML = x-1
})
bt2ele.addEventListener('click', () => {
    var x=parseInt(valel.innerHTML)
    valel.innerHTML = x+1
})