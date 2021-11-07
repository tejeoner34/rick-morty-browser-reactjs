class LocationCard extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className='' className='location-card'>
                <h1>{this.props.location.name}</h1>
                <p>ID: {this.props.location.id}</p>
                <p>Dimension: {this.props.location.dimension}</p>
                <p>Type: {this.props.location.type}</p>
                <p>Created: {this.props.location.created}</p>
            </div>
        )
    }
}