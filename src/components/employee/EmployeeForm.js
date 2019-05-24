// import React, { Component } from 'react';
// import "./Employee.css";
// // import { tsImportEqualsDeclaration } from '@babel/types';

// export default class EmployeeForm extends Component {

//     state = {
//         employeeName: "",
//     };

//     handleFieldChange = evt => {
//         const stateToChange = {};
//         this.setState(stateToChange);
//     };
//         /* don't need select caretaker - took off from AnimalForm */

//     constructNewEmployee = evt => {
//         evt.preventDefault();
//         const employee = {
//             name: this.state.employeeName,
//     };
//     }

//     /* from animalform - code will need updating */
//     render() {
//         return (
//             <React.Fragment>
//                 <form className="employeeForm">
//                     <div className="form-group">
//                         <label htmlFor="employeeName">Employee name</label>
//                         <input
//                             type="text"
//                             required
//                             className="form-control"
//                             onChange={this.handleFieldChange}
//                             id="employeeName"
//                             placeholder="Employee Name"
//                             />
//                     </div>   
//                <div className="form-group">
//             <label htmlFor="breed">Breed</label>
//             <input
//               type="text"
//               required
//               className="form-control"
//               onChange={this.handleFieldChange}
//               id="breed"
//               placeholder="Breed"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="employee">Assign to caretaker</label>
//             <select
//               defaultValue=""
//               name="employee"
//               id="employeeId"
//               onChange={this.handleFieldChange}
//             >
//               <option value="">Select an employee</option>
//               {this.props.employees.map(e => (
//                 <option key={e.id} id={e.id} value={e.id}>
//                   {e.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//              type="button"
//             onClick={this.constructNewAnimal}
//             className="btn btn-primary"
//           >
//             Submit
//           </button>
//         </form>
//       </React.Fragment>
//     );
//   }
// }

                    