import React, {useState, useEffect} from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import {commerce} from '../../lib/commerce'
import {FormInput} from './FormInput'



const AddressForm = ({checkoutToken}) => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')
  const methods = useForm()

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))
  console.log(countries)

  const fetchShippingCountries = async(checkoutTokenId) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  useEffect(() => {

    fetchShippingCountries(checkoutToken.id)
  }, [])
  

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
                    <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>                      
                    {countries.map((country) => (
                      <MenuItem key={country.id} value={country.id}>
                      {country.label}
                  </MenuItem>
                    ))}
                      
                    </Select>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
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
                </Grid> */}
                </Grid>
            </form>

        </FormProvider>
    </React.Fragment>
  )
}

export {AddressForm}