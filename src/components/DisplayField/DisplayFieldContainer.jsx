import { connect } from 'react-redux'
import DisplayField from './DisplayField'

const mapStateToProps = (state) => {
    return {
        number: state.contentData.number,
    }
}

export default connect(mapStateToProps)(DisplayField)
