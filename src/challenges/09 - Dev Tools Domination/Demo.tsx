import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";
import { useEffect, useRef } from "react";

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const Demo = () => {
  const { challengeId } = useParams();
  const pRef = useRef<HTMLParagraphElement>(null);

  const makeGreen = () => {
    if (!pRef.current) return;
    pRef.current.style.color = "#BADA55";
    pRef.current.style.fontSize = "50px";

    // Viewing DOM Elements
    console.log(pRef.current);
    console.dir(pRef.current);
  };

  // Regular
  console.log("Hello");

  // Styled
  console.log("%c Hello", "font-size: 28px; font-weight: 600; color: tomato;");

  // warning!
  console.warn("OH NO..");

  // Error :|
  console.error("Shit!");

  // Info
  console.info("Wes Bos's JavaScript30 is so fun!");

  // Testing
  console.assert(1 !== 1, "This is wrong");

  // clearing
  console.clear();

  // Grouping together
  dogs.forEach((dog) => {
    console.groupCollapsed(dog.name);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd();
  });
  console.clear();

  // timing
  useEffect(() => {
    console.time("fetch user");
    fetch("https://api.github.com/user/thisIsBun")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
        console.timeEnd("fetch user");
      });
  }, []);

  return (
    <>
      <p ref={pRef} onClick={makeGreen}>
        ×BREAK×DOWN×
      </p>
      <DemoNoteButtons challengeId={challengeId || "9"} buttonName="Note" />
    </>
  );
};

export default Demo;
