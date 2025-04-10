import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">15 - LocalStorage</h1>
      <main className="note-container">
        <h2 className="note-h2">流程</h2>
        <ol className="note-ol">
          <li>頁面載入後，從 localStorage 取出資料，並顯示在畫面上。</li>
          <li>
            使用者在輸入框輸入內容，按下 add 按鈕後，該內容會新增到 lists 中。
          </li>
          <li>關掉頁面或重新整理頁面時，lists 資料狀態應跟上次相同。</li>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>localStorage</li>
          <ul className="note-ul">
            <li>
              與 sessionStorage
              相比，sessionStorage的保存期限只到瀏覽器頁面關閉為止；localStorage
              則會永久保存，除非主動清除。
            </li>
            <li>在無痕模式下，localStorage 資料則會在頁面關閉後被清除。</li>
            <li>localStorage 有 5mb 儲存空間，滿的時候會拋出錯誤。</li>
          </ul>

          <li>
            使用 <code className="note-code">try.. catch</code>{" "}
            主要是為了避免非同步操作錯誤導致頁面中斷，常見的使用場景有:
          </li>
          <ul className="note-ul">
            <li>呼叫 api request 時。</li>
            <li>
              使用 <code className="note-code">JSON.parse()</code> 或{" "}
              <code className="note-code">JSON.stringify()</code> 解析失敗時。
            </li>
            <li>操作 localStorage 時超出容量或寫入無效資料。</li>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "15"} buttonName="Demo" />
    </>
  );
};

export default Note;
