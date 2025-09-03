// src/app/tentang/page.tsx
import Link from "next/link";
import React from "react";

export default function TentangPage() {
  return (
    <main
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        margin: 0,
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(60, 60, 61)",
          height: "10vh",
          textAlign: "center",
          color: "aliceblue",
          fontFamily: "Arial, Helvetica, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>⑉⑉⑉⑉⑉⑉ MY PROJECT ⑉⑉⑉⑉⑉⑉⑉</h1>
      </div>

      {/* Contoh Project 1 */}
      <div style={{ backgroundColor: "rgb(60, 60, 61)", width: "80%", margin: "2% auto", padding: "1%" }}>
        <img src="/blackc.jpg" alt="Black Clover" style={{ width: "100%", height: "auto" }} />
        <ul style={{ color: "aliceblue", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "large", lineHeight: 3 }}>
          <li>Judul : Black Clover</li>
          <li>Aplikasi : Canva</li>
          <li>Tujuan : Postingan Media Sosial</li>
        </ul>
      </div>

      {/* Contoh Project 2 & 3 */}
      <div style={{ display: "flex", padding: "2%", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <div style={{ backgroundColor: "rgb(112, 112, 112)", width: "48%", margin: "1%" }}>
          <img src="/bochi.jpg" alt="Bochi The Rock" style={{ width: "100%", height: "auto" }} />
          <ul style={{ color: "aliceblue", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "large", lineHeight: 3 }}>
            <li>Judul : Bochi The Rock</li>
            <li>Aplikasi : Canva</li>
            <li>Tujuan : Postingan Media Sosial</li>
          </ul>
        </div>

        <div style={{ backgroundColor: "rgb(60, 60, 61)", width: "48%", margin: "1%" }}>
          <img src="/narumi.jpg" alt="Narumi" style={{ width: "100%", height: "auto" }} />
          <ul style={{ color: "aliceblue", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "large", lineHeight: 3 }}>
            <li>Judul : Narumi</li>
            <li>Aplikasi : Canva</li>
            <li>Tujuan : Postingan Media Sosial</li>
          </ul>
        </div>
      </div>

      {/* Karya Lainnya (hatta, frieren, ramadhan, idhul-adha, waisak) */}
      <div style={{ display: "flex", padding: "2%", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <div style={{ backgroundColor: "rgb(112,112,112)", width: "48%", margin: "1%" }}>
          <img src="/hatta.jpg" alt="Moh Hatta" style={{ width: "100%", height: "auto" }} />
          <ul style={{ color: "aliceblue", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "large", lineHeight: 3 }}>
            <li>Judul : Kata kata Motivasi Moh Hatta</li>
            <li>Aplikasi : Canva</li>
            <li>Tujuan : Feed instagram sekolah</li>
          </ul>
        </div>

        <div style={{ backgroundColor: "rgb(60,60,61)", width: "48%", margin: "1%" }}>
          <img src="/frieren.jpg" alt="Frieren" style={{ width: "100%", height: "auto" }} />
          <ul style={{ color: "aliceblue", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "large", lineHeight: 3 }}>
            <li>Judul : Frieren</li>
            <li>Aplikasi : Canva</li>
            <li>Tujuan : Mengasah kemampuan</li>
          </ul>
        </div>

        <div style={{ backgroundColor: "rgb(60,60,61)", width: "48%", margin: "1%" }}>
          <img src="/ramadhan.jpeg" alt="Ramadhan" style={{ width: "100%", height: "auto" }} />
          <ul style={{ color: "aliceblue", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "large", lineHeight: 3 }}>
            <li>Judul : Menyambut Ramadhan</li>
            <li>Aplikasi : Canva</li>
            <li>Tujuan : Poster menyambut Ramadhan</li>
          </ul>
        </div>

        <div style={{ backgroundColor: "rgb(112,112,112)", width: "48%", margin: "1%" }}>
          <img src="/idhul-adha.jpg" alt="Idhul Adha" style={{ width: "100%", height: "auto" }} />
          <ul style={{ color: "aliceblue", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "large", lineHeight: 3 }}>
            <li>Judul : Idhul Adha</li>
            <li>Aplikasi : Canva</li>
            <li>Tujuan : Story instagram sekolah</li>
          </ul>
        </div>

        <div style={{ backgroundColor: "rgb(60,60,61)", width: "48%", margin: "1%" }}>
          <img src="/waisak.jpg" alt="Waisak" style={{ width: "100%", height: "auto" }} />
          <ul style={{ color: "aliceblue", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "large", lineHeight: 3 }}>
            <li>Judul : Waisak</li>
            <li>Aplikasi : Canva</li>
            <li>Tujuan : Feed instagram sekolah</li>
          </ul>
        </div>
      </div>


      {/* Kembali ke beranda */}
      <div style={{ marginTop: "1rem" }}>
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
