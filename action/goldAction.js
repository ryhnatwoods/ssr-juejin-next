//action type 
const GET_GOLD_LIST = "GOLD/GET_GOLD_LIST";
const UPDATE_GOLD_CONDS = "GOLD/UPDATE_GOLD_CONDS";
//action creator
const updateGoldList = goldList => ({
    type: GET_GOLD_LIST,
    data: goldList
})

const updateGoldConds = goldParam => ({
    type: UPDATE_GOLD_CONDS,
    data: goldParam
})

//异步请求
const refreshGoldList = (cb) => {
    return (dispatch, getState, $axios) => {
        return $axios.get("/api/getRecommendedArticals").then(res => {
            const { data } = res.data;
            console.log("update list: ", data);
            cb(data);
            dispatch(updateGoldList(list));
        }).then(null,
            err => {
                console.log("Error: ", err);
                return Promise.resolve();
        });
    }
}

export {
    GET_GOLD_LIST,
    UPDATE_GOLD_CONDS,
    refreshGoldList,
    updateGoldConds
}