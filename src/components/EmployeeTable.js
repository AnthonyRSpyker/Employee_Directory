import React, { Component } from "react";
import API from "../utils/API";
import Card from "./Card";
import Search from "./Search";
import EmployeeDetails from "./EmployeeDetails"


class RandomEmployeesTable extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({ results: res.data.results, filteredResults : res.data.results  }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
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

  render() {
    return (
    //   <Container>
    //     <Row>
    //       <Col size="md-8">
    <div>
        <Search
        handleFormSearch = {this.handleFormSearch}
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
    //       </Col>
    //     </Row>
    //   </Container>
    // );
//   }
    )
}
}

export default RandomEmployeesTable ;
