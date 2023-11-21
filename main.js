let capture;

function setup() {
  Canvas = createCanvas(1000, 410);

  Canvas.center();

  background("gray");

  capture = createCapture(VIDEO);
  capture.size(500, 370);
  capture.hide();
}

function draw() {
    image(capture, 250, 20, 500, 370);

    circle(50, 50, 80);
    rect(50, 50, 55, 55, 15);
    rect(90, 90, 55, 55, 15);
    rect(130, 130, 55, 55, 15);

    circle(950, 360, 80);
    rect(900, 310, 55, 55, 15);
    rect(860, 270, 55, 55, 15);
    rect(820, 230, 55, 55, 15);

    circle(950, 50, 80);
    rect(900, 50, 55, 55, 15);
    rect(860, 90, 55, 55, 15);
    rect(820, 130, 55, 55, 15);

    circle(50, 360, 80);
    rect(50, 310, 55, 55, 15);
    rect(90, 270, 55, 55, 15);
    rect(130, 230, 55, 55, 15);
}

function take_snap() {
    // Crear un lienzo gráfico para la instantánea
    let snapshotCanvas = createGraphics(width, height);
    snapshotCanvas.background(255);
    snapshotCanvas.image(capture, 0, 0, width, height);
  
    // Guardar el lienzo gráfico como un archivo de imagen
    save(snapshotCanvas, 'FakeImage.png');
  
    // No es necesario eliminar el lienzo gráfico, ya que no se renderiza en el DOM
  }
