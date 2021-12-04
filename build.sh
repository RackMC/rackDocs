rm -rf ./node_modules
git pull && npm i && npm run build
rm -rf ./live/*
cp -r ./build/* ./live