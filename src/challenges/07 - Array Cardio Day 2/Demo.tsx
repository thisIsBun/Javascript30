import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Demo = () => {
  const { challengeId } = useParams();

  // ## Array Cardio Day 2

  const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
  ];

  const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
  ];

  const checkIsAdult = (year: number) => {
    return new Date().getFullYear() - year >= 19;
  };

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isAdult = people.some((person) => checkIsAdult(person.year));
  console.log({ isAdult });

  // Array.prototype.every() // is everyone 19 or older?
  const allAdult = people.every((person) => checkIsAdult(person.year));
  console.log({ allAdult });

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  console.log(comments.find((comment) => comment.id === 823423));

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const deleteIndex = comments.findIndex((comment) => comment.id === 823423);
  comments.splice(deleteIndex, 1);
  console.log(comments);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <em className="text-2xl">
          Psst: have a look at the JavaScript Console 💁
        </em>
      </div>
      <DemoNoteButtons challengeId={challengeId || "7"} buttonName="Note" />
    </>
  );
};

export default Demo;
