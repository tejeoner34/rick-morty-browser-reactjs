class Header extends React.Component{

    constructor(){
        super();
        
    }

    reloadPage(){
        return location.reload();
    }

    render(){
        return(
            <div className='header'>
                <div onClick={this.reloadPage}  className='img-container'>
                    <a href=""><img className='img-container__img' src="./pngaaa.com-2998297.png" alt="logo rick y morty" /></a>
                <h2 className='header__h2'>Characters Browser</h2>
                </div>
            </div>
        )
    }
}