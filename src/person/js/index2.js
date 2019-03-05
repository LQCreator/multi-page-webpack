import '../css/index2.scss';
import '../../common/common';
import backArt from '../tpl/back.art';

$(document).ready(() => {
    layui.use(['layer', 'table'], () => {
        let layer = layui.layer;
        layer.alert('欢迎来到person/index2页面');
        let table = layui.table;
        table.render({
            elem: '#test',
            cellMinWidth: 80, //全局定义常规单元格的最小宽度，layui 2.2.1 新增
            cols: [[
                {field: 'id', title: 'ID'},
                {field: 'name', title: '姓名'},
                {field: 'age', title: '年龄'},
                {field: 'sex', title: '性别'},
                {field: 'phone', title: '联系电话'},
                {field: 'address', title: '地址'},
                {
                    field: 'operate',
                    title: '操作',
                    align: 'left',
                    templet: (d) => backArt(d)
                },
            ]],
            data: [
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'},
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'},
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'},
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'},
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'},
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'},
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'},
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'}
            ]
        });
        table.on('tool(test)', (obj) => {
            let data = obj.data;
            let layEvent = obj.event;
            let tr = obj.tr;
            switch (layEvent) {
                case "back":
                    _back(data);
                    break;
            }
        });

    })

});


let _back = () => {
    document.location.href = '../person/index.html';
};