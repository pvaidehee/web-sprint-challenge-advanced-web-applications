import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useDispatch} from 'react-redux'
import {getLoginToken} from '../redux/actions/authActions'
import {useHistory} from 'react-router-dom'
import '../styles/login.scss'

function Login(props) {

  const initialValue = {
    username: '',
    password: '',
  }


  const [value, setValue] = React.useState(initialValue)
  const dispatch = useDispatch()
  let history = useHistory()

  const handleChanges = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getLoginToken(value, history))
  }

  return (
    <div className='login'>
      <div className='wrapper'>
        <Row>
          <Col className='left-login'></Col>
          <Col>
            <div className='right-login'>
              <Form onSubmit={handleSubmit} className='login-form'>
                <img src= "https://mir-s3-cdn-cf.behance.net/project_modules/disp/22c4a514115989.5627dc83a9d5c.jpg" alt='logo' className='login-logo' />

                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='text'
                    value={value.username}
                    placeholder='Enter name'
                    onChange={handleChanges}
                    name='username'
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    value={value.passowrd}
                    onChange={handleChanges}
                    name='password'
                  />
                </Form.Group>

                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login