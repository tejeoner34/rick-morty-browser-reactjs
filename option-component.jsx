class OptionsList extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <React.Fragment>
               <option>{this.props.location.name}</option>
            </React.Fragment>
        )
    }
}