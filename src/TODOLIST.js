/**
 * Created by Acer on 2016/11/10.
 */
class listItem{
    constructor(item){
        this.info = {};
        this.info.descrip =item.descrip||'';
        this.key = ++listItem.key;
    }
}
listItem.key = 0;

export default class TODOLIST{
    constructor(){
        this.allList = [
            new listItem(TODOLIST.rawData[0]),
            new listItem(TODOLIST.rawData[1]),
            new listItem(TODOLIST.rawData[2]),
            new listItem(TODOLIST.rawData[3]),
            new listItem(TODOLIST.rawData[4]),
            new listItem(TODOLIST.rawData[5]),
            new listItem(TODOLIST.rawData[6]),
            new listItem(TODOLIST.rawData[7])
        ];
        this.list = this.allList;
        // this.list = [];
        this.word = '';
    }
    //新增事项！！
    addListItem(item){
        let newItem = new listItem(item);
        this.allList.push(newItem);
        this.list = this.allList;
        return this;
    }

    //搜索
    searchList(word){
        this.word = word;
        this.list = this.allList;
        this.list = this.list.filter(item=>{
            return item.info.descrip.indexOf(word)!=-1;
        });
        return this;
    }

    //删除
    removeListItem(key){
        let newList = this.allList.filter(item=>{
            return item.key != key;
        });

        this.list = newList;
        this.allList = this.list;
        return this;
    }
    //完成


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