import React from 'react';

import { Wrapper, Content } from './Clock.styles';

const Clock = ({ time }) => (
    <Wrapper>
        <Content>
            {time}
        </Content>
    </Wrapper>
)

export default Clock;