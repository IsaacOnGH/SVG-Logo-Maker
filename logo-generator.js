const { getUserInput } = require('./lib/userInput');
const { writeToFile } = require('./lib/fileWriter');

const Circle = require('./shapes/circle');
const Square = require('./shapes/square');
const Triangle = require('./shapes/triangle');

const main = async () => {
    const text = (await getUserInput('Enter the logo text (up to 3 characters): ')).slice(0, 3);
    const textColor = await getUserInput('Select a color (e.g., red, blue, #FFA500): ');
    const shapeType = await getUserInput('Select a shape (circle, square, triangle): ');
    const shapeColor = await getUserInput('Select a color for the shape (e.g., red, blue, #FFA500): ');

    let shape;
    if (shapeType === 'circle') {
        shape = new Circle(text, textColor, shapeColor, shapeType);
    } else if (shapeType === 'square') {
        shape = new Square(text, textColor, shapeColor, shapeType);
    } else if (shapeType === 'triangle') {
        shape = new Triangle(text, textColor, shapeColor, shapeType);
    } else {
        console.log('Invalid shape selected.');
        return;
    }

    const svgData = shape.render();

    const filename = 'logo.svg';
    writeToFile(filename, svgData);

    console.log(`Generated ${filename}`);

}

main();