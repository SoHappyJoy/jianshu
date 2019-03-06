import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {RecommendList,RecommendItem,Download} from '../style';

class Recommend extends PureComponent{
    showCodeFunc(){
        const {codeShow}=this.props;
        if(codeShow){
            return (
                <div className="sys">
                    <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="扫一扫二维码下载app" />
                    <span className="arrow"></span>
                </div>
            )
        }else{
            return null;
        }
    }
    render (){
        const {recommendList,showCode,dismissCode,codeShow}=this.props;
        return (
            <RecommendList>
                {
                    recommendList.map((item)=>(
                        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
                            {item.get('imgAlt')}
                        </RecommendItem>
                    ))
                }
                <Download onMouseEnter={showCode} onMouseLeave={dismissCode}>
                    <a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
                        <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="二维码" />
                        <div className="download">
                            <p className="title">下载简书手机App<i className="iconfont">&#xe75c;</i></p>
                            <p className="title-2">随时随地发现和创作内容</p>
                        </div>
                        {this.showCodeFunc()}
                    </a>
                </Download>
            </RecommendList>
        )
    }
}
const mapStateToProps=(state)=>({
    recommendList:state.getIn(['home','recommendList']),
    codeShow:state.getIn(['home','codeShow'])
});
const mapDispatchToProps=(dispatch)=>({
    showCode(){
        dispatch(actionCreators.toshowCode());
    },
    dismissCode(){
        dispatch(actionCreators.todismissCode());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);