#! /usr/bin/env node

'use strict'

const grabvid = require('../')

if (process.argv[2] === undefined) {
	process.exit(0)
}

grabvid(process.argv[2])
