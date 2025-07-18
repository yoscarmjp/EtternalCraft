const statusSrv = document.getElementById('status');
const statusCsrv = document.getElementById('status-c');
const playersSrv = document.getElementById('players');
const versionSrv = document.getElementById('version');

const ip = document.getElementById('ip');
const copyBtn = document.getElementById('copy');
const modal = document.getElementById('modal')
const install = document.getElementById('install');
const install2 = document.getElementById('install-2');
const installGuide = document.getElementById('install-guide');


async function getServerInfo(){
    try{
        const data = await fetch("https://api.mcsrvstat.us/1/etternal.theoasiss.us")
        const serverData = await data.json()
        console.log(serverData)
        statusSrv.textContent = 'En línea'
        statusSrv.style.border = '1px solid #4ade80'
        statusSrv.style.color = '#4ade80'
        statusCsrv.textContent = 'En línea'
        statusCsrv.style.color = '#4ade80'
        playersSrv.textContent = `${serverData.players.online} / ${serverData.players.max}`
        versionSrv.textContent = serverData.protocol_name
    }catch(error){
        statusSrv.textContent = 'Apagado'
        statusSrv.style.border = '1px solid red'
        statusSrv.style.color = 'red'
        statusCsrv.textContent = 'Apagado'
        statusCsrv.style.color = 'red'
        playersSrv.textContent = `0/0`
        versionSrv.textContent = `1.20.1`
    }
}

setInterval(getServerInfo, 1000)

copyBtn.addEventListener('click', () =>{
    navigator.clipboard.writeText(ip.textContent)
    modal.style.display = 'grid'
    setTimeout(() => {
        modal.style.display = 'none';
    }, 2000);
})

install.addEventListener('click', () => {
    if(installGuide.style.display === 'none'){
        installGuide.style.display = 'grid'
    }else{
        installGuide.style.display = 'none'
    }
})

install2.addEventListener('click', () => {
    if(installGuide.style.display === 'none'){
        installGuide.style.display = 'grid'
    }else{
        installGuide.style.display = 'none'
    }
})

window.addEventListener('click', function(e){
    if(installGuide.style.display === 'grid' && e.target === installGuide){
        installGuide.style.display = 'none'
    }
})

