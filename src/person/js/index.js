import '../css/index.scss';
import '../../common/common';
import operateArt from '../tpl/operate.art';
import addArt from '../tpl/add.art';

const {layer} = layui;

$(document).ready(() => {
    layui.use(['laydate', 'table'], () => {
        let laydate = layui.laydate;
        let table = layui.table;
        laydate.render({
            elem: '#date'
        });
        table.render({
            elem: '#test',
            cellMinWidth: 80,
            page: true,
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
                    templet: (d) => operateArt(d)
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
                {id: 1, name: '王二', age: '18', sex: '男', phone: '11111111111', address: '花果山水帘洞'},
            ]
        });
        table.on('tool(test)', (obj) => {
            let data = obj.data;
            let layEvent = obj.event;
            let tr = obj.tr;
            switch (layEvent) {
                case "add":
                    _add(data);
                    break;
                case "edit":
                    _edit(data);
                    break;
                case "jump":
                    document.location.href = '../person/index2.html';
                    break;
            }
        });
    })
});

let _add = (data) => {
    layer.open({
        type: 1,
        title: '新增用户',
        area: ["500px", "500px"],
        content: addArt(data),
        btn: ["取消", "确定"],
        success: function () {
            layui.use(['form'],()=>{
                let form = layui.form;
                form.render();
            });
        },
        yes: function (index) {
            layer.close(index);
        },
        btn2: function (index) {
            return false;
        }
    });
};

let _edit = (data) => {
    layer.open({
        type: 1,
        title: '新增用户',
        area: ["500px", "500px"],
        content: addArt(data),
        btn: ["取消", "确定"],
        success: function () {
            layui.use(['form'],()=>{
                let form = layui.form;
                form.render();
            });
        },
        yes: function (index) {
            layer.close(index);
        },
        btn2: function (index) {
            return false;
        }
    });
};