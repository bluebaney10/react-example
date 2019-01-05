import React,{Component} from 'react'

class ChildComponent extends Component{

    onConfirmClick = () => {
       // const order = "Blue"
       // this.props.confirm(order)

        if (this.props.confirm) {
            const order = "Blue Baney"
            this.props.confirm(order)
          }

      }

    render(){
        return(
            <React.Fragment>
           
            <button onClick={this.onConfirmClick}>Confirm</button>
            </React.Fragment>
        )
    }
}

export default ChildComponent