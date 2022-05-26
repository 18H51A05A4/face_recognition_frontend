let modalOverlay = document.querySelectorAll('[modal-overlay]')
let smallBtn = document.querySelectorAll('.get-attnd')
let closeIcon = document.querySelectorAll('[icon]')
let cancelBtn = document.querySelectorAll('[cancel-modal]')
let modal = document.querySelectorAll('.modal')

smallBtn.forEach((i)=>{
    i.addEventListener('click',()=>{
        let x = document.querySelector(`[modal-overlay="${i.innerHTML}"]`)
        x.style.display = 'block'
        document.body.style.overflowY = 'hidden'
    })
});

modalOverlay.forEach((i)=>{
    i.addEventListener('click',()=>{
        if(!i.hasAttribute('modal-dismiss')){
            i.style.display = 'none'
            document.body.style.overflowY = 'auto'
        }
    })
});

modal.forEach((i)=>{
    i.addEventListener('click',(e)=>{
        e.stopPropagation()
    })
});

closeIcon.forEach((i)=>{
    i.addEventListener('click',()=>{
        let x = i.closest('[modal-overlay]')
        x.style.display = 'none'
        document.body.style.overflowY = 'auto'
    })
});

cancelBtn.forEach((i)=>{
    i.addEventListener('click',()=>{
        let x = i.closest('[modal-overlay]')
        x.style.display = 'none'
        document.body.style.overflowY = 'auto'
    })
});
