import React,{PureComponent} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBoX,Input,Button,LoginTitle} from './style';
import {actionCreators} from './store';

class Login extends PureComponent{
    render (){
        const {loginStatus} =this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBoX>
                        <LoginTitle>
                            <span className="active">登录</span>
                            <b>·</b>
                            <Link to='/register'>
                                <span>注册</span>
                            </Link>
                        </LoginTitle>
                        <div>
                            <div className="input-box">
                                <div className="first-input">
                                    <i className="iconfont">&#xe69e;</i>
                                    <Input placeholder="手机号或邮箱" ref={(input)=>{this.account=input}} />
                                </div>
                                <div>
                                    <i className="iconfont">&#xe61f;</i>
                                    <Input placeholder="密码" type='password' ref={(input)=>{this.password=input}} />
                                </div>
                            </div>
                            <div className="remember">
                                <div className="left">
                                    <input id="rememberMe" type="checkbox" />
                                    <label htmlFor="rememberMe">记住我</label>
                                </div>
                                <a className="right" href="/">登录遇到问题？</a>
                            </div>
                            
                            <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                            <div className="loginStyle">
                                <p className="loginStyle-title">社交帐号登录</p>
                                <ul className="styles">
                                    <li>
                                        <a href="/"><i className="iconfont weibo">&#xe600;</i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="iconfont weixin">&#xe65e;</i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="iconfont qq">&#xe65d;</i></a>
                                    </li>
                                    <li>
                                        <a href="/" className="more">其他</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </LoginBoX>
                    
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
        
    }
}

const mapState=(state)=>({
    loginStatus:state.getIn(['login','login'])
})
const mapDispatch=(dispatch)=>({
    login(accountElement,passwordElement){
        dispatch(actionCreators.login(accountElement.value,passwordElement.value));
        console.log(accountElement.value,passwordElement.value);
    }
})

export default connect(mapState,mapDispatch)(Login);