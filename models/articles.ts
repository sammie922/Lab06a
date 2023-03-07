import * as db from '../helpers/database';

//get a single article by its id
export const getById = async (id: any) => {
 let query = "SELECT * FROM articles WHERE ID = ?"
 let values = [id]
 let data = await db.run_query(query, values);
 return data;
}
//list all the articles in the database
export const getAll = async () => {
 // TODO: use page, limit, order to give pagination
 let query = "SELECT * FROM articles;"
 let data = await db.run_query(query, null);
 return data
}
//create a new article in the database
export const add = async (article: any) => {


  
 let keys = Object.keys(article);
 let values = Object.values(article);
 let key = keys.join(',');
 let parm = '';
 for(let i: number=0; i<values.length; i++){ parm +='?,'}
  console.log("parm: "+parm);
  console.log("key: "+key);
 parm=parm.slice(0,-1);
 let query = `INSERT INTO articles (${key}) VALUES (${parm})`;
 try{
 await db.run_query(query, values);
 return {status: 201};
 } catch(err: any) {
 return err;
 }
}

//update the article in the database
export const update = async (article: any) => {
 let keys = Object.keys(article);
 let values = Object.values(article);
 //let key = keys.join(',');

  let parm = '';
  for(let i: number=0; i<values.length; i++){ 
     console.log("parm: "+parm);
      console.log("key: "+keys[i]);
    let query=`UPDATE articles SET ${keys[i]}=?`; 
    }

 try{
 await db.run_query(query, values);
 return {status: 201};
 } catch(err: any) {
 return err;
 }
}


//delete the article in the database
export const deleteRecord = async (id: any) => {
  let query="DELETE from articles where ID = ?"
 let values = [id]
 let data = await db.run_query(query, values);
 return data;
}
