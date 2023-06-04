const path=require('path')

const filePath=path.join('/content','/subfolder','text.txt')
console.log(filePath)
const base=path.basename(filePath)
console.log(base)