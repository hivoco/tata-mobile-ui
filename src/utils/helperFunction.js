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
  audio.play();
};
const micOffSound = () => {
  const audio = new Audio("/sounds/endmic.wav");
  audio.play();
};

const rightAnswerSound = () => {
  const audio = new Audio("/sounds/right_ans_tone.mp3");
  audio.play();
};
const wrongAnswerSound = () => {
  const audio = new Audio("/sounds/wrong_ans_sound.wav");
  audio.play();
};

const decodeUnicode = (unicodeString) => {
  return unicodeString.replace(/\\u[\dA-F]{4}/gi, (match) => {
      return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
  });
};

export {
  debounce,
  micOnSound,
  micOffSound,
  rightAnswerSound,
  wrongAnswerSound,
  decodeUnicode
};


