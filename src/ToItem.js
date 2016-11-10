/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
export default class ToItem extends React.Component{
    render(){
        return(
            <tr style={{'cursor':'pointer'}}>
                <td className="itemTd">{this.props.item.info.descrip}</td>
                <td className="itemTd">
                    <a className="itemBtn">删除</a>
                    <a className="itemBtn">完成</a>
                </td>
            </tr>
        );
    }
}