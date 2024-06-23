import Image from "next/image"

const Collobarators = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 font-poppins bg-white sm:container max-w-screen-3xl mx-auto">
      <h1 className="text-[36px] font-bold text-center">Our Proud Collobarators</h1>
      <p className="w-2/4 text-center text-sm">Teaming up with top institutions and organizations helps us provide excellent education and practical experience to learners.</p>
      <div className="w-full flex flex-wrap items-center justify-center mt-8 gap-y-10">
        {Array.from({length:4}).map((_, i) => (
          <Image key={i} src={`/imgs/collaborate${i+1}.png`} alt="Brand Collobarator" height={100} width={280} className="flex-grow object-contain max-h-[100px]" />
        ))} 
      </div>
    </div>
  )
}

export default Collobarators