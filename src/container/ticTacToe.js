import { useTicTacToe } from '../hooks/useTicTacToe';
import { Game } from '../components/Game/Game';

export const TicTacToe = () => {
  const WIDTH = 3;
  const HEIGHT = 3;
  const {
    history,
    current,
    xIsNext,
    handleClick,
    jumpTo,
  } = useTicTacToe(WIDTH, HEIGHT);

  return (
    <Game
      width={WIDTH}
      height={HEIGHT}
      {...{
        history,
        current,
        xIsNext,
        handleClick,
        jumpTo
      }}
    />
  );
};