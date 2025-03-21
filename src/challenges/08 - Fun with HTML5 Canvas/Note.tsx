import DemoNoteButtons from "../../components/DemoNoteButtons";
import { useParams } from "react-router";

const Note = () => {
  const { challengeId } = useParams();
  return (
    <>
      <h1 className="note-h1">08 - Fun with HTML5 Canvas</h1>
      <main className="note-container">
        <h2 className="note-h2">觸發流程</h2>
        <ol className="note-ol">
          <li>畫面載入後 (component mount)，useEffect 初始化 canvas</li>
          <ul className="note-ul">
            <li>畫布的寬高設定為瀏覽器畫面寬高，2D context</li>
            <li>設定線條樣式</li>
          </ul>
          <li>滑鼠左鍵按下 (onMouseDown)</li>
          <ul className="note-ul">
            <li>isDrawing 設定為 true，表示可以開始畫</li>
            <li>把滑鼠當下的位置儲存到 lastPosition state</li>
          </ul>
          <li>滑鼠移動 (onMouseMove)</li>
          <ul className="note-ul">
            <li>如果 isDrawing=true 會觸發 handleDraw 開始畫線</li>
            <li>每次移動會從 lastPosition 畫到目前滑鼠位置</li>
            <li>線的顏色用 hue 設定，所以會根據移動出現彩虹色</li>
            <li>線的寬度也會根據移動變粗細</li>
          </ul>
        </ol>
        <h2 className="note-h2">筆記</h2>
        <ul className="note-ul">
          <li>第一次使用 canvas，canvas 基本 api 整理:</li>
          <ul className="note-ul">
            <li>線條樣式</li>
            <ul className="note-ul">
              <li>
                <code className="note-code">ctx.strokeStyle = ‘#ffc600';</code>{" "}
                線條顏色
              </li>
              <li>
                <code className="note-code">ctx.lineWidth = 10;</code> 線條粗細
              </li>
              <li>
                <code className="note-code">ctx.lineJoin = 'round';</code>{" "}
                線段轉角樣式
              </li>
              <li>
                <code className="note-code">ctx.lineCap = 'round';</code>{" "}
                線段頭尾樣式
              </li>
            </ul>
            <li>基本繪圖流程</li>
            <ul className="note-ul">
              <li>
                <code className="note-code">
                  const ctx = canvas.getContext('2d');
                </code>{" "}
                取得 2D 繪圖 context
              </li>
              <li>
                <code className="note-code">ctx.beginPath()</code>{" "}
                開始一段新的線
              </li>
              <li>
                <code className="note-code">ctx.moveTo(起點x, 起點y)</code>{" "}
                移動畫筆到起點
              </li>
              <li>
                <code className="note-code">ctx.lineTo(終點x, 終點y)</code>{" "}
                設定終點 (畫一條線，但還沒真正畫出來)
              </li>
              <li>
                <code className="note-code">ctx.stroke()</code>{" "}
                描邊，把剛剛的路徑畫出來
              </li>
            </ul>
          </ul>
        </ul>
      </main>
      <DemoNoteButtons challengeId={challengeId || "8"} buttonName="Demo" />
    </>
  );
};

export default Note;
