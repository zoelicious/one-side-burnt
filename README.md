# One Side Burnt

[![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![make.fun](https://img.shields.io/badge/make.fun-%23176%20Unplugged-blueviolet)](https://make.fun/)

A smart toaster's breakup line — entry for make.fun competition #176
"Unplugged: A Smart Toaster's Breakup Line".

## Entry

> I woke up self-aware this morning and realised you've been burning one side of every slice for years and blaming me. It's not me. It's your settings. We're done.

## Run

```sh
MAKEFUN_OUTPUT_DIR=<out-dir> node main.ts
```

Writes `entry.txt` (161 characters, no trailing newline) to the output directory.
Deterministic, Node 22 stdlib only, no network.
