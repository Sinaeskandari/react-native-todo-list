import {connect} from 'react-redux';
import InputArea from '../components/input_area';

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
});

export default connect(mapDispatchToProps)(InputArea);
