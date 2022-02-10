import React from 'react';
import styled from 'styled-components';
import Container from '../elements/Container';
import FlexGrid from '../elements/FlexGrid';
import Text from '../elements/Text';
const Header = (props) => {
    return (
        <HeaderWrap>
            <Container>
                <Text size="30px" margin="auto">무신사</Text>
            </Container>
        </HeaderWrap>
    );
};
const HeaderWrap = styled.div`
    width: 100%;
    height: 90px;
`;
export default Header;