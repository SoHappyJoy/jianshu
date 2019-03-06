import styled from 'styled-components';

export const DetailWrapper=styled.div`
    width:620px;
    margin:0 auto;
    overflow:hidden;
    padding-bottom:100px;
`;
export const Header=styled.div`
    margin:50px 0 20px 0;
    line-height:44px;
    font-size:34px;
    color:#333;
    font-weight:bold;
`;
export const Content=styled.div`
    color:#2f2f2f;
    img{
        max-width:100%;
    }
    p{
        margin:25px 0;
        line-height:30px;
        font-size:15px;
        b{
            font-weight:bold;
        }
    }
`;
export const Loading=styled.div`
    text-align:center;
    line-height:300px;
    font-size:16px;
`;