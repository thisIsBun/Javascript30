import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">06 - Ajax Type Ahead</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>初次渲染時，list 顯示全部的資料。</li>
          <li>
            input 輸入字時，list
            只顯示有符合關鍵字的資料，且關鍵字有藍底白字樣式。
          </li>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>50111，怎麼變成 50,111</li>
          <ul className="note-ul">
            <li>
              <code className="note-code">toLocaleString()</code>
            </li>
            <ul className="note-ul">
              <li>
                使用方式:{" "}
                <code className="note-code">num.toLocaleString(locales)</code>
                ，沒有放 locales 參數時會使用裝置的預設語言。
              </li>
              <li>適合使用在:</li>
              <ul className="note-ul">
                <li>適合少量數據使用。</li>
                <li>
                  <code className="note-code">toLocaleString(locales)</code>{" "}
                  每次呼叫時都會重新載入語言格式，再委派{" "}
                  <code className="note-code">Intl.NumberFormat</code>{" "}
                  轉成適當的格式，所以如果要頻繁的操作，建議直接使用{" "}
                  <code className="note-code">Intl.NumberFormat</code>。
                </li>
              </ul>
            </ul>
            <li>
              <code className="note-code">Intl.NumberFormat</code>
            </li>
            <ul className="note-ul">
              <li>
                使用方式:{" "}
                <code className="note-code">
                  new Intl.NumberFormat(locales, options).format(num)
                </code>
                ，options 可以格式化更多設定，像是處理小數位數、貨幣等。
              </li>
              <li>適合使用在:</li>
              <ul className="note-ul">
                <li>適合大量數據處理。</li>
                <li>
                  可以先建立實例，這樣就可以重複呼叫實例裡的 format 方式。
                </li>
              </ul>
            </ul>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "6"} buttonName="Demo" />
    </>
  );
};

export default Note;
