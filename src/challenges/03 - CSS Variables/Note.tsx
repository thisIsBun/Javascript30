import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">03 - CSS Variables and JS</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>
            網頁初始化時，React state 會有 style 預設值，再綁到對應的 input 上。
          </li>
          <li>
            當使用者拉動滑桿或變更顏色時，onChange 取得更新的 value
            值，再更新到對應的 state。
          </li>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>CSS filter 屬性，可以讓 image 有像濾鏡的效果</li>
          <ul className="note-ul">
            <li>
              <code className="note-code">filter: blur(5px);</code> 讓周圍有 5px
              的模糊效果。
            </li>
            <li>
              <code className="note-code">filter: grayscale(50%);</code>{" "}
              讓圖片變成 50% 灰階。
            </li>
          </ul>
          <li>
            input <code className="note-code">type="range"</code>
          </li>
          <ul className="note-ul">
            <li>可以設定 min, max 屬性設定值範圍。</li>
            <li>可以設定 step 每次變動單位，預設是 1。</li>
            <li>可以用 onChange event.target.value 取得最後拉定的值。</li>
          </ul>
          <li>
            input <code className="note-code">type="color"</code>
          </li>
          <ul className="note-ul">
            <li>畫面會出現 color picker 元件。</li>
            <li>可以用 onChange event.target.value 取得最後設定的顏色。</li>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "3"} buttonName="Demo" />
    </>
  );
};

export default Note;
