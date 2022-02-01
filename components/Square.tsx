type Props = {
  winner: string | null;
  value: string | null;
  onClick: () => void;
};

function Square({ winner, value, onClick }: Props) {
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button
      className={`square square_${value.toLocaleLowerCase()}`}
      disabled={!!value}
    >
      {value}
    </button>
  );
}
export default Square;
