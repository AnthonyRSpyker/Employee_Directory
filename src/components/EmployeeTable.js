import React, { Component } from "react";
import API from "../utils/API";
import Card from "./Card";
import Search from "./Search";
import EmployeeDetails from "./EmployeeDetails"
import Age from "./Buttons"


class RandomEmployeesTable extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: []
  };

  
  componentDidMount() {
    this.searchEmployees();
    
  }

  searchEmployees = () => {
    API.search()
    .then(data => {console.log(data); return data})
      .then(res => this.setState({ results: res.data.results, filteredResults : res.data.results  }))
      .catch(err => console.log(err));
      
  };

  handleFormSearch = event => {
    event.preventDefault();
    const value = event.target.value;
    const filterEmployee = this.state.results.filter(
        employee => {
            let userValue = Object.values(employee).join("").toLowerCase();
            return userValue.indexOf(value.toLowerCase()) !== -1;
        }
    );
    this.setState({filteredResults : filterEmployee})
    
  };

  sortAge = () => {
    
  }
  sortAge = () => {
      const filteredAge = this.state.filteredResults.sort(function(a, b) {
        return new Date(b.dob.age) - new Date(a.dob.age);
      });
  
      this.setState({ filteredResults: filteredAge }, () => console.log(this.state.filteredResults));
    console.log(filteredAge)
    };

  render() {
    
    return (
    
    <div>
        
        <Search
        handleFormSearch = {this.handleFormSearch}
        />
        <Age
        sortAge = {this.sortAge}
        />
            <Card
              heading={ "List of Employees" }
            >

              {this.state.results !== undefined ? (
                  this.state.filteredResults.map((user)=>{
                    return (
                    <EmployeeDetails
                        image={user.picture.medium}
                        firstName={user.name.first}
                        lastName={user.name.last}
                        Age={user.dob.age}
                        Email={user.email}
                        
                    />
                )
                })
              ) 
              : (
                <h3>No Results to Display</h3>
              )}
              
            </Card>
            </div>
 
    )
}
}

export default RandomEmployeesTable ;
