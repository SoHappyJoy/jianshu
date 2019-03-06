import styled from 'styled-components';

export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft=styled.div`
    float:left;
    width:625px;
    padding-top:30px;
    margin-left:15px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight=styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #f0f0f0;
`;
export const TopicItem =styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
export const Banner=styled.div`
    width:625px;
    height:270px;
    position:relative;
    .slick-prev{
        left:5px;
        z-index:2;
    }
    .slick-next{
        right:5px;
    }
    .slick-dots{
        bottom:10px;
    }
    .slick-dots li{
        position: relative;
        display: inline-block;
        width: 30px;
        height: 4px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        .slick-active button{
            background-color:#fff;
        }
        button{
            font-size: 0;
            line-height: 0;
            display: block;
            width: 30px;
            height: 4px;
            padding: 0;
            cursor: pointer;
            border: 0;
            outline: 0;
            background: #aaa;
            &:before{
                content:'';
                width: 30px;
                height: 4px;
            }
        }
        
    }
    .slick-active button:before{
        background:#fff;
    }
`;

export const ListItem=styled.div`
    padding:20px 0;
    border-bottom:1px solid #f0f0f0;
    overflow:hidden;
    .pic{
        width:125px;
        height:100px;
        float:right;
    }
`;
export const ListInfo=styled.div`
    float:left;
    width:500px;
    .titile{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`;
export const RecommendList=styled.div`
    width:280px;
    padding-top:30px;
`;
export const RecommendItem=styled.a`
    display:block;
    margin-bottom:5px;
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
    text-indent:-280px;
    overflow:hidden;
`;
export const Download=styled.div`
    display: block;
    width: 100%;
    height: 82px;
    padding: 10px 22px;
    margin-top: 10px;
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    position:relative;
    img{
        float:left;
        width:60px;
        height:60px;
    }
    .download{
        display: block;
        float: left;
        margin-left: 10px;
        margin-top: 14px;
        .title{
            font-size: 15px;
            color: #333;
        }
        .title-2{
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }
    .sys{
        position:absolute;
        top:-182px;
        left:55px;
        width:150px;
        height:150px;
        padding:10px;
        border:1px solid #768A98;
        background-color:#fff;
        border-radius:5px;
        img{
            width:100%;
            height:100%;
        }
        .arrow{
            display: block;
            width: 12px;
            height: 12px;
            border: 1px solid #ddd;
            border-top: none;
            background-color: #fff;
            border-right: none;
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
            position: absolute;
            left: 75px;
            bottom: -7px;
        }
    }
`;
export const WriterList=styled.div`
    margin-top:30px;
    .tuijian{
        font-size: 14px;
        color: #969696;
        .change{
            float:right;
            cursor:pointer;
            .iconfont{
                float:left;
                font-size:13px;
                margin-right:5px;
                transition:all 0.2s ease-in;
                transform-origin:center center;
            }
        }
    }
    .allauthor{
        padding: 7px 0;
        display: block;
        text-align: center;
        width: 100%;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top:20px;
    }
`;
export const WriterListItem=styled.div`
    margin-top:15px;
    overflow:hidden;
    .author-img{
        float:left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img{
            width:100%;
            height:100%;
            border:1px solid #ddd;
            border-radius:50%;
        }
    }
    .author-instr{
        float:left;
        width:180px;
        a{
            color:#333;
            padding-top:8px;
            font-size: 14px;
            display: block;
        }
        p{
            margin-top: 5px;
            font-size: 12px;
            color: #969696;
        }
    }
    .care{
        float:right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor:pointer;
    }
`;
export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;
export const BackTop=styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
`;