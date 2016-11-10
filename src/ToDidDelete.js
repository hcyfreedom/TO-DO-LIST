/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
 export default class ToDidDelete extends React.Component{
     render(){
         let deletes = [];
         if (this.props.deletes.length==0){
             deletes.push(<tr><th colSpan="5" className="tempEmpty">暂无已删除事项</th></tr>)
         }else {
             this.props.items.forEach(item=>{
                 deletes.push(<ToItem item={item}/> )
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
