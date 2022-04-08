const loginButton = document.getElementById("loginButton")
const userwallet = document.getElementById('userwallet')

function toggleButton(){
    if (!window.ethereum ){
        loginButton.innerText = "Metamask is not installed"
        loginButton.style.backgroundColor = "#FFDC33"
        return false
    }
    
    loginButton.addEventListener('click', () => { loginWithMetaMask() })
}


loginButton.addEventListener('click',()=>{
    ethereum.request({method:'eth_requestAccounts'});
    
})

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