# mihaSimpleCanvas
A few very basic HTML5 Canvas functions that simplify its usage

## Prerequisites
- You must create a div id='canvasArea' inside your html file
- add mihaSimpleCanvas above all of your other javascript <script> references
  
## Usage
### createCanvas(x, y, context = '2d')
- Call this at the begining to create an html5 canvas with a width and height suplied by you
- you can make the context be webgl instead of 2d

### clear(color)
- Clear HTML5 Canvas with supplied color

### clearPart(color, x1, y1, x2, y2)
- Clear a certain part of the HTML5 Canvas
- Start point(x1, y1), End point(x2, y2)

### translate(x, y)
- Move the coordinate system

### rotate(x)
- Rotate the cordinate system

### toRadian(x)
- Returns radians converted from Degress

### push() 
- Save current transform

### pop()
- Remove last saved transform from the array

### resetTransform()
- Resets transformations done to default

### line(x1, y1, x2, y2, color = 'white')
- Draw line from T(x1, y1) to P(x2, y2)
- Default color of the line is 'white'

### drawFillRect(x, y, w, h, color = 'white')
- Draw a filled rectangle at T(x, y) with width, height and a fillcolor
- Default color of the rectangle is white


### drawArc(sx, sy, r, sAngle, eAngle, color = 'white', width = 1)
- Draw an arc at S(x, y) that goes from sAngle to eAngle in radians
- Default color is white
- Default lineWidth is 1

### drawFillText(text, x, y, fontSize, colour = 'white', font = 'Arial')
- Draw a text string / charachter at position T(x, y) with a certain size
- Default color is white
- Default font is Arial

### drawStrokeText(text, x, y, fontSize, font = 'Arial')
- Draw a text string / charachter at position T(x, y) with a certain size
- Default font is Arial

### mousePos(canvas, evt)
- Depending where on the canvas you you are returns those coordinates
- Depends on the canvas event mouseMove

### map(s, a1, a2, b1, b2)
- This function takes a value s from a certain range a1 -> a2 and maps it to another range b1 -> b2
- s = value that should be mapped
- a1 = lower boundry of the value that should be mapped
- a2 = upper boundry of the value the should be mapped
- b1 = lower boundry of mapped
- b2 = upper boundry of mapped

### toInt(value)
- Takes in a number and returns the Intiger equivalent

### toBoolean(string)
- Takes in a string that has "true" or "false" and returns the boolean equivalent

### Globals
- WIDTH is canvas.width
- HEIGHT is canvas.height
- ctx is canvas.getContext('2d')
- MOUSE_POS is the mouse position on the canvas calculated everytime the mouse moves on the canvas
