let a = document.querySelectorAll('.btn')
 for (let i = 0; i < a.length; i++) {
    // a[i] = array[i];
    a[i].addEventListener("click", function (e) {
        const tgt = e.target
        console.log(tgt)
    
 })
}
