/**
 * Created by Acer on 2016/11/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
export default class deleted extends React.Component{

    //delete
    handlerDelete(evt){
        this.props.removeListItem(this.props.item.key)
    }

    render(){
        return(
            <tr style={{'cursor':'pointer'}}>
                <td className="itemTd" ref='complete'>{this.props.item.info.descrip}</td>
                <td className="itemTd">
                    <a className="itemBtn">恢复</a>
                </td>
            </tr>
        );
    }
}