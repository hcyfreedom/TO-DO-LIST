/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
import ToItem from './ToItem.js'
export default class ToItemPanel extends React.Component{
    render(){
        let items = [];
        if (this.props.items.length==0){
            items.push(<tr><th colSpan="5" className="tempEmpty">暂无待办事项</th></tr>)
        }else {
            this.props.items.forEach(item=>{
                items.push(<ToItem item={item}/> )
            })
        }


       return(
           <table className="itemPanel">
               <thead>
               <tr>
                   <th className="itemTd">待完成事项</th>
                   <th className="itemTd">操作</th>
               </tr>
               </thead>
               <tbody>{items}</tbody>
           </table>
       )
    }
}