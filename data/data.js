var data = {
  users:
  [
    {
      username: 'pengadaan@ui.ac.id',
      name: 'Staff Fasilitas Umum',
      role: 'pengadaan'
    },
    {
      username: 'admin@ui.ac.id',
      name: 'Admin Aset TI',
      role: 'admin'
    },
    {
      username: 'helpdesk@ui.ac.id',
      name: 'Helpdesk',
      role: 'helpdesk'
    },
    {
      username: 'pemelihara@ui.ac.id',
      name: 'Pemelihara Aset TI',
      role: 'pemelihara'
    },
    {
      username: 'penanggung@ui.ac.id',
      name: 'Penanggung Jawab Ruangan',
      role: 'penanggung'
    }
  ],
  master_asets:
  [
    {
      kode: 'A00001',
      jenis: 'Laptop',
      brand: 'Asus',
      prioritas: 1,
      total: 12,
      kategori: 'Hardware'
    },
    {
      kode: 'A00002',
      jenis: 'Keyboard',
      brand: 'Logitec',
      prioritas: 2,
      total: 80,
      kategori: 'Hardware'
    },
    {
      kode: 'A00003',
      jenis: 'Komputer',
      brand: 'Logitec',
      prioritas: 2,
      total: 80,
      kategori: 'Hardware'
    },
  ],
  aset_categories:
  [
    {
      name: 'Software'
    },
    {
      name: 'Hardware'
    },
    {
      name: 'Server'
    }
  ],
  asets:
  [
    {
      kodeAset: 'AS0129',
      noSerial: '11512512512',
      nama: 'Komputer - 001',
      jenis: 'Komputer',
      brand: 'IBM',
      lokasi: 'Lab Komputer 1',
      status: 'Rusak',
      kodeLaporan: 'L001',
      desc: 'Komputer tidak bisa menyala',
      statusPengerjaan: 'Dikerjakan',
      bukti: [{file:'bukti1.jpg', file:'bukti2.jpg', file:'bukti3.jpg'}],
    },
    {
      kodeAset: 'AS0130',
      noSerial: '11512512512',
      nama: 'Komputer - 002',
      jenis: 'Komputer',
      brand: 'IBM',
      lokasi: 'Lab Komputer 2',
      status: 'Rusak',
      kodeLaporan: 'L002',
      desc: 'Komputer tidak bisa menyala',
      statusPengerjaan: 'Dikerjakan',
      bukti: [{file:'bukti1.jpg', file:'bukti2.jpg', file:'bukti3.jpg'}],
    },
  ],
  locations:
  [
    {
      name: 'Lab Komputer 1',
      desc: 'Lab Komputer 1'
    },
    {
      name: 'Lab Komputer 2',
      desc: 'Lab Komputer 1'
    },
    {
      name: 'Lab Komputer 3',
      desc: 'Lab Komputer 1'
    }
  ],
  permintaan_aset: 
  [
    {
      kode: 'P0001',
      jenisAset: 'Laptop',
      brand: 'IBM',
      jumlah: '12',
      tanggalPermohonan: '11/8/2018',
      tanggalApproval: '',
      prioritas: 'High',
      status: 'Meminta Pengadaan',
      desc: ''
    },
    {
      kode: 'P0002',
      jenisAset: 'Printer',
      brand: 'IBM',
      jumlah: '10',
      tanggalPermohonan: '11/8/2018',
      tanggalApproval: '',
      prioritas: 'Medium',
      status: 'Meminta Pengadaan',
      desc: ''
    },
    {
      kode: 'P0003',
      jenisAset: 'Router',
      brand: 'IBM',
      jumlah: '8',
      tanggalPermohonan: '11/8/2018',
      tanggalApproval: '',
      prioritas: 'Critical',
      status: 'Meminta Pengadaan',
      desc: ''
    },
    {
      kode: 'P0004',
      jenisAset: 'Router',
      brand: 'IBM',
      jumlah: '5',
      tanggalPermohonan: '11/8/2018',
      tanggalApproval: '18/8/2018',
      prioritas: 'High',
      status: 'Diproses',
      desc: ''
    },
    {
      kode: 'P0012',
      jenisAset: 'Komputer',
      brand: 'IBM',
      jumlah: '7',
      tanggalPermohonan: '11/8/2018',
      tanggalApproval: '18/8/2018',
      prioritas: 'High',
      status: 'Diproses',
      desc: ''
    },
    {
      kode: 'P0005',
      jenisAset: 'Laptop',
      brand: 'IBM',
      jumlah: 'Pending',
      tanggalPermohonan: '11/8/2018',
      tanggalApproval: '18/8/2018',
      prioritas: 'High',
      status: '2',
      desc: 'Tidak Sesuai RAB'
    },
    {
      kode: 'P0006',
      jenisAset: 'Router',
      brand: 'IBM',
      jumlah: '18',
      tanggalPermohonan: '11/8/2018',
      tanggalApproval: '',
      prioritas: 'High',
      status: 'Selesai',
      desc: ''
    }
  ],
  pengadaan_aset: 
  [
    {
      kode: 'PE001',
      tanggalApproval: '11/20/2018',
      vendor: 'Vendor 1',
      jumlah: '12',
      total: '2100000',
      status: 'Selesai',
      lists: [
        {
          jenis: 'Laptop',
          jumlah: '4',
          harga: '14000000'
        },
        {
          jenis: 'Router',
          jumlah: '5',
          harga: '120000'
        },
        {
          jenis: 'Keyboard',
          jumlah: '1',
          harga: '120000'
        },
      ]
    },
    {
      kode: 'PE002',
      tanggalApproval: '11/21/2018',
      vendor: 'Vendor 2',
      jumlah: '12',
      total: '16000000',
      status: 'Selesai',
      lists: [
        {
          jenis: 'Laptop',
          jumlah: '12',
          harga: '1000000'
        },
        {
          jenis: 'Mouse',
          jumlah: '9',
          harga: '120000'
        },
      ]
    },
  ],
  vendors: [
    {
      kode: 'V001',
      namaVendor: 'Vendor 1',
      namaPic: 'Agus',
      emailPic: 'agus@vendor.com',
      kontakPic: '081294919283',
      alamat: 'Salemba, Jakarta Pusat',
      email: 'vendor@gmail.com',
      kontak: '021341235',
      web: 'vendor-satu.com',
      desc: 'Menjual Perlengkapan Komputer'
    },
    {
      kode: 'V002',
      namaVendor: 'Vendor 2',
      namaPic: 'Johan',
      emailPic: 'johan@vendor.com',
      kontakPic: '081294213421',
      alamat: 'Salemba, Jakarta Pusat',
      email: 'vendor-2@gmail.com',
      kontak: '0210491925',
      web: 'vendor-dua.com',
      desc: 'Menjual Aneka Software'
    },  
  ]
}