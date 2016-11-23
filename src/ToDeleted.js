/**
 * Created by Acer on 2016/11/18.
 */
import React from 'react';
import ToItem from './deleted.js';
export default class ToDeleted extends React.Component{

    render(){
        let removed = [];
        if (this.props.removed.length==0){
            removed.push(<tr><th colSpan="5" className="tempEmpty">暂无已删除事项</th></tr>)
        }else {
            this.props.removed.forEach(item=>{
                removed.push(<ToItem key={item.key} item={item} removeListItem={this.props.removeListItem}/> )
            })
        }
        return(
            <table className="itemPanel">
                <thead>
                <tr>
                    <th className="itemTd">已删除</th>
                </tr>
                </thead>
                <tbody>{removed}</tbody>
            </table>
        )

    }
}