import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken: any) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_KEY || "",
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    }
  );
  return supabase;
};

export default function Example() {
  const { getToken } = useAuth();
  const { user, isSignedIn } = useUser();
  const [response, setResponse] = useState("// Click button to execute code");
  const [userData, setUserData] = useState<any>({});

  const fetchToken = async () => {
    setResponse("// Loading...");
    try {
      // TODO: Update with your JWT template name
      const token = await getToken({ template: "supabase" });
      setResponse(token ?? "");

      if (isSignedIn) {
        setUserData(user);
        console.log("user", user);
      }
    } catch (e) {
      setResponse(
        "// There was an error with the request. Please contact support@clerk.dev"
      );
    }
  };

  const fetchData = async () => {
    setResponse("// Loading...");

    try {
      // TODO: Update with your JWT template name
      const supabaseAccessToken = await getToken({ template: "supabase" });

      const supabase = await supabaseClient(supabaseAccessToken);

      const { data } = await supabase.from("users").select("*");
      const body = data ? JSON.stringify(data, null, "  ") : "No data returned";

      setResponse(body);
    } catch (e) {
      setResponse(
        "// There was an error with the request. Please contact support@clerk.dev"
      );
    }
  };


  return (
    <div className="example">
      <div className="card">
        <button onClick={fetchToken} type="button">
          <div>
            Welcome {userData.id} {user?.fullName ?? "no user"}
            <h3>{`getToken({ template: 'supabase' })`}</h3>
            <p>Retrieve token from JWT template</p>
          </div>
          <svg
            className="icon-arrow"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M8 12l4 4 4-4M12 2v14"
              stroke="#335BF1"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="card">
        <button onClick={fetchData} type="button">
          <div>
            <h3>supabase.from('User').select()</h3>
            <p>Retrieve data from Supabase</p>
          </div>
          <svg
            className="icon-arrow"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M8 12l4 4 4-4M12 2v14"
              stroke="#335BF1"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <pre>
        <code>{response}</code>
      </pre>
    </div>
  );
}
