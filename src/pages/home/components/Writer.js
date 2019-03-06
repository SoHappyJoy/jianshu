import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {WriterList,WriterListItem} from '../style';

class Writer extends PureComponent{
    
    getWriterList(){
        const {WriterLists,writerPage}=this.props;
        const newWriters=JSON.parse(JSON.stringify(WriterLists));
        const writers=[];
        if(newWriters.length){
            for(let i=(writerPage-1)*5;i<writerPage*5;i++){
                if(newWriters[i]){
                    writers.push(
                        <WriterListItem key={newWriters[i].id}>
                            <a className="author-img" href={newWriters[i].selfweb} target="_blank" rel="noopener noreferrer"><img src={newWriters[i].imgUrl} alt={newWriters[i].name} /></a>
                            <div className="author-instr">
                                <a href={newWriters[i].selfweb} target="_blank" rel="noopener noreferrer">{newWriters[i].name}</a>
                                <p>写了<span>{newWriters[i].wordsnum}</span>字 · <span>{newWriters[i].like}</span>喜欢</p>
                            </div>
                            <span className="care">
                                <i className="iconfont">&#xe60b;</i>
                                <span>关注</span>
                            </span>
                        </WriterListItem>
                    )
                }
            }
        }
        return (
            writers
        )
    }
    
    render (){
        const {writerPage,writerTotalPage,handleChangeWriterPage}=this.props;
        return (
            <WriterList>
                <div className="tuijian">
                    <span>推荐作者</span>
                    <span className="change" onClick={()=>handleChangeWriterPage(writerPage,writerTotalPage,this.rotate)}>
                        <i className="iconfont" ref={(icon)=>{this.rotate=icon}}>&#xe7e9;</i>
                        换一批
                    </span>
                </div>
                <div>
                    {this.getWriterList()}
                </div>
                <a href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users" target="_blank" rel="noopener noreferrer" className="allauthor">查看全部<i className="iconfont">&#xe75c;</i></a>
            </WriterList>
        )
    }
    componentDidMount(){
        this.props.handleAddWriters();
    }
}
const mapStateToProps=(state)=>({
    WriterLists:state.getIn(['home','WriterLists']),
    writerPage:state.getIn(['home','writerPage']),
    writerTotalPage:state.getIn(['home','writerTotalPage']),
    careHTML:state.getIn(['home','careHTML']),
    addIcon:state.getIn(['home','addIcon'])
});
const mapDispatchToProps=(dispatch)=>({
    handleAddWriters(){
        dispatch(actionCreators.getWriterList())
    },
    handleChangeWriterPage(writerPage,writerTotalPage,rotate2){
        let rotateAngle=rotate2.style.transform.replace(/[^0-9]/ig,'');
        if(rotateAngle){
            rotateAngle=parseInt(rotateAngle,10);
        }else{
            rotateAngle=0;
        }
        rotate2.style.transform='rotate('+(rotateAngle+360)+'deg)';

        if(writerPage<writerTotalPage){
            dispatch(actionCreators.changeWriterPage((writerPage+1)));
        }else{
            dispatch(actionCreators.changeWriterPage(1));
        }
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(Writer);