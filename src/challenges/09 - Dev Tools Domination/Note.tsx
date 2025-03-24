import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">09 - Dev Tools Domination</h1>
      <main className="note-container">
        <h2 className="note-h2">Chrome Devtools 筆記</h2>
        <ul className="note-ul">
          <li>
            Element tab 的 DOM 斷點設定 (Break on &gt; Attribute Modifications)
          </li>
          <ul className="note-ul">
            <li>功能說明</li>
            <ul className="note-ul">
              <li>
                可監控任一 html 屬性(style, class, disabled) 是否被 JavaScript
                修改。
              </li>
              <li>
                設定後，選擇的 html 元素會有一個藍色標記，表示設定了 DOM
                的斷點。
              </li>
            </ul>
            <li>使用情境</li>
            <ul className="note-ul">
              <li>
                當想追蹤「誰在什麼時間點修改了 DOM」，例如當 class
                被加上去卻不知道哪個程式碼造成的時候。
              </li>
            </ul>
            <li>執行效果</li>
            <ul className="note-ul">
              <li>
                Devtools 會自動跳到 Sources tab，並顯示 JavaScript
                對應的程式碼位置。
              </li>
            </ul>
          </ul>
          <li>
            <code className="note-code">console.time(label)</code> &{" "}
            <code className="note-code">console.timeEnd(label)</code>
          </li>
          <ul className="note-ul">
            <li>功能說明</li>
            <ul className="note-ul">
              <li>用來測量一段程式碼的執行時間。</li>
              <li>label 是用來識別的名稱，需要一致才能成功計時與結束。</li>
            </ul>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "9"} buttonName="Demo" />
    </>
  );
};

export default Note;
