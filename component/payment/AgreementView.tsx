import React from "react";
import styled from "./styled/styled.module.scss";
import { Typography } from "antd";

const AgreementView = () => {
  return (
    <div className={styled.container}>
      <Typography className={styled.title}>Sözleşme</Typography>
      <div
        className={styled.border}
        style={{
          fontSize: "14px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu
        ultricies, hendrerit turpis ac, semper justo. Nam orci odio, semper id
        mauris nec, ornare luctus elit. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Mauris eu justo sapien.
        Nullam turpis magna, laoreet at finibus sit amet, ultrices et dolor.
        Suspendisse vestibulum gravida quam, nec interdum justo pulvinar nec.
        Aenean quam mauris, fermentum eu iaculis non, egestas a lorem.
        <br />
        <br />
        Sed ante justo, pulvinar dapibus enim id, euismod feugiat arcu. Mauris
        dictum sed tortor ut placerat. Sed leo ante, laoreet at egestas ut,
        dapibus et turpis. Duis non enim sed ante aliquet maximus eu et dui. Sed
        consequat iaculis libero, id pharetra purus blandit vitae. Etiam ut
        lobortis tortor, sed efficitur tortor. Duis facilisis quam sem, quis
        pulvinar erat aliquet sit amet. Aliquam velit orci, pellentesque eget
        varius finibus, sodales quis dolor.
      </div>
    </div>
  );
};

export default AgreementView;
