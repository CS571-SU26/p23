import Panel from '../Common/Panel';
import DiceSelector from './DiceSelector';
import ModifierInput from './ModifierInput';

export default function RollBuilder() {
  return (
    <Panel title="Roll Builder">
      <div className="mb-3">
        <DiceSelector />
      </div>
      <div className="mb-3">
        <ModifierInput />
      </div>
      <div className="border rounded p-4 bg-light text-center">
        <p className="text-muted">Roll Expression Builder - Coming Soon</p>
      </div>
    </Panel>
  );
}