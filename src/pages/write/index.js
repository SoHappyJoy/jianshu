import React,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Write extends PureComponent{
    render (){
        const {loginStatus} =this.props;
        if(loginStatus){
            return (
                <div style={{'textAlign':'center','fontSize':'16px','fontWeight':'bold','lineHeight':'200px'}}>写点东西吧！</div>
            )
        }else{
            return <Redirect to='/login' />
        }
        
    }
}

const mapState=(state)=>({
    loginStatus:state.getIn(['login','login'])
});


export default connect(mapState,null)(Write);