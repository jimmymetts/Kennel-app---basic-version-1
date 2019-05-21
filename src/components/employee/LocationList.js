import React, { Component } from 'react'


// export default class LocationList extends Component {
//     render() {
//         return (
//             <div>
//                 <section>
//                     <h3>Student Kennels</h3>
//                     <h4>Nashville North Location</h4>
//                     <h5>500 Puppy Way</h5>
//                 </section>
//                 <section>
//                     <h3>Student Kennels</h3>
//                     <h4>Nashville South Location</h4>
//                     <h5>450 Puppy Way</h5>
//                 </section>
//             </div>
//         );
//     }
// }

class LocationList extends Component {
        render() {
            return (

                <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name} 
                            -{location.address}
                        </div>
                    )
                }
                </section>
            )
        }
    }
    export default LocationList 