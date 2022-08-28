import { connect } from 'react-redux'
import { increaseAction } from '../../redux/content-reduser'
import IncreaseCount from './IncreaseCount'

const mapStateToProps = (state) => {
    return {
        mutableValue: state.contentData.mutableValue,
    }
}

const mapDispatchToProps = {
    increaseAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(IncreaseCount)
