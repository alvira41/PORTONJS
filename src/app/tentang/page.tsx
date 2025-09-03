// src/app/tentang/page.tsx
import Link from "next/link";

export default function TentangPage() {
  return (
    <main
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundImage: "url('/bg.jpg')",
        margin: 0,
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(60, 60, 61)",
          height: "10vh",
          color: "aliceblue",
          textAlign: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <h1>⑉⑉⑉⑉⑉⑉⑉⑉⑉⑉ MY PORTOFOLIO ⑉⑉⑉⑉⑉⑉⑉⑉⑉⑉</h1>
      </div>

      <div
        style={{
          backgroundColor: "rgb(60, 60, 61)",
          height: "10vh",
          textAlign: "center",
          color: "aliceblue",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <h1>⑉⑉⑉⑉⑉⑉⑉ ABOUT ME ⑉⑉⑉⑉⑉⑉⑉</h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: "rgb(60, 60, 61)",
          padding: "2%",
        }}
      >
        <img
          src="/aku3.jpg"
          alt="Foto Alvira"
          style={{ width: "30%", height: "auto", padding: "2%" }}
        />
        <p
          style={{
            color: "aliceblue",
            textAlign: "left",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "larger",
            lineHeight: "2.7",
            margin: "auto",
            paddingLeft: "4%",
            paddingRight: "1%",
          }}
        >
          Hallo!! Nama saya Alvira Octiana, saya berusia 16 tahun, saya
          bersekolah di SMKN 8 MALANG dan mengambil jurusan Rekayasa Perangkat
          Lunak atau sering dikenal dengan RPL. Kemampuan atau ketertarikan saya
          adalah desain grafis namun saya belum mampu menguasai banyak software,
          saya hanya menggunakan software yang mudah digunakan oleh pemula
          seperti Canva dan Pixelab.
        </p>
      </div>

      {/* tombol kembali ke beranda */}
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Kembali ke Beranda
      </Link>
    </main>
  );
}
