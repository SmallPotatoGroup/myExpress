#! /bin/sh 

curPath=$(pwd)

if [ "$1" = "cp" ]
then
cp -f ./express /usr/local/bin/
else
ln -s ${curPath}/express /usr/local/bin/express
fi