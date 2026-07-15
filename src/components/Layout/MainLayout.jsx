import QuickRollPane from '../QuickRoll/QuickRollPane';
import RollBuilder from '../RollBuilder/RollBuilder';
import SavedRollPane from '../SavedRolls/SavedRollPane';

export default function MainLayout() {
  return (
    <div className="container-fluid p-4">
      <div className="row g-3">
        <div className="col-md-3">
          <QuickRollPane />
        </div>
        <div className="col-md-6">
          <RollBuilder />
        </div>
        <div className="col-md-3">
          <SavedRollPane />
        </div>
      </div>
    </div>
  );
}