import { SideContainer } from "../../../Styles/Detail/SmpSideStyle";

interface ISideProps {
  title?: string;
}
function SmpSideView({ title }: ISideProps) {
  return (
    <SideContainer>
      <h1>{title}</h1>
    </SideContainer>
  );
}

export default SmpSideView;
