import db from'../db/db'

const Article=db.Article

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

export default async (ctx, next) => {
  	const title = 'koa2 title'
	let id=ctx.params.id
	let list = await findOneArticle(id);
	
	await ctx.render('article', {
		title,
		list
	})

}