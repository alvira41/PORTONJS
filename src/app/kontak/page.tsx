import Link from "next/link";
import React from "react";

export default function KontakPage() {
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
          textAlign: "center",
          color: "aliceblue",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "large",
          padding: "2%",
          marginTop: "7rem",
        }}
      >
        <p>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/alvr08"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "lightblue" }}
          >
            @alvr08
          </a>
        </p>
        <p>No Tlpn : 085707067861</p>
        <p>Email : alviraoct@gmail.com</p>
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
