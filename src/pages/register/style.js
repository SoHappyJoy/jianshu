import styled from 'styled-components';

export const LoginWrapper=styled.div`
    z-index:-1;
    position:absolute;
    left:0;
    right:0;
    top:56px;
    bottom:0;
    background:#eee;
`;

export const LoginBoX=styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    box-sizing:border-box;
    .input-box{
        border:1px solid #c8c8c8;
        border-radius:4px;
        div{
            position:relative;
            .iconfont{
                position:absolute;
                left:10px;
                top:17px;
                color:#969696;
            }
        }
        .first-input{
            border-bottom:1px solid #c8c8c8;
        }
    }
    .remember{
        overflow:hidden;
        margin:15px 0;
        .left{
            float:left;
            margin-left: 5px;
            font-size: 15px;
            color: #969696;
            vertical-align: middle;
        }
        .right{
            float:right;
            color: #999;
            font-size:14px;
        }
        .right:hover{
            color:#333;
        }
    }
    .loginStyle{
        padding:0 10px;
        .loginStyle-title{
            position: relative;
            margin: 20px 0 10px;
            font-size: 12px;
            color: #b5b5b5;
            text-align:center;
            &:before{
                content: "";
                border-top: 1px solid #b5b5b5;
                display: block;
                position: absolute;
                width: 60px;
                top: 5px;
            }
            &:after{
                content: "";
                border-top: 1px solid #b5b5b5;
                display: block;
                position: absolute;
                width: 60px;
                top: 5px;
                right:0;
            }
        }
        .styles{
            overflow:hidden;
            text-align: center;
            li{
                margin: 0 10px;
                display: inline-block;
                a{
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    display: block;
                    .iconfont{
                        font-size:28px;
                    }
                    .weibo{
                        color:#e05244;
                    }
                    .weixin{
                        color:#00bb29;
                    }
                    .qq{
                        color:#498ad5;
                    }
                }
                .more{
                    font-family:simhei;
                    color:#999;
                    font-weight: bold;
                }
            }
        }
    }
    .conditions{
        margin: 10px 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
        a{
            color:#3194d0;
        }
    }
`;

export const Input=styled.input`
    display:block;
    width:300px;
    height:50px;
    line-height:50px;
    color:#000;
    margin:0 auto;
    outline:none;
    border:none;
    background-color: hsla(0,0%,71%,.1);
    padding-left:35px;
    box-sizing:border-box;
    ::placeholder{
        color:#969696;
    }
`;
export const Button=styled.div`
    width:300px;
    height:45px;
    line-height:45px;
    color:#fff;
    font-size:18px;
    margin:20px auto;
    outline:none;
    background:#42c02e;
    border-radius:25px;
    text-align:center;
    cursor:pointer;
    &:hover{
        background:#3db922;
    }
`;
export const LoginTitle=styled.div`
    text-align:center;
    margin-bottom:50px;
    font-size:18px;
    span,b{
        padding: 10px;
        color: #969696;
    }
    .active{
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
    span:hover{
        border-bottom: 2px solid #ea6f5a;
    }
`;