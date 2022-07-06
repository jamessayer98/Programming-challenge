# Nifty's Programming Challenge

Welcome to the nifty's coding challenge. 

To begin:
1. Fork this repo to your own github (or gitlab) account.
2. Select one of the challenges from below.
3. When you are done with coding your challenge, push your code up to your repo, and send an email response containing your link.

---
Choose ONE of the challenges below! 

---



### Option 1: Find The Most Common N Path Sequence
You are given a log file from a webserver with the following format:

`<userId> <path>`

The goal is to identify the most common `N` path sequence that our users visit.
Note that the log file is recorded in real-time so different user sessions are logged simultaneously.
In the event of a tie, all tied sequences are returned.

Assumptions:
- The log file is guaranteed to be of suitable length to be completely processed in-memory, so no need for parallel processing/chunking/threads.
- For simplicity's sake lets assume that your function has the log file as a single string of multi-line text, which you will be able to split into an array of strings per line. i.e.: `logfile.split('\n');`

Function requirements: 
- Input[0]: string (Multi-line logfile with `\n` line-breaks.)
- Input[1]: number (the sequence-length we expect to be returned)
- Output string[][] (an array of three-path sequences with the greatest popularity)

Example input[0]:

```
1 /home
2 /home
1 /shop
3 /home
1 /checkout
3 /shop
2 /settings
3 /checkout
2 /shop
2 /checkout
```
Example input[1]:
```
3
```

Example output:
```
[["home","shop","checkout"]]
```
Output explanation:

In this example `N=3` meaning: We are looking for a 3 path sequence. Users 1, and 3 both followed the same three path sequence of page-visits: `home`, `shop`, then `checkout` and it is the most common in this list. The only other three-path sequences are created by user 2 who has 4 total logs. This creates two different three path sequences, neither of which has the popularity of home+shop+checkout.

Challenge Code:


```javascript
const sequenceLength = 3;
const logFile = `
1 /home
2 /home
1 /shop
3 /home
1 /checkout
3 /shop
2 /settings
3 /checkout
2 /shop
2 /checkout`;
function findMostCommonNPathSequence(logFile, sequenceLength) {
  // Your code...
}
```


### Option 2: Draining Flower Pots

Flower pots all need proper drainage. You are given a "pot" consisting of a grid. Each coordinate of the grid will either contain an "`_`" denoting permeable "dirt" or it will contain an "`X`" denoting non-permeable "rock". Water will be poured into the pot from the top (all top columns), and flow downwards, around rocks, to eventually find "dirt" on the bottom row from which to drain.  Simply knowing that there is dirt on the bottom and top of the pot is not enough, because we must prove there is a path through which water can flow.

Water can flow right, left, down, and even UP, but never diagonally.

Example1:
```javascript
const validPot = [
  ['_','X','X','X','X'],
  ['_','X','X','X','X'],
  ['_','X','_','_','_'],
  ['_','X','_','X','_'],
  ['_','_','_','X','_'],
  ['X','X','X','X','_']
];
function doesPotDrain(validPot) {
  // your code
}
```
Example1 output:
```js
true
```
Example2:
```javascript
const invalidPot = [
  ['_','X','X','X','X'],
  ['_','X','X','X','X'],
  ['_','X','_','X','X'],
  ['_','X','_','X','X'],
  ['_','_','_','X','X'],
  ['X','X','X','X','_']
];
function doesPotDrain(invalidPot) {
  // your code
}
```
Example2 output:
```js
false
```


