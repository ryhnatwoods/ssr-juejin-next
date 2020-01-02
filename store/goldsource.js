import { GET_GOLD_LIST, UPDATE_GOLD_CONDS } from "../action/goldAction"

const defaultState = {
    category: "firstpage",
    order: "heat",
    pageOffset: 0,
    pageLimit: 30,
    goldList: []
}

export default (state=defaultState, action) => {
    switch(action.type){
        case GET_GOLD_LIST:
            return {
                ...state,
                goldList: action.data
            }
        case UPDATE_GOLD_CONDS:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}