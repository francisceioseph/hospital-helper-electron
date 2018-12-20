import { connect } from 'react-redux';
import Prontuario from './Prontuario';

const mapStateToProps = () => ({
  prontuarios: []
});

export default connect(mapStateToProps)(Prontuario);
