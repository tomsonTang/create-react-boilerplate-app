/**
 * 测试 create-react-boilerplate-app 命令 
 */

import path from 'path';
import cp from 'child_process';

import Promise from 'bluebird';
import fs from 'fs';
import fse from 'fs-extra';
import chalk from 'chalk';

Promise.promisifyAll(fs);
Promise.promisifyAll(cp);

/**
 * 确认指定目录存在且将当前上下文切换至该目录
 * 
 * @param {any} dir 
 */
async function ensureAndChangeDir(dir) {
  return await fse.ensureDir(dir).then(() => {
    process.chdir(dir);
  });
}

/**
 * 生成一个新的临时目录
 * 
 * @returns 
 */
function getNewDir() {
  const dirname = path.resolve(__dirname);
  // const commandPath = path.resolve(dirname, "../../bin/index.js");
  const sep = path.sep;

  return `${dirname}${sep}${Date.now()}`;
}

/**
 * 加载命令并执行
 * 
 * @returns 
 */
function _require() {
  return callback => {
    process.on('exit', () => {
      callback(new Error('test fail'));
    });

    require('../../bin/index.js');
    callback(null, 'test success');
  };
}

/**
 * 测试 
 */
async function run() {
  // 1. 初始化执行命令所需要的参数
  process.argv = [
    process.execPath,
    path.resolve('../../bin/index.js'),
    'my-app',
  ];

  let isTestSuccess = false;

  // 2. 转移路径
  await ensureAndChangeDir(getNewDir());

  await _require()
    .then(() => {
      // 命令执行完成

      isTestSuccess = true;
    })
    .catch(() => {
      // 命令执行中断
      isTestSuccess = false;
    });

  isTestSuccess
    ? console.info(chalk.green('测试完成'))
    : console.error(chalk.red('测试失败'));
}

run();
