import React from 'react';

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Covid from "./images/covid_19_banner.jpg";

import styles from "./App.module.css";

import {fetchData} from "./api";

class App extends React.Component{
  state = {
    data: {},
    country: "",
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    console.log(country)
    
    this.setState({ data: fetchedData, country: country});
  }

render(){

  const {data, country} = this.state;

  return (
    <div className={styles.container}>
      <img src={Covid}  xs={12} md={6} alt=""/>
      <Cards data={data}/> 
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  )
}

}

export default App;