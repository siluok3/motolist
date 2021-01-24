import React, { useRef, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

import { AuthContext, AuthContextType } from '../../contexts/AuthContext'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}))

export default function Signup() {
  const classes = useStyles()

  const authContext: Partial<AuthContextType> = useContext(AuthContext)

  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords are not equal 🤪')
    }
    if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
      try {
        setError('')
        setLoading(true)
        await authContext.signup(emailRef.current.value, passwordRef.current.value)
      } catch (error) {
        setError(error.message ?? 'Failed to create an account')
      }

      setLoading(false)
    }
  }

  return (
    <Container className={classes.container} maxWidth="xs">
      <h2>Sign up</h2>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField 
                  fullWidth
                  label="Email"
                  inputRef={emailRef}
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  inputRef={passwordRef}
                  size="small"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  inputRef={passwordConfirmRef}
                  size="small"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={loading}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </Container>
  )
}
