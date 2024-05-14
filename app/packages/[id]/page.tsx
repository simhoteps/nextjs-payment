import React from "react";
import { data } from "@/data";
import PackageDetailView from "@/component/packageDetail/PackageDetailView"; 
import ContentView from "@/component/content/ContentView";


export async function generateStaticParams() {
  const datas = data
  return datas.map((pkg) => ({
    id: pkg._id.toString()
  }));
}
const PackageDetail = ({ params }: any) => {
  const fintItem = data.find((item) => item._id === params.id);

  return (
    <ContentView type={"package"} >
      {fintItem && <PackageDetailView cardInfo={fintItem} />}
    </ContentView>
  );
};

export default PackageDetail;
