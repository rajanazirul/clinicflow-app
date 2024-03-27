import { createClient } from "@supabase/supabase-js";
import { useAuth } from "@clerk/nextjs";

export const { getToken } = useAuth();

export const supabaseClient = async (supabaseAccessToken: any) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_KEY || "",
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    }
  );
  return supabase;
};

export const fetchToken = async () => {
  try {
    // TODO: Update with your JWT template name
    const supabaseAccessToken = await getToken({ template: "supabase" });
    return supabaseAccessToken;
  } catch (e) {
    return "// There was an error with the request. Please contact support@clerk.dev";
  }
};

export const fetchData = async () => {
  try {
    // TODO: Update with your JWT template name
    const supabaseAccessToken = await getToken({ template: "supabase" });

    const supabase = await supabaseClient(supabaseAccessToken);

    const { data } = await supabase.from("users").select("*");
    const body = data ? JSON.stringify(data, null, "  ") : "No data returned";

    return body;
  } catch (e) {
    return "// There was an error with the request. Please contact support@clerk.dev";
  }
};
