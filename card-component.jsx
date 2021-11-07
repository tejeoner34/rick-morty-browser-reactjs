class Card extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>
                <div className='card'>
                <div className='img-div'>
                        <img src={this.props.data.image} alt="" />
                    </div>
                    <div className='info'>
                        <h1 className='name'>{this.props.data.name}</h1>
                        <p className='especie'>{this.props.data.species}</p>
                        <p className='localizacion'>{this.props.data.location.name}</p>
                        <p className='gender'>{this.props.data.gender}</p><span className={this.props.data.gender}></span>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}