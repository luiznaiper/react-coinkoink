import React, {useState, useEffect} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { commerce } from '../../../lib/commerce'
import useStyles from './styles'
import { AddressForm } from '../AddressForm'
import { PaymentForm } from '../PaymentForm'

const steps = ['Dirección de envío', 'Detalles de pago']

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const classes = useStyles()

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          setCheckoutToken(token);
        } catch {
          //if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const nextStep = ( ) => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = ( ) => setActiveStep((prevActiveStep) => prevActiveStep - 1)


  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  let Confirmation = () =>  order.customer ? (
    <>
      <div>
          <Typography variant="h5">Gracias por tu compra, {order.customer.firstname}, {order.customer.lastname}</Typography>
          <Divider className={classes.divider}/>
          <Typography variant="subtitle2">Referencia de orden: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button variant="outlined" type="button" component={Link} to="/">Regresar al inicio</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  )

    if (error) {
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button variant="outlined" type="button" component={Link} to="/">Regresar al inicio</Button>
      </>
    }

  const Form= () => activeStep === 0
    ? 
    <AddressForm checkoutToken={checkoutToken} next={next}/>
    : 
    <PaymentForm 
      shippingData={shippingData} 
      checkoutToken={checkoutToken} 
      nextStep={nextStep} 
      backStep={backStep}
      onCaptureCheckout={onCaptureCheckout}
     />
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