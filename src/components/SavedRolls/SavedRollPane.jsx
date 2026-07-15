import Panel from '../Common/Panel';
import SavedRollCard from './SavedRollCard';

export default function SavedRollPane() {
  const savedRolls = [
    { name: 'Attack', expression: '1d20+5' },
    { name: 'Damage', expression: '1d8+3' },
    { name: 'Initiative', expression: '1d20+2' },
    { name: 'Stealth', expression: '1d20+4' },
    { name: 'Medicine', expression: '1d20+1' },
  ];

  return (
    <Panel title="Saved Rolls">
      <div className="d-flex flex-column gap-2">
        {savedRolls.map((roll) => (
          <SavedRollCard key={roll.name} name={roll.name} expression={roll.expression} />
        ))}
      </div>
    </Panel>
  );
}