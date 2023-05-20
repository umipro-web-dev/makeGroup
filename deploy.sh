#!/bin/bash


read -p "ディレクトリ名は？" nam
echo "CTgHT&2ZeRKs#WuN" | scp -r -O ./dist sd0903428@gmoserver.jp@157.7.45.182:/export/sd211/www/jp/r/e/gmoserver/2/8/sd0903428/umishun.com/shunta/
echo "CTgHT&2ZeRKs#WuN" | ssh sd0903428@gmoserver.jp@157.7.45.182 -p 22
cd umishun.com/shunta
mv dist "$yn"
exit
exit

