const superagent = require('superagent');

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