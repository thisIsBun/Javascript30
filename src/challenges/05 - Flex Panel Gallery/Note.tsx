import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">05 - Flex Panel Gallery</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>點擊 flex-item 後:</li>
          <ul className="note-ul">
            <li>flex-grow 增大，讓 flex-item 變寬。</li>
            <li>font-size 增大。</li>
          </ul>
          <li>flex-item 用 transitionEnd event 偵測寬度已經變寬，變寬後:</li>
          <ul className="note-ul">
            <li>flex-item 裡的上下文字透過 translateY 進入畫面。</li>
          </ul>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ol className="note-ol">
          <li>怎麼調整 flex 子元件 flex-item 在容器的寬度:</li>
          <ul className="note-ul">
            <li>
              <code className="note-code">flex-grow</code> :
              決定子元件在父元件的剩餘空間中的擴展比例，預設是 0
              表示不擴展，數字越大擴展越多。
            </li>
            <li>
              <code className="note-code">flex-shrink</code> :
              決定子元件在父元件空間變小時的縮小比例，預設是 1
              表示不縮小，數字越大縮得越多。
            </li>
            <li>
              <code className="note-code">flex-basis</code> :
              設定子元件初始的寬度，可以用 px 或 auto 設定。
            </li>
          </ul>
          <li>
            flex 屬性是 flex-grow, flex-shrink, flex-basis 縮寫:{" "}
            <code className="note-code">flex: 1 0 auto;</code>
          </li>
          <ul className="note-ul">
            <li>
              <code className="note-code">1</code> : 表示會擴展。
            </li>
            <li>
              <code className="note-code">0</code> : 表示不會縮小。
            </li>
            <li>
              <code className="note-code">auto</code> :
              表示根據子元件裡的內容決定寬度。
            </li>
          </ul>
        </ol>
      </main>
      <DemoNoteButtons challengeId={challengeId || "5"} buttonName="Demo" />
    </>
  );
};

export default Note;
