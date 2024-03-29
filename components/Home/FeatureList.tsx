import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import DocumentMagnifyingGlassIcon from "@heroicons/react/24/outline/DocumentMagnifyingGlassIcon";
import BuildingOfficeIcon from "@heroicons/react/24/outline/BuildingOfficeIcon";

const generationStepData = [
  {
    icon: <BoltIcon className="w-20 h-20 inline-block mr-2" />,
    description:
      "Seamless Appointment Scheduling",
    subdescription:
      "Simplify your healthcare experience with easy online booking, offering immediate confirmation and reminders for your convenience.",
  },
  {
    icon: (
      <DocumentMagnifyingGlassIcon className="w-20 h-20 inline-block mr-2" />
    ),
    description:
      "Comprehensive Health Records",
    subdescription:
      "Access your complete medical history securely online, ensuring coordinated care and informed health decisions.",
  },
  {
    icon: <BuildingOfficeIcon className="w-20 h-20 inline-block mr-2" />,
    description:
      "Local Clinic Insights",
    subdescription:
      "Unlock a world of healthcare options with our Clinics Data Aggregator, providing detailed comparisons and insights into local clinics to help you make informed healthcare decisions.",
  },
];

export default function FeatureList() {
  return (
    <div>
      <div className="grid place-items-center bg-slate-50 w-full ">
        <div className="max-w-6xl w-full py-24 px-4 content-center justify-center">
          <h2 className="text-3xl  text-center font-bold">
          Experience unparalleled convenience and personalized care at your fingertips
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
