import { db } from "~/server/db";

const mockUls = [
  'https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WmcJNEaXjQbv2clUhmXJuonF0zpOART83ya1w',
  'https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WjMGR38VtRkXzEQnM1VIPHLuwxb76Svf0ogdp',
  'https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WSH6wOastLK5Om29Rfl1HwpkoPuhvUWVGEQyC',
  'https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WwJdeF0ugDUle2EBs8xGO5WCykvT0rnfj1qHm'
]

const mockImages = mockUls.map((url,index) => {
  return {
    id:index + 1,
    url
  }
})

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts);
  
  return (
 <main>
   <div className="flex flex-wrap gap-4">
     {[...mockImages,...mockImages,...mockImages].map((image,index) => (
      <div key={image.id+'-'+index} className="w-48 p-4">
        <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
      </div>
     ))}
  </div> 
 </main>
  );
}
