import { GET_GITHUB_LIST, UPDATE_GITHUB_CONDS } from "../action/githubAction"

const defaultState = {
    "category":"trending",
    "period":"day",
    "lang":"css",
    "offset":0,
    "limit":30,
    githubList: []
}

export default (state=defaultState, action) => {
    switch(action.type){
        case GET_GITHUB_LIST:
            return {
                ...state,
                githubList: action.data
            }
        case UPDATE_GITHUB_CONDS:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}