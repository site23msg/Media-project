
let barMask = document.querySelector('.barMask')

const barTrack = document.querySelector('.barTrack')

const toggelBtn = document.querySelectorAll('.toggle')

let barMaskWidth = barMask.clientWidth/5

let step = 0;
window.addEventListener('resize', () =>  {
    console.log(barMask.clientWidth)
})


toggelBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        step = btn.getAttribute('data-toggle');
        switch(step) {
            case '1':
                step = 0;
                console.log(step);
                barTrack.style.transform = "translateX(" + step + "px)";
            break;
            case '2':
                step = barMaskWidth;
                console.log(step);
                barTrack.style.transform = "translateX(" + step + "px)";
            break;
            case '3':
                step = 2 * barMaskWidth;
                console.log(step);
                barTrack.style.transform = "translateX(" + step + "px)";
            break;
            case '4':
                step = 3 * barMaskWidth;
                console.log(step);
                barTrack.style.transform = "translateX(" + step + "px)";
            break;
            case '5':
                step = 4 * barMaskWidth;
                console.log(step);
                barTrack.style.transform = "translateX(" + step + "px)";
            break;
        }
    })
})



