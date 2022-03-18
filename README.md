# Localogger

## _File and Console Logger_

Localogger is a node module that logs to the console and to a file

## Installation


Use [nodejs](https://nodejs.org/en/) to install Localogger.
```
npm install --save Localogger
```
And Localogger require `fs` module
```
npm install --save fs
```

## Function

#### Path

the Path function can be declared if you want to put the log file in a specific folder, otherwise the file will be created at the root

```
const localogger = require("localogger");

//the debug.log file will be created in the Log folder
localogger.Path('./Log/debug.log');

```

#### Log

the Log function needs two arguments, the first is the message and the second is the level of the message
```
const localogger = require("localogger");

// The message will be that the Localogger module is loaded and that this message is an info
localogger.Log('localogger load','INFO');
```

## Usage
```
// import the Localogger module
const localogger = require("localogger");

// log file path
localogger.Path('./debug.log');

// Log command
localogger.Log('localogger start', 'INFO');

```


## Version

| Version | Installation |
| ------- | ------------ |
| 1.0.0 | `npm install --save localogger@1.0.0` |


## License
[ISC](https://www.isc.org/)

