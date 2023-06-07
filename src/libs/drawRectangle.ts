export default function drawRectangle(
  ctx: CanvasRenderingContext2D | null,
  x: number,
  y: number,
  size: number,
  color: string
) {
  if (ctx) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
    ctx.closePath();
    ctx.fill();
  }
}
