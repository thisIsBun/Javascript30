import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">07 - Array Cardio Day 2</h1>
      <main className="note-container">
        <ul className="note-ul">
          <li>
            If you need the index of the found element in the array, use{" "}
            <code className="note-code">findIndex(callbackFn)</code>.
          </li>
          <li>
            If you need to find the index of a value, use{" "}
            <code className="note-code">indexOf(searchElement)</code>. →
            檢查元素是否完全匹配 searchElement
          </li>
          <li>
            If you need to find if a value exists in an array, use{" "}
            <code className="note-code">includes(searchElement)</code> →
            檢查元素是否完全匹配 searchElement
          </li>
          <li>
            If you need to find if any element satisfies the provided testing
            function, use <code className="note-code">some(callbackFn)</code>.
          </li>
          <li>
            If you need to find all elements that satisfy the provided testing
            function, use <code className="note-code">filter(callbackFn)</code>.
          </li>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "7"} buttonName="Demo" />
    </>
  );
};

export default Note;
