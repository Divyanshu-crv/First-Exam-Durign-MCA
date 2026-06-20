let companies =
JSON.parse(localStorage.getItem("companies")) || [];

function saveCompanies()
{
    localStorage.setItem(
        "companies",
        JSON.stringify(companies)
    );
}

function renderCompanies()
{
    let container =
    document.getElementById(
        "companyContainer"
    );

    container.innerHTML="";

    companies.forEach((company,index)=>
    {
        let card =
        document.createElement("div");

        card.className="card";

        card.innerHTML=
        `
        <h3>${company.name}</h3>

        <p>📧 ${company.email}</p>

        <span class="status">
            🔵 Applied
        </span>

        <br>

        <button
        class="delete-btn"
        onclick="deleteCompany(${index})">
        Delete
        </button>
        `;

        card.onclick=()=>
        {
            window.open(
                company.link,
                "_blank"
            );
        };

        container.appendChild(card);
    });
}

function addCompany()
{
    let name =
    document.getElementById(
        "companyName"
    ).value;

    let link =
    document.getElementById(
        "companyLink"
    ).value;

    let email =
    document.getElementById(
        "companyEmail"
    ).value;

    if(name==="" || link==="")
    {
        alert("Fill all fields");
        return;
    }

    companies.push({
        name,
        link,
        email
    });

    saveCompanies();

    renderCompanies();

    document.getElementById(
        "companyName"
    ).value="";

    document.getElementById(
        "companyLink"
    ).value="";
}

function deleteCompany(index)
{
    companies.splice(index,1);

    saveCompanies();

    renderCompanies();
}

document
.getElementById("searchBox")
.addEventListener(
"keyup",
function()
{
    let value =
    this.value.toLowerCase();

    document
    .querySelectorAll(".card")
    .forEach(card=>
    {
        card.style.display=
        card.innerText
        .toLowerCase()
        .includes(value)

        ? "block"
        : "none";
    });
});

renderCompanies();