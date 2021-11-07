class App extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <Data></Data>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)