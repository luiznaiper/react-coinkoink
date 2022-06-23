import React, {useState, useEffect} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import { commerce } from '../../../lib/commerce'
import useStyles from './styles'
import { AddressForm } from '../AddressForm'
import { PaymentForm } from '../PaymentForm'

const steps = ['Dirección de envío', 'Detalles de pago']

const Checkout = ({cart}) => {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          console.log(token);
          setCheckoutToken(token);
        } catch {
          //if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const Confirmation = () => (
    <div>
        Confirmation
    </div>
  )

  const Form= () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken}/>
    : <PaymentForm />
  return (
    <React.Fragment>
        <div className={classes.toolbar}>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align='center'>Pagar Ahora</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) =>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
                </Paper>
            </main>
        </div>
    </React.Fragment>
  )
}

export  {Checkout}