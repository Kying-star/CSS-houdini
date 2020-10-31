// paintworklet.js
registerPaint('wave', class {
  static get inputProperties () {
    return ['--animation-tick'];
  }
  /**
   * @description: 规定绘制规则
   * @param {*} ctx 同cavans的ctx对象,支持cavans大部分api
   * @param {*} size 元素的大小
   * @param {*} properties 元素节点的css属性
   * @return {*}
   */
  paint (ctx, size, properties) {
    let tick = Number(properties.get('--animation-tick'));
    const {
      width,
      height
    } = size;
    const initY = height * 0.4;
    tick = tick * 2;
    ctx.beginPath(); // 规定绘制开始
    ctx.moveTo(0, initY + Math.sin(tick / 20) * 10 + initY + Math.cos(tick / 20) * 10); // 规定绘制开始坐标
    // 设置波浪绘制路径
    for (let i = 1; i <= width; i++) {
      ctx.lineTo(i, initY + Math.sin((i + tick) / 20) * 10);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    // ctx.lineTo(0, initY + Math.sin(tick / 20) * 10);
    // 停止绘制
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    //填充颜色    
    ctx.fill();
  }
})
