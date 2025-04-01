import { Variable, exec } from "astal";

// 使用 whoami 命令获取当前用户名
const usernameCommand = ["whoami"];

// 创建一个用户名变量，使用 exec 执行命令
export const username = Variable<string | null>(null).poll(
  60_000, // 每60秒轮询一次（可以根据需要调整）
  usernameCommand,
  (out) => `Welcome, ${out.trim()}` // 移除可能的换行符
);
