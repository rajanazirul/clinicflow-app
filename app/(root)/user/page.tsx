'use client'
import FeatureList from "@/components/Home/CmsFeaturesList";
import Example from "@/components/Profile/Example";

function User({ params }: { params: any }) {
  return (
    <div>
      User {params.user}
      <div>
        <Example />
      </div>
    </div>
  );
}

export default User;
