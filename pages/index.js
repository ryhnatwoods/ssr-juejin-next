import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import Layout from '../components/CommonLayout';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import { connect, Provider } from 'react-redux'
import store from '../store/store'
import { refreshGithubList, updateGithubConds } from '../action/githubAction'
import { refreshGoldList, updateGoldConds } from '../action/goldAction'
const Index = props => {
    return (
        <Provider store={store} >
            <Layout leftCol={(<LeftColumn {...props} />)} rightCol={(<RightColumn {...props} />)}>
            </Layout>
        </Provider>
    )
}

Index.getInitialProps = async () => {
    const res1 = await fetch('http://localhost:3000/api/getRecommendedArticals', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({"category":"ai","order":"heat","offset":0,"limit":30})
    })
    const article = await res1.json()
    const res2 = await fetch('http://localhost:3000/api/getHighscoreGithub', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({"category":"trending","period":"day","lang":"css","offset":0,"limit":30})
    })
    const github = await res2.json()
    return { articles: article.data, githubs: github.data }
}

const mapStateToProps = state => ({
    gold: state.gold,
    github: state.github,
    csr: false
});

const mapDispatchToProps = {
    refreshGoldList,
    updateGoldConds,
    refreshGithubList,
    updateGithubConds
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);