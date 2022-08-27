import { combineReducers, createStore } from 'redux'
import headerReduser from './header-reduser'
import contentReduser from './content-reduser'

const redusers = combineReducers({
    headerData: headerReduser,
    contentData: contentReduser,
})

const store = createStore(redusers)

window.store = store.getState()
export default store
