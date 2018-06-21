#!/bin/sh
MONGO_HOME="/home/jeorch/tools/mongodb-3.4.4"
MONGO_HOST="127.0.0.1"
MONGO_PORT="27017"
ORIGIN_DB="pharbers-max-data"
JS_FILE="/home/jeorch/work/max_file/max_scripts/js/max_data_mapreduce_job.js"
$MONGO_HOME/bin/mongo $MONGO_HOST:$MONGO_PORT/$ORIGIN_DB --quiet $JS_FILE
