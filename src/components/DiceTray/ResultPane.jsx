import Panel from '../Common/Panel';

export default function ResultPane() {
  return (
    <Panel title="Roll Result">
      <div className="small">
        <p><strong>Expression:</strong> --</p>
        <p><strong>Individual Dice:</strong> --</p>
        <p><strong>Total:</strong> 0</p>
      </div>
    </Panel>
  );
}