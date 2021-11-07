class SearchError extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className='error'>
                <p>{this.props.error}</p>
            </div>
        )
    }
}