export default function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <div className="hero min-h-[70vh] relative">
        <div className="absolute inset-0 bg-[url('/bg-blue.png')] bg-cover bg-center"></div>
        <div className="hero-content text-left relative">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white">
              Our Vision and Mission
            </h1>
            <ul className="list-disc list-inside text-white">
              <li className="py-3">
                To provide the best healthcare services to all people from all
                walks of life.
              </li>
              <li className="py-3">
                Integrating MODERN design and TECHNOLOGY with HEALTHCARE.
              </li>
              <li className="py-3">
                Empowering community with cutting edge healthcare solutions to
                deliver superior and PERSONALIZED PATIENT CARE.
              </li>
              <li className="py-3">
                To love and serve the people with our best capacities and
                capabilities.
              </li>
              <li className="py-3">
                To ensure healthcare is accessible for everyone. Promise to
                adhere to good medical practice and the Hipocratic Oath.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* One Liner */}

      {/* <h1>One-liner</h1>
      <h1>Traction</h1>
      <h1>Our Story</h1>
      <h1>Our Team</h1> */}
    </div>
  );
}
