const Matriz = document.getElementById("Matriz");

const NeoPixel = `        <div class="Neopixel">
</div>`

window.addEventListener('load',(e)=>{
    for (var i = 0; i < 256; i++) {
        Matriz.innerHTML += NeoPixel;
    }
});