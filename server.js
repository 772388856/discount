var express = require('express');
var superagent = require('superagent');
var xlsx= require('xlsx');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./dist/'));
app.use('/lists/*', express.static('./dist/index.html'));
app.use('/lists', express.static('./dist/index.html'));
app.use('/', express.static('./dist/index.html'));
app.use('/category', express.static('./dist/index.html'));
app.use('/details', express.static('./dist/index.html'));
app.use('/details/*', express.static('./dist/index.html'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/taoke', function(req,res,next){
	superagent.get('https://api.taokezhushou.com/api/v1/all?app_key=d43a98ce9aaa60ea')
	.end(function(err,sres){
	    res.send(sres.text)
	})
});

app.get('/alimama', function(req,res,next){
    superagent.get('https://pub.alimama.com/common/code/getAuctionCode.json?auctionid=565506222706&adzoneid=38361600011&siteid=135900171&scenes=1&tkFinalCampaign=10&channel=tk_nzjh&t=1538711290951&_tb_token_=76ee390bdb55b&pvid=21_14.23.94.74_813_153871128301')
    .end(function(err,sres){
        res.send(sres.text)
    })
});

app.get('/api/lists/*', function(req,res,next){
    var u = req.originalUrl.replace('/api/lists/', '');
    var data = '2018-10-07';
    var workbook = xlsx.readFile(`./xlsx/${u}-${data}.xls`);
    var excelData = [];

    for (var sheet in workbook.Sheets) {
        if (workbook.Sheets.hasOwnProperty(sheet)) {
            //解析excel文件得到数据
            excelData = excelData.concat(xlsx.utils.sheet_to_json(workbook.Sheets[sheet]));
        }
    }
    res.send(excelData)
});

app.post('/setAPI', function(req,res){
    var type = req.body.type;
    var bodyData = req.body.data;
    var file = path.join(__dirname, `api/${type}.json`);
    var str = {
        code: "00",
        data: []
    }
    var handle = () => {
        if(typeof str == 'string'){
            str = JSON.parse(str);
        }
        str.data.push(bodyData);
        fs.writeFile(file, JSON.stringify(str), function(err) {
            if (err) {
                return console.log(err);
            }
        });
    }

    fs.exists(file, function(exists) {
        if(exists){
            fs.readFile(file, 'utf8', function(err, data){
                str = data;
                handle();
            });
        }else{
            handle();
        }
    });
        
    res.send('OK')
});

app.get('/yzl', function(req, res){
    function setData(name){
        var workbook = xlsx.readFile(`./xlsx/${name}`);
        var excelData = [];
        var writeFileUrl = path.join(__dirname, `public/api/${name.split('-')[0]}.json`);

        for (var sheet in workbook.Sheets) {
            if (workbook.Sheets.hasOwnProperty(sheet)) {
                //解析excel文件得到数据
                excelData = excelData.concat(xlsx.utils.sheet_to_json(workbook.Sheets[sheet]));
            }
        }
        var d = {
            code: "00",
            data: excelData
        }
        fs.writeFile(writeFileUrl, JSON.stringify(d), function(err) {
            if (err) {
                return console.log(err);
            }
        });
    }
    // 遍历文件
    function readDirSync(path){
        var pa = fs.readdirSync(path);
        pa.forEach(function(ele,index){
            var info = fs.statSync(path+"/"+ele)    
            if(info.isDirectory()){

            }else{
                if(ele != '.DS_Store'){
                    console.log("读取xlsx: "+ele);
                    setData(ele);
                }
            }   
        })
    }
    readDirSync(path.join(__dirname, 'xlsx'));

    res.send('ok')
});

app.listen(80);