const circle = "circle";
const square = "square";
const rhomb = "rhomb";
const rectangleX = "rectangleX";
const rectangleY = "reactangleY";

const red = 'red';
const green = 'green';
const grey = 'grey';
const img = "img"

// по часовой стрелке с верхних до нижних

export const particlesData = [
    // img
    {
        type: img,
        imgSrc: "Сысуева.png",
        x: 0,
        y: 22,
        threshholdY: -20
    },
    {
        type: img,
        imgSrc: "Карлышев.png",
        x: 53,
        y: 82,
        threshholdY: 20
    },
    {
        type: img,
        imgSrc: "Макшанов.png",
        x: 181,
        y: 104,
        threshholdY: -20
    },
    {
        type: img,
        imgSrc: "Стрелкова.png",
        x: 220,
        y: 0,
        threshholdY: 20
    },
    {
        type: img,
        imgSrc: "Копосов.png",
        x: 320,
        y: 80,
        threshholdY: -45
    },
    {
        type: img,
        imgSrc: "Голиков.png",
        x: 425,
        y: 47,
        threshholdY: 55
    },
    // green
    {
        type: square,
        x: 105,
        y: 32,
        color: green,
        threshholdY: 40,
    },
    {
        type: square,
        x: 295,
        y: 11,
        color: green,
        threshholdY: 50,
    },
    {
        type: square,
        x: 366,
        y: 35,
        color: green,
        threshholdY: 30,
    },
    {
        type: circle,
        x: 300,
        y: 200,
        color: green,
        threshholdY: -90,
    },
    // grey
    {
        type: rectangleX,
        x: 32,
        y: 177,
        color: grey,
        threshholdY: -220,
    },
    {
        type: rectangleY,
        x: 152,
        y: 59,
        color: grey,
        threshholdY: 40,
    },
    {
        type: circle,
        x: 183,
        y: 203,
        color: grey,
        threshholdY: -200,
    },
    {
        type: square,
        x: 340,
        y: -10,
        color: grey,
        threshholdY: 60,
    },
    {
        type: rectangleX,
        x: 411,
        y: 111,
        color: grey,
        threshholdY: -150,
    },
    {
        type: circle,
        x: 456,
        y: 182,
        color: grey,
        threshholdY: -50,
    },
    // red
    {
        type: circle,
        x: 36,
        y: 124,
        color: red,
        threshholdY: 65,
    },
    {
        type: rhomb,
        x: 91,
        y: 145,
        color: red,
        threshholdY: -120,
    },
    {
        type: circle,
        x: 128,
        y: 25,
        color: red,
        threshholdY: 150,
    },
    {
        type: circle,
        x: 480,
        y: 186,
        color: red,
        threshholdY: -125,
    },
]