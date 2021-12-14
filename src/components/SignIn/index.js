import React from 'react'

import { Container,Text, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, Icon, FormWrap } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
        <FormWrap>
        <Icon to="/">AliansWeb</Icon>
        <FormContent>
            <Form action="#">
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor='for'>User Name</FormLabel>
                <FormInput type='username' required/>
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' required/>
                <FormButton type='submit'>Continue</FormButton>
                <Text>Forgot password</Text>
            </Form>
        </FormContent>
        </FormWrap>    
        </Container>    
        </>
    )
}

export default SignIn
