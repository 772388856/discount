const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const key = '/api';
const { searchAPI, materialAPI } = require('./api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../front/dist/'));
app.use('/lists/*', express.static('../front/dist/index.html'));
app.use('/lists', express.static('../front/dist/index.html'));
app.use('/', express.static('../front/dist/index.html'));
app.use('/category', express.static('../front/dist/index.html'));
app.use('/details', express.static('../front/dist/index.html'));
app.use('/details/*', express.static('../front/dist/index.html'));
app.use('/search', express.static('../front/dist/index.html'));
app.use('/good/*', express.static('../front/dist/index.html'));
app.use('/brand/*', express.static('../front/dist/index.html'));
app.use('/baby/*', express.static('../front/dist/index.html'));
app.use('/goods/*', express.static('../front/dist/index.html'));
app.use('/trend/*', express.static('../front/dist/index.html'));
app.use('/preferential/*', express.static('../front/dist/index.html'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(80);

// 搜索
app.get(`${key}/search`, (req, res) => {
    const str = {
        code: '00',
        data: []
    };

    searchAPI(req.query.key, '', req.query.page ? req.query.page : 1).then((value) => {
        if(value && value.result_list && value.result_list.map_data){
            str.data = value.result_list.map_data;
        }else{
            str.code = '-1';
        }
        res.send(str);
    }, (error) => {
        str.code = '-1';
        res.send(str);
    })
});

// 猜你喜欢
app.get(`${key}/recommend`, (req, res) => {
    const str = {
        code: '00',
        data: []
    };

    searchAPI('', req.query.cat, 1).then((value) => {
        if(value && value.result_list && value.result_list.map_data){
            str.data = value.result_list.map_data;
        }else{
            str.code = '-1';
        }
        res.send(str);
    }, (error) => {
        str.code = '-1';
        res.send(str);
    })
});

// 物料
app.get(`${key}/material`, (req, res) => {
    const str = {
        code: '00',
        data: []
    };

    materialAPI(req.query.id, req.query.page ? req.query.page : 1).then((value) => {
        if(value && value.result_list && value.result_list.map_data){
            str.data = value.result_list.map_data;
        }else{
            str.code = '-1';
        }
        res.send(str);
    }, (error) => {
        str.code = '-1';
        res.send(str);
    })
});

