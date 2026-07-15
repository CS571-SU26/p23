export default function DiceSelector() {
  return (
    <div>
      <label htmlFor="diceSelect" className="form-label">Dice Type</label>
      <select id="diceSelect" className="form-select">
        <option>d4</option>
        <option>d6</option>
        <option>d8</option>
        <option>d10</option>
        <option>d12</option>
        <option>d20</option>
        <option>d100</option>
      </select>
    </div>
  );
}