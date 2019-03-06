import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBoX,Input,Button,LoginTitle} from './style';
import {Link} from 'react-router-dom';

class Register extends PureComponent{
    render (){
        return(
            <LoginWrapper>
                <LoginBoX>
                    <LoginTitle>
                        <Link to='/login'>
                            <span>登录</span>
                        </Link>
                        <b>·</b>
                        <span className="active">注册</span>
                    </LoginTitle>
                    <div>
                        <div className="input-box">
                            <div className="first-input">
                                <i className="iconfont">&#xe69e;</i>
                                <Input placeholder="你的昵称" />
                            </div>
                            <div className="first-input">
                                <i className="iconfont" style={{fontSize:'20px'}}>&#xe615;</i>
                                <Input placeholder="手机号" />
                            </div>
                            <div>
                                <i className="iconfont">&#xe61f;</i>
                                <Input placeholder="设置密码" type='password' />
                            </div>
                        </div>
                        
                        <Button>注册</Button>
                        <p className="conditions">
                            点击 “注册” 即表示您同意并愿意遵守简书<br /><a href="/">用户协议</a> 和 <a href="/">隐私政策</a> 。
                        </p>
                        <div className="loginStyle">
                            <p className="loginStyle-title">社交帐号登录</p>
                            <ul className="styles">
                                <li>
                                    <a href="/"><i className="iconfont weixin">&#xe65e;</i></a>
                                </li>
                                <li>
                                    <a href="/"><i className="iconfont qq">&#xe65d;</i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </LoginBoX>
                
            </LoginWrapper>
        )
        
    }
}

const mapState=(state)=>({
    
})
const mapDispatch=(dispatch)=>({
    
})

export default connect(mapState,mapDispatch)(Register);