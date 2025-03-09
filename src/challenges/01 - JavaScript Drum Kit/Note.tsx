import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">Day 1 - JavaScript Drum Kit</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>
            按下指定按鍵後，按鍵 className 增加{" "}
            <code className="note-code">playing</code>
            ，且撥出指定音效。
          </li>
          <li>
            放開按鍵後，按鍵 className 移除{" "}
            <code className="note-code">playing</code>。
          </li>
        </ol>

        <h2 className="note-h2">筆記</h2>
        <ol className="note-ol">
          <li>要怎麼偵測按下按鍵動作 → 用 keyDown event</li>
          <ul className="note-ul">
            <li>keyDown event 觸發的條件如下：</li>
            <ul className="note-ul">
              <li>
                綁在可以編輯的 DOM，像是{" "}
                <code className="note-code">&lt;input&gt;</code>、{" "}
                <code className="note-code">&lt;textarea&gt;</code>。
              </li>
              <li>
                綁在可以被 <code className="note-code">tab</code> 按鍵 focus 的
                DOM，像是 <code className="note-code">tabIndex=0</code>、
                <code className="note-code">&lt;button&gt;</code>、
                <code className="note-code">&lt;a&gt;</code>。
              </li>
              <li>
                綁在 <code className="note-code">window</code> 或{" "}
                <code className="note-code">document</code> 上。
              </li>
            </ul>
          </ul>

          <li>
            keyDown 觸發後，發現{" "}
            <code className="note-code">event.keyCode</code> 瀏覽器已經不使用了
          </li>
          <ul className="note-ul">
            <li>
              MDN 建議使用 <code className="note-code">event.key</code> 或{" "}
              <code className="note-code">event.code</code>。
            </li>
            <li>
              假設按下大寫 A 鍵時，
              <code className="note-code">event.code=KeyA</code>，
              <code className="note-code">event.key=A</code>。這裡改用{" "}
              <code className="note-code">event.key</code>
              ，因為要根據輸入的字母匹配做 event handler。
            </li>
          </ul>

          <li>
            <code className="note-code">&lt;audio&gt;</code> html tag
          </li>
          <ul className="note-ul">
            <li>
              取得 DOM 後可以用 <code className="note-code">.play()</code>{" "}
              方式觸發音效。
            </li>
            <li>
              連續按下按鍵時，會發現聽到的音效不是即時的，因為當上一段音效還沒播完，就不會重疊播放。
            </li>
            <li>
              所以需要在播放以前用{" "}
              <code className="note-code">.currentTime=0</code>{" "}
              方式，重置音效時間。
            </li>
          </ul>

          <li>怎麼在檔案裡載入靜態檔案</li>
          <ul className="note-ul">
            <li>URL</li>
            <ul className="note-ul">
              <li>
                相對路徑: 例如{" "}
                <code className="note-code">src="./sounds/clap.wav"</code>
              </li>
              <ul className="note-ul">
                <li>
                  <code className="note-code">"./”</code> 是指相對於 index.html
                  檔案的路徑。
                </li>
                <li>
                  因為 Vite 的 index.html 是放在根目錄，所以{" "}
                  <code className="note-code">"src="./sounds/clap.wav”</code>{" "}
                  會被解析成{" "}
                  <code className="note-code">"src="/sounds/clap.wav”</code>
                </li>
              </ul>

              <li>
                絕對路徑: 例如{" "}
                <code className="note-code">src="/sounds/clap.wav"</code>
              </li>
              <ul className="note-ul">
                <li>
                  <code className="note-code">"/”</code> 表示專案的根目錄。
                </li>
                <li>
                  使用 Vite 的話，Vite 不會將 public
                  資料夾裡的檔案做打包處理，Vite 會把檔案直接給瀏覽器。
                </li>
              </ul>

              <li>
                完整 URL: 例如{" "}
                <code className="note-code">
                  src="https://example.com/sounds/clap.wav"
                </code>
              </li>
              <ul className="note-ul">
                <li>src 會向該網址發 GET request 取得檔案。</li>
              </ul>
            </ul>

            <li>import</li>
            <ul className="note-ul">
              <li>
                假設檔案不在 public 資料夾內，且在檔案最上面用{" "}
                <code className="note-code">import</code> 載入該檔案{" "}
                <code className="note-code">
                  import clap from "./sounds/clap.wav";
                </code>
                。
              </li>
              <li>
                Vite 會把這個 import 解析成靜態檔案的 URL，所以可以直接使用{" "}
                <code className="note-code">src=&#123;clap&#125;</code>。
              </li>
            </ul>
          </ul>
        </ol>
      </main>
      <DemoNoteButtons challengeId={challengeId || "1"} buttonName="Demo" />
    </>
  );
};

export default Note;
