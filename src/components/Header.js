import React,{Component} from "react"

class Header extends Component{
    constructor(){
        super()
        this.state={name:"Blue Baney"}
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )

    }

}
export default Header