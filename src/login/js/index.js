import '../../common/common';
import '../css/index.scss';
import '../img/jcqy-click.png';
import '../../person/index.html'

$('document').ready(() => {
    layui.use('form', function () {
        let form = layui.form;
        form.on('submit(formDemo)', (data) => {
            document.location.href = '../../html/person/index.html'
        });
    });

});
