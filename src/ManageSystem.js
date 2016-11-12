/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ToHeader from './ToHeader.js';
import ToItemPanel from './ToItemPanel.js';
import ToAdd from './ToAdd.js';
import ToDidItemPanel from './ToDidItemPanel.js';
import Todolist from './TODOLIST.js';
import "../bundle/style.css";

// var rawData = [{info:{descrip:'写日记'}},
//     {info:{descrip:'吃饭'}},
//     {info:{descrip:'睡觉'}},
//     {info:{descrip:'打豆豆'}}
// ];

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            list : new Todolist
        };
    }

    //回调函数，新增事项
    addListItem(item){
        this.setState({
            list:this.state.list.addListItem(item)
        });
    }

    //搜索
    searchList(word){
        this.setState({
            list:this.state.list.searchList(word)
        })
    }

    // 删
    removeListItem(key){
        this.setState({
            list:this.state.list.removeListItem(key)
        });
    }

   render(){
        return(
            <div>
                <ToHeader searchList={this.searchList.bind(this)}/>
                {/*<ToItemPanel items={rawData}/>*/}
                <ToItemPanel items={this.state.list.list} removeListItem={this.removeListItem.bind(this)}/>
                <ToAdd addListItem={this.addListItem.bind(this)}/>
                {/*<ToDidItemPanel deletes={}/>*/}
                {/*<ToDidItemPanel/>*/}
            </div>

        )
    }
}



ReactDOM.render(<App />,
    document.getElementById('app'));
