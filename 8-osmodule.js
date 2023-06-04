//os module --module to interact with os
const os=require('os')//buit in module
//info about current
const user=os.userInfo()
console.log(user)
//uptime of the system
const uptime=os.uptime();
console.log('THe system uptime is ',uptime,'s')
const currentOS={
    name:os.type(),
release: os.release()
freeMem: os.totalmem()
}
console.log(currentOS)