import Panel from '../Common/Panel';
import QuickRollButton from './QuickRollButton';

export default function QuickRollPane() {
  const quickRolls = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100', 'Advantage', 'Disadvantage'];

  return (
    <Panel title="Quick Rolls">
      <div className="d-flex flex-column gap-2">
        {quickRolls.map((roll) => (
          <QuickRollButton key={roll} label={roll} />
        ))}
      </div>
    </Panel>
  );
}