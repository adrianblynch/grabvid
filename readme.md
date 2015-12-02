# Grabvid

Given a Youtube video ID, downloads it locally for watching offline.

## Install & usage

### npm

`npm install -g grabvid`

Why globally? Because my usage of this is generally to download a video into my current directory with:

`grabvid dQw4w9WgXcQ`

### GitHub

`git clone https://github.com/adrianblynch/grabvid`

`cd grabvid`

`node bin/grabvid dQw4w9WgXcQ`

Where _dQw4w9WgXcQ_ is the v query parameter of a Youtube video URL.

Videos are saved in the current directory.

## Todo

- Figure out the errors for some videos
