---
Penulis: Dr. Suyanto
Tahun Terbt: "2019"
Penerbit: INFORMATIKA BANDUNG
---
# Chapter 1 - Pendahuluan

* Kegunaan Data Mining
	1. Kegunaan :
		1. Deskriptif -> Mencari pola - pola yang dapat difahami manusia yang menjelaskan karakteristik data.
		2. Prediktif -> Data mining digunakan untuk membentuk sebuah model pengetahuan yang akan digunakan untuk melakukan prediksi
	2. Fungsionalitas
		1. Klasifikasi : Men-generalisasi struktur yang diketahui untuk diaplikasikan pada data- data baru.
		2. Clustering : Mengelompokkan data, yang tidak diketahui label kelasnya, ke dalam sejumlah kelompok tertentu sesuai dengan ukuran kemiripannya.
		3. Regresi : Menemukan suatu fungsi yang memodelkan data dengan ( kesalahan prediksi ) se minimal mungkin
		4. Deteksi Anomali : Melakukan identifikasi data yang tidak umum, bisa berupa outlier, perubahan atau deviasi yang mungkin sangat penting, dan perlu investigasi lebih lanjut
		5. Association Rule Learning : disebut juga Deppendency Modelling, yang tujuannya mencari relasi antar variabel
		6. Perangkuman : Dalam Data Mining yang dimaksud dengan Perangkuman adalah menyediakan representasi data, yang lebih sederhana meliputi visualisasi dan pembuatan laporan.
* Teknik - Teknik Data - MIning
	* Sebagian besar teknik yang digunakan dalam Data -mining pada dasarnya digunakan dari disiplin Machine Learning
	* Sehingga dalam literatur ini "Data mining adalah penggunaan Teknik Machine Learning untuk mengekstrak Pola - Pola penting dan berguna dari kumpulan data berukuran besar ( Big Data)".
* Artificial Intelligence bisa dikatakan sebagai istilah yang luas mencakup empat teknik pembangunan kecerdasan buatan :
	1. Searching 
	2. Reasoning
	3. Planning 
	4. Learning
* Perkembangan data dan Big Data semakin mudah di dapat melalui perkembangannya Disiplin IOT, Sehingga teknik ini perlahan dikenal sebagai Machine Learning.
* Teknik pembelajaran pada dasarnya dapat di bagi ke dalam 3 Kategori Besar diantaranya :
	1. Supervised Learning 
		1. Decission Tree Learning (DTL) = 
		   {
			1. Entropy
			2. Information Gain
			3. Algoritma ID3
		   }
		3. Bayesian Learning (BL)
		4. Artificial Neural Network (ANN) = 
		   {
			1. Perceptron
			2. Arsitektur Jaringan
			3. Multi Layer Perceptron
		   }
		5. Support Vector Mahine (SVM)
		   {
			1. Soft Margin
			2. Algoritma SVM
			3. Multi Class SVM
		   }
		6. Nearest Neighbor Rule (NNR)
		   {
			1. 
		   }
		8. Recurrent Neural Networks (RNN)
		9. Long Short-Term Memory (LSTM)
		10. Dan Masih banyak lagi
	2. Un-Supervised Learning
		1. Centroid Based Clustering
		2. Hierarchical Clustering 
		3. Density Based Clustering
		4. Grid Based Clustering 
		5. Self Organizing Map
		6. Q-Learning
	3. Reinforcement Learning
		1. Q-Learning
		2. SARSA
		3. Deep Reinforcement Learning (DRL)
	4. Ensemble Learning -> Menyatukan berbagi konsep pembelajaran, dengan Sumberdaya relatif besar namun dapat meningkatkan akurasi, dengan pendekatan yang semakin kreatif :
		* Bagging
		* Boosting
		* Random Forest
		* Stacking
	5. Deep Learning -> adalah pembaruan konsep ANN dengan Banyak Lapisan atau Layers, Teknik ini di perkenalkan saat ajang *ImageNet Large Scale VIsual Recognititon* ( **ILSVRC** ) tahun 2012, 
		1. Convolutional Neural Network ( CNN / ConvNet )
		2. Deep Recurrent Neural Network
		3. Deep Long Short-Term Memory
		4. Deep Forest

### Fun Fact 
1. DDJ -> Data Driven Journalism
2. Multifactor Dimensionality Reduction -> Zhu Et al 2007

### Question 
1. Churn Prediction
2. Market Basket Analysis
3. Apa saja Etika dalam Melakukan Data Mining

# Chapter 2 - Data
* Himpunan Data dan Jenis - Jenis Atribut, Himpunan Data dibangun dari Objek - Objek data, dimana Objek data menyatakan sebuah Entitas.
* Objek biasanya digambarkan menggunakan Atribut, Objek data disebut juga sebagai sampel, contoh, atau titik data.
* Sementara Data yang ada di dalam sebuah tabel disebut *Tuple*, di mana baris menyatakan objek - objek data dan kolom adalah adalah atribut.
* Jenis Atribut : 
	1. Atributr Nominal / Kategoriakal -> Nilainya menggambarkan identitas, kode, atau status dengan tanpa urutan
	2. Atribut Biner
		1. Biner Asimetris -> Jika nilainya dapat memberikan dampak berbeda 
		2. Biner Simetris -> Jika nilainya dianggap mmberi dampak  setara, sehingga hanya dipakai sebagai Identitas saja
	3. Atribut Numerik -> Umumnya bersifat Numerik, atribut ini bisa diskalakan dengan dapat Dinyatakan dalam bentuk Bilangan bulat, Bilangan Rill, Rasio, dan Interval
	4. Atribut Orgdinal -> memiliki nilai yang menggambarkan urutan atau peringkat, namun perbedaan anatara dua nilai yang berurutan tidak diketahui
	5. Atribut Diskrit dan Kontinu
		1. Diskrit -> adalah atribut dengan nilai yang terbatas
		2. Kontinu -> Atribur Kontinu umumnya bersifat Rill atau Pecahan 
* Untuk Memahami data pada dasarnya diperlukan pemahaman tentang statistika - [ Catatan ]
* Mehammi Data 
	* Tendensi Sentral / Pemusatan Data
		* Modus -> Nilai dengan Frekuensi muncul besar
		* Median -> Disebut juga nilai tengah
		* Mean -> Atau nilai rata - rata, adalah
		* Midrange -> Adalah rata- rata, dari nilai minimum dan maksimum 
	* Sebaran Data -> Adalah Dispersi atau persebaran nilai, Digunakan untuk mengenali data sekaligus mencari nilai Anomali ( Pencilan / disebut juga Outlier ), 
		* Quantile : Proses pembagian data ke dalam emapt interva
		* Desil
		* Persentil : Proses pembagian data ke 100 Interval
		* Inter Quatile Range (IQR) : adalah jarak antara perempat data pertama dengan perempat data ke tiga, secara matematis dituliskan : 
			  Range = Maximum - Minimum
			  IQR = Q1 - Q3
		* IQR  tidak menunjukkan nilai Minimum dan Maksimum, karena itu dapat menggunakan *Five Number Summary*
			* Aturan Umum : Outlier adalah data yang lebih kecil dari 1,5 * IQR < Q1, atau 1,5 * IQR > Q3
		* Standard Deviation (STD) : Simpangan baku adalah ukuran yang menyatakan sebaran atau distribusi data.
			* STD yang kecil menyatakan bahwa nilai cenderung dekat dengan Rata rata
			* Sementara STD yang besar menyatakan bahwa nilai jauh dari rata - rata.
			* Pada dasarnya STD adalah Rata rata antara semua data dengan rata rata himpunan data tetsebut
* 
* Visualisasi Data : 
	* Orientasi Pixel
	* Proyeksi Geometris
	* Basis Icon
	
### Fun Fact
* Grafik Statistik yang dibahas :
	* Quantile Plot 
	* Q- Q Plot
	* Histogram
	* Scatter Plot
* Pra-Pemprosesan Data
	* Pembersihan Data
	* Integrasi Data
	* Reduksi Data
		* Seleksi Atribut
		* Principal Component Analysis
		* Transformasi Sinyal
		* Regresi
		* Histogram
		* Klasterisasi
		* Sampling
		* Agregasi
	* Penambahan Data
	* Normalisasi Data
	* Diskritasi Data

* 

### Question
1. Apa itu Boxplot
2. Apa itu Jarak Antar Objek Data 
	1. Jarak Untuk Atribut Biner
	2. Jarak Untuk Atribut Numerik
	3. Jarak Untuk Atribut Ordinal 
	4. Jarak Untuk Atribut Campuran 
	5. Cosine Similarity

# Chapter 3 - Klasifikasi

* Klasifikasi dalam Data Mining, adalah bagaimana cara mempelajari sekumpulan data sehingga dihasilkan aturan yang bisa mengklasifikasikan / mengelompokkan, atau mengenali data- data baru yang belum pernah di pelajari.
* Klasifikasi dapat didefinisikan sebagai proses untuk menyatakan suatu objek data sebagai salah satu Kategori (Kelas) yang telah didefinisikan sebelumnya ( Zaki et al. 2013 )
* Dalam Data Mining, meningat disiplin ini beririsan dengan Big Data dan Ai, Proses pembentukan Klasifikasi menggunakan ML, Proses pembelajaran secara otomatis terhadap suatu himpunan data mampu menghasilkan model klasifikasi ( fungsi target ) yang memetakan objek data x (input) ke salah satu kelas y yang terlah didefinisikan seblumnya, [ sehingga proses pembelajaran ] memerlukan masukan berupa Himpunan Data latih ( Training Set ) yang sudah memiliki Atribut Kelas = Berlabel, dan mengeluarkan Output berupa Klasifikasi

1. Decission Tree Learning (DTL) = 
	   {
		1. Entropy	
		2. Information Gain
		3. Algoritma ID3
	   }
2. Fuzzy Logic
	* Fuzzy Sets
	* Fungsi Keanggotaan
	* Fuzzy Interface System
	* Fuzzy Classifier
	* FIS - Based Classifier
3. Artificial Neural Network (ANN) = 
	   {
		1. Perceptron
		2. Arsitektur Jaringan
		3. Multi Layer Perceptron
	   }	
4. Support Vector Mahine (SVM)
	  {
		1. Soft Margin
		2. Algoritma SVM
		3. Multi Class SVM
	  }
5. Ensemble Learning :
	* Bagging
	* Boosting 
	* Random Forest
	* Stacking
6. Deep Learning
	1. Convolution Neural Network
	2. Deep Recurrent Neural Network
	3. Deep Forest
	4. Optimasi Arsitektur
	5. Augmentasi Data

* Evaluasi dan Seleksi Model Klasifikasi
	* Tujuan Evaluasi Model adalah untuk menemukan classifier terbaik
* Ukuran Evaluasi Model Klasifikasi, umumnya dilakukan menggunakan sebuah himpunan data uji, yang tidak digunakan dalam pelatihan classifier tersebut, dengan suatu ukuran tertentu :
	* Diantaranya ada Accuracy,  Pengenalan Error Rate, True Positive Rate, Specifity / True Negative rate, Precission, F-Measure, atau F1 atau F-Score atau rata - rata harmonik dari prescission dan recall, dan F Beta ( J. Han et al. 2012)
	* Ukuran lain selain akurasi 
		* Kecepatan, berdasarkan kompleksitas komputasi secara matematis atau menguji classifier secara empiris
		* Ketahanan terhadap :
			* Derau
			* Pencilan
			* Missing Value
		* Skalabilitas terhadap ukuran data, secara empiris dan secara matematis
		* Kemudahan untuk difahami

### Question
1. Metode Hold Out
2. Metode Subsampling Acak
3. metode k-fold Cross-Validation
4. Metode Leave-Out-One-Out Cross-Validation
# Chapter 4 - Klasterisasi

* Klasterisasasi adalah pengelempokkan data secara otomatis tanpa perlu diberitahu label kelasnya.Tetapi, klasterisasi tentu saja bisa digunakan untuk himpunan data dengan label kelas yang diketahui.

1. Metode Berbasis Partisi
	* K-Means
	* K-Modes
	* K-Medoids
	* Fuzzy C-Means
2. Metode Berbasis Hierarki
	* Ukuran Jarak
	* BIRCH
	* Chameleon
3. Metode Berbasis Kepadatan
4. Metode Berbasis Kisi
5. Klasterisasi Data Berdimensi Tinggi
6. Evaluasi Klasterisasi
	1. Penilaian Tendensi Klaterisasi
	2. Penentuan Jumlah Klaster
	3. Pengukuran Kualitas Klasterisasi
* Klasterisasi Untuk Klasifikasi
	* 