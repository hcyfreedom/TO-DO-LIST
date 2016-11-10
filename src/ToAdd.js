/**
 * Created by Acer on 2016/11/10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
export default class ToAdd extends React.Component{
    handlerAddClick(evt){
        evt.preventDefault();
        let item = {};
        let addForm = ReactDOM.findDOMNode(this.refs.addForm);

        item.descrip = addForm.querySelector('#toAddDescrips').value.trim();

        //不能文本域为空的时候就提交
        if (item.descrip==''){
            let tips = ReactDOM.findDOMNode(this.refs.tipsUnDone);
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            },1000);
            return;
        }

    }





    render(){
        return(
            <div>
                <h4 style={{'textAlign':'center'}}>添加待办事项</h4>
                <hr/>
                <form ref='addForm' className="addForm">
                    <div>
                        <label htmlFor='toAddDescrips' style={{'display':'block'}}>主线任务</label>
                        <textarea type="text" id="toAddDescrips">
                         </textarea>
                    </div>
                    <p ref='tips' className='tips'>提交成功</p>
                    <p ref='tipsUnDone' className='tips'>请输入待办事项</p>
                    <div>
                        <button onClick={this.handlerAddClick.bind(this)}>提交</button>
                    </div>
                </form>
            </div>
        )

    }
}