
import Article from "./Article"

function ArticleList ({posts}){

   const posting = posts.map(element => {
      return (
         <Article
         key = {element.id}
         title = {element.title}
         date = {element.date}
         preview = {element.preview}
         minutes = {element.minutes}
         />
      )
   })

   return (
      <main>
         {posting}
      </main>
   )
}

export default ArticleList