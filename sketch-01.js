const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#eeeeee';
    context.fillRect(0, 0, width, height);
    
    const w   = width  * 0.10; // 10%
    const h   = height * 0.10;
    const gap = width  * 0.05;
    const ix  = width  * 0.17; // initial x - 100/500=17%
    const iy  = height * 0.17; // initial y
    
    const off = width * 0.02; // 16
    
    let x, y;
    
    // drawing with loops
    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;
        
        context.strokeStyle = getRandomGreys();
        context.lineWidth = w * Math.random() * 0.05;
        context.beginPath();
        context.rect(x, y, w* Math.random(), h* Math.random());
        context.stroke();

        if (Math.random() > 0.8){ // this condition is true on aventage on 50% of the time
          // drawing small squares
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }

      }
    }    
  };
};


function getRandomGreys() {
  var letters = '569CD6'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 5)];
  }
  return color;
}

canvasSketch(sketch, settings);
