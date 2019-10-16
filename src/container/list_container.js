import List from '../components/list';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  todo: state.todo,
});

export default connect(mapStateToProps)(List);
