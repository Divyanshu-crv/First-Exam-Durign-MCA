function addCompany()
{
    let name =
    document.getElementById("companyName").value;

    let link =
    document.getElementById("companyLink").value;

    let email =
    document.getElementById("companyEmail").value;

    if(name==="" || link==="")
    {
        alert("Please fill all fields");
        return;
    }

    let card =
    document.createElement("div");

    card.className="card";

    card.innerHTML=
    `
    <h3>${name}</h3>

    <p>📧 ${email}</p>

    <span class="status assessment">
        🟡 Applied
    </span>
    `;

    card.onclick=function()
    {
        window.open(link,"_blank");
    };

    document
    .getElementById("companyContainer")
    .appendChild(card);

    document.getElementById("companyName").value="";
    document.getElementById("companyLink").value="";
    document.getElementById("companyEmail").value="";
}

function addAccount()
{
    let title =
    document.getElementById("accountTitle").value;

    let email =
    document.getElementById("accountEmail").value;

    let username =
    document.getElementById("accountUsername").value;

    let hint =
    document.getElementById("accountHint").value;

    if(title==="")
    {
        alert("Enter Account Name");
        return;
    }

    let card =
    document.createElement("div");

    card.className="account-card";

    card.innerHTML=
    `
    <h3>${title}</h3>

    <p>📧 ${email}</p>

    <p>👤 ${username}</p>

    <p>🔑 ${hint}</p>
    `;

    document
    .getElementById("accountContainer")
    .appendChild(card);

    document.getElementById("accountTitle").value="";
    document.getElementById("accountEmail").value="";
    document.getElementById("accountUsername").value="";
    document.getElementById("accountHint").value="";
}