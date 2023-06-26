

function Article ({title, date="January 1, 1970", preview, minutes}) {

   let imageArr = []

   function getMinutes(){
      let imageNumber = Math.round(minutes/10)
      let count = 0
      while (count < imageNumber){
         imageArr += "🍱"
         count = count + 1
      }
   }
   getMinutes()

   return(
      <article>
         <h3>{title}</h3>
         <small>{date} {imageArr} {minutes} minute read</small>
         <p>{preview}</p>
      </article>
      
   )
}

export default Article