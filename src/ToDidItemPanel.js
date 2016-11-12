/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
 export default class ToDidItemPanel extends React.Component{
     render(){
         // let deletes = [];
         // if (this.props.deletes.length==0){
         //     deletes.push(<tr><th colSpan="5" className="tempEmpty">暂无已删除事项</th></tr>)
         // }else {
         //     this.props.items.forEach(item=>{
         //         deletes.push(<ToItem item={item}/> )
         //     })
         // }


         return(
             <table className="itemPanel">
                 <thead>
                 <tr>
                     <th className="itemTd">已删除事件</th>
                     <th className="itemTd">已完成</th>
                 </tr>
                 </thead>
                 <tbody>

                 </tbody>
             </table>
         )
     }
 }
