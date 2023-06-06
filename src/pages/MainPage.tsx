import Board from '@components/Board';
import Controller from '@components/Controller';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__board">
        <Board />
      </div>
      <div className="main-page__controller">
        <Controller />
      </div>
    </div>
  );
};

export default MainPage;
