input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("D D E D G A G B ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A G A F E D D E ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D C C D E F E D ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
