type challengeType = {
  day: number;
  title: string;
  description: string;
  img: string;
};

const challenges: challengeType[] = [
  {
    day: 31,
    title: "JavaScript Drum Kit",
    description: "Trigger sounds using the keyboard",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small0.jpg",
  },
  {
    day: 2,
    title: "CSS + JS Clock",
    description: "Create a clock using CSS & JavaScript",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small1.jpg",
  },
  {
    day: 3,
    title: "Playing with CSS Variables and JS",
    description: "Control CSS variables dynamically",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small2.jpg",
  },
  {
    day: 4,
    title: "Array Cardio Day 1",
    description: "Practice `map`, `filter`, `reduce`",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small3.jpg",
  },
  {
    day: 5,
    title: "Flex Panels Image Gallery",
    description: "Create an interactive Flexbox design",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small4.jpg",
  },
  {
    day: 6,
    title: "Ajax Type Ahead",
    description: "Build a live search filter with an API",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small5.jpg",
  },
  {
    day: 7,
    title: "Array Cardio Day 2",
    description: "Deep dive into array methods",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small6.jpg",
  },
  {
    day: 8,
    title: "Fun with HTML5 Canvas",
    description: "Draw on a canvas using JavaScript",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small7.jpg",
  },
  {
    day: 9,
    title: "14 Must Know Dev Tools Tricks",
    description: "Learn useful Chrome DevTools features",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small8.jpg",
  },
  {
    day: 10,
    title: "Hold Shift to Check Multiple Checkboxes",
    description: "Use `shift` key to select multiple checkboxes",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small9.jpg",
  },
  {
    day: 11,
    title: "Custom HTML5 Video Player",
    description: "Create a custom HTML5 video player",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small10.jpg",
  },
  {
    day: 12,
    title: "Key Sequence Detection (KONAMI CODE)",
    description: "Detect secret key sequences (Konami Code)",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small11.jpg",
  },
  {
    day: 13,
    title: "Slide in on Scroll",
    description: "Trigger animations when scrolling",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small12.jpg",
  },
  {
    day: 14,
    title: "Object and Arrays - Reference VS Copy",
    description: "Understand reference vs value in JavaScript",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small13.jpg",
  },
  {
    day: 15,
    title: "LocalStorage and Event Delegation",
    description: "Use LocalStorage and event delegation",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small14.jpg",
  },
  {
    day: 16,
    title: "CSS Text Shadow Mouse Move Effect",
    description: "Move text shadow based on mouse position",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small15.jpg",
  },
  {
    day: 17,
    title: "Sorting Band Names without articles",
    description: "Sort an array ignoring articles like 'the'",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small16.jpg",
  },
  {
    day: 18,
    title: "Tally String Times with Reduce",
    description: "Sum up video durations from a list",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small17.jpg",
  },
  {
    day: 19,
    title: "Unreal Webcam Fun",
    description: "Access and manipulate webcam video",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small18.jpg",
  },
  {
    day: 20,
    title: "Native Speech Recognition",
    description: "Use the Web Speech API for speech recognition",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small19.jpg",
  },
  {
    day: 21,
    title: "Geolocation based Speedometer and Compass",
    description: "Get user's location and display coordinates",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small20.jpg",
  },
  {
    day: 22,
    title: "Follow Along Links",
    description: "Highlight navigation links dynamically",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small21.jpg",
  },
  {
    day: 23,
    title: "Speech Synthesis",
    description: "Use the Web Speech API for text-to-speech",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small22.jpg",
  },
  {
    day: 24,
    title: "Sticky Nav",
    description: "Create a sticky navigation bar",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small23.jpg",
  },
  {
    day: 25,
    title: "Event Capture, Propagation, Bubbling and Once",
    description: "Understand event propagation in JavaScript",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small24.jpg",
  },
  {
    day: 26,
    title: "Stripe Follow Along Dropdown",
    description: "Build an animated dropdown menu",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small25.jpg",
  },
  {
    day: 27,
    title: "Click and Drag to Scroll",
    description: "Create a draggable scrolling interface",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small26.jpg",
  },
  {
    day: 28,
    title: "Video Speed Controller UI",
    description: "Adjust video playback speed dynamically",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small27.jpg",
  },
  {
    day: 29,
    title: "Countdown Clock",
    description: "Build a countdown timer using JavaScript",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small28.jpg",
  },
  {
    day: 30,
    title: "Whack A Mole Game",
    description: "Create a simple Whack-a-Mole game",
    img: "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://s3.amazonaws.com/js30-cdn/small29.jpg",
  },
];

export default challenges;
