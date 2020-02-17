call taskkill /fi "WindowTitle eq http-server"

cd test

call browserify index.js -o bundle.js

copy ..\src\style.css

start http-server -p 3000

cd ..

