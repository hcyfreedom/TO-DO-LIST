/**
 * Created by Acer on 2016/11/10.
 */
//标题和搜索框
import React from 'react';

export default class ToHeader extends React.Component{

    render(){
        return(
            <div>
                <h3 style={{'textAlign':'center'}}>TO-DO-LIST</h3>
                <input className="headerSe" type="text" placeholder="Search..."/>
            </div>
        )
    }
}
