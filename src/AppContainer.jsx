import App from './App'
import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from './redux/content-reduser'

const mapStateToProps = (state) => {
    return {
        contentData: state.contentData.number,
        src: state.headerData.src,
        alt: state.headerData.alt,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseValue: () => {
            dispatch(increaseAction())
        },
        decreaseValue: () => {
            dispatch(decreaseAction())
        },
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
