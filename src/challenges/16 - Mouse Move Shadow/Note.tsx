import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">16 - Mouse Move Shadow</h1>
      <main className="note-container">
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>
            mousemove 是一個高頻率觸發的事件，所以可以使用下面方式優化效能:
            <ul className="note-ul">
              <li>
                <code className="note-code">
                  requestAnimationFrame(callback)
                </code>
              </li>
              <ul className="note-ul">
                <li>
                  是一個 web api，會在瀏覽器下次 repaint (重繪) 前執行
                  callback。
                </li>
                <li>因為更新頻率跟畫面重繪同步，所以適合使用在動畫效果。</li>
              </ul>
              <li>throttle (節流) → Day 16 使用方式</li>
              <ul className="note-ul">
                <li>一定時間內，固定頻率執行。</li>
                <li>
                  可以避免太頻繁的更新畫面，適合使用在 mousemove, scroll, resize。
                </li>
              </ul>
            </ul>
          </li>

          <li>throttle (節流) vs debounce (防抖)</li>
          <ul className="note-ul">
            <li>throttle: 每隔一段固定時間觸發一次。</li>
            <li>debounce: 停止操作一段時間後才觸發。</li>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "16"} buttonName="Demo" />
    </>
  );
};

export default Note;
