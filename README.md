# FCL

## _File and Console Logger_

FCL is a node module that logs to the console and to a file

## Installation


Use [nodejs](https://nodejs.org/en/) to install fcl.
```
npm install --save fcl
```
And FCL require `fs` module
```
npm install --save fs
```

## Function

#### Path

the Path function can be declared if you want to put the log file in a specific folder, otherwise the file will be created at the root

```
const fcl = require("fcl");

//the debug.log file will be created in the Log folder
fcl.Path('./Log/debug.log');

```

#### Log

the Log function needs two arguments, the first is the message and the second is the level of the message
```
const fcl = require("fcl");

// The message will be that the FCL module is loaded and that this message is an info
fcl.Log('fcl load','INFO');
```

## Usage
```
// import the FCL module
const fcl = require("fcl");

// log file path
fcl.Path('./debug.log');

// Log command
fcl.Log('FCL start', 'INFO');

```


## Version

| Version | Installation |
| ------- | ------------ |
| 1.0.0 | `npm install --save fcl@1.0.0` |


## License
[ISC](https://www.isc.org/)

