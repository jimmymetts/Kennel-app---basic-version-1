// import React, { Component } from "react"
// import NavBar from "./nav/NavBar"
// import ApplicationViews from "./ApplicationViews"

// import "./Kennel.css"
// import "bootstrap/dist/css/bootstrap.min.css"


// class Kennel extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <NavBar />
//                 <ApplicationViews />
//             </React.Fragment>
//         )
//     }
// }

// export default Kennel









import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./employee/LocationList"
import DogBreedList from "./employee/DogBreedList"
import Joke from "./joke/joke"
// import "./Kennel.css"



 class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    
    breedsFromAPI = [
            { id: 1, name: "German Shepherd" },
            { id: 2, name: "Border Collie" },
            { id: 3, name: "Blue Heeler" },
            { id: 4, name: "Jack Russell" }
    ]
    
    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        breeds: this.breedsFromAPI
    }



    render() {
        return (
            <div>
                <h1>Jimmy's Page</h1>
                <h2>Employee List</h2>
                <EmployeeList employees={this.state.employees} />
                <hr/>
                <h2>Locations</h2>
                <LocationList locations={this.state.locations} />
                
                <h2>Breeds</h2>
                <DogBreedList breeds={this.state.breeds} />
                <hr/>
                <Joke type={this.state.type}
                setup={this.state.setup}
                punchline={this.state.punchline}
                setNewJokeState={this.setNewJokeState} />
            </div>
        );
    }
}



export default Kennel

