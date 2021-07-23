import React, { useState, useEffect } from 'react'
import { FormLabel, Grid, Radio, TextField, FormControlLabel, RadioGroup, InputLabel, Select, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components'

const useStyle = makeStyles((theme) => ({
    record: {
        width: '250px',
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',

    },
    review: {
        width: '300px',
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',

    },
    radio: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formControl: {
        margin: '1rem',
        width: '220px',
    },
    signature: {
        width: '440px',
        alignContent: 'center'
    }

}))

const intialformValues = {
    id: 0,
    record: '',
    reviewOf: '',
    physicalRecords: 'yes',
    electronicRecords: 'no',
    resonsibleDepart: '',
    frequency: 'Annually',
    nextDueDate: new Date(),

}

const Spacer = styled.div`
    height: 2rem;
    display: flex;
    justify-content: center;
`





const AddDocForm = () => {

    const [values, setValues] = useState(intialformValues);
    const classes = useStyle();

    const [physical, setPhysical] = useState('yes')

    const handleChange = (event) => {
        setPhysical(event.target.value);
    };
    const [electronic, setElectronic] = useState('yes')

    const swapChange = (event) => {
        setElectronic(event.target.value);
    };

    return (

        <Grid container>


            <Grid item xs={6}>
                <TextField variant="filled" label="Record" multiline maxRows={4} className={classes.record} />
            </Grid>
            <Grid item xs={6}>
                <TextField variant="filled" label="Review Of" multiline maxRows={4} className={classes.review} />
            </Grid>

            <Grid item xs={12}>
                <Spacer />
            </Grid>

            <Grid item xs={6}>
                <FormLabel component="legend" className={classes.radio}>Physical Records kept for 7 years</FormLabel>
                <RadioGroup row name="physical" value={physical} onChange={handleChange} className={classes.radio}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </Grid>
            <Grid item xs={6}>
                <FormLabel component="legend" className={classes.radio}>Electronic Records kept for 7 years</FormLabel>
                <RadioGroup row name="physical" value={electronic} onChange={swapChange} className={classes.radio}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </Grid>

            <Grid item xs={12}>
                <Spacer />
            </Grid>

            <Grid item xs={4}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel >Responsible Department</InputLabel>
                    <Select
                    // native
                    // value={state.age}
                    // onChange={handleChange}
                    // inputProps={{
                    //     name: 'age',
                    //     id: 'filled-age-native-simple',
                    // }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Compliance</option>
                        <option value={20}>Credit</option>
                        <option value={30}>HR</option>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel >Fequency</InputLabel>
                    <Select
                    // native
                    // value={state.age}
                    // onChange={handleChange}
                    // inputProps={{
                    //     name: 'age',
                    //     id: 'filled-age-native-simple',
                    // }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Annually</option>
                        <option value={20}>Bi Annually</option>
                        <option value={30}>6 Monthly</option>
                        <option value={40}>Quarterly</option>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <TextField variant="filled"
                    id="date"
                    label="Due Date"
                    type="date"
                    defaultValue="2021-07-23"
                    className={classes.formControl}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>

            <Grid item xs={12}>
                <Spacer />
            </Grid>
            <Grid item xs={12}>
                <Spacer />
            </Grid>


            <Grid item xs={2}>
                <Spacer />
            </Grid>
            <Grid item xs={8}>
                <TextField
                    variant="filled"
                    label="Compliance Officer Signature and Date"
                    className={classes.signature}
                >
                </TextField>
            </Grid>

        </Grid>
    )
}

export default AddDocForm

