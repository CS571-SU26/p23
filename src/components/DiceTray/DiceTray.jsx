import DiceCanvas from './DiceCanvas';
import ResultPane from './ResultPane';

export default function DiceTray() {
  return (
    <div className="container-fluid border-top mt-4 pt-3">
      <div className="row g-3">
        <div className="col-md-9">
          <DiceCanvas />
        </div>
        <div className="col-md-3">
          <ResultPane />
        </div>
      </div>
    </div>
  );
}