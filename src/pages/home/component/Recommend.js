import React from 'react'
import { RecommendWrap } from '../style'
import commend1 from '../../../static/commend1.png'
import commend2 from '../../../static/commend2.png'
import commend3 from '../../../static/commend3.png'
import commend4 from '../../../static/commend4.png'
import commend5 from '../../../static/commend5.png'

const Recommend = () => {
    return (
        <RecommendWrap>
            <img className="pic" src={commend1} alt="" />
            <img className="pic" src={commend2} alt="" />
            <img className="pic" src={commend3} alt="" />
            <img className="pic" src={commend4}alt="" />
            <img className="pic" src={commend5} alt="" />
        </RecommendWrap>
    )
}

export default Recommend