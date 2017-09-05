import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/blog',{useMongoClient: true},function(err){
	if (err) {
		console.log('数据库连接出错！');
	}
})

// mongoose.connect('mongodb://localhost/blog')
// let db = mongoose.connection;

// db.on('error', function() {
// 	console.log('数据库连接出错！');
// });
// db.on('open', function() {
// 	console.log('数据库连接成功！');
// });

//声明schema
const articleSchema = mongoose.Schema({
	title: String,
	author: String,
	content: String,
	description: String,
	create_time: Date
});

//根据schema生成model
const model = {
	Article: mongoose.model('Article', articleSchema)
};

export default model