import React, { Component } from 'react'
import AnimalService from '../../services/AnimalService';

class CreateAnimalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            breed: '',
            animalId: '',
            weight: '',
            animalAvailability:'',
            sex:'',
            species:'',
            cityTatoo:'',
            userID:''


        }
        this.changebreedHandler = this.changebreedHandler.bind(this);
        this.changeanimalIdHandler = this.changeanimalIdHandler.bind(this);
        this.saveOrUpdateAnimal = this.saveOrUpdateAnimal.bind(this);
        this.changeanimalAvailabilityHandler = this.changeanimalAvailabilityHandler.bind(this);
        this.changesexHandler = this.changesexHandler.bind(this);
        this.changespeciesHandler = this.changespeciesHandler.bind(this);
        this.changecityTatooHandler = this.changecityTatooHandler.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);

    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            AnimalService.getAnimalById(this.state.id).then( (res) =>{
                let Animal = res.data;
                this.setState({breed: Animal.breed,
                    animalId: Animal.animalId,
                    weight : Animal.weight,
                    animalAvailability: Animal.animalAvailability,
                    sex:Animal.sex,
                    species: Animal.species,
                    cityTatoo:Animal.cityTatoo,
                    userID:Animal.userID

                });
            });
        }        
    }
    saveOrUpdateAnimal = (e) => {
        e.preventDefault();
        let Animal = {breed: this.state.breed, animalId: this.state.animalId, weight: this.state.weight, animalAvailability: this.state.animalAvailability, sex: this.state.sex,species: this.state.species, cityTatoo: this.state.cityTatoo, userID: this.state.userID };
        console.log('Animal => ' + JSON.stringify(Animal));

        if(this.state.id === '_add'){
            AnimalService.createAnimal(Animal).then(res =>{
                this.props.history.push('/animal-list');
            });
        }else{
            AnimalService.updateAnimal(Animal, this.state.id).then( res => {
                this.props.history.push('/animal-list');
            });
        }
    }
    
    changebreedHandler= (event) => {
        this.setState({breed: event.target.value});
    }

    changeanimalIdHandler= (event) => {
        this.setState({animalId: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({weight: event.target.value});
    }

    changeanimalAvailabilityHandler= (event) => {
        this.setState({animalAvailability: event.target.value});
    }
    changesexHandler= (event) => {
        this.setState({sex: event.target.value});
    }


    changespeciesHandler= (event) => {
        this.setState({species: event.target.value});
    }


    changecityTatooHandler= (event) => {
        this.setState({cityTatoo: event.target.value});
    }

    changeuserIDHandler= (event) => {
        this.setState({userID: event.target.value});
    }


    cancel(){
        this.props.history.push('/animal-list');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Animal to List</h3>
        }else{
            return <h3 className="text-center">Update Animal List</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Animal Breed : </label>
                                            <input placeholder="Animal breed" name="breed" className="form-control" 
                                                value={this.state.breed} onChange={this.changebreedHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Animal ID: </label>
                                            <input placeholder="Animal ID" name="animalId" className="form-control" 
                                                value={this.state.animalId} onChange={this.changeanimalIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> User ID: </label>
                                            <input placeholder="Record Entered By (UserID)" name="userID" className="form-control" 
                                                value={this.state.userID} onChange={this.changeuserIDHandler}/>
                                        </div>



                                        <div className = "form-group">
                                            <label> Weight </label>
                                            <input placeholder="Weight" name="weight" className="form-control" 
                                                value={this.state.weight} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Animal Availability </label>
                                            <input placeholder="Animal Availability" name="animalAvailability" className="form-control" 
                                                value={this.state.animalAvailability} onChange={this.changeanimalAvailabilityHandler}/>
                                        </div>
                                        
                                        
                                        <div className = "form-group">
                                            <label> sex </label>
                                            <input placeholder="sex" name="sex" className="form-control" 
                                                value={this.state.sex} onChange={this.changesexHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Species </label>
                                            <input placeholder="species" name="species" className="form-control" 
                                                value={this.state.species} onChange={this.changespeciesHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> City Tattoo </label>
                                            <input placeholder="city tatoo" name="cityTatoo" className="form-control" 
                                                value={this.state.cityTatoo} onChange={this.changecityTatooHandler}/>
                                        </div>




                                        <button className="btn btn-success" onClick={this.saveOrUpdateAnimal}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateAnimalComponent
