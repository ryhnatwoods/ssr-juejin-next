import React from 'react'
import Header from './Header'
import Body from './Body'

const Layout = props => {
    console.log(typeof props.leftCol, props.leftCol instanceof React.Component)
    return (
        <>
            <div className="layoutStyle">
                <Header />
                <Body leftCol={props.leftCol} rightCol={props.rightCol} />
            </div>
            <style jsx global>
                {
                    `
                        .layoutStyle {
                            display: flex;
                            flex-direction: column;
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            background-color: #eceff1;
                            overflow: hidden;
                        }
                        * {
                            box-sizing: border-box;
                        }
                    `
                }
            </style>
        </>
    )
}

export default Layout;