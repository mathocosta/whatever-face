#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname, 'faces.txt'), (err, data) => {
	if (err) throw err
	let faces = data.toString().split('\n')
	let face = faces[Math.floor(Math.random() * faces.length)]
	console.log(face)
})