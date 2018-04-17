import db from'../db/db'
import fs from 'fs'
import os from 'os'
import path from 'path'
	
const Article=db.Article

// 查找所有 文章;
const findAllArticle = () => {
	return new Promise((resolve,reject)=>{
		Article.find({},(err,doc)=>{
			if(err){
				reject(err)
			}
			resolve(doc)
		})
	})
}

// 查找制定的文章
const findOneArticle =(id) => {
	return new Promise((resolve,reject)=>{
		Article.find({'_id':id},(err,doc)=>{
			if(err){
				reject(err)
			}
			resolve(doc)
		})
	})
}
// 创建文章
const createNewArticle =(option)=>{
	let article =new Article({
		title: option.title,
	    author: option.author,
	    content: option.content,
	    description:option.description,
	    create_time: new Date()
	});

	return new Promise((resolve,reject)=>{
		article.save((err)=>{
			if(err){
				reject(err)
			}
			resolve()
		})
	})
}

const Index = async (ctx,next) => {
	let list = await findAllArticle();	
	await ctx.render('index', {
		list,
		title:'my blog'
	})
}

const  Articles =async (ctx,next) => {
	let id=ctx.params.id
	let list = await findOneArticle(id);	
	await ctx.render('article', {
		list,
		title:'my blog'
	})
}

const Write = async (ctx,next) => {
	await ctx.render('writing', {
		title:'my blog'
	})
}

const Save = async (ctx,next) => {
	let list = await createNewArticle({
		title: ctx.request.body.title,
	    author: ctx.request.body.author,
	    content: ctx.request.body.content,
	    description:ctx.request.body.description
	});

	ctx.status = 200;
    ctx.body = {
        success: true
    };
}

const Upload =async (ctx,next) =>{
	
	if(ctx.method=='POST'){

		  //const file = ctx.request.body.files.file;

		  console.log(ctx.request.body);

		  // const reader = fs.createReadStream(file.path);
		  // const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
		  // reader.pipe(stream);
		  // console.log('uploading %s -> %s', file.name, stream.path);


			ctx.status = 200;
		    ctx.body = {
		        success: true
		    };
	}else{
		await ctx.render('upload',{
			title:'upload'
		})
	}
	
}

export {
	Index,
	Articles,
	Write,
	Save,
	Upload
}