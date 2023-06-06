const drawRectangle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string
) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, size, size);
  ctx.closePath();
  ctx.fill();
};

export default drawRectangle;
