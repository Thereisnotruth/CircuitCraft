export default function clearCanvas(
  ctx: CanvasRenderingContext2D | null,
  width: number,
  height: number
) {
  if (ctx) {
    ctx.clearRect(0, 0, width, height);
  }
}
