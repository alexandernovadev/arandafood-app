import "../styles/components/CardOption.scss"
interface prop {
  img: string;
  desc: string;
}

export const CardOption = ({ img, desc }: prop) => {
  return (
    <div className="cardOption">
      <img src={img} alt={desc} />
      <span>{desc}</span>
    </div>
  );
};
