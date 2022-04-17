import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
}

const Portal = ({ children }: Props) => {
  const modal = document.getElementById("modal") as HTMLElement;
  return ReactDOM.createPortal(children, modal);
};

export default Portal;
