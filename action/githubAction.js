//action type 
const GET_GITHUB_LIST = "GITHUB/GET_GITHUB_LIST";
const UPDATE_GITHUB_CONDS = "GITHUB/UPDATE_GITHUB_CONDS";
//action creator
const updateGithubList = githubList => ({
    type: GET_GITHUB_LIST,
    data: githubList
})

const updateGithubConds = githubParam => ({
    type: UPDATE_GITHUB_CONDS,
    data: githubParam
})

//异步请求
const refreshGithubList = () => {
    return (dispatch, getState, $axios) => {
        return $axios.get("/api/getHighscoreGithub").then(res => {
            const {data } = res.data;
            console.log("update list: ", data);
            dispatch(updateGithubList(list));
        }).then(null,
            err => {
                console.log("Error: ", err);
                return Promise.resolve();
        });
    }
}

export {
    GET_GITHUB_LIST,
    UPDATE_GITHUB_CONDS,
    refreshGithubList,
    updateGithubConds
}