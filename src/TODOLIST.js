/**
 * Created by Acer on 2016/11/10.
 */
class todoItem{
    constructor(item){
        this.info = {};
        this.info.descrip =item.descrip||'';
        this.key = ++todoItem.key;
    }
}
todoItem.key = 0;

export default class TODOLIST{
    constructor(){
        this.allList = [
            new todoItem(TODOLIST.rawData[0]),
            new todoItem(TODOLIST.rawData[1]),
            new todoItem(TODOLIST.rawData[2]),
            new todoItem(TODOLIST.rawData[3]),
            new todoItem(TODOLIST.rawData[4]),
            new todoItem(TODOLIST.rawData[5]),
            new todoItem(TODOLIST.rawData[6]),
            new todoItem(TODOLIST.rawData[7]),
        ];
        this.list = this.allList;
    }
    //新增事项！！
    addTASKItem(item){
        let newItem = new todoItem(item);
        this.allList.push(newItem);
        this.list = this.allList;
        return this;
    }


}

TODOLIST.rawData = [{descrip:'健身房走一趟'},
                    {descrip:'吃饭'},
                    {descrip:'睡觉'},
                    {descrip:'打豆豆'},
                    {descrip:'给妈妈打电话'},
                    {descrip:'更新github'},
                    {descrip:'学react'},
                    {descrip:'假装去约会'}
];