import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">13 - Slide in on Scroll</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>
            在 window 監聽 <code className="note-code">scroll</code> 事件
          </li>
          <ul className="note-ul">
            <li>當元件中間點顯示在畫面內時，元件新增 active class name。</li>
            <li>當元件中間點不在畫面內時，移除 active class name。</li>
          </ul>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>計算元件中間點在畫面中的 pixel 位置</li>
          <ul className="note-ul">
            <li>需要值</li>
            <ul className="note-ul">
              <li>
                <code className="note-code">window.scrollY</code> :
                當前視窗滾動的 top pixel 位置。
              </li>
              <li>
                <code className="note-code">
                  DOM.getBoundingClientRect().top
                </code>{" "}
                : 元件相對於視窗的 top 位置。
              </li>
              <li>
                <code className="note-code">
                  DOM.getBoundingClientRect().height
                </code>{" "}
                : 元件的高度。
              </li>
            </ul>
            <li>計算方式: </li>
            <ul className="note-ul">
              <li>
                element top ={" "}
                <code className="note-code">
                  window.scrollY + DOM.getBoundingClientRect().top
                </code>
              </li>
              <li>
                element height ={" "}
                <code className="note-code">
                  DOM.getBoundingClientRect().height
                </code>
              </li>
              <li>
                element middle ={" "}
                <code className="note-code">
                  element top + element height / 2
                </code>
              </li>
            </ul>
          </ul>
          <li>判斷元件中間點是否在畫面內</li>
          <ul className="note-ul">
            <li>需要值</li>
            <ul className="note-ul">
              <li>
                <code className="note-code">window.scrollY</code> :
                當前視窗滾動的 top pixel 位置。
              </li>
              <li>
                <code className="note-code">window.innerHeight</code> :
                視窗的高度。
              </li>
            </ul>
            <li>
              判斷方式: 元件中間點是否在{" "}
              <code className="note-code">window.scrollY</code> 跟{" "}
              <code className="note-code">
                window.scrollY + window.innerHeight
              </code>{" "}
              之間
            </li>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "13"} buttonName="Demo" />
    </>
  );
};

export default Note;
