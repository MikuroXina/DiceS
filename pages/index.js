import {connect} from 'react-redux';
import actions from '../components/actions';
import roller from '../components/creators/roller';

const RolledHistorty = ({history}) => (
  <div
    style={{position: 'fixed', height: '75%', overflow: 'auto', bottom: '10px'}}
  >
    {history
      .slice()
      .reverse()
      .map((results, i) => (
        <div key={i}>{results.join(' , ')}</div>
      ))}
  </div>
);

const Index = ({dispatch, dice, history}) => (
  <div>
    <input
      type="text"
      onChange={(e) =>
        dispatch({type: actions.changeDice, val: e.target.value})
      }
      defaultValue={dice.kind}
    />
    <button onClick={() => roller(dispatch)(dice.kind)}>Roll</button>
    <h2>{dice.kind}</h2>
    <h3>nDn (nは正の整数) で種類を入力　Dは必ず大文字で</h3>
    <RolledHistorty history={history.histories} />
  </div>
);

export default connect((state) => state)(Index);
