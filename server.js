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

app.listen(3000);

/*
var n = 0;
$.ajax({
    url: 'https://pub.alimama.com/items/channel/qqhd.json?spm=a219t.7900221%2F1.1998910419.d435ff811.2a8f75a5lCJwsg&channel=qqhd&toPage=1&sortType=9&dpyhq=1&catIds=1&level=1&perPageSize=50&shopTag=dpyhq&t=1538908013677&_tb_token_=384ef78f575e7&pvid=19_183.48.30.9_9025_1538908012870',
    dataType: 'json',
    success: (res) => {
        if(res.ok && res.data && res.data.pageList && res.data.pageList.length){
            var timer = setInterval(() => {
                if(!res.data.pageList[n]) clearInterval(timer);
                $.ajax({
                    url: `https://pub.alimama.com/common/code/getAuctionCode.json?auctionid=${res.data.pageList[n].auctionId}&adzoneid=38361600011&siteid=135900171&scenes=3&tkFinalCampaign=8&channel=tk_qqhd&t=1538908202688&_tb_token_=384ef78f575e7&pvid=19_183.48.30.9_1807_1538908108984`,
                    dataType: 'json',
                    success: (ress) => {
                        var o = {};
                        o = $.extend(o,ress.data, res.data.pageList[n])
                        $.ajax({
                            url: 'http://127.0.0.1:3000/setAPI',
                            type: 'POST',
                            data: {
                                type: 'nvzhuang',
                                data: o
                            }
                        })
                        n++;
                        console.log(`第${n}个, id: ${res.data.pageList[n].auctionId}`)

                        if(n == res.data.pageList.length){
                            clearInterval(timer);
                        }
                    },
                    error: () => {
                        clearInterval(timer);
                    }
                })
            }, 1000)
        }
    }
})
*/
