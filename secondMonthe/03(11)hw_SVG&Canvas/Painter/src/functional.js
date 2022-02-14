const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


canvas.onmousedown = function (event){
    canvas.onmousemove = function (event){
        let color = document.getElementById('color').value
        let range = document.getElementById('myRange').value

        let x = event.offsetX;
        let y = event.offsetY

        ctx.beginPath();
        ctx.arc(x, y, range, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();

    }

    canvas.onmouseup = function (){
        canvas.onmousemove = null;
        ctx.beginPath();
    }
}

function downloadCanvas() {
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    download.setAttribute("download","CanvasImg.jpg");
}



