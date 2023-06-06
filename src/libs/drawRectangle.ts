export default function drawRectangle(
  ctx: CanvasRenderingContext2D | null,
  x: number,
  y: number,
  size: number,
  color: string
) {
  if (ctx) {
    console.log(x, y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, size, size);
    ctx.closePath();
    ctx.fill();
  }
}
