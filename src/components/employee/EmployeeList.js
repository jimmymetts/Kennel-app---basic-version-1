import React, { Component } from 'react'
import AnimalItem from "../animal/AnimalItem"



class EmployeeList extends Component {
    render() {
        return (
            <section>
                <h2>All Employees</h2>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalItem key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>
                        </div>
                )
            }
                <hr />
            </section>
        )
    }
}

export default EmployeeList



            //     <section>
            //             <div className="animalButton">
            //         <button type="button"
            //                 className="btn btn-success"
            //                 onClick={() => {
            //                     this.props.history.push("/animals/new")}
            //                 }>
            //             Admit Animal
            //         </button>
            //     </div>
            //                <h2>All Animals</h2>               
            // {                
                
            //                     this.props.animals.map((item) => {
            //                  return <AnimalItem key={item.id} animal={item} {...this.props}
            //                 deleteAnimal={this.props.deleteAnimal} />
            //         })
            //     }
                    
                
            // </section>