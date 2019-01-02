import React,{Component} from "react"

class Clicker extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }

        this.incrementCount=this.incrementCount.bind(this);
        this.decrementCount=this.decrementCount.bind(this);
        this.resetCount=this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState({count:this.state.count+1})
    }

    decrementCount(){
        this.setState({count:this.state.count-1})
    }

    resetCount(){
        this.setState({count:0})
    }

    render(){
        return(
            <div>
                 
                <div>{this.state.count}</div>
                <div onClick={this.incrementCount}>Add</div>
                <div onClick={this.decrementCount}>Decrease</div>
                <div onClick={this.resetCount}>Reset</div>
                </div>
        )
    }

}
export default Clicker