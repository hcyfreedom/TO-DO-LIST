/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ToHeader from './ToHeader.js';
import ToItemPanel from './ToItemPanel.js';
import ToAdd from './ToAdd.js';
// import ToDidDelete from './ToDidDelete.js';
// import ToDidComplete from './ToDidComplete.js';
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
    addTASKItem(item){
        this.setState({
            list:this.state.list.addEventListener(item)
        });
    }
    render(){
        return(
            <div>
                <ToHeader/>
                {/*<ToItemPanel items={rawData}/>*/}
                <ToItemPanel items={this.state.list.list}/>
                <ToAdd addTASKItem={this.addTASKItem.bind(this)}/>
                {/*<ToDidDelete/>*/}
                {/*<ToDidComplete/>*/}
            </div>
        )
    }
}



ReactDOM.render(<App />,
    document.getElementById('app'));
