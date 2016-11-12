/**
 * Created by Acer on 2016/11/12.
 */
import React from 'react';
export default class ToDidItem extends React.Component{

    // //delete
    // handlerDelete(evt){
    //     this.props.removeListItem(this.props.item.key)
    // }

    render(){
        return(
            <tr style={{'cursor':'pointer'}}>
                <td className="itemTd">

                </td>//已删除
                <td className="itemTd">

                </td>//已完成
            </tr>
        );
    }
}