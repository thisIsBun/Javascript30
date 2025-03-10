import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">02 - JS and CSS Clock</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>
            網頁初始化時，clock state的初始值是來自{" "}
            <code className="note-code">new Date()</code>。
          </li>
          <li>
            網頁初始化後，透過 useEffect 設定{" "}
            <code className="note-code">setInterval</code>
            ，讓元件每秒會更新 clock 時間。
          </li>
        </ol>

        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>
            <code className="note-code">transform-origin: 100%;</code> 的作用
          </li>
          <ul className="note-ul">
            <li>
              當設定 <code className="note-code">transform-origin: 100%;</code>{" "}
              設定在 rotate 時，表示 rotate
              的基準點在元素的最右邊，就是指針底部。
            </li>
          </ul>
          <li>
            TypeScript 的泛型 (Generic) 語法:{" "}
            <code className="note-code">
              useParams&lt;&#123; challengeId: string &#125;&gt;()
            </code>
          </li>
          <ul className="note-ul">
            <li>
              <code className="note-code">&lt;&gt;</code>{" "}
              內的值是泛型參數，可以自行定義。
            </li>
            <li>
              讓 TypeScript 知道 <code>useParams</code> 是回傳物件，且結構是{" "}
              <code className="note-code">
                &#123; challengeId: string &#125;
              </code>
            </li>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "2"} buttonName="Demo" />
    </>
  );
};

export default Note;
