import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">11 - Custom Video Player</h1>
      <main className="note-container">
        <h2 className="note-h2">影片操作方式</h2>
        <ol className="note-ol">
          <li>切換 play 和 pause 按鈕:</li>
          <ul className="note-ul">
            <li>需要取得 video DOM，這樣才能使用內建的方法來操作影片。</li>
            <li>
              使用 <code className="note-code">isPlay</code> state
              來儲存影片撥放的狀態，這樣點擊這按鈕後可以根據這個狀態來判斷。
            </li>
          </ul>
          <li>拖拉影片音量和撥放速度:</li>
          <ul className="note-ul">
            <li>
              使用 <code className="note-code">input</code> 的{" "}
              <code className="note-code">onChange</code> 監聽滑到的值。
            </li>
            <li>
              <code className="note-code">onChange</code> 觸發時，將值儲存到
              state，這樣畫面會即時更新，再使用 video
              內建的方法來修改影片的設定。
            </li>
          </ul>
          <li>影片播放進度條跟實際撥放進度一致:</li>
          <ul className="note-ul">
            <li>
              progress bar 樣式是用{" "}
              <code className="note-code">flex basis</code>{" "}
              屬性設定百分比，所以要取得影片 目前播放的時間 及
              總共撥放時間，才可以計算百分比。
            </li>
          </ul>
          <li>拖拉影片播放進度條:</li>
          <ul className="note-ul">
            <li>
              當使用者按住滑鼠左鍵並拖拉的話，表示使用者想使用拖拉調整進度條。
            </li>
            <li>當使用者在進度條上點擊的話，則進度條應該要跳到點擊的位置。</li>
          </ul>
          <li>播放進度 -10秒鐘 或 +25秒鐘:</li>
          <ul className="note-ul">
            <li>用 目前播放的時間 + 或 - 秒數實現。</li>
          </ul>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>
            <code className="note-code">video DOM</code>
          </li>
          <ul className="note-ul">
            <li>
              <code className="note-code">video</code> HTML tag 對應的是{" "}
              <code className="note-code">
                HTMLVideoElement
              </code>，它是繼承自{" "}
              <code className="note-code">HTMLMediaElement</code>。
            </li>
            <li>
              取得 <code className="note-code">video DOM</code> 後，可以使用{" "}
              <code className="note-code">HTMLMediaElement</code>{" "}
              層級的屬性和方法控制影片:
            </li>
            <ul className="note-ul">
              <li>方法:</li>
              <ul className="note-ul">
                <li>play()</li>
                <li>pause()</li>
              </ul>
              <li>屬性:</li>
              <ul className="note-ul">
                <li>volume: 範圍 0 ~ 1。</li>
                <li>playbackRate: 撥放速度，預設值 1。</li>
                <li>currentTime: 目前撥放秒數。</li>
                <li>duration: 影片總撥放秒數。</li>
              </ul>
            </ul>
          </ul>

          <li>如何實作拖拉進度條</li>
          <ul className="note-ul">
            <li>需要的資料:</li>
            <ul className="note-ul">
              <li>
                取得鼠標在畫面中的位置:{" "}
                <code className="note-code">event.clientX</code>。
              </li>
              <li>
                取得元件的寬度: <code className="note-code">offsetWidth</code>。
              </li>
              <li>
                取得元件在畫面中的位置:{" "}
                <code className="note-code">getBoundingClientRect()</code>
                ，並從中取出左邊位置{" "}
                <code className="note-code">getBoundingClientRect().left</code>
                。
              </li>
            </ul>
            <li>計算方式:</li>
            <ul className="note-ul">
              <li>
                <code className="note-code">
                  (event.clientX - offsetWidth) / getBoundingClientRect().left
                </code>
                。
              </li>
              <li>
                計算出來的百分比就可以用在畫面的進度條上，並計算出影片的{" "}
                <code className="note-code">
                  currentTime = 百分比 * duration
                </code>
                。
              </li>
            </ul>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "10"} buttonName="Demo" />
    </>
  );
};

export default Note;
