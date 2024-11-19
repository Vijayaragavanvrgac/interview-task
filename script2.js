
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  document.getElementById('demo').addEventListener('click',function(){
  window.location.href='index.html';
  }),

  
  function updateAssetValue() {
    let assetValue = document.getElementById("asset-value");
    assetValue.innerHTML = "₹ 3 Lakhs";
    alert("Asset value has been updated to ₹ 3 Lakhs");
  }

 
  function viewInvitations() {
    alert("Displaying invitations...");
  }

  
  function updateDate() {
    const today = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").innerText = `Today is ${today.toLocaleDateString(undefined, dateOptions)}`;
  }


  window.onload = updateDate;