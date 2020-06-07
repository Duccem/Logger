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
const { Logger } = require("logger");

//This make a log with the hashtag [SERVER], the current date and time, color, background and style personalized
Logger.log("Custom log message", { color: "info", type: "server", background: "success", decorator: "underscore" });

//This create a string with custom style, color, and background
let customText = Logger.text("Custom text", {
	color: "error",
	type: "message",
	background: "warning",
	decorator: "dim",
});

console.log(customText);
```

## Logger Options

The functions of The Logger class apart from the message receives an object of the Interface ILoggerOptions that works as text configuration, each one is optional and you can combine them

-   (options):ILoggerOptions:
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
const { Logger } = require("logger");

console.log("\n");
Logger.log("Default test"); // Normal message log

console.log("\n");

//Font color messages
Logger.log("Test color message", { color: "message" }); // white message
Logger.log("Test color null", { color: "null", background: "message" }); // Black message
Logger.log("Test color info", { color: "info" }); // Blue message
Logger.log("Test color success", { color: "success" }); // Green message
Logger.log("Test color error", { color: "error" }); // Red message
Logger.log("Test color warning", { color: "warning" }); // Yellow message
Logger.log("Test color system", { color: "system" }); // Magenta message
Logger.log("Test color important", { color: "important" }); // Cyan message

console.log("\n");

//Background
Logger.log("Test background message", { background: "message", color: "null" }); // BG white
Logger.log("Test background null", { background: "null" }); // BG black
Logger.log("Test background info", { background: "info" }); // BG blue
Logger.log("Test background success", { background: "success" }); // BG green
Logger.log("Test background error", { background: "error" }); // BG red
Logger.log("Test background warning", { background: "warning" }); // BG yellow
Logger.log("Test background system", { background: "system" }); // BG magenta
Logger.log("Test background important", { background: "important" }); // BG cyan

console.log("\n");

Logger.log("Test decorator reset", { decorator: "reset" }); // reset the color and styles
Logger.log("Test decorator bright", { decorator: "bright" }); // Bold and bright font
Logger.log("Test decorator dim", { decorator: "dim" }); // Dim
Logger.log("Test decorator underscore", { decorator: "underscore" }); // Underline
Logger.log("Test decorator blink", { decorator: "blink" }); // blink
Logger.log("Test decorator reverse", { decorator: "reverse" }); // Reverse colors
Logger.log("Test decorator hidden", { decorator: "hidden" }); // Hide the message

console.log("\n");

Logger.log("Prueba normal"); // Normal message log
Logger.log("Connected to enterprise database", { type: "database", color: "null", background: "message" }); //Database log
Logger.log("Listening on http://localhost:3000", { type: "server", color: "info" }); //Server log
Logger.log("Requested / GET 1.1 ", { type: "request", color: "important" }); //Http request log
Logger.log("Responsed / with 10255 bytes on 1.055 miliseconds", { type: "response", color: "success" }); //Http response log
Logger.log("Error en el controlador de la ruta /usuarios", { type: "error", color: "error" }); //Error log
Logger.log("Archivo no pudo ser cerrado adecuadamente", { type: "files", color: "warning" });
Logger.log("Salto de hilo", { type: "database", color: "system" }); //System log
```

## Text

The text function format a text with color, background and style that you prefer

```js
const { Logger } = require("logger");

//Text color change
let textMessage = Logger.text("Text message", { color: "message" }); //Default white
let textNull = Logger.text("Text null", { color: "null", background: "message" }); // Black
let textInfo = Logger.text("Text info", { color: "info" }); // Blue
let textSuccess = Logger.text("Text success", { color: "success" }); // Green
let textError = Logger.text("Text error", { color: "error" }); // Red
let textWarning = Logger.text("Text warning", { color: "warning" }); // Yellow
let textSystem = Logger.text("Text system", { color: "system" }); // Magenta
let textImportant = Logger.text("Text important", { color: "important" }); // Cyan

console.log(`\t${textMessage} \n\t${textNull} \n\t${textInfo} \n\t${textSuccess} \n\t${textError} \n\t${textWarning} \n\t${textSystem} \n\t${textImportant} \n`);

//Background color change
let bgMessage = Logger.text("Background message", { background: "message" }); //White bg
let bgNull = Logger.text("Background null", { background: "null", color: "message" }); // Black bg
let bgInfo = Logger.text("Background info", { background: "info" }); // Blue bg
let bgSuccess = Logger.text("Background success", { background: "success" }); // Green bg
let bgError = Logger.text("Background error", { background: "error" }); // Red bg
let bgWarning = Logger.text("Background warning", { background: "warning" }); // Yellow bg
let bgSystem = Logger.text("Background system", { background: "system" }); // Magenta bg
let bgImportant = Logger.text("Background important", { background: "important" }); // Cyan bg

console.log(`\t${bgMessage} \n\t${bgNull} \n\t${bgInfo} \n\t${bgSuccess} \n\t${bgError} \n\t${bgWarning} \n\t${bgSystem} \n\t${bgImportant} \n`);

//Style text change
let reset = Logger.text("Reset text", { decorator: "reset" }); // Default style
let bright = Logger.text("Bright text", { decorator: "bright" }); // Bright and bold
let dim = Logger.text("Dim text", { decorator: "dim" }); // Dim style
let underscore = Logger.text("Underscored text", { decorator: "underscore" }); // Underline
let blink = Logger.text("Blink text", { decorator: "blink" }); // Blink style
let reverse = Logger.text("Reversed text", { decorator: "reverse" }); // Reverse text style
let hidden = Logger.text("Hidden text", { decorator: "hidden" }); // Hidden text

console.log(`\t${reset} \n\t${bright} \n\t${dim} \n\t${underscore} \n\t${blink} \n\t${reverse} \n\t${hidden} \n `);

//Some examples
let defaultText = Logger.text("Default"); //Default text without changes
const { text } = Logger;
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
