var beneficiaries =[
    {name:'Ragavan',relationship:'brother',dob:'1988-10-04',status:'Active'},
    {name:'Ragavan',relationship:'brother',dob:'1988-10-04',status:'Inactive'}
];

function renderBeneficiaries(){
    var table = document.getElementById("beneficiaryTable");
    table.innerHTML="";
    beneficiaries.forEach((beneficiary,index)=> {
        table.innerHTML +=`
        <tr>
        <td>${index +1}</td>
        <td>${beneficiary.name}</td>
        <td>${beneficiary.relationship}</td>                      
        <td>${beneficiary.dob}</td>
        <td class="${beneficiary.status ==='Active'?
        'status-active':'status-inactive'}"> ${beneficiary.status}</td>
        <td><button onclick="editBeneficiary(${index})">Edit</button>
        <button onclick="deleteBeneficiary(${index})">Delete</button>
        </td>
        </tr>`;
    });
}
function addBeneficiary(){
    var name = document.getElementById("firstName").value.trim();
    var relationship = document.getElementById("relationship").value.trim();
    var dob = document.getElementById("dateOfBirth").value;
    if (!name || !relationship || !dob) {
        alert("Please fill in all fields.");
        return;
    }
    beneficiaries.push({name,relationship,dob,status:'Active'});
    renderBeneficiaries();
}
function editBeneficiary(index){

    var beneficiary = beneficiaries[index];
        var newName = prompt("Edit Name:", beneficiary.name);
        var newRelationship = prompt("Edit Relationship:", beneficiary.relationship);
        var newDob = prompt("Edit Date of Birth:", beneficiary.dob);
        var newStatus = prompt("Edit Status",beneficiaries.status);

        if (newName && newRelationship && newDob && newStatus) {
            beneficiaries[index] = {
                name: newName,
                relationship: newRelationship,
                dob: newDob,
                status: newStatus,
            };
                renderBeneficiaries();
            }
}

function deleteBeneficiary(index){
    beneficiaries.splice(index,1);
    renderBeneficiaries();

}
renderBeneficiaries();