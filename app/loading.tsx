export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Logo Reveal Effect */}
        <img
          src="/images/logo/logo_pebec1.PNG"
          alt="PEBEC Logo"
          className="w-36 h-auto object-contain animate-logo-reveal"
        />

        {/* Clean Spinner under logo */}
        <div className="w-10 h-10 border-4 border-t-transparent border-black rounded-full animate-spin" />
      </div>
    </div>
  );
} 