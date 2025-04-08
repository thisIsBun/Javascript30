import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Demo = () => {
  const { challengeId } = useParams();
  // start with strings, numbers and booleans
  const num = 123;
  let num2 = num;
  num2 = 1028;

  console.log(num, num2);

  // Let's say we have an array
  const players = ["Wes", "Sarah", "Ryan", "Poppy"];

  // and we want to make a copy of it.

  // You might think we can just do something like this:
  // const team = players;

  // however what happens when we update that array?
  // team[2] = "Bun";

  // now here is the problem!

  // oh no - we have edited the original array too!
  // console.log(players, team);

  // Why? It's because that is an array reference, not an array copy. They both point to the same array!

  // So, how do we fix this? We take a copy instead!

  // one way
  const team2 = players.slice();

  // or create a new array and concat the old one in
  const team3 = players.concat();

  // or use the new ES6 Spread
  const team4 = [...players];
  const team5 = Array.from(players);

  // now when we update it, the original one isn't changed
  team2[2] = "bun2";
  team3[2] = "bun3";
  team4[2] = "bun4";
  team5[2] = "bun5";

  console.log(players, team2, team3, team4, team5);

  // The same thing goes for objects, let's say we have a person object

  // with Objects
  const person = {
    name: "Wes Bos",
    age: 80,
  };

  // and think we make a copy:

  // how do we take a copy instead?
  const person2 = Object.assign({}, person, { gender: "male" });
  console.log(person, person2);

  // We will hopefully soon see the object ...spread
  const person3 = { ...person };
  person3.name = "bun";
  console.log(person, person3);

  // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

  return (
    <>
      <DemoNoteButtons challengeId={challengeId || "14"} buttonName="Note" />
    </>
  );
};

export default Demo;
