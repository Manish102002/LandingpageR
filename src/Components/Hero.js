

export default function Hero() {
    return (
        <hero>
            <div className=" flex  flex-col lg:px-40 md:px-10 px-16 pt-14 gap-6 lg:flex lg:justify-center lg:flex-row md:flex-row" >

                <div className=" flex flex-col gap-6  ">

                    <h1 className=" lg:text-7xl text-4xl font-bold md:text-7xl lg:font-extrabold md:font-bold">YOUR FEET DESERVE <br />THE BEST</h1>

                    <h4>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES</h4>

                    <div className=" flex gap-3" >
                        <button className=" px-6 py-2 font-bold rounded-md text-white bg-[#D01C28]">Shop Now</button>
                        <button className=" px-6 py-2 font-bold rounded-md border-red-500">Category</button>
                    </div>

                    <h6 className=" text-sm">Also Available On</h6>

                    <div className="flex -pb-4 gap-5">
                        <img src="./Images/flipkart.png" width="25px" height="15px" alt="img" />
                        <img src="./Images/amazon.png" width="25px" height="15px" alt="img" />
                    </div>

                </div>
                
                    <img src="./Images/shoe_image.png" width="400px" height="487px" alt="shoes" className=" md:w-[350px] md:h-[400px] lg:w-[530px] lg:h-[487px] " />
                
            </div>
        </hero>
    )
}