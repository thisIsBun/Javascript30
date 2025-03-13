import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">04 - Array Cardio Day 1</h1>
      <main className="note-container">
        <h2 className="note-h2">筆記</h2>
        <ol className="note-ol">
          <li>選到父層 DOM，要再怎麼選到子層</li>
          <ul className="note-ul">
            <li>
              父層:{" "}
              <code className="note-code">
                const div = document.querySelector(".mw-category");
              </code>
            </li>
            <li>
              {" "}
              子層:{" "}
              <code className="note-code">
                const links = div.querySelectorAll("a");
              </code>
            </li>
            <ul className="note-ul">
              <li>
                因為用 <code className="note-code">querySelectorAll</code>{" "}
                選取子層裡全部 a tag。
              </li>
              <li>
                所以 links 是一個 Node List，Node List是一個 array-like
                的類陣列。
              </li>
            </ul>
          </ul>
          <li>array-like 類陣列</li>
          <ul className="note-ul">
            <li>
              沒有完整陣列內建的功能，但有{" "}
              <code className="note-code">length</code>,{" "}
              <code className="note-code">forEach()</code> 方式。
            </li>
            <li>
              可以用{" "}
              <code className="note-code">
                Array.from(div.querySelectorAll("a"))
              </code>{" "}
              或展開運算子{" "}
              <code className="note-code">[…div.querySelectorAll("a")]</code>{" "}
              轉成真正的陣列。
            </li>
          </ul>
          <li>
            <code className="note-code">console.table(data, columns)</code>
          </li>
          <ul className="note-ul">
            <li>
              data 可以是陣列或物件，如果是陣列可以設定 columns
              指定要印出的欄位。
            </li>
            <li>可以把陣列或物件的結構印出來，增加可讀性。</li>
          </ul>
          <li>
            <code className="note-code">array.sort(compareFunction)</code>
          </li>
          <ul className="note-ul">
            <li>
              如果沒有提供 compare function，會將元素轉為字母，再根據 UTF-16
              值比較。
            </li>
            <li>compare function</li>
            <ul className="note-ul">
              <li>
                升冪: <code className="note-code">(a, b) ⇒ a - b</code>
              </li>
              <li>
                降冪: <code className="note-code">(a, b) ⇒ b - a</code>
              </li>
            </ul>
          </ul>
        </ol>
      </main>
      <DemoNoteButtons challengeId={challengeId || "4"} buttonName="Demo" />
    </>
  );
};
export default Note;
