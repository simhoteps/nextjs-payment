import React from "react";
import { data } from "@/data";
import PackageDetailView from "@/component/packageDetail/PackageDetailView"; 
import ContentView from "@/component/content/ContentView";


const PackageDetail = ({ params }: any) => {
  const fintItem = data.find((item) => item._id === params.id);

  return (
    <ContentView type={"package"} >
      {fintItem && <PackageDetailView cardInfo={fintItem} />}
    </ContentView>
  );
};

export default PackageDetail;
