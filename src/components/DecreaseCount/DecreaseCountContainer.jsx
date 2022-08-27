import { connect } from 'react-redux'
import { decreaseAction } from '../../redux/content-reduser'
import DecreaseCount from './DecreaseCount'

const mapStateToProps = (state) => {
    return {
        mutableValue: state.contentData.mutableValue,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decreaseValue: (value) => {
            dispatch(decreaseAction(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecreaseCount)
