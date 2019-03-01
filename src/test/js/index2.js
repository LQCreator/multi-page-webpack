import '../css/index2.css';
import  '../../common/common';
$(document).ready(() => {
    layui.use(['layer', 'table'], () => {
        let layer = layui.layer;
        layer.alert('111');
        let table = layui.table;
        table.render({
            elem: '#test',
            cellMinWidth: 80, //全局定义常规单元格的最小宽度，layui 2.2.1 新增
            cols: [[
                {field: 'id', width: 80, title: 'ID', sort: true}
            ]],
            data: [{id:1}]
        });

    })

});
