import Stack from '@mui/material/Stack';
import UpdatesTable from '../../components/UpdatesTable';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AnimalsTable from '../../components/AnimalsTable';
import SearchAppBar from '../../components/SearchAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, {useState, Fragment, useEffect} from "react";

// const comments= [
//   {comment: 'Animals woke up', date: "2020-01-02", animal: "Cat", id: 1, providerName: "Bob", notification: "Available"},
//   {comment: 'Needs some test', date: "2020-01-03", animal: "Cat", id: 1, providerName: "Bob", notification: "Status"},
//   {comment: 'Animals woke up', date: "2020-01-10", animal: "Dog", id: 2, providerName: "Bob", notification: "Requested"},
//   {comment: 'Animals woke up', date: "2020-02-02", animal: "Rooster", id: 4, providerName: "Bob", notification: "Available"},
//   {comment: 'Animals woke up', date: "2020-02-09", animal: "Horse", id: 3, providerName: "Bob", notification: "Injured"},
// ];
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {animals:[]}
    }

    async componentDidMount(){
        const response = await fetch("http://localhost:8080/animals");
        const json = await response.json();
        this.setState({animals:json})
    }
    render(){
const theme = createTheme({
  palette: {
    //neutral: {
    primary: {
      main: '#3b3748',
      contrastText: '#fff',
    },
  },
  typography: {
    button: {
      fontWeight: 500,
    },
  },
});

return (
    <ThemeProvider theme={theme}>
        <div className="App">
        <div>
        <SearchAppBar></SearchAppBar> 
        </div>
            <Stack spacing={2}>
            <AnimalsTable animals={this.state.animals}/>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <div>
                    <Stack spacing={2} direction="row">
                    </Stack>
                    </div>
                </Grid>
            </Grid>
            </Stack>
        </div>
    </ThemeProvider>
    );
}
}
export default Home;
