import React from 'react'
import styled from 'styled-components/native'

const Input = ({ label, showRightIcon = false, style}) => {
    return (
        <StyledView style={style}>
            <StyledContainer>
                <StyledLabel>{label}</StyledLabel>
                <StyledTextInput />
            </StyledContainer>
            {showRightIcon && (
                <StyledButton>
                    <StyledButtonText>{"Entrar"}</StyledButtonText>
                </StyledButton>
            )}
        </StyledView>
    )
}

const StyledView = styled.View`
    width: 100%;
    flex-direction: row;
    background-color: #00000052;
    border-radius: 4px;
    padding: 8px 16px 8px 13px;
`;

const StyledContainer = styled.View`
    flex: 1;

`;
const StyledLabel = styled.Text`
    color: white;
    opacity: 0.5;
    font-size: 12px;
    margin-bottom: 4px;
`;
const StyledTextInput = styled.TextInput`
    height: 24px;
    font-size: 16px;
    color: white;
`;
const StyledButton = styled.TouchableOpacity`
    background-color: white;
    border-radius: 44px;
    justify-content: center;
    align-items: center;

`;
const StyledButtonText = styled.Text`
    font-size: 16px;
    color: "#b22e6f";
    padding: 8px 20px;
`;

export default Input
