const featuresData = [
  {
    title: "Online Appointment Booking",
    description:
      "Streamlines scheduling with real-time availability, allowing patients to book and confirm appointments effortlessly.",
  },
  {
    title: "Patient Records Management",
    description:
      "Secure online access to health records, enabling comprehensive health management and care coordination.",
  },
  {
    title: "Clinics Data Aggregator",
    description:
      "Offers insights into local clinics, helping patients make informed choices based on services, specialties, and reviews.",
  },
  {
    title: "Discharge Summary Access",
    description:
      "Provides secure access to discharge summaries online, aiding in post-care understanding and follow-up treatment.",
  },
  {
    title: "Digital Payment Solutions",
    description:
      "Facilitates smooth and secure transactions for healthcare services, enhancing convenience for patients and providers.",
  },
  {
    title: "Inventory Management",
    description:
      "Efficiently manages clinic and pharmacy inventory, ensuring optimal stock levels, reducing waste, and improving procurement processes.",
  },
];

export default function Features() {
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
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
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
