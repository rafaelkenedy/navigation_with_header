import React from 'react'
import styled from 'styled-components/native'

const Header = ({ title, onBackPress, onNextPress }) => {

    return (
        <>
            <StyledSafeAreaView />
            <StyledContainer>
                <Button onPress={onBackPress} />
                <StyledText> {title} </StyledText>
                <Button onPress={onNextPress} />
            </StyledContainer>
        </>
    )
}

const StyledSafeAreaView = styled.SafeAreaView`
    background-color: blue;    
`;

const StyledContainer = styled.View`    
    height: 48px;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 8px;
    background-color: blue;
    align-items: center;
    flex-direction: row;
`;

const Button = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    background-color: gray;
`;

const StyledText = styled.Text`
    font-size: 18px;
    color: white;
`;

export default Header