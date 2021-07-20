import React from 'react';
import { makeStyles } from '@material-ui/styles';
import styled from "styled-components";
import { TextField, Container, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: '1rem',
            width: '25ch',
        },
        '& .MuiTextField-root': {
            margin: '1rem',
            width: '10rem',
        },
    },
    formControl: {
        margin: '2rem',
        width: '10rem',
        marginTop: '2rem',
    },
    selectEmpty: {
        marginTop: '2rem',
    },
}));

const Background = styled.div`
 background-color: lightcoral;
 display: flex;
 justify-content: center;
 align-items: center;
 `

const ComplianceRegister = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
      });

      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Compliance Register</h1>
            <Background>
                <Container style={{ display:' flex',
 justifyContent: 'center',
 alignItems: 'center' }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="outlined" />
                        <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="outlined" />
                        <TextField id="standard-basic" label="Standard" />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                            <Select
                                native
                                value={state.age}
                                onChange={handleChange}
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>



                    </form>
                </Container>
            </Background>
        </div>
    )
}

export default ComplianceRegister
