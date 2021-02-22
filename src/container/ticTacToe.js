import { useTicTacToe } from '../hooks/useTicTacToe';
import { Game } from '../components/Game/Game';

export const TicTacToe = () => {
  const {
    history,
    current,
    status,
    handleClick,
    jumpTo,
  } = useTicTacToe();

  return (
    <Game 
      {...{
        history,
        current,
        status,
        handleClick,
        jumpTo
      }}
    />
  );
};