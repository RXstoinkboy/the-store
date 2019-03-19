import React, { Component } from 'react';
import {Title} from '../Shop/Shop.style';
import Grid from './Grid';

class About extends Component {
    
    render() {

        const texts = [
            'Hic, error voluptas quis necessitatibus, sint delectus corrupti voluptates minima quam sequi vel labore accusamus, totam consequatur! Molestiae error consequuntur porro amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            'Optio vel nisi voluptatem, similique possimus assumenda modi iure cum, adipisci facilis, ducimus accusamus voluptates impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore eos nulla at ratione omnis.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius voluptatem eveniet ullam, ut culpa minima blanditiis dignissimos molestias cumque libero esse.'
        ]
    
        const titles = [
            'who we are?',
            'what we do?',
            'where we are?',
            `Let's go!`,
        ]
    
        const colors = [
            'var(--mainWhite)',
            'var(--mainBlue)',
            'var(--mainPink)',
            'hsl(120, 50%, 75%)',
        ]

        return (
            <div style={{width: '100%', height: '100%'}}>
                <Title>about</Title>
                <Grid colors={colors} texts={texts} titles={titles}/>
            </div>
        );
    }
}

export default About;