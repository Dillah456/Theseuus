# 📦 Firefly: Inventory Manager

Aplikasi web untuk manajemen inventory dengan teknologi Flask (Python) dan JavaScript vanilla.

---

## 🎯 Tujuan Proyek

Membuat sistem inventory management yang sederhana namun fungsional untuk:
- Menambah item inventory
- Melihat daftar inventory
- Mengubah kuantitas item
- Menghapus item
- Menyimpan data ke file JSON

---

## 🏗️ Arsitektur Sistem

### Tech Stack

```
Frontend:
├── HTML (Struktur halaman)
├── CSS (Styling)
└── JavaScript Vanilla (Logika interaktif)

Backend:
├── Flask (Framework web Python)
├── Python (Business logic)
└── JSON (Data storage)
```

### Diagram Alur Sistem

```
Browser (Frontend)
    ↓ HTTP Requests (GET/POST)
    
Flask Server (app.py)
    ├── Route Handler
    ├── Business Logic
    └── JSON File I/O
    
Inventory.json (Database)
```

---

## 📁 Struktur File

```
Firefly/
├── app.py              # Backend Flask server & routes
├── Inventory.json      # Data storage (JSON file)
├── static/
│   ├── script.js      # Frontend logic (JavaScript)
│   └── style.css      # Styling
└── templates/
    └── index.html     # Main HTML page
```

---

## 🔧 Komponen Utama

### 1. Backend (app.py)

Flask adalah framework web Python yang menjalankan HTTP server.

#### Routes (Endpoints API):

| Route | Method | Fungsi | Request Body | Response |
|-------|--------|--------|--------------|----------|
| `/` | GET | Render halaman utama | - | HTML page |
| `/api/inventory` | GET | Ambil semua item | - | `[{...}, {...}]` |
| `/api/inventory` | POST | Simpan semua item | `[{...}]` | `{status: "saved"}` |
| `/api/inventory/add` | POST | Tambah item baru | `{...}` | `{status: "added"}` |
| `/api/inventory/update` | POST | Update kuantitas | `{Id, Quantity}` | `{status: "updated"}` |
| `/api/inventory/delete` | POST | Hapus item | `{Id}` | `{status: "deleted"}` |

#### Fungsi Utility:

```python
load_inventory()      # Baca Inventory.json → Python list
save_inventory(data)  # Tulis Python list → Inventory.json
```

#### Alur Fungsi Tambah Item:

```python
@app.route("/api/inventory/add", methods=["POST"])
def add_item():
    inventory = load_inventory()      # 1. Load data dari file
    item = request.get_json()          # 2. Parse JSON request
    inventory.append(item)             # 3. Tambah ke list
    save_inventory(inventory)          # 4. Simpan ke file
    return jsonify({"status": "added"})  # 5. Return response
```

### 2. Frontend (index.html + script.js)

#### HTML Structure:

```html
<form id="inventoryForm">
  <!-- Input fields untuk tambah item -->
  <input id="Item_Name" placeholder="Nama Item">
  <input id="Quantity" type="number" min="1" value="1">
  <input id="No_Rak" placeholder="Rak">
  <input id="No_Gudang" placeholder="Gudang">
  <input id="Jenis" placeholder="Jenis">
  <input id="Keterangan" placeholder="Keterangan">
  <button type="submit">Tambah</button>
</form>

<table>
  <tbody id="tableBody">
    <!-- Rows diisi dinamis oleh JavaScript -->
  </tbody>
</table>
```

#### JavaScript Logic:

**Fungsi Utama:**

```javascript
loadInventory()     // GET /api/inventory → render tabel
render(data)        // Ubah data menjadi baris tabel HTML
updateQty(id, qty)  // POST /api/inventory/update
deleteItem(id)      // POST /api/inventory/delete
```

**Event Listener Form:**

```javascript
document.getElementById("inventoryForm").onsubmit = async (e) => {
  // 1. Cegah default form submission
  e.preventDefault();
  
  // 2. Ambil nilai dari input fields
  const item = {
    Id: Date.now(),
    Item_Name: Item_Name.value,
    Quantity: Number(Quantity.value),
    No_Rak: Number(No_Rak.value),
    No_Gudang: Number(No_Gudang.value),
    Jenis: Jenis.value,
    Keterangan: Keterangan.value
  };
  
  // 3. Kirim ke server
  await fetch("/api/inventory/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });
  
  // 4. Reset form & reload data
  e.target.reset();
  loadInventory();
};
```

---

## 📊 JSON Handling

### Format Data

Struktur satu item inventory:

```json
{
  "Id": 1707532800000,
  "Item_Name": "Pulpen",
  "Quantity": 5,
  "No_Rak": 1,
  "No_Gudang": 2,
  "Jenis": "Alat Tulis",
  "Keterangan": "Warna Merah"
}
```

### Inventory.json (Lengkap)

```json
[
  {
    "Id": 1707532800000,
    "Item_Name": "Pulpen",
    "Quantity": 5,
    "No_Rak": 1,
    "No_Gudang": 2,
    "Jenis": "Alat Tulis",
    "Keterangan": "Merah"
  },
  {
    "Id": 1707532801000,
    "Item_Name": "Papan Tulis",
    "Quantity": 2,
    "No_Rak": 3,
    "No_Gudang": 1,
    "Jenis": "Alat Pembelajaran",
    "Keterangan": "Magnetic"
  }
]
```

### JSON Conversion Flow

```
JavaScript Object
    ↓
JSON.stringify()
    ↓
Text String: {"Id": 123, "Item_Name": "..."}
    ↓ (HTTP POST)
Flask Backend
    ↓
request.get_json()
    ↓
Python Dictionary: {"Id": 123, "Item_Name": "..."}
    ↓ (Process)
Flask Backend
    ↓
jsonify({...})
    ↓
JSON String: {"status": "added"}
    ↓ (HTTP Response)
JavaScript
    ↓
response.json()
    ↓
JavaScript Object: {status: "added"}
```

---

## 🔄 Workflow Aplikasi

### 1. Inisialisasi Halaman

```
User buka http://localhost:5000
    ↓
Flask serve index.html
    ↓
Browser load HTML + CSS + JS
    ↓
script.js auto-execute: loadInventory()
    ↓
fetch GET /api/inventory
    ↓
Flask return JSON array dari Inventory.json
    ↓
JS render() buat baris tabel
    ↓
User lihat inventory di tabel
```

### 2. Tambah Item

```
User isi form → klik "Tambah"
    ↓
Form onsubmit event trigger
    ↓
JS buat object item dengan Date.now() sebagai ID unik
    ↓
fetch POST /api/inventory/add dengan JSON body
    ↓
Flask add_item() menerima JSON
    ↓
load_inventory() → append item → save_inventory()
    ↓
Response: {"status": "added"}
    ↓
JS form reset & loadInventory()
    ↓
Tabel refresh dengan item baru
```

### 3. Update Kuantitas

```
User klik ➕ atau ➖
    ↓
updateQty(id, newQty) dipanggil
    ↓
Check: jika qty ≤ 0 → deleteItem() instead
    ↓
fetch POST /api/inventory/update dengan {Id, Quantity}
    ↓
Flask loop inventory cari item dengan Id yang sama
    ↓
Update item["Quantity"] = newQty
    ↓
save_inventory() simpan perubahan
    ↓
loadInventory() refresh tabel
```

### 4. Hapus Item

```
User klik ❌
    ↓
deleteItem(id) dipanggil
    ↓
fetch POST /api/inventory/delete dengan {Id}
    ↓
Flask: inventory = [i for i in inventory if i["Id"] != id]
    ↓ (Filter item yang tidak match)
save_inventory()
    ↓
loadInventory() refresh
```

---

## ⚙️ Cara Menjalankan

### Prerequisites

- Python 3.7+
- pip (Python package manager)

### Setup

```bash
# 1. Masuk ke folder project
cd c:\Users\Lenovo\Documents\V380\A\N.Abdillah_Ramadlan\PARA\2_Area\Johari\Persona\Firefly

# 2. Install Flask
pip install flask

# 3. Jalankan server
python app.py
```

### Output

```
WARNING in app.run()
  This is a development server. Do not use it in production.
  Use a production WSGI server instead.
Serving Flask app 'app'
Debug mode: on
Running on http://127.0.0.1:5000
```

### Akses Aplikasi

Buka browser ke: **http://localhost:5000**

---

## 🎮 Cara Menggunakan Aplikasi

1. **Tambah Item:**
   - Isi semua field di form (Nama, Qty, Rak, Gudang, Jenis, Keterangan)
   - Klik tombol "Tambah"
   - Item muncul di tabel

2. **Update Kuantitas:**
   - Klik ➕ untuk tambah 1
   - Klik ➖ untuk kurangi 1
   - Jika qty habis, item otomatis terhapus

3. **Hapus Item:**
   - Klik ❌ untuk hapus item dari inventory

---

## 🔍 Fitur Teknis

### ID Management

```javascript
Id: Date.now()  // Contoh: 1707532800000
```

- Menggunakan timestamp JavaScript (milliseconds sejak 1970)
- Praktis untuk development (unik dan auto-increment)
- **Catatan**: Untuk production, gunakan UUID atau database auto-increment

### Encoding Data

```python
# Saat save:
json.dump(data, f, indent=2, ensure_ascii=False)
#                       ↑ Pretty print
#                                   ↑ Support karakter non-ASCII (Indonesia)
```

- `indent=2`: File JSON tersusun rapi untuk readability
- `ensure_ascii=False`: Support karakter Indonesia seperti "rak", "gudang"

---

## 📝 Catatan Pengembangan

### Kelebihan Saat Ini

✅ Sederhana dan mudah dipahami  
✅ Tidak perlu database kompleks  
✅ Frontend dan backend terpisah jelas (separation of concern)  
✅ Synchronous - data langsung tersimpan  

### Kelemahan yang Perlu Dibenahi

❌ ID menggunakan timestamp (bisa duplikasi jika 2 item ditambah millisecond sama)  
❌ Tidak ada validasi input di backend  
❌ Tidak ada error handling yang robust  
❌ Tidak ada autentikasi/otorisasi  
❌ Performance issue jika data banyak (file I/O setiap request)  
❌ Tidak ada backup data  
❌ Tidak ada search/filter functionality  
❌ Tidak bisa edit detail item, hanya kuantitas  

### Saran Peningkatan

1. **Database**: Ganti JSON dengan SQLite/PostgreSQL
2. **Validation**: Tambah input validation di Flask dan frontend
3. **Error Handling**: Try-catch untuk file I/O, feedback ke user
4. **Authentication**: Tambah login system
5. **Edit Feature**: Tambah route untuk update semua field, bukan hanya qty
6. **Search**: Tambah field pencarian item by name atau ID
7. **Pagination**: Jika data banyak, tambah pagination
8. **Logging**: Catat setiap perubahan untuk audit trail

---

## 📚 Referensi Belajar

### Flask

- [Flask Official Documentation](https://flask.palletsprojects.com/)
- Route decorators: `@app.route()`
- Request handling: `request.get_json()`, `request.form`
- Response: `jsonify()`, `render_template()`

### JavaScript Async

- `fetch()` API untuk HTTP requests
- `async/await` untuk menangani promises
- `JSON.stringify()` dan `JSON.parse()`

### JSON

- Format data universal (bahasa agnostic)
- Human-readable text format
- Supported di semua bahasa programming

---

## 🚀 Next Steps

Setelah memahami proyek ini, coba:

1. Jalankan aplikasi dan bereksperimen
2. Buka DevTools (F12) → Network tab → lihat request/response
3. Modifikasi `/api/inventory/update` untuk update semua field
4. Tambah validasi input di Flask (cek Quantity > 0, etc)
5. Implementasikan search/filter functionality
6. Ganti JSON storage dengan SQLite database

---

**Created**: February 10, 2026  
**Project**: Firefly Inventory Manager  
**Status**: Learning & Development
