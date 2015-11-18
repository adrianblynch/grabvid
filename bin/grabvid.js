#! /usr/bin/env node

'use strict'

console.log("Called via bin")

const grabvid = require('../')
const args = require('commander')

args
.option('--videoId, <videoId>', 'The video ID or full URL')
.parse(process.argv)

console.log(__dirname);

grabvid(args.videoId)
