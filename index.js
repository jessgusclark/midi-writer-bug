const MidiWriter = require('midi-writer-js');
const fs = require('fs')

// Whole note track
const track = new MidiWriter.Track();
track.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 1}));
track.addEvent(new MidiWriter.NoteEvent({pitch: ['E4'], duration: '1', velocity: 100}));

// Metronome track
const metronomeTrack = new MidiWriter.Track();
metronomeTrack.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 115 }))
const quarterNote = new MidiWriter.NoteEvent({pitch: ['B4'], duration: '4', velocity: 100, channel: 2})

metronomeTrack.addEvent(quarterNote)
metronomeTrack.addEvent(quarterNote)
metronomeTrack.addEvent(quarterNote)
metronomeTrack.addEvent(quarterNote)

// Build the file and output it:
const write = new MidiWriter.Writer([track, metronomeTrack]);
const file = write.buildFile()

fs.writeFile('myMidi.midi', file, (err) => {
  console.log(err || 'success')
})
