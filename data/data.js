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
      kode: 'A00002',
      jenis: 'Mouse',
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
      noSerial: 'AS0129',
      jenis: 'Asus-Laptop',
      lokasi: 'R01-01',
      maintenance: '23-12-2018',
      status: 'Baik',
      umur: '29-Bulan'
    },
  ],
  locations:
  [
    {
      name: 'R01-01',
      desc: 'Ruang 1 Gedung 1'
    },
    {
      name: 'R02-02',
      desc: 'Ruang 2 Gedung 1'
    },
    {
      name: 'R02-03',
      desc: 'Ruang 2 Gedung 2'
    }
  ],
  permintaan_aset: 
  [
    {
      kode: 'P0001',
      tanggal: '12-12-2018',
      tanggalApprove: '',
      status: 'Pending',
      lists: [
        {
          kode: 'A00001',
          jenis: 'Laptop',
          brand: 'Asus',
          jumlah: 10,
          order: 0,
        },
        {
          kode: 'A00002',
          jenis: 'Keyboard',
          brand: 'Logitec',
          jumlah: 15,
          order: 5
        },
      ]
    }
  ]
}