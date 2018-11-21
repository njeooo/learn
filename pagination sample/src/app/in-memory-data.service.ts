import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	
	createDb() {

		const publication = [
			{ 
				"id":1,
				"title":"Test1",
				"description":"This is the message 1",
				"image":"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg"
			},
			{ 
				"id":2,
				"title":"Test2",
			  "description":"This is the message 2",
				"image":"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg"
			},
			{
				"id":3,
				"title":"Test3",
			  "description":"This is the message 3",
				"image":"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg"
			},
			{
				"id":4,
				"title":"Test4",
			  "description":"This is the message 4",
				"image":"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg"
			},
			{
				"id":5,
				"title":"Test5",
			  "description":"This is the message 5",
				"image":"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg"
			}
		];

		return {
			'publication': publication,
		}
	}
}