type challengeType = {
  day: number;
  title: string;
  description: string;
  img: string;
  challengeLevel: "challenging" | "medium" | "simple" | "TBC";
};

const challenges: challengeType[] = [
  {
    day: 1,
    title: "JavaScript Drum Kit",
    description:
      "Feel the rhythm as you tap your keyboard to play drum sounds.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small0.jpg",
    challengeLevel: "medium",
  },
  {
    day: 2,
    title: "CSS + JS Clock",
    description:
      "A real-time analog clock built with JavaScript and CSS, where the hands rotate smoothly to show the current time.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small1.jpg",
    challengeLevel: "medium",
  },
  {
    day: 3,
    title: "CSS Variables and JS",
    description:
      "A dynamic interface that lets you adjust image styling by manipulating CSS variables with JavaScript.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small2.jpg",
    challengeLevel: "simple",
  },
  {
    day: 4,
    title: "Array Cardio Day 1",
    description:
      "A hands-on JavaScript exercise to practice array methods like filter, map, sort, and reduce.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small3.jpg",
    challengeLevel: "simple",
  },
  {
    day: 5,
    title: "Flex Panels Image Gallery",
    description:
      "An interactive gallery where panels expand with smooth animations using Flexbox and JavaScript.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small4.jpg",
    challengeLevel: "medium",
  },
  {
    day: 6,
    title: "Ajax Type Ahead",
    description:
      "A live search interface that filters and highlights matching cities and states as you type.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small5.jpg",
    challengeLevel: "medium",
  },
  {
    day: 7,
    title: "Array Cardio Day 2",
    description:
      "A JavaScript exercise to deepen your understanding of array methods like some, every, find, and findIndex.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small6.jpg",
    challengeLevel: "simple",
  },
  {
    day: 8,
    title: "HTML5 Canvas",
    description:
      "A playful drawing page that uses the HTML5 Canvas API to create colorful, dynamic brush strokes with JavaScript.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small7.jpg",
    challengeLevel: "challenging",
  },
  {
    day: 9,
    title: "Must Know Dev Tools Tricks",
    description:
      "A quick exercise to explore console techniques in DevTools, including styling, warnings, grouping, counting, and timing.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small8.jpg",
    challengeLevel: "simple",
  },
  {
    day: 10,
    title: "Hold Shift and Check Checkboxes",
    description:
      "A checkbox interaction that lets you select multiple items at once by holding Shift, just like in email apps.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small9.jpg",
    challengeLevel: "challenging",
  },
  {
    day: 11,
    title: "Custom Video Player",
    description:
      "A custom-built video player with controls for play/pause, skip, volume, playback speed, and progress tracking.",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small10.jpg",
    challengeLevel: "challenging",
  },
  {
    day: 12,
    title: "Key Sequence Detection",
    description: "Detect secret key sequences (Konami Code)",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small11.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 13,
    title: "Slide in on Scroll",
    description: "Trigger animations when scrolling",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small12.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 14,
    title: "JavaScript References VS Copying",
    description: "Understand reference vs value in JavaScript",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small13.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 15,
    title: "LocalStorage",
    description: "Use LocalStorage and event delegation",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small14.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 16,
    title: "Mouse Move Shadow",
    description: "Move text shadow based on mouse position",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small15.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 17,
    title: "Sort Without Articles",
    description: "Sort an array ignoring articles like 'the'",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small16.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 18,
    title: "Adding Up Times with Reduce",
    description: "Sum up video durations from a list",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small17.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 19,
    title: "Webcam Fun",
    description: "Access and manipulate webcam video",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small18.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 20,
    title: "Speech Detection",
    description: "Use the Web Speech API for speech recognition",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small19.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 21,
    title: "Geolocation",
    description: "Get user's location and display coordinates",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small20.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 22,
    title: "Follow Along Links",
    description: "Highlight navigation links dynamically",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small21.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 23,
    title: "Speech Synthesis",
    description: "Use the Web Speech API for text-to-speech",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small22.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 24,
    title: "Sticky Nav",
    description: "Create a sticky navigation bar",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small23.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 25,
    title: "Event Capture, Propagation, Bubbling and Once",
    description: "Understand event propagation in JavaScript",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small24.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 26,
    title: "Stripe Follow Along Nav",
    description: "Build an animated dropdown menu",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small25.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 27,
    title: "Click and Drag",
    description: "Create a draggable scrolling interface",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small26.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 28,
    title: "Video Speed Controller",
    description: "Adjust video playback speed dynamically",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small27.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 29,
    title: "Countdown Clock",
    description: "Build a countdown timer using JavaScript",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small28.jpg",
    challengeLevel: "TBC",
  },
  {
    day: 30,
    title: "Whack A Mole",
    description: "Create a simple Whack-a-Mole game",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small29.jpg",
    challengeLevel: "TBC",
  },
];

export default challenges;
