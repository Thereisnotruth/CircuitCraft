import { useRef, useEffect, useState } from 'react';
import drawRectangle from '@/libs/drawRectangle';
import clearCanvas from '@/libs/clearCanvas';

const Board = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasWidth, setCanvasWidth] = useState<number>(0);
  const [canvasHeight, setCanvasHeight] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragStartY, setDragStartY] = useState<number>(0);
  const [rectX, setRectX] = useState<number>(50);
  const [rectY, setRectY] = useState<number>(50);
  const [isCursorPointer, setIsCursorPointer] = useState<boolean>(false);

  const rectSize = 120;

  const init = () => {
    if (boardRef.current && canvasRef.current) {
      const board = boardRef.current;
      const canvas = canvasRef.current;
      canvas.width = board.clientWidth;
      canvas.height = board.clientHeight;
      setCanvasWidth(canvas.width);
      setCanvasHeight(canvas.height);
    }
    draw();
  };

  const resize = () => {
    if (boardRef.current && canvasRef.current) {
      const board = boardRef.current;
      const canvas = canvasRef.current;
      canvas.width = board.clientWidth;
      canvas.height = board.clientHeight;
      setCanvasWidth(canvas.width);
      setCanvasHeight(canvas.height);
      draw();
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      clearCanvas(ctx, canvasWidth, canvasHeight);
      drawRectangle(ctx, rectX, rectY, rectSize, 'red');
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (
      mouseX > rectX &&
      mouseX < rectX + rectSize &&
      mouseY > rectY &&
      mouseY < rectY + rectSize
    ) {
      setIsDragging(true);
    }

    setDragStartX(mouseX);
    setDragStartY(mouseY);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const offsetX = mouseX - dragStartX;
    const offsetY = mouseY - dragStartY;
    const isHovering =
      mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize;
    setIsCursorPointer(isHovering);
    if (!isDragging) return;

    setRectX(rectX + offsetX);
    setRectY(rectY + offsetY);

    setDragStartX(mouseX);
    setDragStartY(mouseY);

    draw();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    init();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <div className="board" ref={boardRef}>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          cursor: isCursorPointer ? 'pointer' : 'default',
        }}
      />
    </div>
  );
};

export default Board;
