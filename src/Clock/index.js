import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Back } from './Clock.styles';

const Clock = ({ time }) => (
    <Wrapper>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <Back>Back</Back>
        </Link>
        <Content>
            {time}
        </Content>
    </Wrapper>
)

export default Clock;