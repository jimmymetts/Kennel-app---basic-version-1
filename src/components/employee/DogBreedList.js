import React, { Component } from 'react'


export default class DogBreedList extends Component 
{
    render() {
        
        return (
            <section className="breeds">
            {
                
                this.props.breeds.map(breed =>
                    
                    <div 
                        key={breed.id}>
                        {breed.name}
                   </div>
                )
            }
            </section>
        )
    }
}