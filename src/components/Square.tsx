export default function Square({
  index,
  handleClick,
  squares,
}: {
  index: number;
  handleClick: (index: number) => void;
  squares: Array<number | string | null>;
}) {
  return (
    <div onClick={() => handleClick(index)} className="square">
      {squares[index]}
    </div>
  );
}
