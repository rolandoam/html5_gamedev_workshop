/**
 * simplest sound library, on top of HTML5 Audio
 * (c) 2012, Rolando Abarca
 * http://rolando.cl
 *
 * NOTE:
 * in order for SSound.stop to work (and to be able to play a sound multiple times) the server
 * _must_ be able to accept Request-Range headers.
 */

(function (w) {

	/*jshint sub:true */

	var _sounds = {};

	var _preferedFormat = null;

	/**
	 * load a new audio, stores audio with the specified id
	 */
	var load = function SSound_load(id, path, opts) {
		if (_preferedFormat === null) {
			// nothing too fancy here
			var a = new Audio();
			if (a.canPlayType("audio/mpeg").match(/maybe|probably/)) {
				_preferedFormat = "mp3";
			} else {
				_preferedFormat = "ogg";
			}
		}
		var audio = new Audio();
		opts = opts || {};
		audio.loop = opts['loop'] || false;
		audio.volume = opts['volume'] || 1.0;
		audio.preload = true;
		// test for extension in the path, if there's none, then add the prefered format
		if (path.match(/\.(mp3|ogg|wav)$/))
			audio.src = path;
		else
			audio.src = path + "." + _preferedFormat;
		audio.addEventListener('ended', genericOnFinish.bind(audio));
		_sounds[id] = audio;
	};

	var unload = function SSound_unload(id) {
		delete _sounds[id];
	};

	var play = function  SSound_play(id) {
		if (_sounds[id]) {
			_sounds[id].play();
		} else {
			console.log("no valid sound: " + id);
		}
	};

	/**
	 * this plays the first audio, then the second and loops only the second
	 */
	var linkAndLoop = function SSound_linkAndLoop(id1, id2) {
		if (_sounds[id1] && _sounds[id2]) {
			var a1 = _sounds[id1],
				a2 = _sounds[id2];
			a1.addEventListener("ended", function () {
				play(id2);
			});
			a2.loop = true;
		}
	};

	var loop = function SSound_loop(id, delta) {
		if (_sounds[id]) {
			if (delta) {
				_sounds[id].loop = false;
				_sounds[id].addEventListener("ended", function () {
					this.currentTime = delta;
					play(id);
				});
			} else {
				_sounds[id].loop = true;
			}
		}
	};

	var stop = function SSound_stop(id) {
		if (_sounds[id]) {
			_sounds[id].pause();
			_sounds[id].currentTime = 0;
		}
	};

	var pauseAll = function SSound_pauseAll(stop) {
		for (var k in _sounds) {
			var snd = _sounds[k];
			snd.pause();
			if (stop)
				snd.currentTime = 0;
		}
	};

	var setVolume = function SSound_setVolume(vol, id) {
		vol = Math.max(0, Math.min(vol, 1.0));
		if (id && _sounds[id]) {
			_sounds[id].volume = vol;
		} else {
			for (var key in _sounds) {
				_sounds[key].volume = vol;
			}
		}
	};

	var isPlaying = function SSound_isPlaying(id) {
		if (_sounds[id]) {
			return !_sounds[id].paused;
		}
	};

	var stopAll = function SSound_stopAll() {
		pauseAll(true);
	};

	var genericOnFinish = function SSound_genericOnFinish() {
		this.currentTime = 0;
	};

	w.SSound = {
		"load": load,
		"unload": unload,
		"play": play,
		"stop": stop,
		"isPlaying": isPlaying,
		"linkAndLoop": linkAndLoop,
		"pauseAll": pauseAll,
		"stopAll": stopAll,
		"setVolume": setVolume
	};
})(window);
