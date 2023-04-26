const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector)

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btns.forEach(btn => {
                btn.classList.remove('active', 'active-style', 'active-content')
            })
            // this.classList.delete('active-style')
            this.classList.add('active-style')
            this.nextElementSibling.classList.add('active-content')
            if(this.classList.contains('active-style')){
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
            } else {
                this.nextElementSibling.style.maxHeight = '0px'
            }
        })
    })

    // btn.addEventListener('click', function() {
    //     // this.classList.delete('active-style')
    //     this.classList.toggle('active-style')
    //     this.nextElementSibling.classList.toggle('active-content')
    //     if(this.classList.contains('active-style')){
    //         this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
    //     } else {
    //         this.nextElementSibling.style.maxHeight = '0px'
    //     }
    // })




    //const blocks = document.querySelectorAll(itemsSelector)
    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown')
    // })

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if(!this.classList.contains('active')){
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style')
    //             })
    //             this.classList.add('active', 'active-style')
    //         }
    //     })
    // })
}

export default accordion