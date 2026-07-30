const tbody = document.getElementById("tableBody");

async function loadInventory() {
  const res = await fetch("/api/inventory");
  const data = await res.json();
  render(data);
}

function render(data) {
  tbody.innerHTML = "";
  data.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.Id}</td>
      <td>${item.Item_Name}</td>
      <td>${item.Quantity}</td>
      <td>
        <span class="action" onclick="updateQty(${item.Id}, ${item.Quantity + 1})">➕</span>
        <span class="action" onclick="updateQty(${item.Id}, ${item.Quantity - 1})">➖</span>
        <span class="action" onclick="deleteItem(${item.Id})">❌</span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function updateQty(id, qty) {
  if (qty <= 0) return deleteItem(id);

  await fetch("/api/inventory/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Id: id, Quantity: qty })
  });

  loadInventory();
}

async function deleteItem(id) {
  await fetch("/api/inventory/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Id: id })
  });

  loadInventory();
}

document.getElementById("inventoryForm").onsubmit = async e => {
  e.preventDefault();

  const item = {
    Id: Date.now(),
    Item_Name: Item_Name.value,
    Quantity: Number(Quantity.value),
    No_Rak: Number(No_Rak.value),
    No_Gudang: Number(No_Gudang.value),
    Jenis: Jenis.value,
    Keterangan: Keterangan.value
  };

  await fetch("/api/inventory/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });

  e.target.reset();
  loadInventory();
};

loadInventory();
