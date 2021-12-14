import React from 'react'

import { Container,Text, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, Icon, FormWrap } from './SignUpElements'

const SignUp = () => {
    return (
        <>
        <Container>
        <FormWrap>
        <Icon to="/">AliansWeb</Icon>
        <FormContent>
            <Form action="#">
                <FormH1>Create your account</FormH1>
                <FormLabel htmlFor='for'>User Name</FormLabel>
                <FormInput type='username' name="username"   required/>

                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' name="email"   required/>
                
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' name="password"   required/>
                <FormButton type='submit'>Continue</FormButton>
                <Text>Forgot password</Text>
            </Form>
        </FormContent>
        </FormWrap>    
        </Container>    
        </>
    )
}

export default SignUp
