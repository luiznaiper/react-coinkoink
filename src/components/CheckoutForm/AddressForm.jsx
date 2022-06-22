import React, {useState} from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import {commerce} from '../../lib/commerce'
import {FormInput} from './FormInput'



const AddressForm = () => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')
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
                <Grid item xs={12} sm={6}>
                    <InputLabel>País de envío</InputLabel>
                    <Select value={} fullWidth onChange={}>
                      <MenuItem key={} value={}>
                          Seleccióname
                      </MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Ciudad de envío</InputLabel>
                    <Select value={} fullWidth onChange={}>
                      <MenuItem key={} value={}>
                          Seleccióname
                      </MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Opciones de envío</InputLabel>
                    <Select value={} fullWidth onChange={}>
                      <MenuItem key={} value={}>
                          Seleccióname
                      </MenuItem>
                    </Select>
                </Grid>
                </Grid>
            </form>

        </FormProvider>
    </React.Fragment>
  )
}

export {AddressForm}