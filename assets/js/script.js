// toggle tab area
document.getElementById("donationTabBtn").addEventListener("click",function(){
    changeTab("donationTab");
    changeTabBtn("donationTabBtn");
});
document.getElementById("historyTabBtn").addEventListener("click",function(){
    changeTab("historyTab");
    changeTabBtn("historyTabBtn");
});

// donation functionality
document.getElementById("noakhali_donateButton").addEventListener("click",function(event){
    event.preventDefault();
    calculateDonation("noakhali_donationAreaTitle","noakhali_donationCollected","noakhali_donationAmount")
});
document.getElementById("feni_donateButton").addEventListener("click",function(event){
    event.preventDefault();
    calculateDonation("feni_donationAreaTitle","feni_donationCollected","feni_donationAmount")
});
document.getElementById("quota_donateButton").addEventListener("click",function(event){
    event.preventDefault();
    calculateDonation("quota_donationAreaTitle","quota_donationCollected","quota_donationAmount")
});