import { connect } from 'react-redux'
import { decreaseAction } from '../../redux/content-reduser'
import DecreaseCount from './DecreaseCount'

const mapStateToProps = (state) => {
    return {
        mutableValue: state.contentData.mutableValue,
    }
}

const mapDispatchToProps = {
    decreaseAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(DecreaseCount)
