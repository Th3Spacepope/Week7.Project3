//create audio context
const audCtx = new AudioContext();

//dBtoA
const dBtoA = function (linAmp) {
  return Math.pow(10, linAmp / 20);
};

//create oscillator
let myOsc = audCtx.createOscillator();
myOsc.type = "square";
myOsc.frequency.value = 0;

//create tremolo osc
let tremOsc = audCtx.createOscillator();
tremOsc.type = "sine";
tremOsc.frequency.value = 0;

//create gain
let masterGain = audCtx.createGain();

//create tremolo center
let constSrc = audCtx.createConstantSource();
constSrc.offset.value = 1;

//create tremolo depth
let tremDpth = audCtx.createGain;

//connect stuff
myOsc.connect(masterGain);
masterGain.connect(audCtx.destination);

//Functions
const updateMasterFader = function () {
  let amp = dBtoA(masterFader.value);
  masterGain.gain.exponentialRampToValueAtTime(amp, audCtx.currentTime + 0.01);
  masterGainLabel.innerText = `${masterFader.value} dBfs`;
};

const updateOscFreq = function () {
  myOsc.frequency.value = `${oscFreq.value}`;
  oscFreqLabel.innerText = `${oscFreq.value} Hz`;
};

const updateWaveType1 = function () {
  myOsc.type = "sine";
  console.log(myOsc.type);
};
const updateWaveType2 = function () {
  myOsc.type = "square";
  console.log(myOsc.type);
};
const updateWaveType3 = function () {
  myOsc.type = "triangle";
  console.log(myOsc.type);
};

const start = function () {
  myOsc.start();
};
const stop = function () {
  myOsc.stop();
};

//HTML Elements
let masterFader = document.getElementById("masterGain");
let masterGainLabel = document.getElementById("masterGainLabel");
let oscFreq = document.getElementById("freq");
let oscFreqLabel = document.getElementById("freqLabel");
let waveTypeSine = document.getElementById("sine");
let waveTypeSq = document.getElementById("square");
let waveTypeTri = document.getElementById("triangle");
let oscStart = document.getElementById("start");
let oscStop = document.getElementById("stop");

//Listeners
masterFader.addEventListener("input", updateMasterFader);
oscFreq.addEventListener("input", updateOscFreq);
waveTypeSine.addEventListener("click", updateWaveType1);
waveTypeSq.addEventListener("click", updateWaveType2);
waveTypeTri.addEventListener("click", updateWaveType3);
oscStart.addEventListener("click", start);
oscStop.addEventListener("click", stop);
