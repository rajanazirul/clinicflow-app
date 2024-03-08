const featuresData = [
  {
    title: "Online Appointment Booking",
    description:
      "Streamlines scheduling with real-time availability, allowing patients to book and confirm appointments effortlessly.",
    image:"https://media.istockphoto.com/id/1377616010/photo/hand-holding-house-with-elderly-and-disability-person-icon-on-stack-of-wood-cubes-isolated.jpg?s=612x612&w=0&k=20&c=H3jcZ4TaKRu8WJ0uhCuL8SQZFwfm6uDhN0k0gPMF7bs=",

  },
  {
    title: "Patient Records Management",
    description:
      "Secure online access to health records, enabling comprehensive health management and care coordination.",
    image: "https://media.istockphoto.com/id/1836866281/photo/hand-hold-wooden-block-with-icon-healthcare-medical.jpg?s=612x612&w=0&k=20&c=Gbgr0h8N9IHsbruj5FX-XIvUMXiGwJzdU3iJ4hNYA8I=",  
  },
  {
    title: "Clinics Data Aggregator",
    description:
      "Offers insights into local clinics, helping patients make informed choices based on services, specialties, and reviews.",
    image: "https://media.istockphoto.com/id/1386866025/photo/security-with-hospital-or-clinic-symbol-inside-over-hand-icon-on-wooden-cube-blocks-for.jpg?s=612x612&w=0&k=20&c=Pc1qzcZB6_sxjfWZzGX2ttJdaWsXkFgKtWstK2i47Mw=",
  },
  {
    title: "Discharge Summary Access",
    description:
      "Provides secure access to discharge summaries online, aiding in post-care understanding and follow-up treatment.",
    image: "https://media.istockphoto.com/id/1392908731/photo/hand-holding-disabled-person-with-heart-sign-and-magnifying-glass-with-hospital-and-clinic.jpg?s=612x612&w=0&k=20&c=gvzjtmcusSc3sA5DP8HHC0EDq3lisjI9odzGKDovd40=",
  },
  {
    title: "Digital Payment Solutions",
    description:
      "Facilitates smooth and secure transactions for healthcare services, enhancing convenience for patients and providers.",
    image: "https://media.istockphoto.com/id/1473173997/photo/anonymous-person-putting-cubes-with-symbols-of-female-and-medicine.jpg?s=612x612&w=0&k=20&c=BUHDrj_50QQgvmlL3fQVutRMe_DLGrIotcAawfg6vzg=",
  },
  {
    title: "Inventory Management",
    description:
      "Efficiently manages clinic and pharmacy inventory, ensuring optimal stock levels, reducing waste, and improving procurement processes.",
    image: "https://media.istockphoto.com/id/1220156750/photo/healthcare-and-medicine-with-media-icons-concept-wooden-cube-from-stack-on-wooden-table.jpg?s=612x612&w=0&k=20&c=J_uqAm9EUXyiv1fKHacn2Ko9NuXKi5WsqTbiVp_V55g=",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="container grid place-items-center w-full bg-base-200">
      <div className="max-w-5xl py-24 content-center justify-center">
        <h1 className="text-4xl  text-center font-bold">Our Services</h1>
        <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
          {featuresData.map((i, k) => {
            return (
              <div key={k} className="card w-76 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={i.image}
                    alt={i.title}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{i.title}</h2>
                  <p>{i.description}</p>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
