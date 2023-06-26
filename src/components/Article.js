

function Article ({title, date="Januar 1, 1970", preview, minutes}) {

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
      <>
         <h3>{title}</h3>
         <small>{date} {imageArr} {minutes} read</small>
         <p>{preview}</p>
      </>
      
   )
}

export default Article