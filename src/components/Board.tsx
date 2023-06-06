import { useRef, useEffect } from 'react';

const Board = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resize = () => {
    const board = boardRef.current;
    const canvas = canvasRef.current;

    if (canvas && board) {
      canvas.width = board.clientWidth;
      canvas.height = board.clientHeight;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(50, 80, 200, 100);
      }
    }
  };

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <div className="board" ref={boardRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Board;
