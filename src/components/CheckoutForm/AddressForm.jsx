import React, {useState} from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import {commerce} from '../../lib/commerce'
import {FormInput} from './FormInput'



const AddressForm = () => {
  const methods = useForm()

  return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>Dirección de envío</Typography>
        <FormProvider {...methods}> 
            <form onSubmit=''>
                <Grid container spacing={3}>
                <FormInput required name='nombre' label='Nombre'/>
                <FormInput required name='apellido' label='Apellido'/>
                <FormInput required name='direccion1' label='Dirección'/>
                <FormInput required name='email' label='Email'/>
                <FormInput required name='Ciudad' label='Ciudad'/>
                <FormInput required name='CP' label='Código Postal'/>
                </Grid>
            </form>

        </FormProvider>
    </React.Fragment>
  )
}

export {AddressForm}