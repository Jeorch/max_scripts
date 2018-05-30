## 1.开启crond服务

```
$ sudo systemctl start crond.service
```
*拓展知识：crond的概念和crontab是不可分割的。crontab是一个命令，常见于Unix和类Unix的操作系统之中，用于设置周期性被执行的指令。该命令从标准输入设备读取指令，并将其存放于“crontab”文件中，以供之后读取和执行。该词来源于希腊语chronos(χρόνος)，原意是时间。而crond正是它的守护进程。* <br>
++点击[这里](https://baike.baidu.com/item/crond/3754855)查看更多信息++

## 2.修改crondtab中执行脚本的路径
**ph_sync_max_data.crontab文件**

```
# Run Pharbers Synchronize Max_Data job
00 24 * * * sh /home/jeorch/work/shell/ph_sync_max_data.sh
```

## 3.修改shell脚本中的配置参数
**ph_sync_max_data.sh文件**

```
MONGO_HOME="/home/jeorch/tools/mongodb-3.4.4"
MONGO_HOST="127.0.0.1"
MONGO_PORT="27017"
ORIGIN_DB="Max_Data"
JS_FILE="/home/jeorch/work/script/max_data_mapreduce_job.js"
$MONGO_HOME/bin/mongo $MONGO_HOST:$MONGO_PORT/$ORIGIN_DB --quiet $JS_FILE
```

## 4.开启定时任务，启动crontab

```
crontab /etc/cron.d/ph_sync_max_data.crontab
```
*拓展:关闭crontab可以使用命令“crontab -r”清除当前用户的所有定时任务，也可以使用crontab启动一个空文件进行覆盖。*


