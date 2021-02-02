import React, { Component} from 'react';
import {getData} from '@/api'

// 假设我是一个分页请求

class View extends Component {
    page=1
    isTotal=false
    constructor(props) {
        super(props)
        this.state={
            data:[]
        } 
    }
    onload=(callback)=>{
        this.getData({page:++this.page,limit:30,callback})
    }
    getData({page,limit,callback}){
        !this.isTotal && getData({page,limit}).then(({code,data,total})=>{
            this.total=total
            if(code===0){
                this.setState({
                    data:this.state.data.concat(data)
                },()=>{
                    console.log(this.state.data)
                    if(this.state.data.length>=total){
                        this.isTotal=true
                    }
                    callback && callback()
                })
            }
            
        }).catch(err=>{
            console.log(err)
        })
    }
    componentDidMount() {   
        this.getData({page:1,limit:30})
    }
    render(){
        return(
            <>    
              {this.state.data.length && <VirtualScroll data={this.state.data} scrollHandle={this.onload.bind(this)}></VirtualScroll>}
            </>
        )
    }
}

//核心：根据列表表的滚动距离来渲染长列表中的一小段数据（适用与列表类展示，树形菜单需要有限进行数据扁平化处理）


class VirtualScroll extends Component {
    // 展示可视区高度
    viewHeight=this.props.viewHeight || 220
    // 每一列的高度
    itemHeight=this.props.itemHeight || 32
    // 可视区dom()
    virtualDom=null
    constructor(props) {
        super(props)
        this.state={
            visibleData:[],
            contentHeight:this.contentHeight(),
            contentTopDistance:0
        }
        
    }
    contentHeight() {
        //滚动区域的高度
        return this.props.data.length * this.itemHeight + 'px'
    }
    updateVisibleData() {
        // console.log('触发更新---重新计算')
        if(!this.props.data.length){
            return 
        }
        let visibleCount=Math.ceil(this.virtualDom.clientHeight / this.itemHeight)
        // 计算滚动距离
        let scrollTop=this.virtualDom ? this.virtualDom.scrollTop : 0
        const start = Math.floor((scrollTop / this.itemHeight))
        // 可见区域内最后一个 item 的 index
        const end = start + visibleCount + 2
        console.log(start,end)
        // 改变数据,以及偏移距离.
        this.setState({
            visibleData:this.props.data.slice(start, end),
            contentTopDistance:start * this.itemHeight
        })

        if(this.virtualDom.scrollTop+this.virtualDom.clientHeight>=this.virtualDom.scrollHeight){
            //下拉到最底部改变滚动区域高度
            this.props.scrollHandle && this.props.scrollHandle(()=>{
                this.setState({
                    contentHeight:this.contentHeight(),
                })
            })    
        }
        
    }
    async componentDidMount() {   
        this.updateVisibleData()
        if(this.virtualDom){         
            //options：监听的属性
            var options = { attributes: true};
            var mutationObserver = new MutationObserver(()=>{
                this.updateVisibleData()
            });
             mutationObserver.observe(this.virtualDom, options)
        } 
    
    }
    render() {
        let {contentTopDistance,visibleData,contentHeight}=this.state
            return (
      <>
        <div className="virtual-scroll list-view scrollBar" style={{height:this.viewHeight+'px'}} ref={(dom) => this.virtualDom = dom} onScroll={this.updateVisibleData.bind(this)} >
             <div className="list-view-empty" style={{height: contentHeight}}></div>
             <div className="list-view-content" style={{transform: `translate3d(0, ${contentTopDistance}px, 0)`}}>
                {
                        visibleData.map((item,index)=>{
                        return (
                            <div className="list-view-item" style={{height: this.itemHeight + 'px',lineHeight: this.itemHeight + 'px'}} key={index}>
                                {item.label}

                            </div>
                        )
                    })
                }
             </div>
        </div>
      </>
    );
    }

}
  
export default View