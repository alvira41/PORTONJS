// src/app/page.tsx
import Link from "next/link";
import React from "react";

export default function HomePage() {
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
          <h1>Selamat Datang di Website Saya</h1>
          <p>Ini adalah halaman utama. Silakan navigasi ke halaman lain.</p>
        </div>
      </div>

      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link href="/tentang">
          <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>ABOUT ME</span>
        </Link>

        <Link href="/projek">
          <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>MY PROJECT</span>
        </Link>

        <Link href="/kontak">
          <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>CONTACT/SOSMED</span>
        </Link>
      </div>
    </main>
  );
}
