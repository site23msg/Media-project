
// let barMask = document.querySelector('.barMask')
// const barTrack = document.querySelector('.barTrack')
// const toggelBtn = document.querySelectorAll('.toggle')
// const web = document.querySelectorAll('.web')
// const social = document.querySelectorAll('.social')
// const video = document.querySelectorAll('.video')
// const photo = document.querySelectorAll('.photo')
// const graphic = document.querySelectorAll('.graphic')
// const projects = document.querySelectorAll('.project')
// let container = document.querySelector('.container')

// let barMaskWidth = barMask.clientWidth/5

// let step = 0;
// window.addEventListener('resize', () =>  {
//     console.log(barMask.clientWidth)
// })


// toggelBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         step = btn.getAttribute('data-toggle');
//         switch(step) {
//             case '1':
//                 step = 0;
//                 console.log(step);
//                 barTrack.style.transform = "translateX(" + step + "px)";
//                 projects.forEach(item => {
//                     item.classList.remove('hidden');
//                 })
//                 container.classList.add("xl:justify-between")
//             break;
//             case '2':
//                 step = barMaskWidth;
//                 console.log(step);
//                 barTrack.style.transform = "translateX(" + step + "px)";
//                 web.forEach(item => {
//                     item.classList.remove('hidden')
//                 })
//                 container.classList.remove("xl:justify-between")
//                 social.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 video.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 photo.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 graphic.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//             break;
//             case '3':
//                 step = 2 * barMaskWidth;
//                 console.log(step);
//                 barTrack.style.transform = "translateX(" + step + "px)";
//                 graphic.forEach(item => {
//                     item.classList.remove('hidden')
//                 })
//                 container.classList.remove("xl:justify-between")
//                 social.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 video.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 photo.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 web.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//             break;
//             case '4':
//                 step = 3 * barMaskWidth;
//                 console.log(step);
//                 barTrack.style.transform = "translateX(" + step + "px)";
//                 video.forEach(item =>  {
//                     item.classList.remove('hidden')
//                 });
//                 container.classList.remove("xl:justify-between")
//                 social.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 photo.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 web.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 graphic.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//             break;
//             case '5':
//                 step = 4 * barMaskWidth;
//                 console.log(step);
//                 barTrack.style.transform = "translateX(" + step + "px)";
//                 photo.forEach(item =>  {
//                     item.classList.remove('hidden')
//                 });
//                 container.classList.remove("xl:justify-between")
//                 video.forEach(item =>  {
//                     item.classList.remove('hidden')
//                 });
//                 social.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 graphic.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//                 web.forEach(item =>  {
//                     item.classList.add('hidden')
//                 });
//             break;
//         }
//     })
// })


const anchorTeam = document.querySelector('.team')
const anchorWhatWeDo = document.querySelector('.whatwedo')
const sectionTeam = document.querySelector('.teamsec')
const sectionWhatWeDo = document.querySelector('.whatwedosec')

anchorTeam.addEventListener('click', (e) => {
    e.preventDefault();
    sectionTeam.scrollIntoView({
        block:'center',
        behavior: 'smooth'
    })
})

anchorWhatWeDo.addEventListener('click', (e) => {
    e.preventDefault();
    sectionWhatWeDo.scrollIntoView({
        block:'center',
        behavior: 'smooth'
    })
})




