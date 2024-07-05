export const Email =()=>{
    return (
       <div className="flex items-center flex-col justify-center gap-y-5  px-4 py-10">
             <h1 className="text-2xl md:text-3xl font-bold text-nowrap ">SUBSCRIBE TO OUR NEWSLETTER</h1>
             <p>Receive all the latest promotions, updates and speaker announcements.</p>
             <div>
                <input type="email" name="" id="" className="py-1.5 outline-none border border-gray-400 px-3"  placeholder="Your email address"/>
                <button className="text-white bg-blue-400 py-2 px-3">SUBSCRIBE</button>
             </div>
       </div> 
    )
}