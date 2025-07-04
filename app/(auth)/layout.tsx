import React from "react";
import AuthLayoutImage from "@/components/AuthLayoutImage";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen">
      {children}
      <div className="absolute bottom-0 left-0">
        <AuthLayoutImage />
      </div>
    </main>
  );
}

export default AuthLayout;
