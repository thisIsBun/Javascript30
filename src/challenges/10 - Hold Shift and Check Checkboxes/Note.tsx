import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">10 - Hold Shift and Check Checkboxes</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>點擊一個 checkbox</li>
          <li>按住 shift，然後點擊另一個 checkbox</li>
          <li>在這兩個 checkbox 之間，所有的 checkbox 會一併勾選</li>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>如何判斷是否按下 shift key</li>
          <ul className="note-ul">
            <li>
              一開始的作法是: 在 window 監聽 keydown 和 keyup 事件，並用 useRef
              儲存 shift 是否被按下的狀態。
            </li>
            <li>
              看 Wes 的影片後發現，可以從 onClick 事件的 event 物件中讀取{" "}
              <code className="note-code">shiftKey</code> 屬性
              (boolean)，就可以知道是否有按下 shift 鍵。
            </li>
          </ul>

          <li>如何快速產出一串連續數字的陣列 (例如 0~19 )</li>
          <ul className="note-ul">
            <li>
              <code className="note-code">
                new Array(arrayLength).fill(value).map(callbackFn)
              </code>{" "}
              →{" "}
              <code className="note-code">
                new Array(20).fill(0).map((_, index) ⇒ index)
              </code>
            </li>
            <ul className="note-ul">
              <li>
                因為 new Array() 建立的陣列是空值 (印出來是{" "}
                <code className="note-code">[empty × 20]</code>)，map()
                不能作用在空值，所以需要
                <code className="note-code">fill(value)</code> 填滿空值。
              </li>
            </ul>
            <li>
              <code className="note-code">
                Array.from(array-like objects, mapFunction)
              </code>
            </li>
          </ul>

          <li>如果記住上次被點擊的 checkbox</li>
          <ul className="note-ul">
            <li>
              每個 checkbox 的勾選狀態需要反映在畫面上，所以使用 useState 儲存。
            </li>
            <li>
              「上次單獨點擊的 checked 的
              index」，只是記錄內部邏輯，畫面不需要有變化，所以使用 useRef
              儲存。
            </li>
            <li>當點擊 checkbox 時:</li>
            <ul className="note-ul">
              <li>
                如果沒有按下 shift，那這個 click 的 checkbox index
                值，就會是下次 shift + checked 的起點。
              </li>
              <li>
                如果有按下 shift 且 useRef 有值，那這個 click 的 checkbox index
                就是終點，會把起點和終點之間的 checkbox 勾起。
              </li>
            </ul>
            <li>
              <code className="note-code">
                Array.from(array-like objects, mapFunction)
              </code>
            </li>
          </ul>

          <li>當 &lt;input&gt; 用 onClick 並設定 checked 時，會出現錯誤:</li>
          <ul className="note-ul">
            <li>
              錯誤訊息:{" "}
              <code className="note-code">
                You provided a checked prop to a form field without an onChange
                handler. This will render a read-only field. If the field should
                be mutable use defaultChecked. Otherwise, set either onChange or
                readOnly. Error Component Stack
              </code>
            </li>
            <li>錯誤原因:</li>
            <ul className="note-ul">
              <li>
                當 &lt;input&gt; 設定了 checked 的更動，React
                會期望這是受控元件，所以會要求使用 onChange 監聽。
              </li>
              <li>
                如果沒有使用 onChange，React 預設 &lt;input&gt;{" "}
                不應該被使用者操作，所以發出警告。
              </li>
              <li>
                這個練習中，需要使用 onClick，因為這樣才可以取得{" "}
                <code className="note-code">event.shiftKey</code>{" "}
                值。
              </li>
            </ul>
            <li>
              解法: 加上 <code className="note-code">readOnly</code> 屬性，讓
              React 知道「這個 check 的變動會由 JavaScript 控制」。
            </li>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "10"} buttonName="Demo" />
    </>
  );
};

export default Note;
