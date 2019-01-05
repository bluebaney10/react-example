import React,{Component} from 'react'

class SecondChildComponent extends Component{

    render(){
        return(
            <React.Fragment>
                {this.props.isOrderConfirm? 'Your order is inprogress.':''}
            </React.Fragment>

        )
    }

}
export default SecondChildComponent