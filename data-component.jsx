

class Data extends React.Component {
    constructor() {
        super();
        this.currentSearchCharacter = '';
        this.currentSearchLocation = '';
        this.state = {
            data: [],
            dataOriginal: [],
            location: [],
            locationOriginal: [],
            mensajeError : '',
        

        }
    }


    async componentDidMount() {
        const array = [];
        const arrayLocations = [];
        
        for (let i = 1; i <= 670; i++) {
            array.push(i);
        }

        for (let i = 1; i<=108; i++){
            arrayLocations.push(i)
        }

        const r = await fetch(`https://rickandmortyapi.com/api/character/${array}`);
        const d = await r.json();
        this.setState({ data: d, dataOriginal: d});
        const r2 = await fetch(`https://rickandmortyapi.com/api/location/${arrayLocations}`);
        const d2 = await r2.json();
        this.setState({locationOriginal:d2});
    }

    
    filtrarBoth(){
        const filteredCharacter = this.state.dataOriginal.filter(i=> i.name.toLowerCase().includes(this.currentSearchCharacter) 
                                                                                                    && i.location.name.toLowerCase().includes(this.currentSearchLocation));
        this.setState({data: filteredCharacter})
    }
    

    filtrador(e) {
        this.currentSearchCharacter = e.target.value.toLowerCase();
        this.filtrarBoth();
    }


    filtradorLocation(e) {
        e.preventDefault();
        this.currentSearchLocation = e.target.value.value.toLowerCase();
        this.filtrarBoth();
        
        
        if(this.currentSearchLocation === '' || !this.state.locationOriginal.some(i => i.name.toLowerCase().includes(this.currentSearchLocation)) ){// no funciona la segunda condicion
            this.setState({location: [], mensajeError: 'Localización errónea, intente de nuevo'});
        }else{
        const filtrados = this.state.locationOriginal.filter(i=> i.name.toLowerCase().includes(this.currentSearchLocation));
        this.setState({location: filtrados, mensajeError:''});
        }


    }

    render() {
        return (
            <React.Fragment>
                <div className='main'>
                    <div className='searchbar-container'>
                    <div className='searchbar-container__characters'>
                        <input onChange={(e) => this.filtrador(e)} type="text" placeholder='Type Character' />
                    </div>
                    <form onSubmit={(e) => this.filtradorLocation(e)} className='searchbar-container__location'>
                        <datalist id='suggestions'>
                            {this.state.locationOriginal.map(i=> <OptionsList location={i}></OptionsList>)}
                        </datalist>
                        <input list='suggestions' name='value' type="text" placeholder='Type Location' autoComplete= 'on' />

                        <button type='submit'>Search</button>
                    </form>
                    </div>
                    <div>
                        <SearchError error={this.state.mensajeError}></SearchError>
                    </div>
                    <div className='location-container'>
                        <div>
                            {this.state.location.map(i=> <LocationCard location={i}></LocationCard>)}
                        </div>
                    </div>
                    <div className='container'>
                        {this.state.data.map(i => <Card key={i.id} data={i}></Card>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}