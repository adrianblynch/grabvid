'use strict'

module.exports = function (videoId) {

	const ytdl = require('youtube-dl')
	const path = require('path')
	const fs = require('fs')

	const youtubeUrl = 'https://www.youtube.com/watch?v=' + videoId
	const video = ytdl(youtubeUrl, ['-f', '22'])

	let size = 0
	let filePath = ''

	video.on('info', info => {
		size = info.size
		filePath = path.join(process.cwd(), info._filename)
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
	
	video.on('end', () => console.log('\nFile saved to:', filePath))

}
