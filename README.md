# Logger

This is a library to make logs with types, dates and colors on your console or backend projects.

## Introduction

### Installation

You can install the package with npm

```
$ npm install ducenlogger
```

### Usage

You can make customs register logs to trace the flow of your project

```js
const { Ducenlogger } = require("ducenlogger");
const logger = new Ducenlogger(); //By default en dev mode, but you can use the prod mod to write the logs in a file

//This make a log with the hashtag [SERVER], the current date and time, color, background and style personalized
logger.log("Custom log", { color: "info", type: "server", background: "success", decorator: "underscore" });

//This create a string with custom style, color, and background
let customText = logger.text("Custom text", {
	color: "error",
	type: "message",
	background: "warning",
	decorator: "dim",
});

console.log(customText);
```

## Logger Options

The functions of The Logger class apart from the message receives an object of the Interface ILoggerOptions that works as text configuration, each one is optional and you can combine them

-   (options):IDucenloggerOptions:
    -   type: (Useless on text function) Determinate the flag of the Log function and recives the follow types:
        -   message: [MESSAGE] flag (the default flag)
        -   server: [SERVER] flag
        -   system: [SYSTEN] flag
        -   files: [FILE] flag
        -   error: [ERROR] flag
        -   database: [DATABASE] flag
        -   request: [REQUEST] flag
        -   response: [RESPONSE] flag
    -   color: The color style:
        -   message: White color (the default color)
        -   null: Black color
        -   info: Blue color
        -   success: Green color
        -   error: Red color
        -   warning: Yellow color
        -   system: Magenta color
        -   importan: Cyan color
    -   background: The background color of the text
        -   message: White color
        -   null: Black color (the default color)
        -   info: Blue color
        -   success: Green color
        -   error: Red color
        -   warning: Yellow color
        -   system: Magenta color
        -   importan: Cyan color
    -   decorator: The style of the text
        -   reset: The default style
        -   bright: Bold and bright the text
        -   dim: Dim style
        -   underscore: Make an underline on text
        -   blink: Blink style
        -   reverse: Reverse the color of the background and text
        -   hidden: Hide the text on background

## Log

The log function make a log of one register with a flag to identificate the process and a the date time

```js
const { Ducenlogger } = require("ducenlogger");
const logger = new Ducenlogger();

console.log("\n");
logger.log("Default test"); // Normal message log

console.log("\n");

//Font color messages
logger.log("Test color message", { color: "message" }); // white message
logger.log("Test color null", { color: "null", background: "message" }); // Black message
logger.log("Test color info", { color: "info" }); // Blue message
logger.log("Test color success", { color: "success" }); // Green message
logger.log("Test color error", { color: "error" }); // Red message
logger.log("Test color warning", { color: "warning" }); // Yellow message
logger.log("Test color system", { color: "system" }); // Magenta message
logger.log("Test color important", { color: "important" }); // Cyan message

console.log("\n");

//Background
logger.log("Test background message", { background: "message", color: "null" }); // BG white
logger.log("Test background null", { background: "null" }); // BG black
logger.log("Test background info", { background: "info" }); // BG blue
logger.log("Test background success", { background: "success" }); // BG green
logger.log("Test background error", { background: "error" }); // BG red
logger.log("Test background warning", { background: "warning" }); // BG yellow
logger.log("Test background system", { background: "system" }); // BG magenta
logger.log("Test background important", { background: "important" }); // BG cyan

console.log("\n");

logger.log("Test decorator reset", { decorator: "reset" }); // reset the color and styles
logger.log("Test decorator bright", { decorator: "bright" }); // Bold and bright font
logger.log("Test decorator dim", { decorator: "dim" }); // Dim
logger.log("Test decorator underscore", { decorator: "underscore" }); // Underline
logger.log("Test decorator blink", { decorator: "blink" }); // blink
logger.log("Test decorator reverse", { decorator: "reverse" }); // Reverse colors
logger.log("Test decorator hidden", { decorator: "hidden" }); // Hide the message

console.log("\n");

logger.log("Prueba normal"); // Normal message log
logger.log("Connected to enterprise database", { type: "database", color: "null", background: "message" }); //Database log
logger.log("Listening on http://localhost:3000", { type: "server", color: "info" }); //Server log
logger.log("Requested / GET 1.1 ", { type: "request", color: "important" }); //Http request log
logger.log("Responsed / with 10255 bytes on 1.055 miliseconds", { type: "response", color: "success" }); //Http response log
logger.log("Error en el controlador de la ruta /usuarios", { type: "error", color: "error" }); //Error log
logger.log("Archivo no pudo ser cerrado adecuadamente", { type: "files", color: "warning" });
logger.log("Salto de hilo", { type: "database", color: "system" }); //System log
```

## Text

The text function format a text with color, background and style that you prefer

```js
const { Ducenlogger } = require("ducenlogger");
const { text } = new Ducenlogger();

//Text color change
let textMessage = text("Text message", { color: "message" }); //Default white
let textNull = text("Text null", { color: "null", background: "message" }); // Black
let textInfo = text("Text info", { color: "info" }); // Blue
let textSuccess = text("Text success", { color: "success" }); // Green
let textError = text("Text error", { color: "error" }); // Red
let textWarning = text("Text warning", { color: "warning" }); // Yellow
let textSystem = text("Text system", { color: "system" }); // Magenta
let textImportant = text("Text important", { color: "important" }); // Cyan

console.log(`\t${textMessage} \n\t${textNull} \n\t${textInfo} \n\t${textSuccess} \n\t${textError} \n\t${textWarning} \n\t${textSystem} \n\t${textImportant} \n`);

//Background color change
let bgMessage = text("Background message", { background: "message" }); //White bg
let bgNull = text("Background null", { background: "null", color: "message" }); // Black bg
let bgInfo = text("Background info", { background: "info" }); // Blue bg
let bgSuccess = text("Background success", { background: "success" }); // Green bg
let bgError = text("Background error", { background: "error" }); // Red bg
let bgWarning = text("Background warning", { background: "warning" }); // Yellow bg
let bgSystem = text("Background system", { background: "system" }); // Magenta bg
let bgImportant = text("Background important", { background: "important" }); // Cyan bg

console.log(`\t${bgMessage} \n\t${bgNull} \n\t${bgInfo} \n\t${bgSuccess} \n\t${bgError} \n\t${bgWarning} \n\t${bgSystem} \n\t${bgImportant} \n`);

//Style text change
let reset = text("Reset text", { decorator: "reset" }); // Default style
let bright = text("Bright text", { decorator: "bright" }); // Bright and bold
let dim = text("Dim text", { decorator: "dim" }); // Dim style
let underscore = text("Underscored text", { decorator: "underscore" }); // Underline
let blink = text("Blink text", { decorator: "blink" }); // Blink style
let reverse = text("Reversed text", { decorator: "reverse" }); // Reverse text style
let hidden = text("Hidden text", { decorator: "hidden" }); // Hidden text

console.log(`\t${reset} \n\t${bright} \n\t${dim} \n\t${underscore} \n\t${blink} \n\t${reverse} \n\t${hidden} \n `);

//Some examples
let defaultText = text("Default"); //Default text without changes
let rainbow = // You can make combinations of colors and strings
	text("R", { color: "error" }) +
	text("a", { color: "info" }) +
	text("i", { color: "warning" }) +
	text("n", { color: "success" }) +
	text("b", { color: "system" }) +
	text("o", { color: "important" }) +
	text("w");

console.log(`\t${defaultText} \n\t${rainbow}`);
```

Author: **Duccem29**
