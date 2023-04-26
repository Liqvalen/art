const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector)

    function showImg(block) {
        const img = block.querySelector('img')
        img.classList.add('animated', 'fadeIn')
        // something.png => something-1.png
        img.src = img.src.slice(0, -4) + '-1.png' // -4 символа с конца строки
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { // все параграфы кроме (.sizes-hit)
            p.style.display = 'none'
        })
    }
    function hideImg(block) {
        const img = block.querySelector('img')
        // img.classList.add('animated', 'fadeOut')
        // something-1.png => something.png
        img.src = img.src.slice(0, -6) + '.png'  // -6 символа с конца строки
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { 
            // p.classList.add('animated', 'fadeOut')
            p.style.display = 'block'
        })
    }
    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block)
        })
        block.addEventListener('mouseout', () => {
            hideImg(block)
        })
    })
}

export default pictureSize