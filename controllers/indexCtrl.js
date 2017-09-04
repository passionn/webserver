import db from'../db/db'

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



export default async (ctx, next) => {
  	const title = 'koa2 title'
	
	// let article =new Article({
	// 	title: '黑土麦田 实干兴邦',
	//     author: '许吉如',
	//     content: '马丁老师跟我们所有人说，要找一个对你负责任的爱人，因为这样会激发出你内心最大的责任感',
	//     description:'马丁老师跟我们所有人说，要找一个对你负责任的爱人，因为这样会激发出你内心最大的责任感。我们都同意，我们都渴望拥有像马丁老师那样美满的家庭。但是此刻，我可能要问一个让大家直面现实的的严峻的问题，那就是大家都有男朋友了吗？有人说没有的，你也说没有，我与你们都同在，在寻找美满家庭的路上，我们都还要努力。但是有的时候，我觉得有没有男朋友也不是问题的关键，因为有一句俗话说得好，叫无论此刻我是不是你的女朋友，或者我是不是谁的女朋友，我的心里永远住着一个男神，这句俗话是我说的。',
	//     create_time: new Date()
	// });

	// await new Promise((resolve,reject)=>{
	// 	article.save((err)=>{
	// 		if(err){
	// 			reject(err)
	// 		}
	// 		resolve()
	// 	})
	// })

	let list = await findAllArticle();
	
	await ctx.render('index', {
		title,
		list
	})

}
