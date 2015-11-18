'use strict'

const args = require('commander')
const ytdl = require('youtube-dl')
const path = require('path')
const fs = require('fs')

args
.option('--videoId, <videoId>', 'The video ID or full URL')
.parse(process.argv)

const youtubeUrl = 'https://www.youtube.com/watch?v=' + args.videoId
const video = ytdl(youtubeUrl, ['-f', '22'])

let size = 0
let filePath = ''

video.on('info', info => {
	size = info.size
	filePath = path.join(__dirname, 'videos', info._filename)
	video.pipe(fs.createWriteStream(filePath))
})

let position = 0

video.on('data', data => {
	position += data.length
	if (size) {
		let percent = (position / size * 100).toFixed(2)
		process.stdout.cursorTo(0)
		process.stdout.clearLine(1)
		process.stdout.write(percent + '%')
	}
})
video.on('end', () => console.log('File saved to:', filePath))
