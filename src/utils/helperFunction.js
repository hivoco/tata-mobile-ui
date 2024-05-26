const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const micOnSound = () => {
  const audio = new Audio("/sounds/startmic.wav");
  audio.volume = 0.5;
  audio.play();
};
const micOffSound = () => {
  const audio = new Audio("/sounds/endmic.wav");
  audio.volume = 0.5;
  audio.play();
};

const rightAnswerSound = () => {
  const audio = new Audio("/sounds/right_ans_tone.mp3");
  audio.volume = 0.5;
  audio.play();
};
const wrongAnswerSound = () => {
  const audio = new Audio("/sounds/wrong_ans_sound.wav");
  audio.volume = 0.5;
  audio.play();
};

const decodeUnicode = (unicodeString) => {
  return unicodeString.replace(/\\u[\dA-F]{4}/gi, (match) => {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
  });
};

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result.split(",")[1]);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}

// platformUtils.js
const getPlatform = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  if (/Win/i.test(userAgent)) {
    return "Windows";
  }

  if (/Mac/i.test(userAgent)) {
    return "MacOS";
  }

  if (/Linux/i.test(userAgent)) {
    return "Linux";
  }

  return "unknown";
};

function processAudioBlob(blob) {
  // Convert Blob to ArrayBuffer
  blob.arrayBuffer().then((arrayBuffer) => {
    // Create an AudioContext
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    // Decode the audio data
    audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
      // Process the audio data
      analyzeAudio(audioBuffer);
    });
  });
}

function analyzeAudio(audioBuffer) {
  const rawData = audioBuffer.getChannelData(0); // Get the data from the first channel
  const samples = 1000; // Number of samples to analyze
  const blockSize = Math.floor(rawData.length / samples); // Size of each block of samples
  let sumOfSquares = 0;
  let silenceThreshold = 0.01; // Threshold for detecting silence
  let silenceCount = 0;

  for (let i = 0; i < samples; i++) {
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum += rawData[i * blockSize + j];
    }
    let average = sum / blockSize;
    sumOfSquares += average * average;
    if (Math.abs(average) < silenceThreshold) {
      silenceCount++;
    }
  }
}

export {
  debounce,
  micOnSound,
  micOffSound,
  rightAnswerSound,
  wrongAnswerSound,
  decodeUnicode,
  blobToBase64,
  getPlatform,
  processAudioBlob,
};
