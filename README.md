# mihaSimpleCanvas
Very basic HTML5 Canvas functions that simplify its usage
<br/><br/><br/><br/><br/><br/>
## Prerequisites
- You must create a div id='canvasArea' inside your html file
- add mihaSimpleCanvas above your all of your other javascript <script> references
  
## Usage
### createCanvas(x, y)
- Call this at the begining to create an html5 canvas with a width and height suplied by you

### clear(color)
- Clear HTML5 Canvas with supplied color

### clearPart(color, x1, y1, x2, y2)
- Clear a certain part of the HTML5 Canvas
- Start point(x1, y1), End point(x2, y2)

### translate(x, y)
- Move the coordinate system

### line(x1, y1, x2, y2, color = 'white')
- Draw line from T(x1, y1) to P(x2, y2)
- Default color of the line is 'white'

### drawFillRect(x, y, w, h, color = 'white')
- Draw a filled rectangle at T(x, y) with width, height and a fillcolor
- Default color of the rectangle is white

### Globals
- WIDTH is canvas.width
- HEIGHT is canvas.height
- ctx is canvas.getContext('2d')
