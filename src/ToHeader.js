/**
 * Created by Acer on 2016/11/10.
 */
//标题和搜索框
import React from 'react';
import ReactDOM from 'react-dom';
export default class ToHeader extends React.Component{

//搜索
    handlerSearch(){
        let bar = ReactDOM.findDOMNode(this.refs.searchBar);
        let value = bar.value;
        this.props.searchList(value);
    }


    render(){
        return(
            <div>
                <h3 style={{'textAlign':'center'}}>TO-DO-LIST</h3>
                <input ref='searchBar' onChange={this.handlerSearch.bind(this)} className="headerSe" type="text" placeholder="Search..."/>
            </div>
        )
    }
}
