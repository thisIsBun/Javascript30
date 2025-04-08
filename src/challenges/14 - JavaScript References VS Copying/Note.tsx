import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">13 - Slide in on Scroll</h1>
      <main className="note-container">
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>
            怎麼對 array 做 shallow copy (1 跟 2 都是 Wes
            常用的方式，但這是他七年前說的XD )
          </li>
          <ol className="note-ol">
            <li>
              <code className="note-code">Array.from(arrayLike)</code> :
              會將類陣列轉成陣列，且會做 shallow copy
            </li>
            <li>
              <code className="note-code">{"[…array]"}</code>
            </li>
            <li>
              <code className="note-code">slice()</code> : 不帶參數時會做
              shallow copy
            </li>
            <li>
              <code className="note-code">array.concat()</code> : 不帶參數時會做
              shallow copy
            </li>
          </ol>
          <li>怎麼對 object 做 shallow copy</li>
          <ul className="note-ul">
            <li>
              <code className="note-code">Object.assign(target, source1)</code>{" "}
              : 用來把一個 source 或多個 sources 複製到 target，且是用 shallow
              copy 方式
            </li>
            <li>
              <code className="note-code">{"{...object}"}</code>
            </li>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "14"} buttonName="Demo" />
    </>
  );
};

export default Note;
