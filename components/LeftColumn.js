
import React from 'react'
import { Select } from 'antd';
import TimeUtils from '../utils/timeUtil';
import LoadMoreList from './LoadMoreList'

const { Option } = Select;

const CATEGORY = [
    {
        id: "firstpage",
        label: "首页",
        active: 1
    },
    {
        id: "frontend",
        label: "前端",
        active: 0
    },
    {
        id: "backend",
        label: "后端",
        active: 0
    },
    {
        id: "android",
        Label: "安卓",
        active: 0
    },
    {
        id: "ios",
        Label: "苹果",
        active: 0
    }
];

const handleChange = () => {}

const CategorySelector = () => {
    return (
        <Select defaultValue="frontend" style={{ width: 120 }} onChange={handleChange}>
            {
                CATEGORY.map(cate => {
                    return (
                        <Option value={cate.id} key={cate.id}>{cate.label}</Option>
                    )
                })
            }
        </Select>
    )
}



const OrderSelector = props => {
    const handleOrderChange = e => {
    };
    return (
        <>
            <div className="order-selector" onMouseOver={handleOrderChange}>
                <div className="hottest active">热门</div>
                <div className="latest">最新</div>
            </div>
            <style jsx>
                {
                    `
                        .order-selector {
                            margin-right: .8rem;
                            display:flex;
                            align-items: center;
                        }
                        .hottest, .latest {
                            display: inline-block;
                            margin: 0 .1rem;
                            width: 3.6rem;
                            height: 3.5rem;
                            font-size: 1.25rem;
                            text-align: center;
                            line-height: 3.5rem;
                            color: #646c7b;
                            cursor: pointer;
                            opacity: .3;
                        }
                        .active {
                            opacity: .8;
                        }
                    `
                }
            </style>
        </>
    );
}

const GoldArtical = props => {
    const { title, url, date, collectionCount, user } = props;
    const { iso } = date;
    const { username } = user;
    const badgeTmpl = count => (`至少已有${count}喜欢`);
    return (
        <>
            <li className="goldItem">
                <a className="itemContent" href={url} target="_blank">
                    <div className="badge" title={badgeTmpl(collectionCount)}></div>
                    <div className="entry-info">
                        <div className="title">{title}</div>
                        <div className="metalist">
                            <div className="meta-item">
                                <span className="meta-text" title={new Date(iso).toLocaleString()}>{TimeUtils.formatCustomTime(iso)}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-text">{username}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </>
    )
}

const LeftColumn = (props) => (
    <div className="gold-source">
        <div className="source-navbar">
            <div className="source-selector">
                <img className="icon source-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iOC4zODU3bW0iIGhlaWdodD0iOC4xOTIzbW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDUwOSA0OTciDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6IzAwNkNGRn0NCiAgICAuZmlsMSB7ZmlsbDp3aGl0ZX0NCiAgIF1dPg0KICA8L3N0eWxlPg0KIDwvZGVmcz4NCiA8ZyBpZD0i5Zu+5bGCX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cmVjdCBjbGFzcz0iZmlsMCIgd2lkdGg9IjUwOSIgaGVpZ2h0PSI0OTciLz4NCiAgPHBhdGggaWQ9IkZpbGwtMS1Db3B5IiBjbGFzcz0iZmlsMSIgZD0iTTI4NSAxMzhsLTMxIC0yNCAtMzMgMjUgLTIgMiAzNSAyNyAzNCAtMjcgLTMgLTN6bTExOSA5NWwtMTUwIDExNiAtMTUxIC0xMTYgLTIyIDE3IDE3MyAxMzQgMTczIC0xMzQgLTIzIC0xN3ptLTE1MCA5bC04MiAtNjMgLTIzIDE3IDEwNSA4MSAxMDQgLTgxIC0yMiAtMTcgLTgyIDYzeiIvPg0KIDwvZz4NCjwvc3ZnPg0K" />
                <div className="title" style={{color: '#044aab'}}>掘金</div>
            </div>
            <div className="category-box">
                <CategorySelector />
            </div>
            <OrderSelector />
        </div>
        <div>
            <LoadMoreList {...props}/>
            {/* <ul>
                {
                    props.articles.map(artical => {
                        return <GoldArtical {...artical} key={artical.id}/>
                    })
                }
            </ul> */}
        </div>
        <style jsx>
            {
                `
                    .gold-source {
                        flex: 0 0 auto;
                        width: 33.97rem;
                    }
                    .source-navbar {
                        display: flex;
                        align-items: center;
                        margin: 0 0 1.2rem;
                        min-height: 3.5rem;
                        background-color: #fff;
                        border-radius: 2px;
                        z-index: 250;
                        margin-right: .8rem!important;
                    }

                    .source-selector {
                        position: relative;
                        height: 100%;
                        font-size: 1.35rem;
                        font-family: Verdana,Geneva,Microsoft YaHei,Microsoft JhengHei,Helvetica Neue,sans-serif;
                        color: #646c7b;
                        display: flex;
                        align-items: center;
                        margin-right: .8rem!important;
                    }

                    .icon {
                        margin: 0 1rem 0 .4rem;
                    }

                    .source-icon {
                        width: 2.833rem;
                        height: 2.833rem;
                        border-radius: 2px;
                    }

                    .category-box {
                        flex-grow: 1;
                    }
                    
                `
            }
        </style>
    </div>
)

export default LeftColumn;
