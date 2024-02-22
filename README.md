# Logger

This is a library to make logs with types, dates and colors on your console or backend projects.

## Introduction

### Installation

You can install the package with npm

```
$ npm install @duccem/duccem-logger
```

### Usage

You can make customs register logs to trace the flow of your project

```js
const { ConsoleLogger, FormatDates, Levels } = require("@duccem/duccem-logger");

const logger = new ConsoleLogger({
  dateFormat: FormatDates.ISO,
  level: Levels.debug
})

logger.log("Hello world!")

//Output: [info] 2024-02-22 11:06:31.342 Hello world
```

## Logger Options

The logger options let you configure the date format of the input and the max level of logging

```js
interface LoggerOptions {
  dateFormat?: FormatDates; // default FormatDates.ISO
  level?: Levels; // default Levels.debug
}
```

## Functions levels
Each function correspond to a level logging

```js
const logger = require("@duccem/duccem-logger");

logger.log("Hello world"); // [info] 2024-02-22 11:06:31.342 Hello world
logger.error("Unknown error"); // [error] 2024-02-22 11:06:31.342 Unknown error
logger.warn("Alert message"); // [warn] 2024-02-22 11:06:31.342 Alert message
logger.verbose("This is a message"); // [verbose] 2024-02-22 11:06:31.342 This is a message
logger.debug("Debugging..."); // [debug] 2024-02-22 11:06:31.342 Debugging...
logger.http("Request and Response"); // [http] 2024-02-22 11:06:31.342 Request and Response
```

## Adapters 

The adapters are wrappers of some transports

### FileLogger

Transport to files

```js
interface FileLoggerOptions {
  // LoggerOptions still working
  fileName?: string; // path and name of the log file
}

const { FileLogger } = require('@duccem/duccem-logger');

const logger = new FileLogger({
  fileName: 'logs'
})

logger.log('Hello world') // you can see a new file in the root named: logs.log with a line: [info] 2024-02-22 11:06:31.342 Hello world
```

### LokiLogger

Transport to grafana-loki 

```js
interface LokiLoggerOptions {
  // LoggerOptions still working
  labels: { [key: string]: string }; // labels to tag in loki
  url?: string; // url connection to loki
}

const { LokiLogger } = require('@duccem/duccem-logger');

const logger = new FileLogger({
  labels: { app: 'my-app', env: 'prod' },
  url: 'https://my-host:port'
})

logger.log('Hello world') // you can see a new line of log in grafana with: [info] 2024-02-22 11:06:31.342 Hello world
```
Author: **Duccem**
