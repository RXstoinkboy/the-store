import React from 'react';
import {Wrapper, TopSection, LowerSection, TopDot, BotDot} from './Loader.style';

const Loader = () => {
    const topDots = [0,1,2,3,4,5,6];
    const topDotsColor = ['var(--mainWhite)', 'var(--mainGreen)', 'var(--mainBlue)', 'var(--mainPink)', 'var(--mainBlack)', 'var(--mainRed)', 'var(--mainYellow)' ]
    const bottomDots = [1,2,3];

    return (
        <Wrapper>
            <TopSection>
                {topDots.map(dot => {
                    return <TopDot key={dot} delay={dot} color={topDotsColor[dot]}/>
                })}
            </TopSection>
            <LowerSection>
                Loading
                {bottomDots.map(dot => {
                    return <BotDot key={dot} delay={dot}/>
                })}
            </LowerSection>
        </Wrapper>
    );
};

export default Loader;