import React from 'react'

const Body = props => {
    const column = comp => {
        if(comp && typeof comp === "string"){
            return (
                <div>{comp}</div>
            )
        }

        if(comp && comp instanceof Object){
            return comp;
        }
        
        return (
            <div>This is invalid Component</div>
        )
    }
    return (
        <>
            <div className="main-area">
                <div className="">
                    {column(props.leftCol)}
                </div>
                <div className="">
                    {column(props.rightCol)}
                </div>
            </div>
            <style jsx global>{
                `
                    .main-area {
                        flex: 1 1 auto;
                        display: flex;
                        position: relative;
                        margin: 1.8rem 1.2rem 0 1.8rem;
                        overflow: hidden;
                    }
                    .source {
                        position: relative;
                        display: -ms-flexbox;
                        display: flex;
                        flex-direction: column;
                        cursor: default;
                        user-select: none;
                    }
                    .gold-source {
                        flex: 0 0 auto;
                        width: 33.97rem;
                    }
                    .other-source {
                        flex: 1 1 auto;
                    }
                `            
            }</style>
        </>
    )
}
export default Body;