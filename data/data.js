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
      nama: 'Komputer001',
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
      nama: 'Komputer002',
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