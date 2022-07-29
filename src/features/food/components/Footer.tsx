import "../styles/components/Footer.scss";
import img from "../../../assets/Grupo_7610.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <h4>Con el patrocio de</h4>
      <div>
        <img src={img} alt="footerimg" />
      </div>
    </footer>
  );
};
