import React,{Component} from 'react'
import ChildComponent from './ChildComponent'
import SecondChildComponent from './SecondChildComponent'

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
           // buttonVisibility:true
           isOrderConfirm:false
        }
    }

    onConfirm=(order)=> {
        this.setState({
            isOrderConfirm:true
        })
      }

     // <ChildComponent buttonVisibility={this.state.buttonVisibility}/>

    render(){
        return(
            <React.Fragment>
               
            
            <ChildComponent confirm={this.onConfirm} />
            <SecondChildComponent isOrderConfirm={this.state.isOrderConfirm} />
            </React.Fragment>
        )
    }

}
export default ParentComponent;