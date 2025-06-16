import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

async function Images(){
    
  const images = await db.query.images.findMany({orderBy: (model,{desc})=> desc(model.id)}); 

  return(
     <div className="flex flex-wrap gap-4">
     {[...images,...images,...images].map((image,index) => (
      <div key={image.id+'-'+index} className="w-48 p-4">
        <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
        <div>{image.name}</div>
      </div>
     ))}
  </div> 
  )
}

export default async function HomePage() {
  
  return (
 <main>
  <SignedOut>
    <div className=" w-full h-full text-3xl text-center pt-10"> Please Sign in Above</div>
  </SignedOut>
  
  <SignedIn>
    <Images />
  </SignedIn>
 </main>
  );
}
