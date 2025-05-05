import AstalCava from "gi://AstalCava";
import { Gtk, Gdk } from "astal/gtk4";
import Gsk from "gi://Gsk?version=4.0";
import { GLib } from "astal";
import Graphene from "gi://Graphene?version=1.0";

export default function Cava() {
  // 获取cava实例
  const cava = AstalCava.get_default();

  // 创建一个绘图区域
  const drawingArea = new Gtk.DrawingArea();

  // 设置绘图函数
  drawingArea.set_draw_func((area, cr, width, height) => {
    // 创建快照
    const snapshot = Gtk.Snapshot.new();

    // 绘制Catmull-Rom样条曲线
    drawCatmullRom(snapshot, cava, width, height);

    // 将快照转换为绘图节点
    const node = snapshot.to_node();
    if (node) {
      // 渲染节点
      area.get_native().get_renderer()?.render(cr, node);
      node.unref();
    }
  });

  // 当cava的值更新时，重绘区域
  cava.connect("notify::values", () => {
    drawingArea.queue_draw();
  });

  // 确保自动更新
  GLib.timeout_add(GLib.PRIORITY_DEFAULT, 16, () => {
    drawingArea.queue_draw();
    return GLib.SOURCE_CONTINUE;
  });

  // CSS类名
  drawingArea.add_css_class("cava");

  return (
    <box>
      {drawingArea}
    </box>
  );
}

// 实现Catmull-Rom绘图函数
function drawCatmullRom(snapshot, cava, width, height) {
  // 获取当前主题的颜色
  const styleContext = snapshot.get_style_context();
  const color = styleContext ?
    styleContext.get_color() :
    new Gdk.RGBA({ red: 0.5, green: 0.5, blue: 1.0, alpha: 1.0 });

  // 获取cava值
  const values = cava.get_values();
  const bars = cava.bars;
  const barWidth = width / (bars - 1);

  // 创建路径
  const builder = new Gsk.PathBuilder();

  // 开始路径
  builder.move_to(0, height - height * values[0]);

  // 使用Catmull-Rom算法创建曲线
  for (let i = 0; i <= bars - 2; i++) {
    let p0, p1, p2, p3;

    // 处理边界情况
    if (i === 0) {
      p0 = {
        x: i * barWidth,
        y: height - height * values[i]
      };
      p3 = {
        x: (i + 2) * barWidth,
        y: height - height * values[i + 2]
      };
    } else if (i === bars - 2) {
      p0 = {
        x: (i - 1) * barWidth,
        y: height - height * values[i - 1]
      };
      p3 = {
        x: (i + 1) * barWidth,
        y: height - height * values[i + 1]
      };
    } else {
      p0 = {
        x: (i - 1) * barWidth,
        y: height - height * values[i - 1]
      };
      p3 = {
        x: (i + 2) * barWidth,
        y: height - height * values[i + 2]
      };
    }

    p1 = {
      x: i * barWidth,
      y: height - height * values[i]
    };
    p2 = {
      x: (i + 1) * barWidth,
      y: height - height * values[i + 1]
    };

    // 计算Catmull-Rom控制点
    const c1 = {
      x: p1.x + (p2.x - p0.x) / 6,
      y: p1.y + (p2.y - p0.y) / 6
    };

    const c2 = {
      x: p2.x - (p3.x - p1.x) / 6,
      y: p2.y - (p3.y - p1.y) / 6
    };

    // 添加三次贝塞尔曲线
    builder.cubic_to(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
  }

  // 完成路径（创建闭合区域）
  builder.line_to(width, height);
  builder.line_to(0, height);
  builder.close();

  // 填充路径
  snapshot.append_fill(
    builder.to_path(),
    Gsk.FillRule.WINDING,
    color
  );
}
