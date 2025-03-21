// tab control 
function changeTab(tabId){
    document.getElementById("donationTab").classList.add("hidden");
    document.getElementById("historyTab").classList.add("hidden");
    document.getElementById(tabId).classList.remove("hidden");
}
function changeTabBtn(btnId){
    document.getElementById("donationTabBtn").classList.remove("active_tabBtn");
    document.getElementById("historyTabBtn").classList.remove("active_tabBtn");
    document.getElementById(btnId).classList.add("active_tabBtn");
}

// donation calculation
function calculateDonation(donationAreaTitleId,donationCollectedId,donationAmountId){
    const currentBalance=parseFloat(document.getElementById("currentBalance").innerText);
    const donationAreaTitle=document.getElementById(donationAreaTitleId).innerText;
    const donationCollected=parseFloat(document.getElementById(donationCollectedId).innerText);
    const donationAmount=parseFloat(document.getElementById(donationAmountId).value);

    console.log(typeof donationAmount);
    if(typeof donationAmount ==="number" && donationAmount>0){
        if(currentBalance>=donationAmount){
            const restCurrentBalance=currentBalance-donationAmount;
            const totalDonationCollected=donationCollected+donationAmount;

            document.getElementById("currentBalance").innerText=restCurrentBalance;
            document.getElementById(donationCollectedId).innerText=totalDonationCollected;
            document.getElementById(donationAmountId).value="";

            generateHistory(donationAreaTitle,donationAmount);
            successModal.showModal()
        }else{
            alert("You don't have enough money to donate !");
        }
    }else{
        alert("Invalid donation Ammount");
    }
}

function generateHistory(donationAreaTitle,donationAmount){
    const newDate=new Date();
    const historyItemHtml=`
        <div class="p-6 xl:p-8 border border-base-300 rounded-2xl mb-6">
            <h3 class="text-xl font-bold mb-3">${donationAmount} Taka is Donated for ${donationAreaTitle}</h3>
            <p class="py-2 px-3 bg-slate-50 rounded-md">Date: ${newDate}</p>
        </div>
    `;
    document.getElementById("historyTab").insertAdjacentHTML("afterbegin",historyItemHtml);
}