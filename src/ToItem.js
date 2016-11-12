/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
export default class ToItem extends React.Component{

    //delete
    handlerDelete(evt){
        this.props.removeListItem(this.props.item.key)
    }

    //完成
    handlerComplete(evt){
        let complete = ReactDOM.findDOMNode(this.refs.complete);
        complete.style.color = 'red';

    }
    render(){
        return(
            <tr style={{'cursor':'pointer'}}>
                <td className="itemTd" ref='complete'>{this.props.item.info.descrip}</td>
                <td className="itemTd">
                    <a className="itemBtn" onClick={this.handlerDelete.bind(this)}>删除</a>
                    <a className="itemBtn"  onClick={this.handlerComplete.bind(this)}>完成</a>
                </td>
            </tr>
        );
    }
}