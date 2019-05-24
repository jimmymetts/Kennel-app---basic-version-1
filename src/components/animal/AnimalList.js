import React, { Component } from 'react';
import AnimalItem from './AnimalItem';
import "./Animal.css"
import dog from "./DogIcon.svg"
import {Link} from 'react-router-dom';



export default class AnimalList extends Component {

    render() {      
        return (
            

                    <section>
                        <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
                           <h2>All Animals</h2>               
            {                
                
                                this.props.animals.map((item) => {
                             return <AnimalItem key={item.id} animal={item} {...this.props}
                            deleteAnimal={this.props.deleteAnimal} />
                    })
                }
                    
                
            </section>
            )
    }
}



// {/* <section className="animals">
// <div className="card">
//     <div className="card-body">
//         <img src={ dog } className="icon--dog" /> */}


