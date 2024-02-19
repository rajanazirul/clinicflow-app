import Image from "next/image"

const generationStepData = [
    {icon : <Image src="/logo.png" alt="logo" width={100} height={100} />, description : "Step 1 Desciption"},
    {icon : <Image src="/logo.png" alt="logo" width={100} height={100} />, description : "Step 2 Desciption"},
    {icon : <Image src="/logo.png" alt="logo" width={100} height={100} />, description : "Step 3 Desciption"},
]

export default function FeatureList() {
  return (
    <div>
        <div className="grid place-items-center bg-slate-50 w-full ">
            <div className="max-w-6xl w-full py-24 px-4 content-center justify-center">
                <h2 className="text-3xl  text-center font-bold">Increase Clinic and Pharmacy Earnings with Our Full-Stack Technology</h2>
                <div className="grid mt-24 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    generationStepData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                {/* <div className="rounded-full inline-block border-2 flex p-3 relative">
                                    <div className="absolute top-5 left-8">
                                        4
                                    </div>
                                </div> */}
                                <div className="grid -mt-4 place-items-center">
                                <div className="w-8 h-8  rounded-full  bg-amber-500 text-slate-100 flex font-bold justify-center items-center">
                                    <p>{k+1}</p>
                                </div>
                                </div>
                                <div className="card-body  items-center text-center">
                                    <p  className='text-primary'>{i.icon}</p>
                                    <p className='mt-2'> {i.description}</p>
                                </div>
                                </div>
                        )
                    })
                }
                
            </div>
            </div>
        </div>
    </div>
  )
}
