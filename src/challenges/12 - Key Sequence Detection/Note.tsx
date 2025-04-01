import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">12 - Key Sequence Detection</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>
            監聽按鍵輸入 <code className="note-code">keyup event</code>
            ，並把每次輸入和順序記錄下來。
          </li>
          <li>當連續輸入 secret code 時，則會觸發 Konami 效果。</li>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>儲存最新的輸入紀錄:</li>
          <ul className="note-ul">
            <li>
              按鍵輸入記錄，因為有順序性，所以用 array
              儲存，每當有新的紀錄就加到 array 最後。
            </li>
            <li>
              因為要跟 secret code 比對，所以儲存紀錄長度會跟 secret code 一樣。
            </li>
            <li>
              用{" "}
              <code className="note-code">
                array.splice(start, deleteCount)
              </code>{" "}
              切下跟 secret code 相同長度的紀錄。
            </li>
            <ul className="note-ul">
              <li>start = 0 從最舊的紀錄開始切割。</li>
              <li>
                取得元件的寬度: <code className="note-code">offsetWidth</code>。
              </li>
              <li>
                deleteCount = keyHistory.length -
                secretCode.length，把多餘的紀錄刪除，只留下最新的輸入紀錄。
              </li>
            </ul>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "12"} buttonName="Demo" />
    </>
  );
};

export default Note;
