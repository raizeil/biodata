import { useState } from 'react'
import fotoProfil from './assets/foro.jpg'
import './App.css'

const dataBiodata = {
  fotoProfil: fotoProfil,
  namaLengkap: 'Fidelis Davin Wiradhyaksa',
  namaPanggilan: 'Davin',
  profesi: 'Mahasiswa USD',
  status: 'Tersedia untuk Magang / Proyek Freelance',
  lokasi: 'Yogyakarta, Indonesia',
  email: 'fid.davin27@gmail.com',
  telepon: '+62 813-7801-5819',
  bioSingkat:
    'Halo! Saya seorang yang ingin mencoba semuanyaa...',

  keahlianTeknis: [
    { nama: 'HTML5 & CSS3', level: 50, keterangan: 'Flexbox, Grid, Animasi CSS' },
    { nama: 'JavaScript (ES6+)', level: 40, keterangan: 'Fetch API, Async/Await' },
    { nama: 'React.js', level: 30, keterangan: 'Hooks, Component Lifecycle, State Management' },
    { nama: 'Git & GitHub', level: 25, keterangan: 'Semoga Repository' },
    { nama: 'UI/UX & Figma', level: 55, keterangan: 'Design biasa, Prototyping sederhana' },
  ],

  softSkills: [
    'Komunikasi yang Baik',
    'Kerja Sama Tim',
    'Kemampuan Problem Solving',
    'Cepat Beradaptasi',
    'Manajemen Waktu',
    'Kemauan Belajar Tinggi',
  ],

  pendidikan: [
    {
      jenjang: 'Perguruan Tinggi / Universitas',
      institusi: 'Universitas Sanata Dharma',
      jurusan: 'S1 Teknik Informatika',
      periode: '2026 - Sekarang',
      deskripsi: 'Mempelajari dasar-dasar ilmu komputer, algoritma pemrograman, basis data, dan rekayasa perangkat lunak.',
    },
    {
      jenjang: 'Sekolah Menengah Atas (SMA)',
      institusi: 'SMA Pangudi Luhur Yogyakarta',
      jurusan: 'IPA',
      periode: '2024 - 2026',
      deskripsi: 'Aktif di klub coding sekolah, mempelajari dasar web development',
    },
  ],

  pengalaman: [
    {
      posisi: 'Frontend Developer (Proyek Mandiri & Tugas Akhir)',
      tempat: 'Sekolah SMA',
      periode: '2026 - 2026',
      deskripsi: 'Membangun landing page dan website profil responsif untuk Halaman Perpustakaan online serta portofolio pribadi.',
    },
  ],

  proyekUnggulan: [
    {
      judul: 'Website Biodata Interaktif',
      deskripsi: 'Aplikasi profil diri berbasis React dan Vite yang dilengkapi tombol salin kontak, filter kategori, dan animasi responsif.',
      tag: ['React', 'Vite', 'Modern CSS'],
      tautan: '#',
    },
    {
      judul: 'Aplikasi Perpustakaan Online [GUYPRON]',
      deskripsi: 'Aplikasi pengatur buku online dan pinjaman online sebagai permudah dalam pencatatan peminjaman di perpustakaan.',
      tag: ['React', 'LocalStorage', 'UI/UX'],
      tautan: '#',
    },
  ],

  hobi: [
    { icon: '💻', nama: 'Eksplorasi Coding & Tech' },
    { icon: '🎮', nama: 'Bermain Game Kasual' },
    { icon: '🎧', nama: 'Mendengarkan Musik' },
    { icon: '📚', nama: 'Membaca Berita Terkini' },
    { icon: '☕', nama: 'Menikmati Kopi & Nongkrong' },
    { icon: '📷', nama: 'Fotografi Ponsel' },
  ],

  kontakSosial: [
    {
      nama: 'WhatsApp',
      akun: '+62 813-7801-5819',
      link: 'https://wa.me/6281378015819',
      warna: '#25D366',
      icon: '💬',
    },
    {
      nama: 'GitHub',
      akun: 'github.com/raizeil',
      link: 'https://github.com/raizeil',
      warna: '#333333',
      icon: '🐙',
    },
    {
      nama: 'Instagram',
      akun: '@vinzkerenbanget',
      link: 'https://instagram.com',
      warna: '#E4405F',
      icon: '📸',
    },
  ],
}

function App() {
  const [activeTab, setActiveTab] = useState('semua')
  const [toastMessage, setToastMessage] = useState('')
  const [pesanForm, setPesanForm] = useState({ nama: '', pesan: '' })

  // Fungsi untuk salin teks ke clipboard
  const handleSalin = (teks, label) => {
    navigator.clipboard.writeText(teks)
    tampilkanToast(`✅ ${label} berhasil disalin ke clipboard!`)
  }

  const tampilkanToast = (pesan) => {
    setToastMessage(pesan)
    setTimeout(() => {
      setToastMessage('')
    }, 3000)
  }

  // Kirim pesan langsung ke WhatsApp
  const handleKirimPesan = (e) => {
    e.preventDefault()
    if (!pesanForm.nama.trim() || !pesanForm.pesan.trim()) {
      tampilkanToast('⚠️ Mohon isi nama dan pesan Anda terlebih dahulu.')
      return
    }
    const cleanNumber = dataBiodata.telepon.replace(/[^0-9]/g, '')
    const teksWA = encodeURIComponent(
      `Halo ${dataBiodata.namaPanggilan}! Saya ${pesanForm.nama}.\n\nPesan: ${pesanForm.pesan}`
    )
    window.open(`https://wa.me/${cleanNumber}?text=${teksWA}`, '_blank')
    setPesanForm({ nama: '', pesan: '' })
    tampilkanToast('🚀 Mengalihkan ke WhatsApp...')
  }

  return (
    <div className="biodata-app">
      {/* Toast Notifikasi */}
      {toastMessage && <div className="toast-notification">{toastMessage}</div>}

      {/* HEADER NAVBAR */}
      <header className="navbar">
        <div className="nav-brand">
          <span className="brand-dot"></span>
          <span className="brand-title">Biodata</span>
          <span className="brand-tag">{dataBiodata.namaPanggilan}</span>
        </div>

        <div className="nav-actions">
          <button
            className="btn-outline"
            onClick={() => handleSalin(dataBiodata.email, 'Email')}
          >
            📋 Salin Email
          </button>
          <button
            className="btn-primary"
            onClick={() => window.print()}
            title="Cetak biodata sebagai PDF atau kertas"
          >
            🖨️ Cetak / Simpan PDF
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-card">
        <div className="hero-content">
          <div className="avatar-wrapper">
            {dataBiodata.fotoProfil ? (
              <img
                src={dataBiodata.fotoProfil}
                alt={dataBiodata.namaLengkap}
                className="avatar-image"
              />
            ) : (
              <div className="avatar-placeholder">
                <span>{dataBiodata.namaPanggilan.charAt(0)}</span>
              </div>
            )}
            <div className="status-badge" title="Status ketersediaan">
              <span className="status-indicator"></span>
              Aktif
            </div>
          </div>

          <div className="hero-info">
            <div className="hero-meta">
              <span className="badge-highlight">{dataBiodata.status}</span>
              <span className="meta-item">📍 {dataBiodata.lokasi}</span>
            </div>

            <h1 className="hero-name">{dataBiodata.namaLengkap}</h1>
            <p className="hero-profesi">{dataBiodata.profesi}</p>
            <p className="hero-desc">{dataBiodata.bioSingkat}</p>

            <div className="hero-buttons">
              <a
                href={`https://wa.me/${dataBiodata.telepon.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-action btn-wa"
              >
                💬 Chat WhatsApp
              </a>
              <a
                href={`mailto:${dataBiodata.email}`}
                className="btn-action btn-mail"
              >
                ✉️ Kirim Email
              </a>
              <button
                className="btn-action btn-copy"
                onClick={() =>
                  handleSalin(dataBiodata.telepon, 'Nomor Telepon')
                }
              >
                📞 Salin No. HP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <nav className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'semua' ? 'active' : ''}`}
          onClick={() => setActiveTab('semua')}
        >
          🌟 Semua
        </button>
        <button
          className={`tab-btn ${activeTab === 'pribadi' ? 'active' : ''}`}
          onClick={() => setActiveTab('pribadi')}
        >
          👤 Data Pribadi
        </button>
        <button
          className={`tab-btn ${activeTab === 'keahlian' ? 'active' : ''}`}
          onClick={() => setActiveTab('keahlian')}
        >
          ⚡ Keahlian
        </button>
        <button
          className={`tab-btn ${activeTab === 'pendidikan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pendidikan')}
        >
          🎓 Pendidikan & Pengalaman
        </button>
        <button
          className={`tab-btn ${activeTab === 'proyek' ? 'active' : ''}`}
          onClick={() => setActiveTab('proyek')}
        >
          💼 Proyek
        </button>
        <button
          className={`tab-btn ${activeTab === 'kontak' ? 'active' : ''}`}
          onClick={() => setActiveTab('kontak')}
        >
          📬 Kontak & Pesan
        </button>
      </nav>

      <main className="main-content" key={activeTab}>
        {(activeTab === 'semua' || activeTab === 'pribadi') && (
          <section className="section-card">
            <div className="section-header">
              <h2>👤 Biodata Pribadi</h2>
              <p>Rincian data diri dan informasi dasar</p>
            </div>

            <div className="info-grid">
              {dataBiodata.infoPribadi.map((item, idx) => (
                <div key={idx} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-detail">
                    <span className="info-label">{item.label}</span>
                    <strong className="info-value">{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeTab === 'semua' || activeTab === 'keahlian') && (
          <section className="section-card">
            <div className="section-header">
              <h2>⚡ Keahlian & Kemampuan</h2>
              <p>Teknologi dan kompetensi yang sedang dikuasai</p>
            </div>

            <div className="skills-container">
              <div className="skills-technical">
                <h3>Keahlian Teknis</h3>
                <div className="skills-list">
                  {dataBiodata.keahlianTeknis.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.nama}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar-fill"
                          style={{
                            '--target-width': `${skill.level}%`,
                            width: `${skill.level}%`,
                          }}
                        ></div>
                      </div>
                      <span className="skill-desc">{skill.keterangan}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills-soft">
                <h3>Soft Skills & Karakter</h3>
                <div className="soft-skills-badges">
                  {dataBiodata.softSkills.map((soft, idx) => (
                    <span key={idx} className="soft-badge">
                      ✨ {soft}
                    </span>
                  ))}
                </div>

                <div className="hobi-section">
                  <h3>Hobi & Minat</h3>
                  <div className="hobi-grid">
                    {dataBiodata.hobi.map((hobi, idx) => (
                      <div key={idx} className="hobi-card">
                        <span className="hobi-icon">{hobi.icon}</span>
                        <span className="hobi-nama">{hobi.nama}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {(activeTab === 'semua' || activeTab === 'pendidikan') && (
          <div className="two-columns-section">
            {/* Pendidikan */}
            <section className="section-card flex-1">
              <div className="section-header">
                <h2>🎓 Riwayat Pendidikan</h2>
                <p>Jejak akademis dan pelatihan</p>
              </div>

              <div className="timeline">
                {dataBiodata.pendidikan.map((edu, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-bullet"></div>
                    <div className="timeline-body">
                      <span className="timeline-period">{edu.periode}</span>
                      <h4 className="timeline-title">{edu.institusi}</h4>
                      <div className="timeline-subtitle">
                        {edu.jenjang} - {edu.jurusan}
                      </div>
                      <p className="timeline-desc">{edu.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pengalaman */}
            <section className="section-card flex-1">
              <div className="section-header">
                <h2>💼 Pengalaman & Organisasi</h2>
                <p>Aktivitas kerja, freelance, dan kegiatan</p>
              </div>

              <div className="timeline">
                {dataBiodata.pengalaman.map((exp, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-bullet accent"></div>
                    <div className="timeline-body">
                      <span className="timeline-period">{exp.periode}</span>
                      <h4 className="timeline-title">{exp.posisi}</h4>
                      <div className="timeline-subtitle">{exp.tempat}</div>
                      <p className="timeline-desc">{exp.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* SECTION 4: PROYEK */}
        {(activeTab === 'semua' || activeTab === 'proyek') && (
          <section className="section-card">
            <div className="section-header">
              <h2>💻 Proyek Unggulan</h2>
              <p>Beberapa hasil karya dan eksplorasi coding</p>
            </div>

            <div className="projects-grid">
              {dataBiodata.proyekUnggulan.map((proyek, idx) => (
                <div key={idx} className="project-card">
                  <div className="project-badge">Proyek #{idx + 1}</div>
                  <h3 className="project-title">{proyek.judul}</h3>
                  <p className="project-desc">{proyek.deskripsi}</p>
                  <div className="project-tags">
                    {proyek.tag.map((tag, tIdx) => (
                      <span key={tIdx} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={proyek.tautan} className="project-link">
                    Lihat Selengkapnya ➔
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 5: KONTAK & MEDIA SOSIAL */}
        {(activeTab === 'semua' || activeTab === 'kontak') && (
          <section className="section-card">
            <div className="section-header">
              <h2>📬 Hubungi & Media Sosial</h2>
              <p>Terhubung langsung melalui saluran komunikasi berikut</p>
            </div>

            <div className="contact-container">
              {/* Card List Media Sosial */}
              <div className="social-cards">
                {dataBiodata.kontakSosial.map((medsos, idx) => (
                  <a
                    key={idx}
                    href={medsos.link}
                    target="_blank"
                    rel="noreferrer"
                    className="social-item"
                  >
                    <span className="social-icon">{medsos.icon}</span>
                    <div className="social-info">
                      <strong className="social-name">{medsos.nama}</strong>
                      <span className="social-handle">{medsos.akun}</span>
                    </div>
                    <span className="social-arrow">↗</span>
                  </a>
                ))}
              </div>

              {/* Form Kirim Pesan Cepat */}
              <div className="quick-message-box">
                <h3>💬 Kirim Pesan Cepat</h3>
                <p>Kirimkan pesan instan langsung ke nomor WhatsApp saya.</p>
                <form onSubmit={handleKirimPesan} className="message-form">
                  <div className="form-group">
                    <label htmlFor="nama">Nama Anda:</label>
                    <input
                      id="nama"
                      type="text"
                      placeholder="Masukkan nama Anda..."
                      value={pesanForm.nama}
                      onChange={(e) =>
                        setPesanForm({ ...pesanForm, nama: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pesan">Isi Pesan:</label>
                    <textarea
                      id="pesan"
                      rows="3"
                      placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                      value={pesanForm.pesan}
                      onChange={(e) =>
                        setPesanForm({ ...pesanForm, pesan: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    Kirim via WhatsApp 🚀
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} <strong>{dataBiodata.namaLengkap}</strong> ({dataBiodata.namaPanggilan}).
          Dibuat dengan React & Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
