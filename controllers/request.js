import http from 'http'

const getData = () =>{
    
    return new Promise((resolve,reject)=>{
        var req=http.request({
            host:'119.18.231.129',
            port:15080,
            path:'/webapp/healthage/dist/index.html',
            method: 'GET',
        },function(res){
            console.log("请求的headers:"+ JSON.stringify(res.headers));

            console.log(`状态码: ${res.statusCode}`);
            console.log(`响应头: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            let rawData = '';

            res.on('data', (chunk) => {
                //console.log(`响应主体: ${chunk}`);
                rawData += chunk;
            });

            res.on('end',function(){
                console.log("结束了！");
                console.log(rawData);
                resolve(rawData);
            });   

        });
        req.on('error',function(){
            console.log('error!');
            reject('error');
        })

        req.end();
    })
}

const RquestData = async (ctx,next) => {
	let list = await getData();	
	await ctx.render('index', {
        list:[],
		title:'my blog'
	})
}

export {
    RquestData
}