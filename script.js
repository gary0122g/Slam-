const loginButton = document.getElementById("loginButton")
const userWallet = document.getElementById("userWallet")

function toggleButton(){
    if (!window.ethereum){
        loginButton.innerText = "Metamask is not installed"
        loginButton.style.backgroundColor = "#FFDC33"
        return false
    }    
}

loginButton.addEventListener('click',()=>{
    // ethereum.request({method:'eth_requestAccounts'});
    getAccount();
    loginButton.innerText = account;
})

async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    loginButton.innerHTML = account;
  }

window.addEventListener('DOMContentLoaded', () => {
    toggleButton()
});

const toTop = document.querySelector(".backtoTop")

window.addEventListener("scroll",()=>{
    if (window.scrollY){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
})