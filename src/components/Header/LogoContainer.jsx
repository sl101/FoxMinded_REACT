import Logo from './Logo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    src: state.headerData.src,
    alt: state.headerData.alt,
  };
};

export default connect(mapStateToProps)(Logo);
