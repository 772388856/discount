const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const key = '/api';
const { searchAPI } = require('./api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../front/dist/'));
app.use('/lists/*', express.static('../front/index.html'));
app.use('/lists', express.static('../front/index.html'));
app.use('/', express.static('../front/index.html'));
app.use('/category', express.static('../front/index.html'));
app.use('/details', express.static('../front/index.html'));
app.use('/details/*', express.static('../front/index.html'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(3000);

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

