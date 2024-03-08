import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import DocumentMagnifyingGlassIcon from "@heroicons/react/24/outline/DocumentMagnifyingGlassIcon";
import BuildingOfficeIcon from "@heroicons/react/24/outline/BuildingOfficeIcon";

const generationStepData = [
  {
    icon: <BoltIcon className="w-20 h-20 inline-block mr-2" />,
    description:
      "Streamline Operations for Marketing and Technology Utilization",
    subdescription:
      "Our Healthcare platform empowers clinics and pharmacies by providing full-stack technology that increase earnings and ease operations.",
  },
  {
    icon: (
      <DocumentMagnifyingGlassIcon className="w-20 h-20 inline-block mr-2" />
    ),
    description:
      "Efficiently Manage Multiple Clinics with Our Franchise Information",
    subdescription:
      "Our platform includes a list card on the homepage that provides franchise information for multiple clinics",
  },
  {
    icon: <BuildingOfficeIcon className="w-20 h-20 inline-block mr-2" />,
    description:
      "Simplify Clinic and Pharmacy Operations with management system",
    subdescription:
      "Our technology solutions simplifies operations for clinics and pharmacies, making them more efficient and effective.",
  },
];

export default function CmsFeaturesList() {
  return (
    <div>
      <div className="grid place-items-center bg-slate-50 w-full ">
        <div className="max-w-6xl w-full py-24 px-4 content-center justify-center">
          <h2 className="text-3xl  text-center font-bold">
            Increase Clinic and Pharmacy Earnings with Our Full-Stack Technology
          </h2>
          <div className="grid mt-24 md:grid-cols-3 grid-cols-1 gap-8">
            {generationStepData.map((i, k) => {
              return (
                <div
                  key={k}
                  className="card w-full bg-base-100 shadow-xl hover:shadow-2xl"
                >
                  <div className="grid -mt-4 place-items-center">
                    <div className="w-8 h-8  rounded-full  bg-cyan-500 text-slate-100 flex font-bold justify-center items-center">
                      <p>{k + 1}</p>
                    </div>
                  </div>
                  <div className="card-body items-center text-center">
                    <p className="text-primary">{i.icon}</p>
                    <p className="mt-2 font-bold text-lg"> {i.description}</p>
                    <p className="mt-2 text-sm"> {i.subdescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
