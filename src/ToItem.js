/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
export default class ToItem extends React.Component{

    //delete
    handlerDelete(evt){
        this.props.removeListItem(this.props.item.key)
    }

    render(){
        return(
            <tr style={{'cursor':'pointer'}}>
                <td className="itemTd">{this.props.item.info.descrip}</td>
                <td className="itemTd">
                    <a className="itemBtn" onClick={this.handlerDelete.bind(this)}>删除</a>
                    <a className="itemBtn">完成</a>
                </td>
            </tr>
        );
    }
}