import React from 'react'
import './AuthPopup.css'
import Input from '@mui/joy/Input';
import logo from '@/asset/logo.png'
import Image from 'next/image'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const AuthPopup = () => {

    const [showSignup, setShowSignup] = React.useState<boolean>(false)

    const handleLogin = () => { }
    const handleSignup = () => { }



    return (
        <div className='popup'>
            {
                showSignup ? (
                    <div className="authform">
                        <div className="left">
                            <Image src={logo} alt='logo' />
                        </div>
                        <div className="right">
                            <h1>Signup to become Fit</h1>
                            <form action="">
                                <Input

                                    placeholder="email"
                                    size="lg"
                                    variant="outlined"
                                />
                                <Input

                                    placeholder="Password"
                                    size="lg"
                                    variant="outlined"
                                    type='password'
                                />
                                <div className="form_input_leftright">
                                    <Input type="numhber" variant="outlined" placeholder='Age' />
                                    <Input type="numhber" variant="outlined" placeholder='Weight' />
                                </div>
                                <Select
                                    placeholder="Gender"
                                    size="lg"
                                    variant="outlined"
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
<br />
                                <label htmlFor="" style={{color: 'white'}}>Height</label>
                                <div className="form_input_leftright">
                                    {/* 5ft 11inch */}
                                    <Input type="numhber" variant="outlined" placeholder='ft' />
                                    <Input type="numhber" variant="outlined" placeholder='inch' />
                                </div>
                                <button
                                    onClick={() => {
                                        handleSignup()
                                    }}
                                className='authbtn'>Signup</button>
                            </form>
                            <p>Already have an account? <button
                                onClick={() => {
                                    setShowSignup(false)
                                }}className='authbtn'>Login</button></p>
                        </div>
                    </div>
                ) : (
                    <div className="authform">
                        <div className="left">
                            <Image src={logo} alt='logo' />
                        </div>
                        <div className="right">
                            <h1>Login to become Fit</h1>
                            <form action="">
                                <Input
                                    color="warning"
                                    placeholder="email"
                                    size="md"
                                    variant="outlined"
                                />
                                <Input
                                    color="warning"
                                    placeholder="Password"
                                    size="md"
                                    variant="outlined"
                                    type='password'
                                />
                                <button
                                    onClick={() => {
                                        handleLogin()
                                    }}
                                    className='authbtn'>Login</button>
                            </form>
                            <p>Don't have an account? <button
                                onClick={() => {
                                    setShowSignup(true)
                                }}className='authbtn'>Signup</button></p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AuthPopup
