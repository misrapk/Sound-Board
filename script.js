const sounds = ['trend1', 'trend2', 'trend3', 'trend4', 'trend5', 'trend6']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')


    btn.innerText = sound

    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)

})

//function to stop sound
function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}