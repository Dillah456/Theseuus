Kalau anime, memang yang paling sering dijadikan **database acuan** adalah MyAnimeList. Namun di dunia Hallyu, ekosistemnya lebih terpecah karena musik, drama, aktor, dan variety show memiliki basis data yang berbeda.

Kurang lebih seperti ini:

|Bidang|Database/Evaluator|Fungsi|
|---|---|---|
|K-Pop|Melon|Chart lagu di Korea|
|K-Pop|Circle Chart|Penjualan album, digital, streaming (dulu Gaon)|
|K-Pop|Hanteo Chart|Penjualan album real-time|
|K-Pop|Korean Music Content Association|Organisasi di balik Circle Chart|
|K-Drama|MyDramaList|Mirip MyAnimeList, tapi untuk drama Asia|
|K-Drama|AsianWiki|Database aktor, drama, film|
|K-Drama|NamuWiki|Informasi detail (komunitas)|
|Semua Hallyu|Soompi|Berita dan update|
|Semua Hallyu|Koreaboo|Berita dan tren internasional|

Kalau mencari padanan **MyAnimeList** secara konsep (database + rating + komunitas), maka yang paling dekat adalah:

- 🎬 **K-Drama:** MyDramaList
    
- 🎤 **K-Pop:** tidak ada satu situs yang mendominasi seperti MAL. Biasanya data digabung dari:
    
    - Circle Chart (performa nasional)
        
    - Hanteo Chart (penjualan)
        
    - Melon (streaming dan popularitas)
        
    - Komunitas internasional sering memakai Kpop Fandom atau basis data fandom lain untuk profil grup dan idol.
        

Kalau dikaitkan dengan proyek **Modulasi Hobi** yang sedang kamu bangun, aku justru akan membagi "Evaluator" Hallyu menjadi beberapa layer, bukan satu database:

- **Knowledge Layer** → MyDramaList, AsianWiki, Kpop Fandom
    
- **Popularity Layer** → Melon, Circle Chart, Hanteo
    
- **Community Layer** → Reddit, Soompi, NamuWiki
    
- **Media Layer** → YouTube, Spotify, Netflix
    

Struktur seperti ini lebih cocok jika tujuanmu adalah membuat sistem yang bisa memodulasi hobi, karena setiap layer mengukur aspek yang berbeda: informasi, popularitas, komunitas, dan media.